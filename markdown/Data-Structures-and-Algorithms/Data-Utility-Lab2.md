# Data Utility Lab

## Objective
1. Use object-oriented prgoramming and data structures to represent data
2. Program common algorithms like searches and sorts
3. Create a console program to interact with the data


## Your Task

In this project, you will create multiple classes to represent and interact with data. 

- One class represents your data. It will have constructors and appropriate getters and setters. 
    - The eaisest way to do this is to select a CSV dataset from [Kaggle](https://www.kaggle.com/datasets) and base your class on that. That way you can use the CSV as your sample data.
- One class represents your data utility. It contains a data structure of your first class and at least three different data utility methods, think searches, sorts, maxes/mins, etc.  
- One class is your main. It has a small console menu that you can use to interact with the data.

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
- Use [Kaggle](https://www.kaggle.com/datasets) to find your dataset. 
- Stay away from datasets of images. They will be difficult to use.

## Extensions
1. Add more data utility methods
2. Add a visual component with Swing