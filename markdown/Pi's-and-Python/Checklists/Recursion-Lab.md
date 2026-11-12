# Recursion Lab: Checklist

> Work from top to bottom and check off each step as you finish it. Your progress is saved in this browser, so you can come back to it later.
>
> Every recursive function needs a **base case** (when to stop and return a value you already know) and a **recursive case** (when the function calls itself on a smaller problem).

## Step 1: Get Set Up

- [ ] Create a new repository on GitHub for this lab.
- [ ] Clone it onto your Pi, or create a folder for it, and open it in VS Code.

## Step 2: The Collatz Conjecture

If **n** is even, divide it by 2. If **n** is odd, multiply it by 3 and add 1. Keep going until you reach 1. For example, 42 → 21 → 64 → 32 → 16 → 8 → 4 → 2 → 1 takes **8 steps**.

- [ ] Create a new program called `collatz.py`.
- [ ] On paper, draw a recursion tree or a stack diagram for `collatz(5)`.
- [ ] Define your function with the header `def collatz(n):`
- [ ] Add your **base case**.
- [ ] Add your **recursive case(s)**. Use your recursion tree or stack diagram to guide you.
- [ ] Print the result of each test case below and make sure they all match:

| Function Call | Result |
| ----------- | ----------- |
| collatz(42) | 8 |
| collatz(5) | 5 |
| collatz(15) | 17 |
| collatz(50) | 24 |
| collatz(1) | 0 |

- [ ] Commit and push `collatz.py` to GitHub.

## Step 3: Palindromes

A palindrome reads the same forward and backward, like "tacocat".

- [ ] Create a new program called `palindrome.py`.
- [ ] Review how string slicing works in Python.
- [ ] On paper, draw recursion trees or stack diagrams for `is_palindrome("tacocat")` and `is_palindrome("abc")`. How are they different?
- [ ] Define your function with the header `def is_palindrome(text):`
- [ ] Make your function ignore spaces, capitalization, and punctuation.
- [ ] Add your **base cases**. This problem has two.
- [ ] Add your **recursive case**. Use your recursion trees or stack diagrams to guide you.
- [ ] Print the result of each test case below and make sure they all match:

| Function Call | Result |
| ----------- | ----------- |
| is_palindrome("aaa") | True |
| is_palindrome("tacocat") | True |
| is_palindrome("racecar") | True |
| is_palindrome("") | True |
| is_palindrome("abc") | False |
| is_palindrome("abcde") | False |

- [ ] Commit and push `palindrome.py` to GitHub.

## Step 4: Matryoshka Dolls

Each doll is a dictionary with a `"size"` and an `"inner_doll"`. The innermost doll's `"inner_doll"` is `None`.

- [ ] Create a new program called `matryoshka.py`.
- [ ] Review how to get a value out of a dictionary by its key, and how to check whether a value is `None`.
- [ ] Copy the three test dolls below into your program.
- [ ] On paper, draw a recursion tree or a stack diagram for `open_doll(doll_two)`.
- [ ] Define your function with the header `def open_doll(doll):`
- [ ] Add your **base case**. Think carefully about what value you want to return.
- [ ] Add your **recursive case**. Use your recursion tree or stack diagram to guide you.
- [ ] Print `open_doll()` for each test doll and make sure you get **5**, **7**, and **3**:

```
doll_one = {
    "size": 5, 
    "inner_doll": None
}
# Expected output: 5

doll_two = {
    "size": 12, 
    "inner_doll": {
        "size": 7, 
        "inner_doll": None
    }
}
# Expected output: 7

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

- [ ] Commit and push `matryoshka.py` to GitHub.

## Step 5: Fractal Art

This function **prints** a pattern instead of returning a value. `draw_pattern(3)` should print:

```
***
**
*
**
***
```

- [ ] Create a new program called `fractal.py`.
- [ ] On paper, draw a recursion tree or a stack diagram for `draw_pattern(3)`.
- [ ] Define your function with the header `def draw_pattern(n):`
- [ ] Add your **base case** and your **recursive case**.
- [ ] Place `print()` statements around your recursive call to build the shape.
- [ ] Test `draw_pattern(3)` and make sure it matches the shape above. Then try `draw_pattern(5)`.
- [ ] Commit and push `fractal.py` to GitHub.

<details>
<summary>Stuck? Try these resources.</summary>

- [W3 Schools: Python Recursion](https://www.w3schools.com/python/python_recursion.asp)
- [Recursion in Python (video)](https://www.youtube.com/watch?v=72uVUU1boKo)

</details>

## Step 6: Reflect and Submit

- [ ] Answer the reflection questions:
  - [ ] What would happen to your program if the Collatz Conjecture were false, and a number got stuck in an infinite loop instead of reaching 1?
  - [ ] "racecar" shrinks down to a single middle letter, but "noon" shrinks down to an empty string. How did your base case(s) handle both?
  - [ ] When your function reaches the innermost doll and finds its size, how does that number travel all the way back to the original function call?
  - [ ] In Fractal Art, why does code placed **after** the recursive call run in reverse order?
- [ ] Make sure all four programs are pushed to your GitHub repository.
- [ ] Attach your GitHub repository to Google Classroom.
- [ ] ✋ Show your instructor your GitHub repository with your programs in class.

## Extension (Optional)

- [ ] Write a function `sierpinski(n)` that prints a [Sierpinski carpet](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_carpet) of hashtags. A depth of 1 is a 3x3 grid, a depth of 2 is 9x9, a depth of 3 is 27x27, and so on. Each time, the middle square is "punched out."
