# Recursion Notes

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| recursive function | a function that solves problems by calling itself |
| base case | the end case for a recusive function. Instead of calling the function again, we return a standard value we know |
| recursive case | a case for a recusive function where you call the function again |

## What are Recursive Functions?

Let's say I wanted to find the value of $2^4$. I could write a loop to solve this or I could use a **recursive process**. Using recursion I could rewrite $2^4$ as $2 + 2^3$. Then I could rewrite $2^3$ as $2 + 2^2$ and so on. 

<img src="/assets/recursive-notes-figure-1.png">

Eventually I will need to reach a stopping point. Let's say we know that $2^1 = 2$. We can then work our way back up the tree and solve for $2^4$. This is an example of a **base case**.

Each **recursive function** has two cases:
- The **base case** where we know a case is a fixed value
- The **recursive case** where a function calls itself. 

In Python, our exponent example might look something like this.

```python
def power(a, b):
    if b == 1:
        return a
    else:
        return a + power(a, b-1)
```

You can see our **base case** is `a` when `b == 1`. Our **recursive case** is `a + power(a, b-1)` in all other cases.

If I were to call `power(2,4)`, it would call `power(2,3)` which would call `power(2,2)` and so on until `power(2,1)` returns 2. Then we would work our way backwards through the calls until we get back to `power(2,4)`. 

### Exercise

Write a **recursive function** to calculate the n-th value of the Fibonacci sequence. Think about what your **base case** and your **recursive case** must be.

| Input | Output |
| ----------- | ----------- |
| fibonacci(0) | 1 |
| fibonacci(1) | 1 |
| fibonacci(2) | 2 |
| fibonacci(4) | 5 |
| fibonacci(7) | 21 |


<details>
<summary>Click here to view the answer</summary>

```python
def fibonacci(n):
    if n == 0 or n == 1:
        return 1
    else 
        return fibonacci(n-1) + fibonacci(n-2)

```

Our **base case** is returning 1 when `n==0` or `n==1`. Our **recursive case** is `fibonacci(n-1) + fibonacci(n-2)`.


</details>

### Exercise

Given `n` of 1 or more, return the factorial of `n`, which is `n * (n-1) * (n-2) ... 1`. Compute the result recursively (without loops).

| Input | Output |
| ----------- | ----------- |
| factorial(1) | 1 |
| factorial(2) | 2 |
| factorial(4) | 24 |
| factorial(7) | 5040 |


<details>
<summary>Click here to view the answer</summary>

```python
def factorial(n):
    if n == 1:
        return 1
    else 
        return n * factorial(n-1)

```

Our **base case** is returning 1 when `n==1`. Our **recursive case** is `n * factorial(n-1)`.


</details>

## More Complex Recusrive