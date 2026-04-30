# SQLite with Python Lab

## Objectives
1. Interact with a SQLite database from inside a Python script
2. Apply common SQL commands
3. Combine SQL and Python to accomplish common tasks like sorting

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| ERD | entity relationship diagram |

## Your Task

1. Create a new folder for your database. Download and unzip the [Resturant Orders](https://mcusercontent.com/4cab28e9b9ed67ca67e50a8c6/files/8fe625a4-c7ae-83e5-985a-565607f76128/Restaurant_Orders.zip) dataset. This should contain two CSVs, `menu_items.csv` and `order_details.csv`. The data information is in the file `restaurant_db_data_dictionary.csv`. 

2. Create a ERD diagram to represent the data. Make sure to identify keys and constraints. 

3. Design 2 SQL `CREATE TABLE` commands for each CSV

4. Use the following starter code to create a new database `restaurant.db` with two tables.

```
import sqlite3

# Connect to the SQLite database (or create it if it doesn't exist)
connection_obj = sqlite3.connect('restaurant.db')

# Create a cursor object to interact with the database
cursor_obj = connection_obj.cursor()

# SQL query to create the table
table_creation_query = """
    CREATE TABLE person (
        Email VARCHAR(255) NOT NULL,
        First_Name CHAR(25) NOT NULL,
        Last_Name CHAR(25),
        Score INT
    );
"""

# Execute the table creation query
cursor_obj.execute(table_creation_query)

# Close the connection to the database
connection_obj.close()
```

5. Write a Python program to insert the contents of both of our CSV files into our tables. Review [these notes](#Pi's-and-Python/File-Reading-and-Writing-Notes) on file reading and writing from Python. Use `cursor.execute("INSERT INTO table VALUES (var, var)")`.

6. Now we are going to practice using `SELECT` statements:

```
cursor_obj.execute('''SELECT * FROM table''')
output = cursor_obj.fetchall()
for row in output:
  print(row)

```

7.  Write `SELECT` statements to find:
    - All items with a price over $10
    - List the when items were ordered in order from earliest in the night to latest
    - Count the number of times orange chicken was ordered
    - The total cost of items purchased after 9PM

8. Create two classes, one for order and one for menu item. Then use a `SELECT` statement to get each table. Use the contents to create two lists, one of existing orders and one of menu items. Use the `__str__` method and some print statements to make sure everything is working correctly. 

9. Complete the same four calculations from above using your Python **objects** instead of SQL queries.
    - List all items with a price over $10
    - List the when items were ordered in order from earliest in the night to latest
    - Count the number of times orange chicken was ordered
    - The total cost of items purchased after 9PM


##  Tips, Tricks, and Resources
- [SQLite Documentation](https://docs.python.org/3/library/sqlite3.html)
- [SQLite with Python - Geeks for Geeks](https://www.geeksforgeeks.org/python/python-sqlite/)


## Extensions

1. Create a console program to add to your database and lookup order information

## Reflection Questions

1. What method did you use to sort the orders in both a SQL way and a Python way? Which was most efficient? 
2. Compare and contrast using SQL queries and traditional Python objects to solve the same problems.
3. What is the benefit of using a database over Python alone?


## Deliverables Checklist
- [ ] Demonstrate your functioning Python program in class
- [ ] A GitHub repo with your Python script and your database
- [ ] Answers to your reflection questions either written or verbally in class

## Rubric
- **20 points** - All required items are present.
- **15 points** - Task was completed, but supplementary materials are weak or missing.
- **10 points** - Task was attempted, but is missing major components.
- **0 points** - Task was not attempted to 50% completion or student should reattempt.


