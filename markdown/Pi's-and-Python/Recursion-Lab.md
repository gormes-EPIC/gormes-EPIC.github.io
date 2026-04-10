# Recursion Lab

## Objective

1. Write recursive functions to solve problems in Python

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| recursive function | a function that solves problems by calling itself |
| base case | the end case for a recusive function. Instead of calling the function again, we return a standard value we know |
| recursive case | a case for a recusive function where you call the function again |


## Your Task

Solve these 4 programming challenges:
- [The Collatz Conjecture](#collatz)
- [Palindromes](#palindrome)
- [Matryoshka Dolls](#matryoshka)
- [Fractal Art](#fractal)

## Getting Started
1. Create a new repository on GitHub to store your code. 
2. When you have finished solving each problem, upload your code there. 

## <a id="collatz"></a>The Collatz Conjecture

There is a mathematical sequence that always seems to end up at the number 1, no matter what positive integer you start with, but nobody has ever been able to prove why. This is called the **Collaz Conjecture**. The process is as follows: if n is even, divide it by 2 and if n is odd, multiply by 3 and add 1 (3n+1).

For the number 42, we can apply our process and we will end up with 1
```
42 (is even so we divide by 2)
21 (is odd so we multiply by 3 and add 1)
64
32
16
8
4
2
1
``` 

1. Write a recursive function `collatz(n)` that calculates how many steps it takes to reach 1. So for our example 42, the function would return 8. 

| Function Call | Result |
| ----------- | ----------- |
| collatz(42) | 8 |
| collatz(5) | 5 |
| collatz(15) | 17 |
| collatz(50) | 24 |
| collatz(1) | 0 |

## <a id="palindrome"></a>Palindromes

1. Create a new program `palindrome.py`. Write a recursive function `is_palindrome(text)` that returns `True` or `False`. It must ignore spaces, capitalization, and punctuation. The recursive step should compare the first and last letters, then pass the middle of the string to itself.

| Function Call | Result |
| ----------- | ----------- |
| is_palindrome("aaa") | True |
| is_palindrome("tacocat") | True |
| is_palindrome("racecar") | True |
| is_palindrome("") | True |
| is_palindrome("abc") | False |
| is_palindrome("abcde") | False |

## <a id="matryoshka"></a>Matryoshka Dolls

You've been gifted a set of traditional Russian nesting dolls. Some dolls have smaller dolls inside them, and some are solid wood.

1. Create a new program `matryoshka.py`. Given a deeply nested dictionary representing the dolls (e.g., `{"size": 10, "inner_doll": {"size": 8, "inner_doll": None}}`), write a recursive function `open_doll(doll)` that finds and returns the size of the smallest, innermost doll.

```
doll_one = {
    "size": 5, 
    "inner_doll": None
}
# Expected output: 5
```

```
doll_two = {
    "size": 12, 
    "inner_doll": {
        "size": 7, 
        "inner_doll": None
    }
}
# Expected output: 7
```

```
doll_three = {
    "size": 20, 
    "inner_doll": {
        "size": 15, 
        "inner_doll": {
            "size": 10, 
            "inner_doll": {
                "size": 3, 
                "inner_doll": None
            }
        }
    }
}
# Expected output: 3
```

 ##  <a id="fractal"></a>Fractal Art

1. Create a program `fractal.py` Write a recursive function `draw_pattern(n)` that prints a mirrored arrow of asterisks. 

For example, `draw_pattern(3)` should print:

```

*
**
***
**
*
```

## Tips, Tricks, and Resources
- [W3 Schools](https://www.w3schools.com/python/python_recursion.asp)
- [Recursion in Python](https://www.youtube.com/watch?v=72uVUU1boKo)

## Extensions
1. For Fractals, the Sierpinski carpet is a famous 2D fractal. It was first described by the Polish mathematician Wacław Sierpiński in 1916. The carpet is constructed through a simple, repetitive process of subdividing and "punching out" the middle. Every time you increment the recursion depth, the grid size grows by powers of 3 (a depth of 1 is a 3x3 grid, a depth of 2 is a 9x9 grid, depth 3 is 27x27, and so on). Create a function `sierpinski(n)` that produces a Sierpinski carpet of hashtags.

## Reflection Questions
1. What would happen to your program if the Collatz Conjecture was actually false, and a certain number got stuck in an infinite loop instead of reaching 1?
2. A palindrome like "racecar" has an odd number of letters, eventually shrinking to a single middle letter ("e"). A palindrome like "noon" has an even number of letters, eventually shrinking to an empty string (""). How did your base case(s) handle both of these scenarios?
3. When your function finally reaches the innermost doll and finds its size, how does that specific integer travel all the way back to the original function call?
4. To draw the mirrored arrow, you likely had to use `print()` statements both before your recursive call and after it. Explain why code placed after the recursive call executes in reverse order.

## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person

## Rubric
- **20 points** - All required items are present.
- **15 points** - Task was completed, but supplementary materials are weak or missing.
- **10 points** - Task was attempted, but is missing major components.
- **0 points** - Task was not attempted to 50% completion or student should reattempt.