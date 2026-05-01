# Data Utility Lab

## Objective

1. Use object-oriented prgoramming and data structures to represent data
2. Program common algorithms like searches and sorts
3. Create a console program to interact with the data

## Your Task

In this lab you will design a data utility for a subject of your choice. 

At minimum your project must contain:
- A custom class to represent your data
- A class that contains a data structure for your data and data utility methods to provide functionality like sorting, finding the minimum and maximum/average, etc. The specific data utility methods will be specific to your project, but you must include at least three methods listed below. 
    - One aggregation, for example `getAverageX()`
    - One search/filter, for example `getItemsAboveThreshold()`
    - One sorting method, for example `sortByX()`

- One class is your main. It has a small console menu that you can use to interact with the data.

To get started, you can easily find datasets on [Kaggle](https://www.kaggle.com/). Remember that image datasets will be difficult to use. You probably want data stored in a CSV so you can easily use a Scanner to read it into your program. 

### A Quick Example

Let's say I wanted to represent the [Student Performance Analytics Dataset](https://www.kaggle.com/datasets/borovai0/student-performance-analytics-dataset). 

I would create a new class `Student` to represent my data with the following fields:
- `int studentId`
- `String gender`
- `double studyHours`
- `double attendance`
- etc.

Then, I would create the class `StudentUtility`. It contains an ArrayList of students and the following methods:
- `void loadFromFile(String filename)`
- `ArrayList<Student> listByOverallScore()`
- `ArrayList<Student> getByGrade(String grade)`
- `double getMaxFinalExamScore()`
- `Student getStudent(int studentId)` 

Lastly I would create a quick `Main` class to hold my main method. It contains a simple interactive method shown below.

```
(A) Add a student
(B) Get a student
(C) List students by overall score
(D) Get maximum final exam score
(E) Get students by grade

```


## Tips, Tricks, and Resources
- [Datasets on Kaggle](https://www.kaggle.com/datasets)

## Extensions
1. Add additional functionality to your data utility class. Think about operations that user would want to use.
2. Add a GUI to visualize your data

## Reflection Questions
1. Why did you choose the specific data structure you chose? Include the runtime of various operations in your answer. 
2. How does each of your utility methods help answer a real question about your dataset?
3. How did you test your methods to make sure they were returning correct results?

## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person


## Rubric
- **6 points** - All required items are present.
- **5 points** - Task was completed, but supplementary materials are weak or missing.
- **4 points** - Task was attempted, but is missing major components.
- **3 points** - Did not attempt or student should reattempt.