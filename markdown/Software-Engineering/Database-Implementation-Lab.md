# Database Implementation Lab

## Objective
1. Start working on a full-stack software project 
2. Set up a PostgreSQL database server and design a SQL database to represent data
3. Create a SQL queries to perfom common operations on your database

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| full-stack application | software application that includes both the user-facing frontend (client-side) and the logic-driven backend (server-side), connected to a database |
| use cases | these statments define what actions each type of user needs to perform |
| business rules | these are explict constraintsthat define how data must be created, structured, changed, and used to accurately mirror real-world organizational policies |
| entity relationship diagram | a visual representation of your database that shows how different concepts connect |
| schema | a blueprint for a database |
| primary key | a specific column (or group of columns) in a database table that serves as a unique identifier for every single row |
| database server | a program that runs in the background, owns your data, and answers requests from other programs. Unlike SQLite (a single file your program opens directly), PostgreSQL is a separate server that you connect to |
| client | a program that connects to the database server and sends it SQL (e.g., `psql`, your Python code, or a GUI tool) |
| role (user) | an account on the PostgreSQL server with a name, password, and set of permissions |
| connection string | a single line of text that tells a client how to find and log in to a database, e.g. `postgresql://user:password@localhost:5432/dbname` |

## Your Task

Over multiple labs, you will create a simple full-stack software project that has a multitable PostgreSQL database with a Python API in front of it that connects to a simple frontend HTML site. You will then containerize these components so others can set up this project on their own machines. You will also create a `github.io` site with your documentation for your project.

Some ideas are:
- a personal expense tracker
- a digital recipe box
- a inventory tracker
- a TCG card database
- a Spotify stats agregator
- a local Raspberry Pi weather station

See your instructor for a list of EPIC requested projects.

