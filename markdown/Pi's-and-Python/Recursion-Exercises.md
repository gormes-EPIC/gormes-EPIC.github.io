# Recursion Exercises

## Exercise 1

What is a **base case**? What would happen if you wrote a recursive function without one?

<details>
<summary>Click here to view the answer</summary>

A base case is the condition where a recursive function stops calling itself and just returns a known value directly, instead of calling itself again. Without a base case, the function would keep calling itself forever (in theory). In practice, Python keeps track of how many function calls are "open" at once, so a function with no base case will eventually crash with a `RecursionError` once it hits Python's maximum recursion depth.

</details>

## Exercise 2

In the following code snippet, what does `mystery(4)` return?

```
def mystery(n):
    if n == 0:
        return 0
    return n + mystery(n - 1)
```

<details>
<summary>Click here to view the answer</summary>

`mystery(4)` returns `10`.

```
mystery(4) = 4 + mystery(3)
           = 4 + 3 + mystery(2)
           = 4 + 3 + 2 + mystery(1)
           = 4 + 3 + 2 + 1 + mystery(0)
           = 4 + 3 + 2 + 1 + 0
           = 10
```

</details>

## Exercise 3

Write a recursive function `factorial(n)` that returns `n!` (n factorial), where `n! = n * (n-1) * (n-2) * ... * 1`, and `0! = 1`.

For example:
```
factorial(5)
120
```

<details>
<summary>Click here to view the answer</summary>

```
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)
```

</details>

## Exercise 4

Write a recursive function `count_down(n)` that prints every number from `n` down to `1`, one per line, and then prints `"Liftoff!"`.

For example, `count_down(3)` should print:
```
3
2
1
Liftoff!
```

<details>
<summary>Click here to view the answer</summary>

```
def count_down(n):
    if n == 0:
        print("Liftoff!")
        return
    print(n)
    count_down(n - 1)
```

</details>

## Exercise 5

In the following code snippet, what gets printed by `mystery(3)`? Pay close attention to what happens **before** and **after** the recursive call.

```
def mystery(n):
    if n == 0:
        return
    print("before", n)
    mystery(n - 1)
    print("after", n)

mystery(3)
```

<details>
<summary>Click here to view the answer</summary>

```
before 3
before 2
before 1
after 1
after 2
after 3
```

Every "before" statement runs on the way **down** into the recursion, in order. Once the base case is hit, each call finishes and returns back to the call that made it, so the "after" statements run on the way back **up**, in reverse order.

</details>

## Exercise 6

Write a recursive function `sum_list(numbers)` that returns the sum of every number in a list. Do not use the built-in `sum()` function.

For example:
```
sum_list([1, 2, 3, 4])
10
```

<details>
<summary>Click here to view the answer</summary>

```
def sum_list(numbers):
    if len(numbers) == 0:
        return 0
    return numbers[0] + sum_list(numbers[1:])
```

</details>

## Exercise 7

Write a recursive function `count_digits(n)` that returns the number of digits in a positive integer `n`.

For example:
```
count_digits(482)
3
```

<details>
<summary>Click here to view the answer</summary>

```
def count_digits(n):
    if n < 10:
        return 1
    return 1 + count_digits(n // 10)
```

</details>

## Exercise 8

Write a recursive function `reverse_string(text)` that returns `text` spelled backwards. Use string slicing to get the first character and the rest of the string, similar to how you compared the first and last letters in the Palindromes problem.

For example:
```
reverse_string("hello")
olleh
```

<details>
<summary>Click here to view the answer</summary>

```
def reverse_string(text):
    if len(text) <= 1:
        return text
    return reverse_string(text[1:]) + text[0]
```

</details>


## Exercise 9

Write a recursive function `power(base, exp)` that returns `base` raised to the `exp` power, where `exp` is a non-negative integer. Do not use the `**` operator.

For example:
```
power(2, 5)
32
```

<details>
<summary>Click here to view the answer</summary>

```
def power(base, exp):
    if exp == 0:
        return 1
    return base * power(base, exp - 1)
```

</details>
