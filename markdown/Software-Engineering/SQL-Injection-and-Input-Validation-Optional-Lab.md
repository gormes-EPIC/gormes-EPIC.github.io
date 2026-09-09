# SQL Injection & Input Validation Lab

## Objectives
1. Understand how SQL injection attacks work and why string-formatted queries are dangerous
2. Refactor SQL queries to use parameterized statements
3. Design and implement a Python input validator for use in front of a database
4. Build a regression test suite of malicious/malformed inputs to verify your validator

## Vocabulary
| Vocabulary | Description |
| ----------- | ----------- |
| SQL Injection | An attack where untrusted input is inserted into a SQL query in a way that changes its meaning or behavior |
| Parameterized Query | A SQL statement that uses placeholders (e.g. `?`) instead of directly inserting variables into the query string |
| Sanitization | Cleaning or rejecting input so it cannot be misinterpreted or misused by downstream code |
| Validation | Checking that input matches an expected type, shape, and range *before* it is used anywhere |
| Allowlist | A list of explicitly permitted values, fields, or characters (as opposed to a "blocklist" of forbidden ones) |
| Schema | The expected structure of a piece of data — field names, types, and constraints |

## Background

In the last lab, you connected directly to `restaurant.db` and ran queries you wrote yourself. That's fine when *you* are the only one typing SQL. But once your database sits behind an API, the input comes from strangers and strangers can be malicious.

Consider this vulnerable pattern:
```python
name = input("Enter menu item name: ")
query = f"SELECT * FROM menu_items WHERE item_name = '{name}'"
cursor_obj.execute(query)
```
If a user enters:
```
' OR '1'='1
```
the query becomes:
```sql
SELECT * FROM menu_items WHERE item_name = '' OR '1'='1'
```
...which returns *every row in the table*, regardless of the name. Worse inputs can delete data, dump schema information, or crash your program entirely. In this lab, you'll break your own code on purpose, then fix it properly.

## Your Task

### Part 1 — Break It
1. In your `restaurant.db` project, write a small script `vulnerable_lookup.py` that takes a menu item name from `input()` and uses **f-string or `.format()` string concatenation** (not parameterization) to run a `SELECT` query, printing whatever rows come back.
2. Try each of these inputs against your script and record what happens for each one (does it error? return unexpected rows? do nothing?). **Do this on a copy of `restaurant.db`, not your original. One of these inputs is designed to destroy a table.**:

   ```
   ' OR '1'='1
   ' OR 1=1 --
   '; DROP TABLE menu_items; --
   ' UNION SELECT name, sql FROM sqlite_master --
   ```
  
3. In a short paragraph, explain in your own words *why* the query behaved the way it did. Point to exactly where the string concatenation let the attacker's SQL "escape" the intended query.

### Part 2 — Fix It with Parameterized Queries

4. Rewrite `vulnerable_lookup.py` as `safe_lookup.py` using `sqlite3`'s built-in parameter substitution instead of string formatting:
   ```python
   cursor_obj.execute("SELECT * FROM menu_items WHERE item_name = ?", (name,))
   ```
5. Re-run the same four inputs from step 2 against `safe_lookup.py`. Record what happens now. None of them should be able to alter the query's structure.
6. Reflection: parameterization neutralizes SQL injection, but does it stop *every* bad input from this list? Try an empty string, a 100,000-character string, and `None`. What happens?

### Part 3 — Build a Validator
Parameterized queries protect your *SQL*, but they don't protect your *data model*. A parameterized query will happily insert the string `"-9999999999999999"` as a price. That's where a validator comes in — a function (or class) that checks input **before** it ever reaches a query.

7. Design a schema for each table using a Python dictionary or `pydantic` model, e.g.:
   ```python
   menu_item_schema = {
       "item_name": {"type": str, "min_len": 1, "max_len": 100},
       "price": {"type": float, "min": 0, "max": 500},
       "category": {"type": str, "allowed": ["Chicken", "Beverage", "Appetizer", ...]},
   }
   ```
