# Flask Notes

## 1. Setup

### On your Pi, cd into your directory with your database.

**ON YOUR PI**
```bash
sudo apt install python3-venv
python -m venv venv

source venv/bin/activate

pip install flask
pip freeze > requirements.txt
```

### Check it works

```bash
python -c "import flask; print(flask.__version__)"
```

### Suggested project layout (final form)

```
flask-api/
├── app.py            # the Flask app and routes
├── db.py             # database helpers (added in section 7)
├── schema.sql        # table definitions (added in section 7)
├── requirements.txt
└── venv/
```

---

## 2. Hello, Flask

```python
# app.py
from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "Hello, Flask!"

if __name__ == "__main__":
    app.run(debug=True)
```

Run it:

```bash
python app.py
# or
flask --app app run --debug
```

Visit http://127.0.0.1:5000.

**Key ideas**

- `Flask(__name__)` creates the application object.
- `@app.route(...)` maps a URL to a Python function (a "view function").
- `debug=True` enables auto-reload and an in-browser debugger. **Never use it in production.**

---

## 3. Returning JSON

APIs return JSON, not HTML. Use `jsonify` (or just return a `dict`, which Flask converts automatically).

```python
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/ping")
def ping():
    return jsonify({"message": "pong"})
```

You can also set the status code by returning a tuple:

```python
return jsonify({"error": "Not found"}), 404
```

### Common status codes

| Code | Meaning | Typical use |
|------|---------|-------------|
| 200 | OK | Successful GET / PUT / PATCH |
| 201 | Created | Successful POST that created something |
| 204 | No Content | Successful DELETE |
| 400 | Bad Request | Invalid input from client |
| 404 | Not Found | Resource does not exist |
| 409 | Conflict | Duplicate / constraint violation |
| 500 | Internal Server Error | Bug on the server |

---

## 4. HTTP methods and routes

REST convention: the URL names a **resource**, the HTTP method says what to do with it.

| Method | URL | Action |
|--------|-----|--------|
| GET | `/api/items` | List all items |
| GET | `/api/items/<id>` | Get one item |
| POST | `/api/items` | Create an item |
| PUT | `/api/items/<id>` | Replace an item |
| PATCH | `/api/items/<id>` | Partially update an item |
| DELETE | `/api/items/<id>` | Delete an item |

### Route with a variable

```python
@app.route("/api/items/<int:item_id>")
def get_item(item_id):
    ...
```

Converters: `<int:x>`, `<float:x>`, `<string:x>` (default), `<path:x>`, `<uuid:x>`.

### Restricting methods

```python
@app.route("/api/items", methods=["GET", "POST"])
def items():
    ...
```

Or use the shortcuts (Flask 2.0+): `@app.get(...)`, `@app.post(...)`, `@app.put(...)`, `@app.patch(...)`, `@app.delete(...)`.

---

## 5. Reading request data

```python
from flask import request

@app.post("/api/items")
def create_item():
    data = request.get_json()          # parsed JSON body (or None / 400 if invalid)
    name = data.get("name")

    q = request.args.get("q")          # query string: /api/items?q=foo
    auth = request.headers.get("Authorization")
```

Prefer `request.get_json(silent=True)` if you want to handle bad JSON yourself instead of Flask raising a 400/415 error.

---

## 6. A complete in-memory CRUD API

Start here before adding a database. It makes the routing logic easy to see.

