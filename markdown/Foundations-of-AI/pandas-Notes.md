# pandas Notes

<tabs>
<tab title="Grade Level">

## Jupyter Notebooks

A **Jupyter Notebook** (`.ipynb` file) lets you write Python in small chunks called **cells** and run them one at a time. 

> Create a new `ipynb` file to follow along with these notes.

Press **Shift + Enter** to run a cell. Its output shows up right below it, so you can test one step, check the result, and keep going. Variables stay in memory between cells, so you only have to load your data once. Cells can also be **Markdown** instead of code, which is where you write notes and explanations. If things get confusing, use **Restart and Run All** to run every cell again from the top.

![A Jupyter Notebook in VS Code with a Markdown cell that says "Welcome to Jupyter Notebooks!" and a Python cell that prints "hello world"](assets/jupyter-notebook-example.png)

## What is pandas?

**pandas** is a Python library for working with tables of data. If you know SQL, you already know most of the ideas. Only the syntax is new.

## Vocabulary

| Vocabulary | Description |
| ----------- | ----------- |
| dataframe | a table of rows and columns, like a SQL table |
| series | one column of a dataframe |
| index | the row labels of a dataframe (0, 1, 2, … by default) |
| merge | combining two dataframes on a shared column, like a SQL `JOIN` |
| aggregate | summarizing many rows into one value, like `COUNT` or `SUM` |

## Example Data

All the examples below use two made-up tables from a video game store. To follow along, copy each one into a file with the matching name, in the same folder as your notebook.

**`games.csv`**

```csv
game_id,title,genre,price
1,Star Racer,Racing,30
2,Dungeon Quest,RPG,60
3,Pixel Farm,Sim,20
```

**`sales.csv`**

```csv
game_id,store,copies
1,North,120
2,North,45
1,South,80
3,South,200
```

## Loading Data

```python
import pandas as pd

games = pd.read_csv("games.csv")
sales = pd.read_csv("sales.csv")
```

Each CSV file becomes one dataframe. Think of each one as a SQL table.

## Looking Around

| What you want | pandas |
| --- | --- |
| First 5 rows | `games.head()` |
| Column names and types | `games.info()` |
| Number of rows and columns | `games.shape` |
| Quick stats (mean, min, max…) | `games.describe()` |

In Jupyter, the last line of a cell displays automatically. You don't need `print()`.

## SQL vs. pandas

| SQL | pandas |
| --- | --- |
| `SELECT * FROM games` | `games` |
| `SELECT title, price FROM games` | `games[["title", "price"]]` |
| `WHERE price > 25` | `games[games["price"] > 25]` |
| `WHERE price > 25 AND genre = 'RPG'` | `games[(games["price"] > 25) & (games["genre"] == "RPG")]` |
| `WHERE genre = 'RPG' OR genre = 'Sim'` | `games[(games["genre"] == "RPG") \| (games["genre"] == "Sim")]` |
| `ORDER BY price DESC` | `games.sort_values("price", ascending=False)` |
| `LIMIT 3` | `.head(3)` |
| `SELECT COUNT(*) FROM games` | `len(games)` |
| `SELECT DISTINCT genre` | `games["genre"].unique()` |
| `JOIN sales ON games.game_id = sales.game_id` | `games.merge(sales, on="game_id")` |
| `GROUP BY store` with `SUM(copies)` | `sales.groupby("store")["copies"].sum()` |

**Watch out:**
- Use `&` for AND, `|` for OR, and `==` to compare. Wrap each condition in parentheses.
- Use double brackets `[[ ]]` to pick more than one column.

## Combining Tables

`merge()` works like a SQL `JOIN`. It matches rows that share a value in a column.

```python
combined = games.merge(sales, on="game_id")
```

| game_id | title | genre | price | store | copies |
| --- | --- | --- | --- | --- | --- |
| 1 | Star Racer | Racing | 30 | North | 120 |
| 1 | Star Racer | Racing | 30 | South | 80 |
| 2 | Dungeon Quest | RPG | 60 | North | 45 |
| 3 | Pixel Farm | Sim | 20 | South | 200 |

If the columns have different names in each table, use `left_on` and `right_on`:

```python
games.merge(sales, left_on="game_id", right_on="id")
```

You may also see `.join()`. It matches on the **index** instead of a column, so `merge()` is usually easier.

## Grouping and Aggregating

`groupby()` works like SQL `GROUP BY`. Pick the column to group by, the column to summarize, then the function.

```python
combined.groupby("title")["copies"].sum()
```

| title | copies |
| --- | --- |
| Dungeon Quest | 45 |
| Pixel Farm | 200 |
| Star Racer | 200 |

| SQL | pandas |
| --- | --- |
| `COUNT()` | `.count()` |
| `SUM()` | `.sum()` |
| `AVG()` | `.mean()` |
| `MAX()` / `MIN()` | `.max()` / `.min()` |