0. Decide on a project idea. 
    - If you want to start with pre-existing data, look at [Kaggle](https://www.kaggle.com/datasets) for lots of datasets. 

1. Once you decide what you want your project to be, create a set of **use cases** to define your project. These are typically in the form "As a [USER], I need to [ACTION]". See the [Database Design](#Software-Engineering/Database-Design) assignment for more information about use cases.
 
2. Define your **business rules** for your database. Remember there are the followng types of rules: 
    - Structural Rules: Define how data elements interrelate (e.g., "One artist may create many songs")
    - Integrity Constraints: Hard rules that prevent invalid data from entering.
        - Field Constraints: Restrict values in a single column (e.g., a "shipping date" cannot be before the "order date").
        - Relationship Constraints: Ensure links between tables are valid (e.g., an invoice cannot exist without a linked customer).
    - Derivation Rules: Define how new facts are calculated from existing data (e.g., "Total Order Amount = Sum of detailed items").

*As you create your rules, think about [common falsehoods](https://github.com/kdeldycake/awesome-falsehood).*

3. Create a **entity relationship diagram** to define your database **schema**. Start with your entities(nouns) and define their properties(attributes). Make sure each table has a **primary key** and **foreign keys** are properly labeled. See previous assignments for examples and additional details.

4. **Set up PostgreSQL** on your Raspberry Pi using the guide in [Setting Up PostgreSQL](#setting-up-postgresql) below, and confirm you can connect and run a query.

5. Create a setup script, either a SQL or Python script, to set up the database. Do this as a **script**; you will need it later!! 

6. Write and save SQL queries **for each** of your appropriate use cases. Don't forget about being able to add and remove from your database!

## Setting Up PostgreSQL 

**Note: this section is new so it may contain some errors.**

### What is different from SQLite?

With SQLite, your "database" was just a file, and Python opened it directly. PostgreSQL works differently:

| | SQLite | PostgreSQL |
| --- | --- | --- |
| Where the data lives | one `.db` file | inside a server that manages its own data folder |
| How you connect | open the file | connect over the network (even if it's on your own computer) using a host, port, user, and password |
| Logins | none | **roles** with passwords and permissions |
| Creating a database | happens automatically when you open a file | you must run `CREATE DATABASE` |
| Types | flexible/loose | strict (`INTEGER`, `TEXT`, `NUMERIC(10,2)`, `DATE`, `TIMESTAMPTZ`, `BOOLEAN`, ...) |
| Auto-incrementing IDs | `INTEGER PRIMARY KEY AUTOINCREMENT` | `GENERATED ALWAYS AS IDENTITY` (or `SERIAL`) |
| Python library | `sqlite3` (built in) | `psycopg` (install it with `pip`) |

The default PostgreSQL port is **5432**.

### Step 1: Install PostgreSQL on your Raspberry Pi

These steps assume your Pi is running Raspberry Pi OS (or another Debian-based Linux) and that you are working in a terminal on the Pi, either directly or over SSH (see the tip below).

1. Update your package list and install PostgreSQL:

    ```bash
    sudo apt update
    sudo apt install -y postgresql postgresql-client
    ```

2. Check that the server is running:

    ```bash
    sudo systemctl status postgresql
    ```

    Press `q` to leave the status screen. It should say `active`. (The `postgresql` service is a small wrapper, so it may say `active (exited)`. That is normal. To see the real server, run `pg_lsclusters`. It should list a cluster with the status `online`.)

3. Make sure PostgreSQL starts automatically whenever the Pi boots:

    ```bash
    sudo systemctl enable postgresql
    ```

Useful service commands:

| Command | What it does |
| --- | --- |
| `sudo systemctl start postgresql` | start the server |
| `sudo systemctl stop postgresql` | stop the server |
| `sudo systemctl restart postgresql` | restart the server |
| `pg_lsclusters` | show the version, port, and status of the server |

**Tip: working from your laptop.** If your Pi is "headless" (no monitor), find its address with `hostname -I` on the Pi, then connect from your laptop with `ssh your_username@that_address`. Everything in this guide can be done in that SSH session.

**Tip: your SD card is your hard drive.** All of your data lives on the Pi's SD card, so a bad shutdown can corrupt it. Shut down with `sudo shutdown now` rather than pulling the power, and keep a copy of your `sql/setup.sql` script in GitHub (you will do this anyway). You can also make a backup of your data at any time with:

```bash
pg_dump -h localhost -U project_user project_db > backup.sql
```

### Step 2: Connect with `psql`

`psql` is PostgreSQL's command-line client. On a fresh Linux install, PostgreSQL creates a Linux account named `postgres` that is the database administrator, and it has no password. You get in by running `psql` *as* that account:

```bash
sudo -u postgres psql
```

If it worked, your prompt changes to something like `postgres=#`. Try:

```sql
SELECT version();
```

Useful `psql` commands (these start with a backslash and are **not** SQL):

| Command | What it does |
| --- | --- |
| `\l` | list databases |
| `\c dbname` | connect to a different database |
| `\dt` | list tables in the current database |
| `\d tablename` | describe a table (columns, types, keys) |
| `\i path/to/file.sql` | run a SQL file |
| `\q` | quit |

*Remember: SQL statements must end with a semicolon `;`. If the prompt changes to `postgres-#` it is waiting for you to finish the statement.*

### Step 3: Create your own database and role

It is bad practice for your application to log in as the `postgres` superuser. Create a dedicated role and database for your project. **Replace the names and password with your own.**

```sql
CREATE ROLE project_user WITH LOGIN PASSWORD 'choose_a_password';
CREATE DATABASE project_db OWNER project_user;
```

Leave `psql` with `\q`, then reconnect as your new user to test it:

```bash
psql -h localhost -U project_user -d project_db
```

### Step 4: Connect from Python

**Please complete this section to make sure this works, but you do not need run all your SQL through Python. This is just for the future! You can set up your database as normal in section 5.**

Raspberry Pi OS won't let you `pip install` into the system Python (you will see an `externally-managed-environment` error), so create a virtual environment for your project first, then install the driver:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install "psycopg[binary]"
```

You need to run `source .venv/bin/activate` again each time you open a new terminal. Add `.venv/` to your `.gitignore`.

Test it:

```python
import psycopg

conn_str = "postgresql://project_user:choose_a_password@localhost:5432/project_db"

with psycopg.connect(conn_str) as conn:
    with conn.cursor() as cur:
        cur.execute("SELECT version();")
        print(cur.fetchone())
```

Things to notice compared with `sqlite3`:
- Placeholders are `%s`, not `?` (e.g., `cur.execute("SELECT * FROM item WHERE id = %s", (5,))`). **Always** use placeholders instead of building SQL with f-strings.
- Using `with psycopg.connect(...)` commits your changes when the block ends without an error, and rolls back if there was an error.
- **Do not hard-code passwords in files you upload to GitHub.** Read them from an environment variable instead:
    ```python
    import os
    conn_str = os.environ["DATABASE_URL"]
    ```
    and put `DATABASE_URL=...` in a `.env` file that is listed in your `.gitignore`.

### Step 5: Write your setup script

Create `sql/setup.sql` containing your `CREATE TABLE` statements, and run it with:

```bash
psql -h localhost -U project_user -d project_db -f sql/setup.sql
```

Example of PostgreSQL-flavored table definitions:

```sql
DROP TABLE IF EXISTS expense;
DROP TABLE IF EXISTS category;

CREATE TABLE category (
    category_id  INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name         TEXT NOT NULL UNIQUE
);

CREATE TABLE expense (
    expense_id   INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category_id  INTEGER NOT NULL REFERENCES category(category_id),
    amount       NUMERIC(10,2) NOT NULL CHECK (amount > 0),
    spent_on     DATE NOT NULL DEFAULT CURRENT_DATE,
    note         TEXT
);
```

Notes for people coming from SQLite:
- Use `NUMERIC(10,2)` for money, not floating point.
- Foreign keys are **always enforced** in PostgreSQL (in SQLite you had to turn them on).
- `CHECK`, `UNIQUE`, `NOT NULL`, and `DEFAULT` are how you turn your **business rules** into real constraints. Use them!
- Make your script safe to re-run by starting with `DROP TABLE IF EXISTS ...` (drop tables that reference others first) or by using `CREATE TABLE IF NOT EXISTS`.

### Optional: a GUI

If you prefer clicking to typing, [pgAdmin](https://www.pgadmin.org/) or the PostgreSQL extension for VS Code let you browse tables and run queries. Use the same host, port, user, password, and database name you used above.

### Troubleshooting

| Problem | Likely cause and fix |
| --- | --- |
| `connection refused` | The server isn't running. Start it with `sudo systemctl start postgresql`, then check `pg_lsclusters`. |
| `password authentication failed` | Wrong user or password. Remember the role you created is different from `postgres`. |
| `database "xyz" does not exist` | You need to run `CREATE DATABASE xyz;` first, or check the spelling. |
| `port 5432 already in use` | Run `pg_lsclusters`. If you have more than one server, the second one gets the next port (probably 5433). Use the port that `pg_lsclusters` lists in your `psql` command and connection string. |
| `psql: command not found` | The client isn't installed. Run `sudo apt install postgresql-client`. |
| `Peer authentication failed for user "project_user"` | You left off `-h localhost`. Without it, `psql` tries to log in using your Linux username instead of a password. Add `-h localhost`. |
| `permission denied for table` | You created the table as a different role than the one you're connecting with. Recreate it as your project user. |
| Ran a statement and nothing happened in Python | You forgot to commit. Use the `with psycopg.connect(...)` pattern or call `conn.commit()`. |

## Documentation

1. Create a new repository on GitHub for your final project. Then add a `README.md` document. 

2. Add the following to your `README` with appropriate headers/formatting:
    - short statement of purpose of your project
    - use cases
    - business rules
    - data dictionary with your entity relationship diagram  
    - short instructions for how to set up the PostgreSQL database and run your setup script (assume the reader has never used your project)

3. Upload your setup scripts and your query scripts to a folder `sql` in your repository. **Do not upload passwords or `.env` files! Add them to your `.gitignore`.** If you have a large data file (over 100MB), do not try to upload it to GitHub either. Use your `.gitignore` to remove it.

## Tips, Tricks, and Resources

- See [this example](https://github.com/gormes-EPIC/expense_sample_database/tree/main) for reference. (This example has been majority AI generated so there may be mistakes, and it may use SQLite instead of PostgreSQL.)
- The [PostgreSQL tutorial](https://www.postgresql.org/docs/current/tutorial.html) and [data types reference](https://www.postgresql.org/docs/current/datatype.html) are the official docs.
- Stuck on a `psql` command? Type `\?` inside `psql` for help.


## Reflection Questions

1. Explain why you structured your data this way. What factors did you consider?
2. Why did you choose the primary/foriegn keys you did? 
3. What other ideas did you consider? Why does this structure best represent your question
4. What is one difference you noticed between working with PostgreSQL and SQLite? When might you prefer each one?

## How to Submit

Show your instructor your repo with your SQL scripts and README, and demonstrate that you can connect to your PostgreSQL database and run one of your queries.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.
