# Loops and Data Collections Notes

<tabs>
<tab title="Grade Level">

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| list | an ordered collection of values, written in square brackets |
| element | one value inside a list |
| index | the position of an element in a list or a character in a string, starting at 0 |
| zero indexing | numbering positions starting from 0 instead of 1 |
| slicing | taking a section of a list or string, like `word[1:3]` |
| immutable | can't be changed after it's created. Strings are immutable |
| while loop | repeats a block of code as long as a condition is true |
| for loop | repeats a block of code once for each item in a collection |
| infinite loop | a loop whose condition never becomes false, so it never stops |
| dictionary | a collection of key-value pairs, written in curly braces |
| key | the label used to look up a value in a dictionary |

## Lists

If we want to store more than one value inside of a variable, one way to do that is to use a **list**. Lists are ordered collections of **elements**. Here is an example of a list:

```python
fruits = ["Apple", "Banana", "Cherry"]
```

Notice that lists are defined with **square brackets** and all of their values are comma separated. Lists can store any type of value, even multiple different types in the same list.

To access an element in the list, we use the name of the list and the element's index:

```python
choice = fruits[1]
print(choice) # Banana
```

Even though the first element in our list is `"Apple"`, `fruits[1]` references `"Banana"`. This is because lists use **zero indexing**, meaning the first element is element 0, the second one is element 1, and so on. This is true not just in Python but in most programming languages. That's why lots of numbered things in computer science start with 0!

| Index | 0 | 1 | 2 |
| ----------- | ----------- | ----------- | ----------- |
| Element | `"Apple"` | `"Banana"` | `"Cherry"` |
| Negative index | -3 | -2 | -1 |

If I want to change the last value to `"Cantaloupe"` instead, I can reference the list the same way:
```python
fruits[2] = "Cantaloupe"
```

This will update the value of our list.

We can also add elements to lists with the `append(item)` function. If I want to add `"Grapes"` to our list, I can do so with:

```python
fruits.append("Grapes")
```

Now, our list has 4 elements. Note: `append(item)` always adds to the end of the list. If you want to add in the middle, use `insert(index, item)` instead.

If I want to know how many elements are in our list, I can use the `len()` function:

```python
print(len(fruits)) # 4
```

Notice that the length is always one more than the last index. If I want to access the last element I can use `fruits[len(fruits) - 1]`, or more simply `fruits[-1]`. Negative indexes count backwards from the end of the list.

Trying to use an index that doesn't exist, like `fruits[10]`, causes an `IndexError: list index out of range`.

To remove something from a list by its index, use the function `pop(index)`. For example, I could remove `"Banana"` from the list with:

```python
fruits.pop(1)
```

Here's a summary of the most common list tools:

| Tool | What it does | Example |
| ----------- | ----------- | ----------- |
| `list[i]` | gets the element at index `i` | `fruits[0]` |
| `list[i] = x` | replaces the element at index `i` | `fruits[0] = "Kiwi"` |
| `append(x)` | adds `x` to the end | `fruits.append("Fig")` |
| `insert(i, x)` | adds `x` at index `i`, shifting the rest over | `fruits.insert(0, "Lime")` |
| `pop(i)` | removes and returns the element at index `i` (the last one if `i` is left out) | `fruits.pop(1)` |
| `remove(x)` | removes the first element equal to `x` | `fruits.remove("Fig")` |
| `len(list)` | the number of elements | `len(fruits)` |
| `x in list` | `True` if `x` is in the list | `"Fig" in fruits` |

## Revisiting Strings

Now that we understand lists, we can take a look at strings again. Strings are also indexed in the same way. I can access different characters in a string using their index. For example:

```python
word = "Hello"
print(word[0]) # H
print(word[3]) # l
```

Strings also support something called **string slicing**. This allows us to create substrings from other strings. See the example below.

```python
word = "Hello"
print(word[1:3]) # el
```

The first value before the colon is the starting point for our substring. The value after the colon is the stopping point. However, the character at the stopping point is **not included**. If you leave out the start or the stop, the slice goes all the way to the beginning or the end:

```python
word = "Hello"
print(word[:2])   # He
print(word[2:])   # llo
```

Slicing works on lists, too: `fruits[1:3]` is a new list with the elements at indexes 1 and 2.

One major difference between strings and lists is we **cannot** modify specific characters of a string. For example, the following program will cause an error:

```python
word = "Hello"
word[0] = "h" # Error
```

Strings are what we call **immutable**, meaning they cannot be changed. Whenever we add to a string with `+`, we are actually creating a new string instead of modifying the previous one. This will make more sense when we talk about objects.