Two shortcuts:

```python
# Count how many times each value appears (like GROUP BY + COUNT)
sales["store"].value_counts()

# Sort the results from biggest to smallest
combined.groupby("title")["copies"].sum().sort_values(ascending=False)
```

## Making New Columns

You can do math on whole columns at once, like a calculated column in SQL `SELECT`.

```python
combined["revenue"] = combined["price"] * combined["copies"]
```

Comparing two columns gives a column of `True` / `False` values:

```python
combined["big_seller"] = combined["copies"] > 100
```

`True` counts as 1 and `False` as 0, so `.sum()` counts the `True` rows and `.mean()` gives the fraction that are `True`.

</tab>
<tab title="Explain It Like I'm 10">

## Notebooks

A **Jupyter Notebook** is like a worksheet for code. You write a little code in a box, run it with **Shift + Enter**, and the answer shows up right under it.

## What is pandas?

**pandas** turns a spreadsheet into something Python can read. Each spreadsheet is called a **dataframe**: rows going across, columns going down.

You already used SQL to ask a database questions. pandas asks the same questions, just with Python words.

## Opening a File

```python
import pandas as pd
games = pd.read_csv("games.csv")
games.head()   # peek at the first 5 rows
```

## Asking Questions

| I want to… | SQL | pandas |
| --- | --- | --- |
| see one column | `SELECT title` | `games["title"]` |
| keep only some rows | `WHERE price > 25` | `games[games["price"] > 25]` |
| put rows in order | `ORDER BY price` | `games.sort_values("price")` |
| stick two tables together | `JOIN` | `games.merge(sales, on="game_id")` |
| make piles and add them up | `GROUP BY` + `SUM` | `sales.groupby("store")["copies"].sum()` |

## Making Piles

`groupby` is like sorting candy into piles by color, then counting each pile.

```python
sales.groupby("store")["copies"].sum()
```

This makes one pile per store, then adds up the copies in each pile.

</tab>
<tab title="Just the Highlights">

## Key Ideas

- A **Jupyter Notebook** runs Python one cell at a time (**Shift + Enter**). Variables carry over between cells.
- **pandas** = SQL tables in Python. A table is a **dataframe**; one column is a **series**.
- Load a CSV with `pd.read_csv("file.csv")`. Explore with `.head()`, `.info()`, `.shape`, `.describe()`.

## Cheat Sheet

| SQL | pandas |
| --- | --- |
| `SELECT a, b` | `df[["a", "b"]]` |
| `WHERE a > 5 AND b = 'x'` | `df[(df["a"] > 5) & (df["b"] == "x")]` |
| `ORDER BY a DESC` | `df.sort_values("a", ascending=False)` |
| `LIMIT 3` | `.head(3)` |
| `DISTINCT a` | `df["a"].unique()` |
| `JOIN ... ON id` | `df1.merge(df2, on="id")` |
| `GROUP BY a` + `SUM(b)` | `df.groupby("a")["b"].sum()` |
| `COUNT` / `AVG` / `MAX` / `MIN` | `.count()` / `.mean()` / `.max()` / `.min()` |
| `GROUP BY a` + `COUNT(*)` | `df["a"].value_counts()` |

## Watch Out

- Use `&` and `|`, not `and` / `or`. Wrap each condition in parentheses.
- `merge()` matches on a column. `.join()` matches on the index.
- New column: `df["c"] = df["a"] * df["b"]`.
- `.sum()` on True/False counts the `True` rows. `.mean()` gives the fraction.

</tab>
</tabs>

## Practice

Use `games.csv` and `sales.csv` to answer these. Try writing the SQL in your head first, then translate it to pandas.

### Exercise 1

Find the total number of copies sold across both stores.

<details>
<summary>Click here to view the answer</summary>

```python
sales["copies"].sum()
```

**445** copies. This is like `SELECT SUM(copies) FROM sales`.

</details>

### Exercise 2

Which store sold more copies, North or South?

<details>
<summary>Click here to view the answer</summary>

```python
sales.groupby("store")["copies"].sum()
```

| store | copies |
| --- | --- |
| North | 165 |
| South | 280 |

**South** sold more. This is like `SELECT store, SUM(copies) FROM sales GROUP BY store`.

</details>

### Exercise 3

Which genre made the most money? (Money = price × copies.)

<details>
<summary>Click here to view the answer</summary>

```python
combined = games.merge(sales, on="game_id")
combined["revenue"] = combined["price"] * combined["copies"]
combined.groupby("genre")["revenue"].sum().sort_values(ascending=False)
```

| genre | revenue |
| --- | --- |
| Racing | 6000 |
| Sim | 4000 |
| RPG | 2700 |

**Racing** made the most money. Price is in `games` and copies are in `sales`, so you need to merge first.

</details>
