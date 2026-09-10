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
## While Loops
## For Loops
## Dictionaries

## Other Data Collections