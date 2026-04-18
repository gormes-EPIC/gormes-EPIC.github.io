# Variables and Functions Lab

## Objective

1. Leverage variables and functions to solve complex problems in Python

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |



## Your Task

Review the [Variables and Functions Notes](#Pi's-and-Python/Variables-and-Functions-Notes).

Then, solve these 4 programming challenges:
- [Indoor Voice](#indoor-voice)
- [Playback Speed](#playback-speed)
- [Weight on Mars](#weight-on-mars)
- [Tip Calculator](#tip-calculator)


## Getting Started
1. Create a new repository on GitHub to store your code. 
2. When you have finished solving each problem, upload your code there. 

## <a id="indoor-voice"></a> Indoor Voice

It's far too loud in here. We will write a program to quiet everything down. Write a program that takes input from the user and prints the input all lowercase. 

Here are some example runs of the program:

```
Input: I'M YELLING
i'm yelling
```

```
Input: Hello There
hello there
```

```
Input: i lUv Cs
i luv cs
```

<details>
<summary>Click here for a hint</summary>

Before you get started, answer the following questions: 

1. What function do you use to take input from the user? What variable type does it return?
2. What function do you use to display information to the terminal? What variable type does it take as a parameter?
3. What function can we use to make text lowercase?

Decomposing the problem:

1. Create a program to print something to the terminal
2. Modify a program to take input from the user, save it as a variable and print it out
3. Modify your program to lowercase the text and before printing it out. 

</details>

### Testing 

To test your program, use the following inputs and expected outputs. 

| Input | Expected Output |
| ----------- | ----------- |
| `I'M YELLING` | `i'm yelling` |
| `Hello There` | `hello there` |
| `i lUv Cs` | `i luv cs` |
| `aaaAAA` | `aaaaaa` |

## <a id="playback-speed"></a> Playback Speed

Some people have a habit of speaking rather quickly, and it’d be nice to slow them down, a la YouTube’s 0.75 playback speed, or even by having them pause between words.

You will create a Python program that prompts the user for input and then outputs that same input, replacing each space with ... (i.e., three periods). 

Here are some example runs of the program:

```
Input: This is Pi's and Python
This...is...Pi's...and...Python
```

```
Input: Hello There
Hello...There
```

```
Input: Let's implement a function called hello
Let's...implement...a...function...called...hello
```
<details>
<summary>Click here for a hint</summary>

Before you get started, answer the following questions: 

1. What function do you use to take input from the user? What variable type does it return?
2. What function do you use to display information to the terminal? What variable type does it take as a parameter?
3. What function can we use to replace characters with other characters?

Decomposing the problem:

1. Create a program to print something to the terminal
2. Modify a program to take input from the user, save it as a variable and print it out
3. Modify your program in between taking input and printing the result to add the appropriate "...".

</details>

### Testing 

To test your program, use the following inputs and expected outputs. 

| Input | Expected Output |
| ----------- | ----------- |
| `This is Pi's and Python` | `This...is...Pi's...and...Python` |
| `Hello There` | `Hello...There` |
| `i lUv Cs` | `i luv cs` |
| `Let's implement a function called hello` | `Let's...implement...a...function...called...hello` |

## <a id="weight-on-mars"></a> Weight on Mars

You are going to program a terminal welcoming new people to Mars. New arrivals know their weight on Earth, but might be interested in knowing their weight on Mars.

Create a program to take in a user's weight and print their weight on Mars. A user's weight on Mars is 0.378 times their Earth weight.

Use the following starter code and complete the function `calculate_mars_weight`:

```python
def calculate_mars_weight(weight):
    ## Your code here
    return 0

e_weight = int(input("Earth Weight: "))
m_weight = calculate_mars_weight(e_weight)
print(f"Mars Weight: {m_weight}")
```

Here are some example runs of the program:

```
Earth Weight: 150
Mars Weight: 56.7
```

```
Earth Weight: 200
Mars Weight: 75.6
```

```
Earth Weight: 0
Mars Weight: 0
```

<details>
<summary>Click here for a hint</summary>

Before you get started, answer the following questions: 

1. What is a parameter?
2. What is a `return` statement and how does it differ from printing?
3. What does it mean to "call a function"? Where can you see an example of calling `calculate_mars_weight()` in our program starter?
4. Read through the starter program and summarize what it is doing already? Identify what is a variable and what is a function.
5. What variable type is being passed to `calculate_mars_weight()` as a parameter? 


Decomposing the problem:

1. Start by modifying the function to return the user's weight instead of 0.
2. Then modify the program to return their Mars weight instead. 

</details>

### Testing 

To test your program, use the following inputs and expected outputs. 

| Input | Expected Output |
| ----------- | ----------- |
| `150` | `i'm yelling` |
| `200` | `hello there` |
| `0` | `i luv cs` |
| `175` | ` 66.15` |

## <a id="tip-calculator"></a> Tip Calculator

You are going to write a program to calculate the appropriate tip on a bill. The user will enter the meal total and the tip percetange and the program will display the appropriate tip amount. 

Use the following starter code:

```python
def main():
    dollars = dollars_to_float(input("How much was the meal? "))
    percent = percent_to_float(input("What percentage would you like to tip? "))
    tip = dollars * percent
    print(f"Leave ${tip:.2f}")


def dollars_to_float(d):
    # TODO
    return 0


def percent_to_float(p):
    # TODO
    return 0

main()
```

Here are some example runs of the program:

```
How much was the meal? $50.00
What percentage would you like to tip? 15%
Leave $7.50
```

```
How much was the meal? $20.00
What percentage would you like to tip? 20%
Leave $4.00
```

```
How much was the meal? $100.00
What percentage would you like to tip? 25%
Leave $25.00
```

<details>
<summary>Click here for a hint</summary>

Before you get started, answer the following questions: 

1. Read through the starter program and summarize what it is doing already? Identify what is a variable and what is a function.
2. What variable type is being passed to `dollars_to_float()` as a parameter? What type is it supposed to return?
3. What variable type is being passed to `percent_to_float()` as a parameter? What type is it supposed to return?


Decomposing the problem:

1. Start by modifying the function `dollars_to_float()` to return the dollar amount as a float. For example, `"$15.00"` should turn into `15.0`.
2. Then modify the function `percent_to_float()` to return the percentage amount as a float. For example `20%` should turn into `0.20`.

</details>


### Testing 

To test your program, use the following inputs and expected outputs. 

| Input | Expected Output |
| ----------- | ----------- |
| `$50.00`, `15%` | `$7.50` |
| `$20.00`, `20%` | `$4.00` |
| `$100.00`, `25%` | `$25.00` |
| `$25.00`, `0%` | `$0.00` |


## Tips, Tricks, and Resources
- [CS50 Week 0 Lecture](https://cs50.harvard.edu/python/weeks/0/)
- [Python String Methods](https://www.w3schools.com/python/python_ref_string.asp)

## Extensions
1. Modify your Weight on Mars program to allow the user to choose between multiple planets and display their weight. Create a new function for each new planet
2. Modify your Tip Calculator to reject bad input. For example instead of erroring when a user enters "20 dollars" the program should reprompt the user

## Reflection Questions
1. What is a variable type?
2. What is the return type of the function `calculate_mars_weight()`?
3. What are some string functions you used in the problems this lab? Are you able to use those same functions on variables that are not strings? 


## Deliverables Checklist
- [ ] Demonstrate 4 working programs to your instructor in class 
- [ ] A repository with all 4 of your programs uploaded, attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person. 

## Rubric
- **20 points** - All required items are present.
- **15 points** - Task was completed, but supplementary materials are weak or missing.
- **10 points** - Task was attempted, but is missing major components.
- **0 points** - Task was not attempted to 50% completion or student should reattempt.