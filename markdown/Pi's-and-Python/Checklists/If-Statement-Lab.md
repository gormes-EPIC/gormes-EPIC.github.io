# If Statement Lab: Checklist

> **The goal:** use if statements to solve five programming challenges: Deep Thought, Leap Year, Sweater Weather, Math Interpreter, and Meal Time.

## Step 1: Get Set Up

- [ ] Review the [If Statement Notes](#Pi's-and-Python/If-Statement-Notes).
- [ ] Create a new repository on GitHub for this lab.
- [ ] Clone it onto your Pi, or create a folder for it, and open it in VS Code.

## Step 2: The Answer to Life, the Universe, and Everything

Ask the user what the answer to life, the universe, and everything is. Print `Yes` if they say 42 (written as a number or in words), and `No` otherwise.

- [ ] Create a new program called `deep_thought.py`.
- [ ] Take input from the user and print it back out.
- [ ] Add an if statement that prints `Yes` for `42` or `forty two`, and `No` for anything else.
- [ ] Clean up the input before your if statement so that different capitalizations and dashes still count. Use string methods to help.
- [ ] Test your program with each input below:

| Input | Expected Output |
| ----------- | ----------- |
| `42` | `Yes` |
| `forty two` | `Yes` |
| `forty-two` | `Yes` |
| `fOrTy TwO` | `Yes` |
| `50` | `No` |
| `fifty-two` | `No` |

- [ ] Commit and push `deep_thought.py` to GitHub.

## Step 3: Leap Year

A year divisible by 4 is a leap year, **unless** it's divisible by 100 but not by 400.

- [ ] Create a new program called `leap_year.py`.
- [ ] Ask the user for a year and convert it to a number.
- [ ] Figure out how to check whether one number is divisible by another in Python. (Think about how you'd tell if a number is even or odd.)
- [ ] Print `Leap Year` if the year is divisible by 4, and `Not a Leap Year` otherwise.
- [ ] Add the rule for years divisible by 100.
- [ ] Add the rule for years divisible by 400.
- [ ] Test your program with each input below:

| Input | Expected Output |
| ----------- | ----------- |
| `2026` | `Not a Leap Year` |
| `2028` | `Leap Year` |
| `1700` | `Not a Leap Year` |
| `2400` | `Leap Year` |

- [ ] Commit and push `leap_year.py` to GitHub.

## Step 4: Sweater Weather

Ask the user for the day's high temperature in Fahrenheit. Below 60 degrees, they need a sweater. Over 140 degrees, the input is invalid.

- [ ] Create a new program called `sweater.py`.
- [ ] Ask the user for the high temperature and convert it to a number.
- [ ] Print `you need to bring a sweater` or `you do not need to bring a sweater` depending on the temperature.
- [ ] Print `invalid input` for temperatures over 140.
- [ ] Test your program with each input below:

| Input | Expected Output |
| ----------- | ----------- |
| `33` | `you need to bring a sweater` |
| `57` | `you need to bring a sweater` |
| `72` | `you do not need to bring a sweater` |
| `80` | `you do not need to bring a sweater` |
| `150` | `invalid input` |

- [ ] Commit and push `sweater.py` to GitHub.

## Step 5: Math Interpreter

Build a calculator that takes two numbers and an operation (`+`, `-`, `*`, or `/`) on one line, like `1 + 2`, and prints the result.

- [ ] Create a new program called `calc.py`.
- [ ] Read how `split()` works in the example below, and try it out yourself.

```python
st = "hello there"
x, y = st.split(" ")
print(x) # hello
print(y) # there
```

- [ ] Take input from the user and split it into its three parts.
- [ ] Convert the two numbers so you can do math with them.
- [ ] Print the correct result for each of the four operations.
- [ ] Print `invalid input` when someone tries to divide by zero.
- [ ] Test your program with each input below:

| Input | Expected Output |
| ----------- | ----------- |
| `1 + 1` | `2` |
| `10 - 6` | `4` |
| `3 * 3` | `9` |
| `5 / 2` | `2.5` |
| `5 / 0` | `invalid input` |

- [ ] Commit and push `calc.py` to GitHub.

## Step 6: Meal Time

The user enters a time in 24-hour `HH:MM` form. Print `breakfast time` between 7:00 and 8:00, `lunch time` between 12:00 and 13:00, `dinner time` between 18:00 and 19:00, and nothing at any other time.

- [ ] Create a new program called `meal_time.py`.
- [ ] Copy in the starter code below.

```python
def main():
    pass


def convert(time):
    pass


if __name__ == "__main__":
    main()
```

- [ ] Complete `convert(time)` so it takes a string like `"7:30"` and **returns** the time as a number, like `7.5`.
- [ ] Test `convert()` by printing what it returns for a few times. `"7:15"` should give `7.25`.
- [ ] In `main()`, ask the user for a time, pass it to `convert()`, and print the result.
- [ ] Change `main()` to print the right meal message instead.
- [ ] Test your program with each input below:

| Input | Expected Output |
| ----------- | ----------- |
| `7:59` | `breakfast time` |
| `12:30` | `lunch time` |
| `18:20` | `dinner time` |
| `23:00` | *(nothing)* |
| `11:15` | *(nothing)* |

- [ ] Commit and push `meal_time.py` to GitHub.

<details>
<summary>Stuck? Try these resources.</summary>

- [W3 Schools: Python If Statements](https://www.w3schools.com/python/python_conditions.asp)
- [W3 Schools: Python String Methods](https://www.w3schools.com/python/python_ref_string.asp)
- [CS50 Week 1 Lecture](https://cs50.harvard.edu/python/weeks/1/)

</details>

## Step 7: Reflect and Submit

- [ ] Answer the reflection questions:
  - [ ] What is the difference between `=` and `==`?
  - [ ] Can you compare a string and an integer in an if statement? If not, what is the process of making them compatible types called?
  - [ ] What is the difference between an if-if-if construction and an if-elif-else construction? Are they interchangeable?
  - [ ] If you reordered the if statements in Leap Year, would your code still work? Why or why not?
  - [ ] What is the **return type** of `convert()` in Meal Time?
- [ ] Make sure all five programs are pushed to your GitHub repository.
- [ ] Attach your GitHub repository to Google Classroom.
- [ ] ✋ Show your instructor your GitHub repository with your programs in class.

## Extensions (Optional)

- [ ] Use `try`/`except` statements to catch invalid inputs.
- [ ] Add more complex operators to your Math Interpreter, like powers or modulus.
- [ ] Refactor your other programs to use multiple functions, like Meal Time does.
