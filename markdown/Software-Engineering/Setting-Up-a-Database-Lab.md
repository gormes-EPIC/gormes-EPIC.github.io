# Setting Up a Database Lab

## Objective
1. Create a SQLite database
2. Import database data from a CSV file
3. Use basic database operations like `SELECT`, `INSERT`, `UPDATE`, and `DELETE`

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| database | an organized collection of structured data |
| SQLite | a lightweight, serverless, and self-contained C-language library that implements a full-featured SQL database engine |
| CSV | stands for Comma Separated Values |
| table | a SQL database is made up of tables (with contain types columns and rows of records) |
| record | a "row" in a database table | 
| primary key | a specific column (or set of columns) in a database table that uniquely identifies each row or record |


## Your Task

In this lab, you will setup a SQLite database on your computer, add values, and practice using basic SQL commands.

1. In your terminal, create a new folder for your database. Inside use `sqlite3 my_database.db` to open the `sqlite` terminal and create the database file `my_database.db`. Notice how it appears in the folder
2. Your terminal prompt should now say `sqlite` on the left. If you exit and want to reactivate your terminal, use `sqlite3 my_database.db` again. 
3. Now, we will create a table called `data` with our SQL command: 
```
CREATE TABLE data (
    id INTEGER PRIMARY KEY,
    name TEXT,
    value INTEGER
);
```
This creates a new table with an integer `id` column, an text column `name`, and a integer column `value`.

4. To check if anything is in the table, we can print every entry with `SELECT * FROM data;`. This should list nothing since we just created the table with no records.

5. Add a record to the table with
```
INSERT INTO data (name, value)
VALUES (New Item, 100);
```

6. Now, check if it exists in the table with `SELECT * FROM data;`. You should see one entry listed.

7. Let's add data from a CSV to our table so we have a little data to work with. Create the file `data.csv` in the same folder as your database. Copy these values into it and save:

```
id,name,value
2,Apples,17
3,Oranges,33
4,Grapes,55
5,Pineapple,12
6,Mango,29
7,Strawberries,64
8,Blueberries,23
9,Watermelon,8
10,Peaches,38
11,Pears,21
12,Kiwi,14
13,Lemons,47
14,Limes,19
15,Cherries,73
16,Plums,26
17,Avocados,31
18,Tomatoes,58
19,Carrots,44
20,Potatoes,90
```

8. Go back to your SQLite prompt. First we will enable CSV mode with `.mode csv` then import the file into `data` with `.import data.csv data`. *Note: this operation will fail if your CSV doesn't match your table exactly or if the primary key has already been used.* Now when we use `SELECT * FROM data;` we should see 20 entries.

9. Let's practice some different queries. 
    - `SELECT * FROM data;`: selects all rows from the table data
    - `SELECT * FROM data WHERE value > 50;`: selects all rows where the value column is greater than 50
    - `SELECT * FROM data ORDER BY value DESC;`; selects allrows ordered by the value; 

10.  Add two new records for `"Blackberries",39` and `"Cantaloupe", 45`.

11. Modify the `value` of the item with `id = 1` with:
```
UPDATE data
SET value = 200
WHERE id = 1;
```
Verify your changes with `SELECT * FROM data;`.

12. Delete the element with `id = 1`.
```
DELETE FROM data
WHERE id = 1;
```
Verify your changes with `SELECT * FROM data;`.

13. Create a new file in your folder called `my_script.sql` and add a basic `SELECT` statement. Run the file in your `sqlite` terminal with `.read my_script.sql`. This way you can save queries you want to run frequently or draft complex commands.

## Tips, Tricks, and Resources

- [SQLite Introduction](https://www.youtube.com/watch?v=8Xyn8R9eKB8)
- [W3 Schools](https://www.w3schools.com/sql/)


## Extensions

1. Try adding a new column to your table. You will need to use the `ALTER TABLE` command.

## Reflection Questions

1. What query would return only rows where `value < 25`?
2. What happens if you run `DELETE` without a `WHERE` clause?
3. Write a query that returns the top 3 highest values.

## Deliverables Checklist
- [ ] Demonstrate an existing database in class with the ability to perform SQL queries 

## Rubric
- **20 points** - All required items are present.
- **15 points** - Task was completed, but supplementary materials are weak or missing.
- **10 points** - Task was attempted, but is missing major components.
- **0 points** - Task was not attempted to 50% completion or student should reattempt.