```python
from flask import Flask, jsonify, request

app = Flask(__name__)

items = [
    {"id": 1, "name": "Notebook", "price": 3.50},
    {"id": 2, "name": "Pen", "price": 1.25},
]
next_id = 3


def find_item(item_id):
    return next((i for i in items if i["id"] == item_id), None)


@app.get("/api/items")
def list_items():
    return jsonify(items)


@app.get("/api/items/<int:item_id>")
def get_item(item_id):
    item = find_item(item_id)
    if item is None:
        return jsonify({"error": "Item not found"}), 404
    return jsonify(item)


@app.post("/api/items")
def create_item():
    global next_id
    data = request.get_json(silent=True) or {}

    if "name" not in data or "price" not in data:
        return jsonify({"error": "name and price are required"}), 400

    item = {"id": next_id, "name": data["name"], "price": data["price"]}
    next_id += 1
    items.append(item)
    return jsonify(item), 201


@app.put("/api/items/<int:item_id>")
def update_item(item_id):
    item = find_item(item_id)
    if item is None:
        return jsonify({"error": "Item not found"}), 404

    data = request.get_json(silent=True) or {}
    item["name"] = data.get("name", item["name"])
    item["price"] = data.get("price", item["price"])
    return jsonify(item)


@app.delete("/api/items/<int:item_id>")
def delete_item(item_id):
    item = find_item(item_id)
    if item is None:
        return jsonify({"error": "Item not found"}), 404
    items.remove(item)
    return "", 204


if __name__ == "__main__":
    app.run(debug=True)
```

**Limitation:** data lives in a Python list, so it disappears every time the server restarts. That is what the database fixes.

### Testing with curl

```bash
# list
curl http://127.0.0.1:5000/api/items

# create
curl -X POST http://127.0.0.1:5000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name": "Eraser", "price": 0.75}'

# update
curl -X PUT http://127.0.0.1:5000/api/items/1 \
  -H "Content-Type: application/json" \
  -d '{"price": 4.00}'

# delete
curl -X DELETE http://127.0.0.1:5000/api/items/2
```

Other options: Postman, Insomnia, the VS Code "REST Client" extension, or Python's `requests` library.

---

## 7. Connecting to SQLite

SQLite is a file-based database that ships with Python (`sqlite3` module). No server to install.

### 7.1 Define the schema

```sql
-- schema.sql
DROP TABLE IF EXISTS items;

CREATE TABLE items (
    id    INTEGER PRIMARY KEY AUTOINCREMENT,
    name  TEXT    NOT NULL,
    price REAL    NOT NULL CHECK (price >= 0)
);
```

### 7.2 Database helpers

Flask's recommended pattern: open one connection per request, store it on `g`, and close it when the request ends.

```python
# db.py
import sqlite3
from flask import g, current_app


def get_db():
    if "db" not in g:
        g.db = sqlite3.connect(current_app.config["DATABASE"])
        g.db.row_factory = sqlite3.Row      # rows behave like dicts
        g.db.execute("PRAGMA foreign_keys = ON")
    return g.db


def close_db(e=None):
    db = g.pop("db", None)
    if db is not None:
        db.close()


def init_db():
    db = get_db()
    with current_app.open_resource("schema.sql") as f:
        db.executescript(f.read().decode("utf-8"))


def init_app(app):
    app.teardown_appcontext(close_db)

    @app.cli.command("init-db")
    def init_db_command():
        """Create the tables (wipes existing data)."""
        init_db()
        print("Initialized the database.")
```

**Why these pieces?**

- `g` is an object that lives for one request. Storing the connection there avoids opening it repeatedly.
- `row_factory = sqlite3.Row` lets you access columns by name and convert rows with `dict(row)`.
- `teardown_appcontext` guarantees the connection is closed, even if the request raised an error.
- `PRAGMA foreign_keys = ON` is needed because SQLite does not enforce foreign keys by default.

### 7.3 Wire it into the app

```python
# app.py
import os
import sqlite3
from flask import Flask, jsonify, request

import db


def create_app():
    app = Flask(__name__)
    app.config["DATABASE"] = os.path.join(app.root_path, "items.sqlite")

    db.init_app(app)

    # routes go here (see 7.4)

    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
```

Create the tables once:

```bash
flask --app app init-db
```

### 7.4 CRUD routes backed by SQLite

