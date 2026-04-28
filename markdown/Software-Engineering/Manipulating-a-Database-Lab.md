# Maintaining a Database Lab

## Objective
1. Interact with a database with multiple tables
2. Use complex operations filters and joins 

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| database | an organized collection of structured data |
| SQLite | a lightweight, serverless, and self-contained C-language library that implements a full-featured SQL database engine |
| table | a SQL database is made up of tables (with contain types columns and rows of records) |
| record | a "row" in a database table | 
| primary key | a specific column (or set of columns) in a database table that uniquely identifies each row or record |
| foriegn key | a column (or group of columns) in one table that links to the primary key of another table| 

## Your Task

In this lab, you will create a database representing the Great British Bake-off. 

<img src="/assets/manipulating-a-db-figure-1.png">

This database contains 5 tables:
- Episodes
- ChallengeBakes
- Seasons
- Bakers
- Outcomes

For more information, [click here](https://public.tableau.com/app/sample-data/GBBO_Data_Dictionary.pdf) to view the Data Dictionary for the database.

1. Create a new folder for your new `sqlite` database. Then create a new database called `gbbo.db`. 
2. [Click here](https://public.tableau.com/app/sample-data/GBBO_Dataset.zip) to download the CSVs for each table. 
3. For each table, identify what will be your **primary key**. If there is not an existing column that can be used as a primary key, create a new column in Libre Office. Then create the table with the `CREATE TABLE` command.  

Here is an example for a table `Persons`:

```
CREATE TABLE Persons (
  PersonID int PRIMARY KEY,
  LastName varchar(255) NOT NULL,
  FirstName varchar(255),
  Address varchar(255),
  City varchar(255)
);
```

Here are some examples of column types:

| Vocabulary| Description |
| ----------- | ----------- |
| `int` | Standard integer |
| `decimal(p, s)` | Floating point number where p is total digits and s is digits after the decimal | 
|  `varchar(n)` | Variable-length string up to length n |
| `date` | Stores only the calendar date (YYYY-MM-DD) |
| `time` | Stores only the time of day. 
| `datetime` | Stores both date and time |
| `boolean` | Stores TRUE or FALSE | 

See a full list [here](https://www.w3schools.com/sql/sql_datatypes.asp). 

**Tip: Create and run a file `.sql` instead of using the terminal to make it easier to keep track of what you are doing**

4. Use the `SELECT` command to double check you imported everything correctly. 

5. Write a `.sql` script of queries to get:
    - The names of all bakers older than 50
    - How many people total have been given a handshake by Paul Hollywood
    - The top three most viewed episodes

Remember the written order of a `SELECT` statement.
- `SELECT`: Specifies the columns and aggregate functions (like SUM or COUNT) to return.
- `FROM`: Specifies the table(s) from which to retrieve data.
- `WHERE`: Filters individual rows before any grouping occurs.
- `GROUP BY`: Collects data into groups based on one or more columns.
- `HAVING`: Filters the resulting groups after aggregation (e.g., "only show groups with a count > 5").
- `ORDER BY`: Sorts the final result set in ascending or descending order.

6. Now that we can filter data, what if I wanted to know the theme and baker for all season 8 episodes? I would need to use a `JOIN` statement. 

There are 4 kinds of joins in SQL:
- `(INNER) JOIN`: Returns only rows that have matching values in both tables
- `LEFT (OUTER) JOIN`: Returns all rows from the left table, and only the matched rows from the right table
- `RIGHT (OUTER) JOIN`: Returns all rows from the right table, and only the matched rows from the left table
- `FULL (OUTER) JOIN`: Returns all rows when there is a match in either the left or right tab

Using `JOIN` find:
    - The name, age, and signature bake of all season 4 contestants 
    - The networks of the top three episodes with the highest viewership
    - The star bakers' showstopper and name for each episode


## Tips, Tricks, and Resources

- [Data Source](https://public.tableau.com/app/learn/sample-data)
- [SQL Joins](https://www.w3schools.com/sql/sql_join.asp)


## Extensions
1. Write additional queries to find out the winner of each season's age and the airdate of all episodes where Paul Hollywood gave a handshake

## Reflection Questions

1. What is the execution order of a `SELECT` statement?
2. What is the difference between an inner join and an outer join
3. What is the difference between a primary and foreign keys? Why are they important?
4. Can you create a table without a primary key? If so, why is this ill-advised?


## Deliverables Checklist
- [ ] A repository with your `.sql` queries script and database uploaded to GitHub
- [ ] Demonstration of working script and database in class
- [ ] Answers to the reflection questions either written or verbal in class

## Rubric
- **20 points** - All required items are present.
- **15 points** - Task was completed, but supplementary materials are weak or missing.
- **10 points** - Task was attempted, but is missing major components.
- **0 points** - Task was not attempted to 50% completion or student should reattempt.

