# If Statement Lab
## Objective

1. Leverage if statements to solve complex problems in Python

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| if statement(conditional) | a statement used to run a block of code if a condition is true |
| elif | a keyword used to deliniate an "else-if" condtion |
| else | a keyword used to designate a block of code to be run if all the other statements are false |
| boolean | a variable type that is either `True` or `False` |
| match statement | a statement used to compare specific variable with given values |
| casting | converting one variable type to another |
| return type | the type of value a function returns |

## Your Task

Review the [If Statement Notes](#Pi's-and-Python/If-Statement-Notes).

Then, solve these 5 programming challenges:
- [The Answer to Life, the Universe and Everything](#42)
- [Leap Year](#leap-year)
- [Sweater Weather](#sweater-weather)
- [Interpreter](#interpreter)
- [Meal Time](#meal-time)

## Getting Started
1. Create a new repository on GitHub to store your code. 
2. When you have finished solving each problem, upload your code there. 

## <a id="42"></a>The Answer to the Ultimate Question of Life, the Universe, and Everything

In The Hitchhiker's Guide to the Galaxy by Douglas Adams, the supercomputer Deep Thought says 42 is the "Answer to the Ultimate Question of Life, the Universe, and Everything".

You will create a program `deep_thought.py` to prompt the user what the answer "to life, the universe, and everything" is and print "Yes" if they got it correct and "No" otherwise.

Here are some example runs of the program:

```
What is the answer to life, the universe, and everything? 42
Yes
```

```
What is the answer to life, the universe, and everything? fourty-two
Yes
```

```
What is the answer to life, the universe, and everything? fifty
No
```
### Testing 

To test your program, use the following inputs and expected outputs. 

| Input | Expected Output |
| ----------- | ----------- |
| 42 | Yes | |
| fourty two | Yes |
| fourty-two | Yes |
| fOurTy TwO | Yes |
| 50 | No |
| fifty-two | No |


## <a id="leap-year"></a>Leap Year

You will create a program `leap_year.py` which prompts the user for a year and prints "Leap Year" if it is a leap year and "Not a Leap Year" otherwise. The leap year rules are: a year divisible by 4 is a leap year, unless it is divisible by 100 but not 400, in which case it is not.

Here are some example runs of the program:

```
Year: 2026
Not a Leap Year
```
```
Year: 2032
Leap Year
```


### Testing 

To test your program, use the following inputs and expected outputs. 

| Input | Expected Output |
| ----------- | ----------- |
| 2026 | Not a Leap Year | |
| 2028 | Leap Year |
| 1700 | Not a Leap Year |
| 2400 | Leap Year |
| year | Not a Leap Year |


## <a id="sweater-weather"></a>Sweater Weather

You will create the program `sweater.py` to prompt the user for the high temperature for the day in Fahrenheit and print "you need to bring a sweater" if it is less than 60 degrees. It prints "you do not need to bring a sweater" otherwise. If the user inputs text or a temperature over 140, the program should print "invalid input".

Here are some example runs of the program:

```
What is the high temperature: 68
you do not need to bring a sweater
```

```
What is the high temperature: 52
you need to bring a sweater
```

```
What is the high temperature: 150
invalid input
```

### Testing 

To test your program, use the following inputs and expected outputs. 

| Input | Expected Output |
| ----------- | ----------- |
| 33 | you need to bring a sweater |
| 57 | you need to bring a sweater |
| 72 | you do not need to bring a sweater |
| 80 | you do not need to bring a sweater | 
| 155 | invalid input |
| temp | invalid input |


## <a id="interpreter"></a>Math Interpreter

You will create a 4 function calculator program called `calc.py`. This calculator will accept two numbers and an operation(`+`, `-`, `*`, or `/`) and print the result. 

Here are some example runs of the program:

```
Input: 1 + 2
3
```

```
Input: 5 * 5
25
```

```
Input: 3 / 2
1.5
```

<details>
<summary>Hint</summary>

You will want to use the Python function `split()` for this problem. The `split` function allows you to separate strings by a given delimeter character. See the example below.

```python
st = "hello there"
x, y = st.split(" ")
print(x) # hello
print(y) # there
```
</details>

### Testing 

To test your program, use the following inputs and expected outputs. 

| Input | Expected Output |
| ----------- | ----------- |
| 1 + 1 | 2 |
| 10 - 6 | 4 |
| 3 * 3 | 9 |
| 5 / 2 | 2.5 | 
| 5 / 0 | invalid input |


## <a id="meal-time"></a>Meal Time

You will create a program `meal_time.py` to prompt the user to enter a time and have it print out either "breakfast time" if it is between 7:00 and 8:00, "lunch time" if it is between 12:00 and 1:00, "dinner time" if it is between 6:00 and 7:00, or nothing otherwise.

Your program will have two methods
- `main()`: prompts the user for a time, uses `convert()` to convert the time to a decimal and prints out the appropriate message based on the result
- `convert(time)`: accepts a time as a string in the form HH:MM and returns the time as a decimal number. For example, "7:30" would be returned as 7.5.

```
def main():
    pass


def convert(time):
    pass


if __name__ == "__main__":
    main()


```

Here are some example runs of the program:

```
What time is it: 7:15
breakfast time
```

```
What time is it: 22:20
```

### Testing 

To test your program, use the following inputs and expected outputs. 

| Input | Expected Output |
| ----------- | ----------- |
| 7:59 | breakfast time |
| 12:30 | lunch time |
| 18:20 | dinner time |
| 23:00 |  | 
| 11:15 |  |


## Tips, Tricks, and Resources
- [Python If Statements](https://www.w3schools.com/python/python_conditions.asp)
- [Python String Methods](https://www.w3schools.com/python/python_ref_string.asp)
- [CS50 Week 1 Lecture](https://cs50.harvard.edu/python/weeks/1/)

## Extensions
1. Add more complex operators to your math interpreter. For example, powers, modulus, etc. 
2. Refactor all your code to use multiple methods instead, much like Meal Time.

## Reflection Questions
1. What is the difference between `=` and `==`?
2. Can you compare a string and an integer in an if statement? If not, what is the process called to create two compatible types? 
3. What is the difference between an if-if-if construction and an if-elif-else construction? Are they interchangeable?
4. If you were to reorder your if statements from problem 2(leap year) would your code still work? Why or why not?
5. What is the **return type** of the function `convert()` in the last problem?


## Deliverables Checklist
- [ ] Demonstrate 5 working programs to your instructor in class 
- [ ] A repository with all 5 of your programs uploaded, attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person. 

## Rubric
- **6 points** - All required items are present.
- **5 points** - Task was completed, but supplementary materials are weak or missing.
- **4 points** - Task was attempted, but is missing major components.
- **3 points** - Did not attempt or student should reattempt.