# Loops and Data Collections Exercises

## Exercise 1

What is an **index** as it relates to lists and how are they assigned? How can elements be accessed using their index?

<details>
<summary>Click here to view the answer</summary>

Each element in the list has an index that it can be identified by. The first element has index 0, then the second has index 1, etc. They are assigned by the current order of elements. Elements can be accessed by their index with `list_name[index]`.

</details>

## Exercise 2

In the following code snippet, how many times is `"Hello"` printed?

```
for i in range(4):
    for j in range(3):
        if j == i:
            continue
        print("Hello")
```

<details>
<summary>Click here to view the answer</summary>

Hello is printed 9 times. 

</details>

## Exercise 3

Write a program that categorizeses every character in a string input as either a letter, digit, or symbol. For example:

```
String: a1!
a: letter
1: digit
!: symbol
```

<details>
<summary>Click here to view the answer</summary>

```
word = input("String:")
for char in word:
    if char.isalpha():
        print(char + ": letter")
    elif char.isdigit():
        print(char + ": digit")
    else:
        print(char + ": symbol")
```

</details>

## Exercise 4

Write a program to repeatedly ask for a name until the user types "done". Keep a running count of how many times each name was entered, then print the counts.

For example:
```
Name: sam
Name: alex
Name: sam
Name: done
sam: 2
alex: 1
```

<details>
<summary>Click here to view the answer</summary>

```
votes = {}
word = input("Name: ")

while word != "done":
    if word.lower() in votes:
        votes[word.lower()] += 1
    else:
        votes[word.lower()] = 1
    word = input("Name: ") 

for key in votes:
    print(key + ": " + str(votes[key]))
```

</details>




## Exercise 5

What is the difference between a list and a dictionary?

<details>
<summary>Click here to view the answer</summary>

Lists have fixed, automatic, numerical indexing. Dictionaries have dynamic indexing with key-value pairs.


</details>

## Exercise 6

What is the difference between a `while` loop and a `for` loop? Give an example of a situation where you would use each one.

<details>
<summary>Click here to view the answer</summary>

A `for` loop is best when you know how many times you want to loop, or you are looping through every element of a collection, like printing every temperature in a list of readings. A `while` loop is best when you don't know in advance how many times you'll loop, and instead want to repeat until some condition changes, like repeatedly reading a sensor until the user stops the program.

</details>

## Exercise 7

A temperature sensor recorded the following Fahrenheit readings throughout the day:

```
readings = [68, 75, 65, 81, 70, 90]
```

Write a program that loops through `readings` and prints `"HOT"` if the reading is above 72, and `"COLD"` otherwise.

<details>
<summary>Click here to view the answer</summary>

```
readings = [68, 75, 65, 81, 70, 90]

for temp in readings:
    if temp > 72:
        print("HOT")
    else:
        print("COLD")
```

</details>

## Exercise 8

Using the same list of readings from Exercise 7, write a program that calculates and prints the average temperature for the day, formatted to two decimal places.

For example:
```
Average: 74.83
```

<details>
<summary>Click here to view the answer</summary>

```
readings = [68, 75, 65, 81, 70, 90]

total = 0
for temp in readings:
    total += temp

average = total / len(readings)
print("Average: {average.2f}")
```

</details>

## Exercise 9

How can you loop through the keys and values of a dictionary at the same time?

<details>
<summary>Click here to view the answer</summary>

You can use the dictionary's `.items()` method, which gives back each key-value pair together:

```
for key, value in dictionary.items():
    print(key, value)
```

</details>


## Exercise 10

What does list slicing do? Given `readings = [68, 75, 65, 81, 70, 90]`, what would `readings[::2]` return?

<details>
<summary>Click here to view the answer</summary>

Slicing pulls a sublist out of a list using `list[start:stop:step]`. Leaving `start` and `stop` blank means "the whole list", and a `step` of 2 means "every other element". So `readings[::2]` returns `[68, 65, 70]`, the elements at index 0, 2, and 4.

</details>

## Exercise 11

What is the difference between `list.append(x)` and `list.insert(i, x)`?

<details>
<summary>Click here to view the answer</summary>

`.append(x)` adds `x` to the end of the list. `.insert(i, x)` adds `x` at a specific index `i`, shifting every element after it over by one.

</details>

## Exercise 12

In the following code snippet, what gets printed?

```
temps = [68, 90, 65, 100]
count = 0
for temp in temps:
    if temp > 95:
        break
    if temp < 70:
        count += 1
        continue
    print(temp)
print(count)
```

<details>
<summary>Click here to view the answer</summary>

```
90
2
```

`68` is less than 70, so `count` becomes 1 and `continue` skips the print. `90` is printed. `65` is less than 70, so `count` becomes 2 and `continue` skips the print. `100` is greater than 95, so `break` ends the loop before it is printed. Finally, `count` (2) is printed.

</details>
