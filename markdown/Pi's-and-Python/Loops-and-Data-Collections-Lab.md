# Loops and Data Collections Lab

## Objective

1. Leverage loops and data collections to solve complex problems in Python

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| while loop | a type of loop that repeats statements while a condition is true |
| for loop | a type of loop that automatically loops through iterable elements |
| list | an ordered collection of data indexed by numbers |
| index | the position of an element in an ordered collection |
| dictionary | a set of key-value pairs | 


## Your Task

Review the [Loops and Data Collections Notes](#Pi's-and-Python/Loops-and-Data-Collections-Notes).

Then, solve these 5 programming challenges:
- [Classified](#classified)
- [Nutrition Facts](#nutrition-facts)
- [Coke Machine](#coke-machine)
- [Music Festival](#music-festival)
- [Vanity Plates](#vanity-plates)


## Getting Started
1. Create a new repository on GitHub to store your code. 
2. When you have finished solving each problem, upload your code there. 

## <a id="classified"></a> Classified

You work for a top-secret agency. You need to read through a document and hide specific names and locations before releasing it to the public. You have been provided with the word list below.

```python
target_words = ["james", "london", "mi6", "classified", "paris", "midnight", "nuclear", "asset"]
```

Each time a classified word appears, replace it with the word `[REDACTED]` in the output. 

Here is an example run of the program:

```
Classifier: Agent James arrived in London to secure the classified package.
Agent [REDACTED] arrived in [REDACTED] to secure the [REDACTED] package.
```

### Testing 

To test your program, use the following inputs and expected outputs. 

| Input | Expected Output |
| ----------- | ----------- |
| `Agent James arrived in London to secure the classified package.` | `Agent [REDACTED] arrived in [REDACTED] to secure the [REDACTED] package.` |
| `The asset will arrive in Paris soon.` | `The [REDACTED] will arrive in [REDACTED] soon.` |
| `We found the classified nuclear files.` | `We found the [REDACTED] [REDACTED] files.` |
| `MI6 is looking for JAMES.` | `[REDACTED] is looking for [REDACTED].` |
| `The coffee machine in the breakroom is broken.` | `The coffee machine in the breakroom is broken.` |

## <a id="nutrition-facts"></a> Nutrition Facts

You are writing a program to tell the user the number of calories in a serving of a given fruit. The calories have been stored in a dictionary below for your convience. The user will enter a fruit and if it appears in the list, the program will display the number of calories. Otherwise the program will print "fruit not found".

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

Here is an example run of the program:

```
Enter a fruit: pineapple
50 
```

### Testing 

To test your program, use the following inputs and expected outputs. 

| Input | Expected Output |
| ----------- | ----------- |
| `tangerine` | `"50"` |
| `Lemon` | `"15"` |
| `GRAPEFRUIT` | `"60"` |
| `star fruit` | `"fruit not found"` |


## <a id="coke-machine"></a> Coke Machine

You will write a program to represent a vending machine. The price of a coke at your machine is 50 cents. Users will input valid coins up to the total price. Then the machine will list any change owed.

Here is an example run of the program:

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

## <a id="music-festival"></a> Music Festival

You are responsible for figuring out the lineup for a music festival. Users will input votes for their favorite musician and your program will compile them. When `"done"` is entered the program will list all of the musicians in alphabetical order with their corresponding vote count.

Here is an example run of the program:

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

## <a id="vanity-plates"></a> Vanity Plates

You are responsible for validating vanity license plates applications to make sure they are valid. Valid license plates must follow the following rules:
- Be between 2 and 6 characters(inclusive)
- No non-alphanumeric(not letters and numbers) characters are allowed
- The first two characters must be letters
- The first number cannot be a 0
- Letters cannot be placed after numbers 

After the user enters a plate, your program will print valid or invalid

Here are some example runs of the program:

```
Validate: ILUVCS
Valid
```

```
Validate: A
Invalid
```

```
Validate: AAA123
Valid
```

```
Validate: 26GRAD
Invalid
```

```
Validate: AA12BB
Invalid
```

Use the following starter code as a template.

```python
def main():
    plate = input("Plate: ")
    if is_valid(plate):
        print("Valid")
    else:
        print("Invalid")


def is_valid(s):
    return ""


main()
```

### Testing

To test your program, use the following inputs and expected outputs. 


| Input | Expected Output |
| ----------- | ----------- |
| `A` | `"Valid"` |
| `AAA` | `"Valid"` |
| `AAA123` | `"Valid"` |
| `A!` | `"Invalid"` |
| `AA12BB` | `"Invalid"` |
| `AAA012` | `"Invalid"` |
| `12345` | `"Invalid"` |

## Tips, Tricks, and Resources
- [CS50 Week 2 Lecture](https://cs50.harvard.edu/python/weeks/2/)

## Extensions
1. Instead of printing "Invalid", modify your program to reprompt the user for a correct license plate instead.
2. Instead of waiting for the word "done", have your program quit asking for musicians when the user hits CTRL-D on their keyboard instead. You will need a try-except statement with an `EOFError` for this.

## Reflection Questions
1. What is the difference between a list and a dictionary?
2. What is the difference between a for and a while loop?
3. How did you detect letters appearing after numbers?


## Deliverables Checklist
- [ ] Demonstrate 5 working programs to your instructor in class 
- [ ] A repository with all 5 of your programs uploaded, attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person. 

## Rubric
- **6 points** - All required items are present.
- **5 points** - Task was completed, but supplementary materials are weak or missing.
- **4 points** - Task was attempted, but is missing major components.
- **3 points** - Did not attempt or student should reattempt.