# Data Scavenger Hunt

## Objectives
1. Load and explore a multi-table dataset to locate the information needed to answer a question
2. Combine related data to connect records across tables
3. Use aggregate functions (count, sum, average, max) to summarize data by group 
4. Justify a conclusion with supporting statistics

## Vocabulary

| Vocabulary| Description |
| ----------- | ----------- |
| dataframe | a two-dimentional data structure consisting of rows and columns, much like an SQL database | 

## Your Task

1. Download the following dataset from GitHub: [FIFA Dataset](https://github.com/gormes-EPIC/fifa-dataset)

2. Create a new Jupyter Notebook file. Then, using `pandas`, create two **dataframes** for the `tournaments.csv` and `matches.csv`

3. Using this dataset, we are going to answer two questions:
    - Which country is the most successful in World Cup history?
    - Does the host country have an advantage?

4. Take a look at both questions, what do these questions really mean. What does it mean to be "most successful" or "having an advatange"? *There can be multiple correct answers here, but you will need to defend your answer.*

5. Using aggregation functions like `.count()` and `.sum()`  with tools like `.join()` and `.groupby()`, answer the following questions. **Think about how you used SQL queries in the previous semester.**

6. At the end of your notebook, add a short explaination of why your data represents the prompt and what your conclusion was.


## Tips, Tricks, and Resources

- [World Cup Dataset](https://www.kaggle.com/datasets/abecklas/fifa-world-cup)


## Reflection Questions
1. How are dataframes similar or different than SQL databases?
2. How did you decide what the most successful team was and how did you decide if a home team had an advantage? Defend your choices. 

## How to Submit

Attach your GitHub repository to Google Classroom. Then, show your instructor your GitHub repository with your program and demonstrate your binary display. You will also need to answer the reflection questions.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.