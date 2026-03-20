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

## Match Cases