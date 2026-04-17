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

<details>
<summary>Click here for a hint</summary>

Before you get started, answer the following questions: 

1. How do you get input from the user? What data type is returned from that function?
2. What kind of construction can we use to check if a value is equal to another value?
3. How can you loop through each word in a string? What string function can we combine with a loop to make this possible?
4. How can you check if an element is present in a list?


Decomposing the problem:

1. Write a program to take input from the user and print it out
2. Modify your program to print each word on its own line. 
3. Instead of printing each word, first check if it is in the classified word list and print `[CLASSIFIED]` instead.
4. Modify your program to print everything on the same line.

</details>


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
<details>
<summary>Click here for a hint</summary>

Before you get started, answer the following questions: 

1. If you have the key, how do you get its associated value in a dictionary?
2. How can you check if a key exists in a dictionary?

Decomposing the problem:

1. Write a program to take input from the user and print it out
2. Modify your program to print `"true"` if the user input is a key in the dictionary and `"fruit not found"` otherwise.  
3. Replace `"true"` with the value associated with the given key.

</details>

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

<details>
<summary>Click here for a hint</summary>

Before you get started, answer the following questions: 

1. How can we repeatedly prompt the user for input until `done` is entered?
2. What data structure allows us to store pairs of values(artist and count)?
3. What can we use to get all of the keys in a dictionary?
4. How can we easily alphabetize a list

Decomposing the problem:

1. Write a program to take input from the user and print it out
2. Modify your program to repeatedly prompt the user for input until `done` is entered.
3. Modify your program to add new artists that have not been recorded yet into a dictionary with a value of one.
4. Modify your program to add to an artists count in the dictionary if their name is recorded again.
5. After `done` is entered, add code to your program to print out a list of keys in the dictionary.
6. Modify your program to alphabetize the list
7. Add code to loop through the list and print out their associated values as well.

</details>

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
    return true


main()
```

<details>
<summary>Click here for a hint</summary>

Before you get started, answer the following questions: 

1. What is the main doing in this program? What is a variable and what is a function?
2. How can we check if a character is a letter or a number or neither?
3. How can we use a loop to print a string a single character at a time?

Decomposing the problem:

1. Add the starter code to your program. 
2. Create a statement to return false if the plate is not between 2 and 6 characters
3. Create a statement to return false if it contains non-alphanumeric characters
4. Create a statement to return false if the first two characters are numbers
5. Create a statement to find the first number and return false if it is zero
6. Use a loop to identify if there are numbers and set a variable to true if so. Then check if there are letters after that point if the variable is true. If so, return false. 
7. In all other cases return true.

 Be between 2 and 6 characters(inclusive)
- No non-alphanumeric(not letters and numbers) characters are allowed
- The first two characters must be letters
- The first number cannot be a 0
- Letters cannot be placed after numbers 

</details>

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
- **20 points** - All required items are present.
- **15 points** - Task was completed, but supplementary materials are weak or missing.
- **10 points** - Task was attempted, but is missing major components.
- **0 points** - Task was not attempted to 50% completion or student should reattempt.