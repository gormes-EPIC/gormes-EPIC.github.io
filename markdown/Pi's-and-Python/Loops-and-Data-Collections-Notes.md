# Loops and Data Collections Notes

## Lists

If we want to store more than one value inside of a variable, one way to do that is to use a **list**. Lists are ordered collections of **elements**. Here is an example of a list:

```
fruits = ["Apple", "Banana", "Cherry"]
```

Notice that lists are defined with **square brackets** and all of their values are comma separated. Lists can store any type of value, even multiple different types in the same list. 

To access an element in the list, we use the name of the list and the element's index:

```
choice = fruits[1]
print(choice) # Banana
```

Even though the first element in our list is `"Apple"`, `fruits[1]` references `"Banana"`. This is because lists use **zero indexing** meaning the first element is element 0, the second one is element 1, and so on. This is true not just in Python but in most programming languages. That's why lots of numbered things in computer science often start with 0!

If I want to change the last value to `"Cantaloupe"` instead I can reference the list the same way:
```
fruits[2] = "Cantaloupe"
```

This will update the value of our list.

We can also add elements to lists with the `append(index)` function. If I want to add `"Grapes"` to our list, I can do so with:

```
fruits.append("Grapes")
```

Now, our list has 4 elements. Note: `append(index)` always adds to the end of the list. If you want to add in the middle, use `insert(index, item)` instead.


If I want to know how many elements are in our list, I can use the `len()` function:

```
print(len(fruits)) # 4
```

Notive that the length is always one more than the last index. If I want to access the last element I can use: `fruits[len(fruits) - 1]` or more simply `fruits[-1]`.

To remove something from a list, use the function `pop(index)`. For example, I could remove `"Banana"` from the list with:

```
fruits.pop(1)
```

## Revisiting Strings

Now that we understand lists, we can take a look at strings again. Strings are also indexed in the same way. I can access different characters in a string using their index. For example:

```
word = "Hello"
print(word[0]) # H
print(word[3]) # l
```

Strings also support something called **string splicing**. This allows us to create substrings from other strings. See the example below.

```
word = "Hello"
print(word[1:3]) # el
```

The first value before the colon is the starting point for our substring. The value after the colon is the stopping point, however the last character is **not included**.

One major difference between strings and lists is we **cannot** modify specific elements of a string. For example, the following program will cause an error:

```
word = "Hello"
word[0] = "h" # Error
```

Strings are what we call **immutable** meaning they cannot be changed. Whenever we add to a string with `+`, we are actually creating a new string instead of modifying the previous. This will make more sense when we talk about objects.

## While Loops

A **while loop** is a special construction that allows us to repeat lines of code until a condition is met. 

```
while condition:
    statement
```

Here is an example:
```
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
Notice that it does not print ten! This is because the condition was met and the loop stopped before the next `print(x)` statement.

There is one thing we need to watch out for when using while loops. Here is an example:

```
x = 5
while x < 10:
    print(x)
```

Instead of counting up, this loop will print 5 forever until it eventually crashes! The Python interpreter is smart enough to not crash your whole machine and will instead stop it early. This is called an **infinite loop**. When creating loops, we have to be careful that we aren't creating infinite loops.

Here is an example of using a while loop to print out each letter in a string:

```
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

## For Loops
## Dictionaries

## Other Data Collections