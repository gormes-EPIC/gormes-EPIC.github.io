# If Statement Exercises

## Exercise 1
Which of the following is a valid `boolean` value in Python? (Choose all that apply)

a. `True`
b. `"True"`
c. `1 == 1`
d. `yes`

<details>
<summary>Click here to view the answer</summary>

a and c. `True` is the actual boolean keyword, and `1 == 1` evaluates to the boolean `True`. `"True"` is a string, and `yes` isn't valid Python syntax on its own.

</details>


## Exercise 2
What is the output of the following code?
```python
x = 15
if x % 3 == 0 and x % 5 == 0:
    print("Option 1")
elif x % 3 == 0:
    print("Option 2")
else:
    print("Option 3")
```

<details>
<summary>Click here to view the answer</summary>

`Option 1`: because 15 is divisible by both 3 and 5, the first condition is `True`, so the `elif` and `else` are skipped.

</details>

## Exercise 2

This code is supposed to check if `x` is divisible by 3 and separately if it's divisible by 4, but it doesn't work as intended. What's wrong, and how would you fix it?
```python
x = 12
if x % 3 == 0 and x % 4 == 0:
    print("Option 1")
if x % 3 == 0:
    print("Option 2")
if:
    print("Option 3")
```

<details>
<summary>Click here to view the answer</summary>

The third `if:` statement is missing a condition. `if` must always be followed by an expression that evaluates to `True` or `False` (e.g., `if x % 4 == 0:`). As written, this line is a syntax error and the code won't run at all.

</details>

## Exercise 3

Which symbol is used for **variable assignment** in Python, and which is used for **variable comparison**?

<details>
<summary>Click here to view the answer</summary>

`=` assigns a value to a variable (e.g., `x = 5`), while `==` checks whether two values are equal (e.g., `x == 5` returns `True` or `False`).

</details>

## Exercise 4
Calculate the result: What does `2 ** 3 / 4` evaluate to? Show your order of operations.

<details>
<summary>Click here to view the answer</summary>

`2 ** 3` = `8` (exponentiation happens first), then `8 / 4` = `2.0`. The result is `2.0` (a float, since `/` always produces a float in Python).

</details>

## Exercise 5
Debug this code and explain the error it produces:
```python
num = "5"
result = num + 1
```
Then rewrite it so it works correctly and prints `6`.

<details>
<summary>Click here to view the answer</summary>

This raises a `TypeError` because Python won't automatically add a string (`"5"`) and an integer (`1`) — you can't mix data types with `+` unless you convert one of them.

Fixed version:
```python
num = "5"
result = int(num) + 1
print(result)
```

</details>

## Exercise 6
Which code snippet(s) correctly print "Between 0 and 10" when `x` is more than 0 and less than 10? Explain why the incorrect ones fail.

a.
```python
if x > 0:
    if x < 10:
        print("Between 0 and 10")
```

b.
```python
if x > 0 and x < 10:
    print("Between 0 and 10")
```

c.
```python
if x > 0:
elif x < 10:
    print("Between 0 and 10")
```

<details>
<summary>Click here to view the answer</summary>

a and b both work correctly — a uses a nested `if`, and b uses a combined `and` condition, and both correctly check that x is greater than 0 AND less than 10.

c is a syntax error: an `if` block cannot be empty (it needs at least one statement, like `pass` or a `print`), and `elif` requires a preceding `if` with a body.

</details>

## Exercise 7

In one or two sentences, explain the difference between an `if/elif/else` chain and a series of separate `if` statements. When would you use one over the other?

<details>
<summary>Click here to view the answer</summary>

An `if/elif/else` chain only runs **one** branch — as soon as a condition is `True`, Python skips the rest. Separate `if` statements are each checked independently, so more than one (or none) could run. Use `elif` when the conditions are mutually exclusive choices; use separate `if` statements when you want to check multiple independent things.

</details>

## Exercise 8
Match the code snippet to its correct output.

**Input 1**
```
x = 1
match x: 
    case 1:
        print("one") 
    case _: 
        print("other")

```

**Input 2**
```
x = 5
match x: 
    case 1:
        print("one") 
    case _: 
        print("other")

```
**Output A**
`one`

**Output B**
`other`

<details>
<summary>Click here to view the answer</summary>

1 → A ("one"), 2 → B ("other"). 

In a `match` statement, Python compares `x` against each `case` in order and runs the first matching block; `case _:` acts as a catch-all/default, similar to `else`.

</details>


## Exercise 9

Fill in the blanks so this function correctly prints "Too hot!", "Too cold!", or "Just right!" based on `temperature`. It is "Too hot!" when it is over 80 degrees and "Too cold!" when it is under 60 degrees. Then, rewrite the if statement with different conditions that will have the same result. 

```python
def check_temp(temperature):
    if ____________:
        print("Too hot!")
    elif ____________:
        print("Too cold!")
    else:
        print("Just right!")
```

<details>
<summary>Click here to view the answer</summary>

```python
def check_temp(temperature):
    if temperature > 80:
        print("Too hot!")
    elif temperature < 60:
        print("Too cold!")
    else:
        print("Just right!")
```

There are multiple other solutions but here is one: 
```python
def check_temp(temperature):
    if temperature < 80 and temperature > 60:
        print("Just right!")
    elif temperature < 60:
        print("Too cold!")
    else:
        print("Too hot!")
        
```

</details>

## Exercise 10

What does `check_temp(60)` print, using the function from Exercise 9? Explain why, based on the boundary conditions.

<details>
<summary>Click here to view the answer</summary>

`Just right!` — because the condition for "Too cold!" is `temperature < 60`, and 60 is not *less than* 60, so that branch is skipped, and it falls through to `else`.

</details>
