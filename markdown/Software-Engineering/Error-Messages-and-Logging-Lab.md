# Error Messaging and Logging Lab

## Objectives
1. Design custom error messages and internal logs for your program
2. Write error resistant code
3. Learn about the security risks of error messages

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| log | a record your program writes as it runs, saved to a file so you can read later what happened and when |
| logging level | how important a log message is: `DEBUG`, `INFO`, `WARNING`, `ERROR`, or `CRITICAL`. You can tell your program to save only messages at or above a chosen level |
| error message | text your program returns or displays when something goes wrong |
| stack trace (traceback) | the detailed list of function calls Python prints when an uncaught exception crashes your code. Useful to you, dangerous to show a stranger |
| exception | an error Python raises while running, like a missing key or a failed database connection. You handle them with `try`/`except` |
| graceful error handling | catching a problem and responding with a clear, controlled message instead of letting the program crash |
| HTTP status code | the number a server returns to say how a request went, e.g. `200` OK, `400` bad request, `401` unauthorized, `500` server error |
| information leakage | accidentally revealing details about your system (file paths, library versions, database structure, SQL) that help an attacker |
| debug mode | a development setting that shows full tracebacks in the browser. Convenient while building, a serious vulnerability in production |

## Your Task

In the [Creating an API Lab](#Software-Engineering/Creating-an-API-Lab) you built a Flask API in front of your database. Now you will make it trustworthy: it should keep a record of what it does, and when something goes wrong it should fail *safely* instead of crashing or spilling its secrets. 

### Creating Logs

Right now, when someone hits one of your endpoints, nothing is written down. If a request fails at 2am, or your server restarts on its own, you have no way to know it happened. A **log** fixes that by writing a line to a file every time something notable occurs.

Python has a built-in `logging` module that writes to a file for you. Add this near the top of your `API, below your imports:

```python
import logging

logging.basicConfig(
    filename="app.log",
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(message)s",
)

logging.info("Server started")
```

- `filename="app.log"` is the file your logs are written to. Add `app.log` to your `.gitignore`(logs are not code, and they can contain sensitive data).
- `level=logging.INFO` means save everything at `INFO` and above. Set it to `logging.WARNING` later if the file gets noisy.
- The `logging.info("Server started")` line runs once each time the app starts, so every restart shows up in your log.

Each logging level is for a different kind of message:

| Level | Use it for |
| --- | --- |
| `logging.debug(...)` | detailed information you only want while developing |
| `logging.info(...)` | normal events: a server start, a successful login, an endpoint being hit |
| `logging.warning(...)` | something unexpected that did not stop the program (a bad login attempt) |
| `logging.error(...)` | something failed (a query threw an exception) |
| `logging.critical(...)` | the program cannot continue |

To log **every endpoint that gets hit**, add an `after_request` function. Flask runs it after every request, so you only write this once instead of in every route:

```python
@app.after_request
def log_request(response):
    user = current_user.id if current_user.is_authenticated else "anonymous"
    logging.info("%s %s -> %s (user: %s)",
                 request.method, request.path, response.status_code, user)
    return response
```

Now your `app.log` fills up with lines like:

```text
2026-10-26 14:02:11,884 INFO Server started
2026-10-26 14:02:19,310 INFO POST /api/login -> 200 (user: anonymous)
2026-10-26 14:02:25,077 INFO GET /api/expenses -> 200 (user: 3)
2026-10-26 14:03:01,642 WARNING Failed login for username 'sam'
```

That last line comes from adding a log call in your login route. Logging failed logins is useful: a burst of them is what a password-guessing attack looks like.

```python
    if row is None or not check_password_hash(row[3], data["password"]):
        logging.warning("Failed login for username %r", data["username"])
        return {"error": "Wrong username or password"}, 401
```

> **Tip:** log the username that was *tried*, but **never** log the password that was sent — not even a wrong one. A log file is just another place a secret can leak from.

### Creating Error Messages

We are going to create error messages to help you debug your code.

When a route can fail, you should decide what happens instead of letting Python crash. Wrap the risky part in a `try`/`except`, log the real error for yourself, and return a clean message:

```python
@app.route("/api/expenses", methods=["GET"])
@login_required
def list_expenses():
    try:
        with psycopg.connect(conn_str) as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT expense_id, amount, note FROM expense ORDER BY expense_id")
                rows = cur.fetchall()
        return [{"expense_id": r[0], "amount": float(r[1]), "note": r[2]} for r in rows]
    except Exception:
        logging.exception("Failed to list expenses")
        return {"error": "Could not load expenses, please try again later"}, 500
```

`logging.exception(...)` writes the full stack trace to your log file, where only you can read it, while the client gets a short message.

You can also catch errors you cannot predict in one place with an error handler, so an unexpected bug never crashes into a raw traceback:

```python
@app.errorhandler(500)
def server_error(e):
    logging.exception("Unhandled server error")
    return {"error": "Something went wrong on our end"}, 500
```

#### Why Error Messages Can Be a Vulnerability

A raw Python traceback or database error returned to the client can reveal:

- the exact text of your SQL query (which tells an attacker how to craft a SQL injection),
- your file paths and folder structure,
- the libraries and versions you use (so they can look up known exploits for them),
- whether a username exists (from an error that says "no such user" instead of "wrong username or password").

This is called **information leakage**, and it is the first thing an attacker looks for. The biggest danger is Flask's **debug mode**: `app.run(debug=True)` shows the full interactive traceback, with your source code, in the browser to anyone who triggers an error. Great while you build, a disaster if you leave it on. Turn it off before anyone else can reach your server:

```python
if __name__ == "__main__":
    app.run(debug=False)
```

In 2017, Equifax had a massive data breach that exposed the personal data of ~147 million people due to a verbose error message. Small leaks like that can lead to significant harm to users, so it is really important that we are careful with our error messages! [Read more with the Equifax Release on Cybersecurity Incident](https://investor.equifax.com/news-events/press-releases/detail/237/equifax-releases-details-on-cybersecurity-incident)

### Creating Secure Error Messages

Keeping those vulnerabilities in mind, create good error messages for your API calls. 
Everything specific goes to your log file, where only you can read it. The client gets a short message and the right [HTTP status code](#Software-Engineering/HTTP-and-HTTPS-Notes) so they enough to know what kind of problem it is, but never how your system works.

| Instead of returning... | Return this | Status |
| --- | --- | --- |
| the full traceback | `{"error": "Something went wrong on our end"}` | `500` |
| `column "amont" does not exist` | `{"error": "Could not load expenses"}` | `500` |
| `no user named 'sam'` | `{"error": "Wrong username or password"}` | `401` |
| `KeyError: 'name'` | `{"error": "name is required"}` | `400` |

A few habits that make your errors secure:

- **Validate input early and clearly.** A `400` that says `{"error": "name is required"}` is specific about the request without revealing anything about your system. That is safe and helpful.
- **Keep failure messages identical.** As in the login route from the API lab, say "Wrong username or password" whether the username or the password was wrong, so you don't confirm which usernames exist.
- **Match the status code to the situation** (`400` bad request, `401` not logged in, `403` not allowed, `404` not found, `500` our fault). Go back through each route from your API lab and give it the right code.

### Adding to Your Documentation

Add your errors to your `github.io` site. Under your **API** section, document the errors each endpoint can return, so someone using your API knows what to expect. A simple table per endpoint works well:

**`GET /api/expenses`**

| Status | Meaning | Example response |
| --- | --- | --- |
| `200` | Success | `[{"expense_id": 1, "amount": 4.50, "note": "coffee"}]` |
| `401` | Not logged in | `{"error": "You must log in first"}` |
| `500` | Server error | `{"error": "Could not load expenses, please try again later"}` |

See the [example site](https://github.com/gormes-EPIC/expense_sample.github.io) and [example app](https://github.com/gormes-EPIC/expense_sample/tree/main) from the API lab for an example of what this could look like.

## Tips, Tricks, and Resources
- [OWASP Entry on Improper Error Handling](https://community.owasp.org/Improper_Error_Handling)
- [Python `logging` documentation](https://docs.python.org/3/library/logging.html)
- Open your `app.log` in VSCode and watch it update live as you send requests from your test script. This is often faster than adding `print()` statements.
- Add `app.log` (and any `*.log`) to your `.gitignore` so you don't commit your logs.

## Extensions

1. Use `logging.handlers.RotatingFileHandler` so your log file doesn't grow forever. This way it will start a new file once the current one reaches a size you choose.
2. Log the time each request takes. Store the start time in Flask's `g` object in a `before_request` function, then log the elapsed time in `after_request`. Which endpoint is your slowest?
3. Write a small script that reads `app.log` and reports how many requests each endpoint received, and how many failed logins happened.

## Reflection Questions
1. Give an example of information an error message could leak, and explain how an attacker could use it.
2. What is the difference between a message you write to your **log** and a message you **return** to the client? Why keep them separate?
3. Why is leaving Flask's debug mode on in production dangerous?
4. Why should a failed login return the same message whether the username or the password was wrong?

## How to Submit

Show your instructor your GitHub repository with your code and your commit history. Answer the reflection questions. When you are all done, upload your GitHub link to Google Classroom and hit submit.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.
