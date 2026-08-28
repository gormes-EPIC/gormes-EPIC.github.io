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



</details>

## Exercise 4

Repeatedly ask for a name until the user types "done". Keep a running count of how many times each name was entered, then print the counts.

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



</details>




## Exercise 5

What is the difference between a list and a dictionary?

<details>
<summary>Click here to view the answer</summary>

Lists have fixed, automatic, numerical indexing. Dictionaries have dynamic indexing with key-value pairs.


</details>


## Exercises 6

Write a function `sort_names(name_list)` that takes in a list of names and returns them in sorted order, case-insensitive. 

For example:

```
names = ["Zoe", "Bob", "amir"]
names = sort_names(names) # names = ["amir", "Bob", "Zoe"]
```
<details>
<summary>Click here to view the answer</summary>



</details>