Replace the routes from section 6 with these (inside `create_app`, or at module level if you keep `app = Flask(...)` simple):

```python
def row_to_dict(row):
    return dict(row)


@app.get("/api/items")
def list_items():
    rows = db.get_db().execute("SELECT id, name, price FROM items ORDER BY id").fetchall()
    return jsonify([row_to_dict(r) for r in rows])


@app.get("/api/items/<int:item_id>")
def get_item(item_id):
    row = db.get_db().execute(
        "SELECT id, name, price FROM items WHERE id = ?", (item_id,)
    ).fetchone()
    if row is None:
        return jsonify({"error": "Item not found"}), 404
    return jsonify(row_to_dict(row))


@app.post("/api/items")
def create_item():
    data = request.get_json(silent=True) or {}
    name, price = data.get("name"), data.get("price")

    if not name or price is None:
        return jsonify({"error": "name and price are required"}), 400

    conn = db.get_db()
    try:
        cur = conn.execute(
            "INSERT INTO items (name, price) VALUES (?, ?)", (name, price)
        )
        conn.commit()
    except sqlite3.IntegrityError as e:
        return jsonify({"error": str(e)}), 400

    return jsonify({"id": cur.lastrowid, "name": name, "price": price}), 201


@app.put("/api/items/<int:item_id>")
def update_item(item_id):
    data = request.get_json(silent=True) or {}
    conn = db.get_db()

    existing = conn.execute(
        "SELECT id, name, price FROM items WHERE id = ?", (item_id,)
    ).fetchone()
    if existing is None:
        return jsonify({"error": "Item not found"}), 404

    name = data.get("name", existing["name"])
    price = data.get("price", existing["price"])

    conn.execute(
        "UPDATE items SET name = ?, price = ? WHERE id = ?", (name, price, item_id)
    )
    conn.commit()
    return jsonify({"id": item_id, "name": name, "price": price})


@app.delete("/api/items/<int:item_id>")
def delete_item(item_id):
    conn = db.get_db()
    cur = conn.execute("DELETE FROM items WHERE id = ?", (item_id,))
    conn.commit()
    if cur.rowcount == 0:
        return jsonify({"error": "Item not found"}), 404
    return "", 204
```

### 7.5 The rules that matter

1. **Always use `?` placeholders**, never string formatting. This prevents SQL injection.

   ```python
   # GOOD
   conn.execute("SELECT * FROM items WHERE name = ?", (name,))

   # BAD: vulnerable to SQL injection
   conn.execute(f"SELECT * FROM items WHERE name = '{name}'")
   ```

2. **Parameters are a tuple**, even for one value: `(item_id,)` with the trailing comma.
3. **Call `conn.commit()`** after INSERT / UPDATE / DELETE, or the change is lost.
4. `cursor.lastrowid` gives the id of the row you just inserted.
5. `cursor.rowcount` tells you how many rows an UPDATE / DELETE touched. Use it to detect "not found".
6. `fetchone()` returns a row or `None`; `fetchall()` returns a list.

---

## 8. Error handling

Return consistent JSON errors instead of Flask's default HTML pages.

```python
@app.errorhandler(404)
def not_found(e):
    return jsonify({"error": "Not found"}), 404


@app.errorhandler(405)
def method_not_allowed(e):
    return jsonify({"error": "Method not allowed"}), 405


@app.errorhandler(500)
def server_error(e):
    return jsonify({"error": "Internal server error"}), 500
```

To abort from anywhere in a view:

```python
from flask import abort
abort(404)
```

---

## 9. Input validation

Never trust client input. A small helper goes a long way:

```python
def validate_item(data, partial=False):
    errors = []

    if not partial or "name" in data:
        if not isinstance(data.get("name"), str) or not data["name"].strip():
            errors.append("name must be a non-empty string")

    if not partial or "price" in data:
        price = data.get("price")
        if not isinstance(price, (int, float)) or isinstance(price, bool) or price < 0:
            errors.append("price must be a non-negative number")

    return errors
```

