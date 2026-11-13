# Variables and Functions Lab: Checklist

> **The goal:** use variables and functions to solve four programming challenges: Indoor Voice, Playback Speed, Weight on Mars, and Tip Calculator.

## Step 1: Get Set Up

- [ ] Review the [Variables and Functions Notes](#Pi's-and-Python/Variables-and-Functions-Notes).
- [ ] Create a new repository on GitHub for this lab.
- [ ] Clone it onto your Pi, or create a folder for it, and open it in VS Code.

## Step 2: Indoor Voice

It's far too loud in here! Write a program that takes input from the user and prints it in all lowercase.

- [ ] Create a new program called `indoor_voice.py`.
- [ ] Write a program that prints something to the terminal, and run it.
- [ ] Change it to take input from the user, save it in a variable, and print it back out.
- [ ] Find a string method that makes text lowercase. [This list of Python string methods](https://www.w3schools.com/python/python_ref_string.asp) can help.
- [ ] Use it to lowercase the user's input before printing it.
- [ ] Test your program with each input below:

| Input | Expected Output |
| ----------- | ----------- |
| `I'M YELLING` | `i'm yelling` |
| `Hello There` | `hello there` |
| `i lUv Cs` | `i luv cs` |
| `aaaAAA` | `aaaaaa` |

- [ ] Commit and push `indoor_voice.py` to GitHub.

## Step 3: Playback Speed

Slow people down by printing their input back with every space replaced by `...` (three periods).

- [ ] Create a new program called `playback_speed.py`.
- [ ] Take input from the user, save it in a variable, and print it back out.
- [ ] Find a string method that replaces characters with other characters.
- [ ] Use it to change the user's input before printing it.
- [ ] Test your program with each input below:

| Input | Expected Output |
| ----------- | ----------- |
| `This is Pi's and Python` | `This...is...Pi's...and...Python` |
| `Hello There` | `Hello...There` |
| `i lUv Cs` | `i...lUv...Cs` |
| `Let's implement a function called hello` | `Let's...implement...a...function...called...hello` |

- [ ] Commit and push `playback_speed.py` to GitHub.

## Step 4: Weight on Mars

A person's weight on Mars is **0.378** times their weight on Earth.

- [ ] Create a new program called `mars_weight.py`.
- [ ] Copy in the starter code below.

```python
def calculate_mars_weight(weight):
    ## Your code here
    return 0

e_weight = int(input("Earth Weight: "))
m_weight = calculate_mars_weight(e_weight)
print(f"Mars Weight: {m_weight}")
```

- [ ] Read through the starter code. Point out each variable, each function, and the place where `calculate_mars_weight()` is called.
- [ ] Change the function so it returns the weight it was given instead of `0`. Run it to make sure you get your input back.
- [ ] Change the function so it returns the Mars weight instead.
- [ ] Test your program with each input below:

| Input | Expected Output |
| ----------- | ----------- |
| `150` | `56.7` |
| `200` | `75.6` |
| `0` | `0.0` |
| `175` | `66.15` |

- [ ] Commit and push `mars_weight.py` to GitHub.

## Step 5: Tip Calculator

The user enters the meal total and the tip percentage, and the program shows how much to tip.

- [ ] Create a new program called `tip_calculator.py`.
- [ ] Copy in the starter code below.

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

- [ ] Read through the starter code. For each function, write down what type of value it's given and what type it should return.
- [ ] Complete `dollars_to_float()` so that a string like `"$15.00"` becomes the float `15.0`.
- [ ] Complete `percent_to_float()` so that a string like `"20%"` becomes the float `0.2`.
- [ ] Test your program with each input below:

| Input | Expected Output |
| ----------- | ----------- |
| `$50.00`, `15%` | `Leave $7.50` |
| `$20.00`, `20%` | `Leave $4.00` |
| `$100.00`, `25%` | `Leave $25.00` |
| `$25.00`, `0%` | `Leave $0.00` |

- [ ] Commit and push `tip_calculator.py` to GitHub.

<details>
<summary>Stuck? Try these resources.</summary>

- [CS50 Week 0 Lecture](https://cs50.harvard.edu/python/weeks/0/)
- [Python String Methods](https://www.w3schools.com/python/python_ref_string.asp)

</details>

## Step 6: Reflect and Submit

- [ ] Answer the reflection questions:
  - [ ] What is a variable type?
  - [ ] What is the return type of the function `calculate_mars_weight()`?
  - [ ] What are some string functions you used in this lab? Can you use those same functions on variables that are not strings?
- [ ] Make sure all four programs are pushed to your GitHub repository.
- [ ] Attach your GitHub repository to Google Classroom.
- [ ] ✋ Show your instructor your GitHub repository with your 4 programs.

## Extensions (Optional)

- [ ] Change Weight on Mars so the user can choose between several planets. Create a new function for each planet.
- [ ] Change Tip Calculator to reject bad input. For example, if the user enters "20 dollars", the program should ask again instead of crashing.
