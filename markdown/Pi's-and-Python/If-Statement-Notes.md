# If Statement Notes

An **if statement** is used to run a block of code *if* a condition is true. 

Let's look at an example. 

```python
a = 33
b = 200
if b > a:
  print("b is greater than a")
```

In this example, we created two variables, `a` and `b`. Then we used an if statement to print out `"b is greater than a"` if a condition was true. The condition is a `b > a`. 

There are multiple ways to compare variables in an if statement. They should look familiar to you.

- Equals: `a == b`
- Not Equals: `a != b`
- Less than: `a < b`
- Less than or equal to: `a <= b`
- Greater than: `a > b`
- Greater than or equal to: `a >= b`

Let's look closely at the "equals" condition. Notice that there are two equals signs instead of one. **One equals sign** is used to assign values to variables. **Two equals signs** are used to compare two values.

## How If Statments Work

The if statement evaluates a condition (an expression that results in `True` or `False`). If the condition is true, the code block inside the if statement is executed. If the condition is false, the code block is skipped.


Indentation is really important here! The statements inside the if statement(that you want to run if the condtion is true) must be indented! The second example below will raise an error because of incorrect indentation. 

```
number = 15
if number > 0:
  print("The number is positive")
```

```
number = 15
if number > 0:
print("The number is positive")
```

## Booleans

In addition to strings, ints, and floats there is another data type we haven't talked about yet: booleans. A **boolean** is a data type representing a true or false value. To initialize a boolean, set it equal to either `True` or `False`. We can also use the comparison operator (`==`) to assign a boolean based on a condition.

Let's look at an example:

```
check = True

if check:
  print("True!")
else:
  print("False!")
```

This program will print `True!` because `check` is a boolean with a value of `True`. 

Let's look at an another example:

```
x = 10
statement = x == 5

if statement:
  print("The statement is correct")
else:
  print("The statement is false")
```

This program will print `The statement is false` since `x == 5` evaluates to false.

## Match Cases

A **match case** compares a stated variable to different values assigned by the match case. If the variable and the value matches, the code block is run. This is very similar to an if statement, but is slightly more efficient if you are only check if values are equal.


Let's look at this program: 

```
status_code = 404

match status_code:
    case 200:
        print("Success")
    case 400:
        print("Bad Request")
    case 404:
        print("Not Found")
    case _:
        print("Unknown Status")

```

We define a variable `status_code` then create our match statement using that variable(it appears in the header `match status_code`). For each case we compare `status_code` to the different values. In this case, `status_code` is `404`, so our program will print `Not Found`. The `case _` is a catch-all for every other value not in the cases(like an `else` statement).

