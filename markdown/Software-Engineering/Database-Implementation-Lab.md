# Database Implementation Lab

## Objective
1. Start working on a full-stack software project 
2. Design a SQL database to represent data
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

## Your Task

Over multiple labs, you will create a simple full-stack software project that has a multitable SQLite database with a Python API in front of it that connects to a simple frontend HTML site. You will then containerize these components so others can set up this project on their own machines. You will also create a `github.io` site with your documentation for your project.

<img src="/assets/database-implementation-figure-1.png">

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

*As you create your rules, think about [common falsehoods](https://github.com/kdeldycke/awesome-falsehood).*

3. Create a **entity relationship diagram** to define your database **schema**. Start with your entities(nouns) and define their properties(attributes). Make sure each table has a **primary key** and **foreign keys** are properly labeled. See previous assignments for examples and additional details.

4. Create a setup script, either a SQL or Python script, to set up the database. Do this as a **script**; you will need it later!! 

5. Write and save SQL queries **for each** of your appropriate use cases. Don't forget about being able to add and remove from your database!

## Documentation

1. Create a new repository on GitHub for your final project. Then add a `README.md` document. 

2. Add the following to your `README` with appropriate headers/formatting:
    - short statement of purpose of your project
    - use cases
    - business rules
    - data dictionary with your entity relationship diagram  

3. Upload your setup scripts and your query scripts to a folder `sql` in your repository. **If your database files are too large (over 100MB) do not try to upload them to GitHub! Use your `.gitignore` to remove them.**

## Tips, Tricks, and Resources

- See [this example](https://github.com/gormes-EPIC/expense_sample_database/tree/main) for reference. (This example has been majority AI generated so there may be mistakes).


## Reflection Questions

1. Explain why you structured your data this way. What factors did you consider?
2. Why did you choose the primary/foriegn keys you did? 
3. What other ideas did you consider? Why does this structure best represent your question

## How to Submit

Show your instructor your repo with your SQL scripts and README.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.