## While Loops

A **while loop** lets us repeat lines of code **as long as** a condition is true. Before each repeat, Python checks the condition again. As soon as it's false, the loop stops.

```python
while condition:
    statement
```

Here is an example:
```python
x = 5
while x < 10:
    print(x)
    x += 1
```

This will print:
```
5
6
7
8
9
```
Notice that it does not print 10! When `x` becomes 10, the condition `x < 10` is false, so the loop stops before the next `print(x)` statement.

There is one thing we need to watch out for when using while loops. Here is an example:

```python
x = 5
while x < 10:
    print(x)
```

Instead of counting up, this loop will print 5 forever, because `x` never changes, so `x < 10` is always true. This is called an **infinite loop**. If your program gets stuck in one, press **Ctrl + C** in the terminal to stop it. When creating while loops, make sure something inside the loop eventually makes the condition false.

Here is an example of using a while loop to print out each letter in a string:

```python
word = "Hello"
index = 0
while index < len(word):
    print(word[index])
    index += 1
```
This will print:

```
H
e
l
l
o
```

This will work exactly the same way for lists!

While loops are especially useful when you **don't know ahead of time** how many times to repeat, like asking the user for input until they type something valid:

```python
password = input("Create a password: ")
while len(password) < 8:
    print("Too short! It needs at least 8 characters.")
    password = input("Create a password: ")
print("Password saved.")
```

## For Loops

Another type of loop that exists in Python is a **for loop**. (Note: if you have used other programming languages like Java, the Python for loop is equivalent to a for-each loop or an enhanced for loop, not a regular for loop!) Rather than checking a condition, a for loop goes through every element in a data collection automatically, one at a time.

To do the exact same thing as our last while loop example, we could use a for loop:

```python
word = "Hello"
for letter in word:
    print(letter)
```

Each time through the loop, the variable `letter` holds the next character in `word`. You can name this variable anything, but a descriptive name makes your code easier to read. This works exactly the same way with a list!

### `range()`

If I wanted to repeat something a certain number of times, I could combine a for loop with the `range()` function:

```python
for x in range(5):
    print(x)
```

This would print:

```
0
1
2
3
4
```

Just like slicing, the stopping number isn't included. `range()` can also take a starting number and a step:

| Code | Numbers it gives |
| ----------- | ----------- |
| `range(5)` | 0, 1, 2, 3, 4 |
| `range(2, 6)` | 2, 3, 4, 5 |
| `range(0, 10, 2)` | 0, 2, 4, 6, 8 |
| `range(5, 0, -1)` | 5, 4, 3, 2, 1 |

If we want to work with both a list's elements and their indexes, we could do this instead:

```python
cars = ["subaru", "toyota", "ford", "honda"]

for i in range(len(cars)):
    print(i, cars[i])
```

### Keeping a Running Total

A common pattern is to create a variable **before** the loop, then update it **inside** the loop. This is called an **accumulator**.

```python
prices = [4.50, 2.25, 3.00]
total = 0

for price in prices:
    total += price

print(total) # 9.75
```

### `break` and `continue`

- `break` stops the loop immediately, and skips to the code after it.
- `continue` skips the rest of this time through the loop, and moves on to the next one.

```python
for number in [3, 8, -1, 5]:
    if number < 0:
        break          # Stop at the first negative number
    print(number)      # Prints 3, then 8
```

### For or While?

- Use a **for loop** when you're going through every item in a collection, or repeating a set number of times.
- Use a **while loop** when you're repeating until something changes, and you don't know how many times that will take.

## Dictionaries

Another type of data collection is a **dictionary**. A dictionary stores **key-value pairs** instead of single values. Each value is looked up by its key, instead of by a numerical index.

Here is a sample dictionary:
```python
user_profile = {
    "username": "coder_99",
    "email": "coder@example.com",
    "joined_year": 2024,
    "is_active": True
}
```

If I want to access the profile's username:
```python
print(user_profile["username"]) # coder_99
```

If I want to access the year they joined:
```python
print(user_profile["joined_year"]) # 2024
```

Looking up a key that doesn't exist, like `user_profile["phone"]`, causes a `KeyError`. To check if a key is inside a dictionary first, I can use `in`:
```python
key = "is_active"
if key in user_profile:
    print("The key exists")
```

To add a key-value pair to a dictionary (key = `"is_admin"` and value = `False`), I can use:
```python
user_profile["is_admin"] = False # will add is_admin to the dictionary
```

If the key already exists, the same line **replaces** its value instead. Each key can only appear once in a dictionary.

