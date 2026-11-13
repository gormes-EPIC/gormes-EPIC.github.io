# Loops and Data Collections Lab: Checklist

> **The goal:** use loops, lists, and dictionaries to solve five programming challenges: Classified, Nutrition Facts, Coke Machine, Music Festival, and Vanity Plates.

## Step 1: Get Set Up

- [ ] Review the [Loops and Data Collections Notes](#Pi's-and-Python/Loops-and-Data-Collections-Notes).
- [ ] Create a new repository on GitHub for this lab.
- [ ] Clone it onto your Pi, or create a folder for it, and open it in VS Code.

## Step 2: Classified

Read a sentence from the user and replace every classified word with `[REDACTED]`.

- [ ] Create a new program called `classified.py`.
- [ ] Copy in the list of classified words below.

```python
target_words = ["james", "london", "mi6", "classified", "paris", "midnight", "nuclear", "asset"]
```

- [ ] Take input from the user and print it back out.
- [ ] Change your program to print each word of the input on its own line.
- [ ] Instead of printing every word, print `[REDACTED]` for any word that's in the classified list.
- [ ] Change your program to print the whole sentence on one line again.
- [ ] Make sure capitalization and punctuation don't let a classified word slip through.
- [ ] Test your program with each input below:

| Input | Expected Output |
| ----------- | ----------- |
| `Agent James arrived in London to secure the classified package.` | `Agent [REDACTED] arrived in [REDACTED] to secure the [REDACTED] package.` |
| `The asset will arrive in Paris soon.` | `The [REDACTED] will arrive in [REDACTED] soon.` |
| `We found the classified nuclear files.` | `We found the [REDACTED] [REDACTED] files.` |
| `MI6 is looking for JAMES.` | `[REDACTED] is looking for [REDACTED].` |
| `The coffee machine in the breakroom is broken.` | `The coffee machine in the breakroom is broken.` |

- [ ] Commit and push `classified.py` to GitHub.

## Step 3: Nutrition Facts

The user enters a fruit, and the program prints how many calories are in a serving, or `fruit not found`.

- [ ] Create a new program called `nutrition.py`.
- [ ] Copy in the dictionary of fruits below.

```python
fruits = {
        "apple": "130",
        "avocado": "50",
        "banana": "110",
        "cantaloupe": "50",
        "grapefruit": "60",
        "grapes": "90",
        "honeydew melon": "50",
        "kiwifruit": "90",
        "lemon": "15",
        "lime": "20",
        "nectarine": "60",
        "orange": "80",
        "peach": "60",
        "pear": "100",
        "pineapple": "50",
        "plums": "70",
        "strawberries": "50",
        "sweet cherries": "100",
        "tangerine": "50",
        "watermelon": "80",
}
```

- [ ] Take input from the user and print it back out.
- [ ] Print `true` if the input is a key in the dictionary, and `fruit not found` otherwise.
- [ ] Replace `true` with the number of calories for that fruit.
- [ ] Make sure it works no matter how the user capitalizes the fruit.
- [ ] Test your program with each input below:

| Input | Expected Output |
| ----------- | ----------- |
| `tangerine` | `50` |
| `Lemon` | `15` |
| `GRAPEFRUIT` | `60` |
| `star fruit` | `fruit not found` |

- [ ] Commit and push `nutrition.py` to GitHub.

## Step 4: Coke Machine

A coke costs 50 cents. The machine keeps asking for coins until the user has paid enough, then shows any change owed. It only accepts 25, 10, and 5 cent coins. Any other coin is ignored.

- [ ] Create a new program called `coke.py`.
- [ ] Show the amount due and ask the user for a coin.
- [ ] Keep asking for coins until the full 50 cents has been paid, showing the new amount due after each coin.
- [ ] Ignore any coin that isn't 25, 10, or 5.
- [ ] When enough has been paid, print the change owed.
- [ ] Run your program with the same coins as the example below, and make sure your output matches:

```
Amount Due: 50 
Coin: 25
Amount Due: 25
Coin: 30
Amount Due: 25
Coin: 10
Amount Due: 15
Coin: 10
Amount Due: 5
Coin: 10
Change Owed: 5
```

- [ ] Test it again by paying exactly 50 cents. The change owed should be 0.
- [ ] Commit and push `coke.py` to GitHub.

## Step 5: Music Festival

Users vote for their favorite musicians until they type `done`. Then the program lists every musician in alphabetical order with their number of votes.

- [ ] Create a new program called `festival.py`.
- [ ] Take input from the user and print it back out.
- [ ] Keep asking for musicians until the user enters `done`.
- [ ] Store each musician in a dictionary. A new musician starts with one vote.
- [ ] Add one to a musician's count each time they're entered again.
- [ ] After `done` is entered, print the list of musicians.
- [ ] Put the list in alphabetical order.
- [ ] Print each musician's vote count next to their name.
- [ ] Make sure different capitalizations of the same musician count as one musician, and that names print with each word capitalized.
- [ ] Run your program with the same votes as the example below, and make sure your output matches:

```
Enter a musician: coldplay
Enter a musician: the rolling stones
Enter a musician: coldplay
Enter a musician: ARCTIC MONKEYS
Enter a musician: coldplay
Enter a musician: the Rolling Stones
Enter a musician: taylor SWIFT
Enter a musician: arctic monkeys
Enter a musician: the rolling stones
Enter a musician: Coldplay
Enter a musician: done

Votes
-------------
- Arctic Monkeys: 2
- Coldplay: 4
- Taylor Swift: 1
- The Rolling Stones: 3
```

- [ ] Commit and push `festival.py` to GitHub.

## Step 6: Vanity Plates

A valid vanity license plate must follow all of these rules:
- It's between 2 and 6 characters long (inclusive).
- It only has letters and numbers. No spaces or punctuation.
- The first two characters are letters.
- The first number isn't a `0`.
- No letters come after a number.

- [ ] Create a new program called `plates.py`.
- [ ] Copy in the starter code below.

```python
def main():
    plate = input("Plate: ")
    if is_valid(plate):
        print("Valid")
    else:
        print("Invalid")


def is_valid(s):
    return True


main()
```

- [ ] Read through the starter code. Point out each variable, each function, and what `is_valid()` should return.
- [ ] Add a check to `is_valid()` for the length rule.
- [ ] Add a check for letters and numbers only.
- [ ] Add a check for the first two characters.
- [ ] Add a check for the first number.
- [ ] Add a check for letters after numbers.
- [ ] Test your program with each input below:

| Input | Expected Output |
| ----------- | ----------- |
| `A` | `Invalid` |
| `AAA` | `Valid` |
| `AAA123` | `Valid` |
| `A!` | `Invalid` |
| `AA12BB` | `Invalid` |
| `AAA012` | `Invalid` |
| `12345` | `Invalid` |
| `ILUVCS` | `Valid` |
| `26GRAD` | `Invalid` |

- [ ] Commit and push `plates.py` to GitHub.

<details>
<summary>Stuck? Try these resources.</summary>

- [Loops and Data Collections Notes](#Pi's-and-Python/Loops-and-Data-Collections-Notes)
- [CS50 Week 2 Lecture](https://cs50.harvard.edu/python/weeks/2/)
- [W3 Schools: Python String Methods](https://www.w3schools.com/python/python_ref_string.asp)

</details>

## Step 7: Reflect and Submit

- [ ] Answer the reflection questions:
  - [ ] What is the difference between a list and a dictionary?
  - [ ] What is the difference between a for loop and a while loop?
  - [ ] How did you detect letters appearing after numbers?
- [ ] Make sure all five programs are pushed to your GitHub repository.
- [ ] Attach your GitHub repository to Google Classroom.
- [ ] ✋ Show your instructor your GitHub repository with your programs in class.

## Extensions (Optional)

- [ ] Change Vanity Plates to ask the user again for a correct plate instead of printing `Invalid`.
- [ ] Change Music Festival to stop asking for musicians when the user presses **Ctrl + D** instead of typing `done`. You'll need a `try`/`except` statement with an `EOFError`.
