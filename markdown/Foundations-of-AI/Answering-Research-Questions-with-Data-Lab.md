# Answering Research Questions with Data Lab

## Objectives
1. Develop a research question that can be answered with an available dataset.
2. Review and clean data by handling missing values, duplicates, and inconsistent formatting.
3. Choose and create appropriate visualizations for different types of data and comparisons.
4. Communicate findings as a data story using a visualization that builds toward a clear conclusion.

## Vocabulary

| Vocabulary| Description |
| ----------- | ----------- |
| data cleaning | the process of fixing or removing incorrect, missing, duplicate, or inconsistently formatted data |
| missing value | an empty entry in a dataset, shown as `NaN` in `pandas` |
| visualization | a chart or graph that represents data visually, such as a bar chart, line graph, histogram, or scatter plot |

## Your Task

1. Browse [Kaggle Datasets](https://www.kaggle.com/datasets) and choose a dataset on a topic that interests you. **Do not choose an image dataset.** Your dataset should be tabular (rows and columns), such as a `.csv` file.

2. Write a research question that your dataset can answer. A good research question is specific and measurable. For example, *"Do movies with higher budgets earn higher ratings?"* is better than *"What makes a good movie?"* Check with your instructor before moving on.

3. Download your dataset and save it in the same folder as a new Jupyter Notebook file. Then, using `pandas`, load your data into a **dataframe**.

4. Explore your data. Add a markdown cell describing what each row represents, which columns you will use, and how many rows and columns there are. *Tip: Try using `.head()`, `.info()`, and `.shape`.* **Remember how you create data dictionaries last semester.**

5. Clean your data. In a markdown cell, explain each change you made and why.
    - Find and handle missing values.
    - Find and remove duplicate rows.
    - Fix inconsistent formatting, such as mismatched capitalization, extra spaces, or numbers stored as text.
    - *Do your best with this step. You may encounter complex issues that you are unable to solve or incorrect data. In that case consult with your instructor.*

6. Using `matplotlib`, create a visualization  that help answer your research question. You may need more than one here! Also, **add a paragraph explaination of what is happening in you graph and why it matters.** Choose the type of chart that fits each comparison:
    - **Bar chart** - comparing categories
    - **Line graph** - showing change over time
    - **Histogram** - showing the distribution of one variable
    - **Scatter plot** - showing the relationship between two variables

    Every chart needs a title, labeled axes, and a short markdown explanation of what it shows.

7. Your visualization(s) and explainations should tell a **data story**. Order them so each one builds on the last and leads toward your conclusion.

8. At the end of your notebook, add a conclusion that answers your research question using evidence from your visualizations.

## Tips, Tricks, and Resources

- [Kaggle Datasets](https://www.kaggle.com/datasets) - use the filters to search for `CSV` files, and look for datasets with a high **Usability** score.
- [pandas Missing Data Guide](https://pandas.pydata.org/docs/user_guide/missing_data.html)
- [matplotlib Plot Types](https://matplotlib.org/stable/plot_types/index.html)
- Useful `pandas` cleaning methods: `.isna()`, `.dropna()`, `.fillna()`, `.duplicated()`, `.drop_duplicates()`, `.str.strip()`, `.str.lower()`, and `pd.to_numeric()`.
- Make sure you activate your virtual environment before you `pip install pandas matplotlib`.

## Reflection Questions
1. Why did you choose your research question, and how did your dataset make it possible to answer?
2. What problems did you find in your data, and how did cleaning it change your results?
3. Why did you choose each type of visualization? How do your visualization(s) work together to tell a story?
4. What are the limitations of your conclusion? What other data would help you answer your question more confidently?

## How to Submit

Attach your GitHub repository to Google Classroom. Then, show your instructor your GitHub repository with your notebook and present your data story. You will also need to answer the reflection questions.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.