8. Write a `validate(record, schema)` function that:
   - Rejects missing required fields
   - Rejects unexpected/extra fields (allowlist the schema's keys)
   - Rejects the wrong type for a field (`isinstance` checks — remember `True`/`False` are technically `int` in Python, watch out for that)
   - Rejects values outside a defined min/max range or length
   - Strips or rejects null bytes (`\x00`) and control characters
   - Returns either `(True, cleaned_record)` or `(False, list_of_errors)`

9. Write a second function, `sanitize_string(value)`, that normalizes text input:
   - Trims leading/trailing whitespace
   - Rejects or escapes non-printable/control characters
   - Optionally normalizes Unicode (`unicodedata.normalize("NFKC", value)`) to catch homoglyph tricks like `"аdmin"` (Cyrillic а) vs `"admin"` (Latin a)

### Part 4 — Build the Regression Test Suite
10. Using `pytest`, create `test_validator.py`. Build a parametrized test that runs your validator against **at least one input from each category below** and asserts it is correctly rejected (or safely handled):

   - **SQL injection strings**: `' OR '1'='1`, `'; DROP TABLE menu_items; --`, `' UNION SELECT sql FROM sqlite_master --`
   - **Type confusion**: `"12.99abc"` for a price field, `None`, `True`, `[]`
   - **Boundary/overflow**: `-1` for a price, `2**63`, empty string `""`, a 1,000,000-character string
   - **Null bytes/control characters**: `"Orange Chicken\x00"`, `"\r\n\r\n"`
   - **Unicode tricks**: `"Ｏrange Chicken"` (fullwidth O), `"аdmin"` (Cyrillic a)
   - **Structural issues**: extra unexpected field, missing required field, nested dict/list where a scalar is expected

   Example structure:
   ```python
   import pytest
   from validator import validate, menu_item_schema

   bad_inputs = [
       {"item_name": "' OR '1'='1", "price": 9.99, "category": "Entree"},
       {"item_name": "Fries", "price": -1, "category": "Appetizer"},
       {"item_name": "Fries", "price": "free", "category": "Appetizer"},
       # ...add the rest
   ]

   @pytest.mark.parametrize("record", bad_inputs)
   def test_rejects_bad_input(record):
       is_valid, result = validate(record, menu_item_schema)
       assert is_valid is False
   ```
11. Add at least 3 **valid** records too, and assert they pass. A validator that rejects everything isn't useful — it must correctly distinguish good input from bad.
12. Run `pytest -v` and make sure every test passes. If a bad input slips through, fix your validator, not the test.

### Part 5 — Wire It Together
13. Update `safe_lookup.py` so that it calls `validate()` on the user's input *before* it is ever passed to `cursor_obj.execute()`. If validation fails, print the errors and do not run any query.
14. Test end-to-end with a few of your malicious inputs from Part 1 — they should now be rejected by the validator and never even reach the database.

## Tips, Tricks, and Resources
- [sqlite3 — Parameterized Queries (Python docs)](https://docs.python.org/3/library/sqlite3.html#sqlite3-placeholders)
- [OWASP: SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection)
- [pydantic Documentation](https://docs.pydantic.dev/) (optional, if you want a more robust schema library than plain dictionaries)
- [pytest parametrize docs](https://docs.pytest.org/en/stable/how-to/parametrize.html)
- Remember: **never** build a query with `+`, `f""`, or `.format()` using untrusted input. Always use `?` placeholders.

## Extensions
1. Add rate-limiting logic that rejects/throttles a user submitting more than N invalid records in a row.
2. Extend your validator to log every rejected input (safely — don't just print it into a shell command!) with a reason, so you have an audit trail.
3. Research and add a test case for **ReDoS** (Regular Expression Denial of Service) if your validator uses regex anywhere.

## Reflection Questions
1. Walk through exactly how `'; DROP TABLE menu_items; --` breaks a string-concatenated query but is neutralized by a parameterized one. Why doesn't parameterization alone fully protect your application?
2. Why is an allowlist approach (only accepting known-good fields/values) generally stronger than a blocklist approach (rejecting known-bad patterns like the word `DROP`)?
3. Your validator will eventually sit in front of a Python API. What's the difference between validating input at the *API layer* versus relying on the *database* to reject bad data? Why do you need both?

## How to Submit
Attach your GitHub repository to Google Classroom, including `vulnerable_lookup.py`, `safe_lookup.py`, `validator.py`, and `test_validator.py`. Show your instructor a passing `pytest` run in class. You will also need to answer the reflection questions.

## Rubric
- **20 points** — All required items are present.
- **0 points** — Task was not attempted to completion or student should reattempt.