Use it in a route:

```python
errors = validate_item(data)
if errors:
    return jsonify({"errors": errors}), 400
```

For larger projects, look at **Pydantic**, **marshmallow**, or **Flask-Pydantic**.

---

## 10. Query parameters: filtering, sorting, pagination

```python
@app.get("/api/items")
def list_items():
    q = request.args.get("q")
    limit = request.args.get("limit", default=20, type=int)
    offset = request.args.get("offset", default=0, type=int)
    limit = max(1, min(limit, 100))       # clamp to a sane range

    sql = "SELECT id, name, price FROM items"
    params = []

    if q:
        sql += " WHERE name LIKE ?"
        params.append(f"%{q}%")

    sql += " ORDER BY id LIMIT ? OFFSET ?"
    params.extend([limit, offset])

    rows = db.get_db().execute(sql, params).fetchall()
    return jsonify([dict(r) for r in rows])
```

Example: `GET /api/items?q=pen&limit=10&offset=20`

Note that only the **values** are parameterized. Column names and `ORDER BY` fields cannot be placeholders, so if you let clients choose a sort column, check it against an allowlist.

---

## 11. Blueprints (organizing larger apps)

Blueprints let you split routes into modules.

```python
# items.py
from flask import Blueprint, jsonify
import db

bp = Blueprint("items", __name__, url_prefix="/api/items")

@bp.get("/")
def list_items():
    ...
```

```python
# app.py
from items import bp as items_bp
app.register_blueprint(items_bp)
```

---

## 12. Testing

```bash
pip install pytest
```

```python
# test_app.py
import os
import tempfile
import pytest
from app import create_app
import db


@pytest.fixture
def client():
    fd, path = tempfile.mkstemp()
    app = create_app()
    app.config.update(TESTING=True, DATABASE=path)

    with app.app_context():
        db.init_db()

    with app.test_client() as client:
        yield client

    os.close(fd)
    os.unlink(path)


def test_create_and_get_item(client):
    res = client.post("/api/items", json={"name": "Pen", "price": 1.5})
    assert res.status_code == 201
    item_id = res.get_json()["id"]

    res = client.get(f"/api/items/{item_id}")
    assert res.status_code == 200
    assert res.get_json()["name"] == "Pen"


def test_missing_item_returns_404(client):
    assert client.get("/api/items/999").status_code == 404
```

Run with `pytest`. Each test gets a fresh temporary database.

---

## 13. Next steps and useful extras

| Topic | Tool |
|-------|------|
| ORM instead of raw SQL | Flask-SQLAlchemy |
| Schema migrations | Flask-Migrate (Alembic) |
| CORS (calling the API from a browser app) | Flask-CORS |
| Authentication | Flask-JWT-Extended, or API keys |
| Auto-generated API docs | flask-smorest, Flasgger, or Flask-RESTX |
| Configuration / secrets | environment variables, `python-dotenv` |
| Production server | gunicorn (or waitress on Windows) behind nginx |

### Production reminders

- Turn off `debug=True`.
- Don't run `app.run()` in production; use a WSGI server: `gunicorn "app:app"`.
- SQLite is great for learning, prototypes, and small apps. For heavy concurrent writes, consider PostgreSQL.

---

## Quick reference

```python
# Imports
from flask import Flask, jsonify, request, abort, g

# Routes
@app.get("/path")
@app.post("/path")
@app.route("/path/<int:id>", methods=["GET", "PUT"])

# Request
request.get_json()
request.args.get("key")
request.headers.get("Header-Name")

# Responses
return jsonify(data)
return jsonify(data), 201
return "", 204

# SQLite
conn.execute("SELECT ... WHERE id = ?", (id,)).fetchone()
conn.execute("INSERT ...", params); conn.commit()
cursor.lastrowid
cursor.rowcount
```