To remove a key-value pair from a dictionary:
```python
user_profile.pop("joined_year") # will remove joined_year from the dictionary
```

### Looping Through a Dictionary

A for loop over a dictionary goes through its **keys**. Use `.items()` to get each key and value together:

```python
for key, value in user_profile.items():
    print(f"{key}: {value}")
```

### Lists or Dictionaries?

- Use a **list** when order matters, and you'll look things up by position: a to-do list, or the scores from each round of a game.
- Use a **dictionary** when you'll look things up by name: a phone book, or a player's stats.

## Other Data Collections

There are other data collections called **sets** and **tuples**. We will not cover them in this class, but they can be useful depending on what you are trying to do. See these links for more information:
- [Python Sets](https://www.w3schools.com/python/python_sets.asp)
- [Python Tuples](https://www.w3schools.com/python/python_tuples.asp)

## Common Mistakes

- **Off-by-one errors.** Indexes start at 0, so the last index is `len(list) - 1`. `range()` and slices stop **before** the last number.
- **Infinite loops.** A while loop needs something inside it that eventually makes the condition false.
- **Changing a list while looping over it.** Removing items from a list inside a for loop over that same list skips elements. Build a new list instead.
- **Trying to change a string.** `word[0] = "h"` is an error. Create a new string instead.
- **Looking up a missing key.** Check with `in` before reading a key that might not be there.

</tab>
<tab title="Explain It Like I'm 10">

## Words to Know

- **List:** a bunch of values stored in order, like a numbered row of lockers.
- **Index:** a value's position in the list. Counting starts at **0**!
- **Loop:** code that repeats.
- **While loop:** repeats as long as something is true.
- **For loop:** repeats once for each item in a list or string.
- **Dictionary:** stores values by name instead of by number, like a phone's contact list.

## Lists: A Row of Lockers

A **list** stores several values in one variable, in order. Think of it like a row of school lockers. Each locker holds one thing, and each one has a number on it.

```python
fruits = ["Apple", "Banana", "Cherry"]
```

Here's the twist: in Python, the locker numbers start at **0**, not 1.

| Locker number (index) | 0 | 1 | 2 |
| ----------- | ----------- | ----------- | ----------- |
| What's inside | `"Apple"` | `"Banana"` | `"Cherry"` |

So to open the second locker, you use number 1:

```python
print(fruits[1])   # Banana
```

You can also count from the end with negative numbers. `fruits[-1]` is the last locker, `"Cherry"`.

If you ask for a locker that doesn't exist, like `fruits[10]`, Python gives you an `IndexError`. There's no locker 10!

## Changing a List

Lists can change. You can swap out what's in a locker, add new lockers, or take some away:

```python
fruits[2] = "Cantaloupe"   # Swap what's in locker 2
fruits.append("Grapes")    # Add a new locker at the end
fruits.pop(1)              # Take out locker 1 ("Banana")
print(len(fruits))         # How many lockers? 3
```

After all that, `fruits` is `["Apple", "Cantaloupe", "Grapes"]`. Notice that when "Banana" was removed, everything after it slid over to fill the gap.

## Strings Are Lists of Letters (Sort Of)

A string is like a list of letters, so you can use index numbers on it too:

```python
word = "Hello"
print(word[0])     # H
print(word[1:3])   # el
```

`word[1:3]` is called a **slice**. It means "start at position 1, and stop **before** position 3." Think of cutting a slice of bread: you cut at the start and at the end, and you get the part in between.

There's one big difference between strings and lists. You **can't** swap out a single letter in a string. Trying `word[0] = "h"` gives an error. If you want a different string, you have to make a brand new one.

## While Loops: Keep Going As Long As...

A **while loop** repeats as long as something is true. It's like a parent saying, *"While your room is messy, keep cleaning."* You keep going until the room is clean, then you stop.

```python
x = 5
while x < 10:
    print(x)
    x += 1
```

This prints 5, 6, 7, 8, 9. Each time through, Python checks: "Is `x` still less than 10?" When `x` gets to 10, the answer is no, so the loop stops. That's why 10 never gets printed.

**Watch out for loops that never end.** If you forget the `x += 1` line, `x` stays 5 forever. That means `x < 10` is always true, and the loop runs forever. This is called an **infinite loop**. If it happens, press **Ctrl + C** in the terminal to stop it.

## For Loops: Once for Each Thing

A **for loop** goes through a list (or a string) and does something with **each** item, one at a time. It's like a teacher handing back tests: *"For each student in the class, hand them their test."*

```python
for letter in "Hello":
    print(letter)
```

Each time through the loop, `letter` holds the next letter: first `H`, then `e`, then `l`, and so on. When there are no more letters, the loop ends on its own. No counting needed!

## Repeating a Certain Number of Times

To repeat something an exact number of times, use `range()`:

```python
for x in range(5):
    print(x)   # Prints 0, 1, 2, 3, 4
```

`range(5)` gives you 5 numbers, starting at 0. Just like slices, it stops **before** the last number, so 5 doesn't get printed.

## Keeping Score

To add things up in a loop, make a variable **before** the loop starts, then add to it **inside** the loop. It's like keeping score in a game: you start at 0, and add points as you go.

```python
prices = [4.50, 2.25, 3.00]
total = 0
for price in prices:
    total += price
print(total)   # 9.75
```

## Which Loop Should I Use?

- **For loop:** you know what you're going through. *"For each song on the playlist, play it."*
- **While loop:** you don't know how many times it'll take. *"While the user's password is too short, ask again."*

## Dictionaries: Looking Things Up by Name

A list finds things by **number**. A **dictionary** finds things by **name**. It's like the contacts on a phone: you look up "Mom" to get her number. You don't need to remember that she's contact #47.

```python
user_profile = {
    "username": "coder_99",
    "joined_year": 2024,
    "is_active": True
}
```

Each item has two parts:
- the **key**, which is the name you look up, like `"username"`.
- the **value**, which is what you get back, like `"coder_99"`.

```python
print(user_profile["username"])        # coder_99
user_profile["is_admin"] = False       # Add a new key and value
user_profile.pop("joined_year")        # Remove a key and its value
```

If you look up a key that isn't there, you get a `KeyError`. You can check first with `in`:

```python
if "username" in user_profile:
    print("Found it!")
```

## Common Mistakes

- Forgetting that counting starts at 0. The last item in a list is at `len(list) - 1`.
- Forgetting that `range()` and slices stop **before** the last number.
- Making a while loop that never ends. Something inside the loop needs to change!
- Trying to change one letter of a string.
- Looking up a dictionary key that doesn't exist.

</tab>
<tab title="Just the Highlights">

## Lists

- Ordered, changeable, written in `[ ]`. Indexes start at **0**. Negative indexes count from the end: `items[-1]` is the last element.
- An index past the end is an `IndexError`.

| Operation | Syntax |
| ----------- | ----------- |
| get / set | `items[i]`, `items[i] = x` |
| add | `items.append(x)` (end), `items.insert(i, x)` |
| remove | `items.pop(i)` (by index; last if `i` is left out), `items.remove(x)` (by value) |
| size | `len(items)` |
| membership | `x in items` |
| slice | `items[start:stop]` (stop not included) |

## Strings

- Indexed and sliced like lists: `word[0]`, `word[1:3]`, `word[:2]`, `word[2:]`.
- **Immutable**: `word[0] = "h"` is an error. String methods and `+` create new strings.

## Loops

```python
while condition:          # Repeats while condition is True
    ...                   # Something here must eventually make it False

for item in collection:   # Once per element of a list, string, range, or dict
    ...
```

| `range()` call | Gives |
| ----------- | ----------- |
| `range(5)` | 0, 1, 2, 3, 4 |
| `range(2, 6)` | 2, 3, 4, 5 |
| `range(0, 10, 2)` | 0, 2, 4, 6, 8 |
| `range(5, 0, -1)` | 5, 4, 3, 2, 1 |

- `for i in range(len(items)):` gives you indexes, when you need positions as well as values.
- `break` exits the loop. `continue` skips to the next time through.
- **Accumulator pattern:** set a variable before the loop, update it inside.
- Use **for** for a known collection or count. Use **while** to repeat until something changes.
- Stuck in an infinite loop? Press **Ctrl + C**.

## Dictionaries

- Key-value pairs, written in `{ }`. Keys are unique.

| Operation | Syntax |
| ----------- | ----------- |
| get | `d[key]` (`KeyError` if it's missing) |
| add / replace | `d[key] = value` |
| remove | `d.pop(key)` |
| check for a key | `key in d` |
| loop over keys | `for key in d:` |
| loop over pairs | `for key, value in d.items():` |

- A **list** is for order and position. A **dictionary** is for looking things up by name.

## Watch Out For

- Off-by-one errors: the last index is `len - 1`, and `range` and slices exclude the stop value.
- While loops that never update their condition.
- Removing items from a list while looping over it.
- Reading a dictionary key without checking that it exists.

</tab>
</tabs>
