# Fun with Objects Lab 

## Objective

1. Leverage objects to solve complex problems in Python
2. Read and use information from external files in Python

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| class | The template for an object |
| object | A variable of a custom type, as defined by the class |
| instance variable | Variables that belong to each object instance |
| constructor | A special method that instantiates instance variables when an object is created |
| instance method | A method that belongs to the instance of a class |
| class attribute | A variable that is shared between all instances of a class |

## Your Task

Review the [Object Notes](#Pi's-and-Python/Objects-Notes) and the [File Reading and Writing Notes](#Pi's-and-Python/File-Reading-and-Writing-Notes)

Then, solve these 4 programming challenges:
- [Parking Lot](#parking-lot)
- [Bookshelf](#bookshelf)
- [Coffee Shop](#coffee-shop)
- [Playlist](#playlist)

## Getting Started
1. Create a new repository on GitHub to store your code. 
2. When you have finished solving each problem, upload your code there. 

## <a id="parking-lot"></a>Parking Lot

Create the file `parking_lot.py`.  Then complete the program below to sum the `mpg` of each `Car` in the list `parking_lot`. 

```python
class Car:
    def __init__(self, make, model, mpg):
        self.make = make
        self.model = model
        self.mpg = mpg

def main():
	car1 = Car("Toyota", "Prius", 35)
	car2 = Car("Subaru","Outback", 32)
	car3 = Car("Ford", "F150", 25)
	
	parking_lot = [car1, car2, car3]
	
	## Write a program to sum the mpg of each car.

if __name__ == '__main__':
	main()
```


## <a id="bookshelf"></a>Bookshelf

Create a new program `library.py`.

Create a new class `Book`. `Book` has three instance variables: `title`(a string), `author`(a string), and `checked_out`(a boolean representing whether a book has been checked out). `Book` has one method `check_out()` which returns `True` if the book is available and changes the `checked_out` variable to `True`. The method returns `False` otherwise.


Your program should work with the following main. 

```python
def main():
     
    book1 = Book("To Kill a Mockingbird", "Harper Lee", False)
    book2 = Book("1984", "George Orwell", False)
    book3 = Book("Slaughterhouse 5", "Kurt Vonnegut", False)
    
    # Create a list of book objects
    shelf = [book1, book2, book3]

    # Try to check out book2 on the shelf and print if it has been checked out
    if shelf[1].check_out() == True:
        print(shelf[1].title + " has been checked out")

    # Total the number of available books
    total = 0
    for book in shelf:
        if book.checked_out == False:
            total += 1
    print("There are " + str(total) + " available books")


if __name__ == '__main__':
	main()
```
<details>
<summary>Click here for a hint</summary>

Before you get started, answer the following questions: 

1. What is the starter main trying to do? What is a variable and what is a function?
2. Based on the main, what variables and functions must exist within the `Book` class? Does this match up with the description provided?
3. How do you define a class of name `Book`?
4. What is the name of the special method that is called when you create a new object? What is its special header?
5. What special keyword must be the first parameter in each instance method? Why?

Decomposing the problem:

1. Add the starter code.
2. Define the class `Book`
3. Write the header for the constructor and define the three instance variables.
4. Define the method `check_out()`. Don't forget the special keyword!
5. Test your class with the main.

</details>

## <a id="coffee-shop"></a>Coffee Shop

Create a new file `barista.py` and use the existing class `MenuItem`.
```python
class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price
```

Create a new class `Order`. `Order` has one instance variable  `receipt` which is a list of `MenuItem`'s. `Order` has three methods:
- `add_item(item)`: Appends a `MenuItem` to the order.
- `calculate_taxes()`: Iterates through the list of items, and calculates the 7% sales tax on the purchase
- `calculate_total()`: Iterates through the list of items, sums their prices, and returns the total cost including a 7% sales tax.
- `print_receipt()`: Prints a formatted list of all item names, their individual prices, and the final total at the bottom.

Use the following `main()` to test your program.
```python
def main():
   
   menu = [
       MenuItem("bagel", 3.00),
       MenuItem("burrito", 5.00),
       MenuItem("ramen", 1.50),
       MenuItem("gum", 0.50)
   ]
     
   order1 = Order([])
   order1.add_item(menu[1])
   order1.add_item(menu[1])
   order1.add_item(menu[3])

   total = order1.calculate_total()
   print("The total due is " + str(total))

   order1.print_reciept()
   

if __name__ == '__main__':
	main()
```

Output:
```
The total due is 11.235
CROSSROAD'S CAFE
----------------
burrito: 5.0
burrito: 5.0
gum: 0.5
----------------
taxes: 0.735
----------------
Total: 11.235
```
<details>
<summary>Click here for a hint</summary>

Before you get started, answer the following questions: 

1. Read the `MenuItem` class. Identify its three instance variables. How do you access them from outside the class?
2. For each instance method, write down its parameters(and type) and return type. 
3. Read through the sample main and summarize it. 

Decomposing the problem:

1. Copy in the `MenuItem` class. Create a sample `MenuItem` and print its properties
2. Create a new class `Order` with its instance variable. Create a sample `Order` and print its properties. 
3. Write the method `add_item()`. This should add a `MenuItem` to the `reciept`. 
4. Write the method `calculate_taxes()`. This should return a 7% sales tax based on the total cost of the items in `receipt`. 
5. Write the method `calculate_total()`. This should sum the value of the items in `receipt` and add the tax calculated by `calculate_taxes()`.
6. Write the method `print_receipt()`. You will need to use the `calculate_taxes()` and `calculate_total()` methods.
7. Use the existing main to test your class. 

</details>

## <a id="playlist"></a>Playlist

Write a program that models a digital music playlist in `playlist.py`

- Create a `Song` object. It should have the properties `title` (string), `artist` (string), and `duration` (integer, representing the length of the song in seconds).    
- Create a `Playlist` object. It should have a `name` (string) and a property to store a list/array of `Song` objects.
- The `Playlist` object needs five methods:
    - `add_song(song)`: Appends a `Song` object to the playlist.
    - `get_total_duration()`: Iterates through the list of songs, sums their duration, and prints the total time formatted as `MM:SS` (e.g., if the total is 250 seconds, it should print `04:10`).
    - `find_by_artist(artist_name)`: Loops through the playlist and prints the titles of all songs written by the specified artist. If the artist isn't in the playlist, print a message saying so.
    - `print_playlist()`: Prints the title of the playlist in all caps, then each of the song title and artists on a separate line
    - `load_songs(filename)`: Given a CSV in the form "Title,Artist,Duration", add the songs from the CSV to the playlist in order

As an example, use this file `songs.csv`: 

```
Title,Artist,Duration
Hello World,The Synthesizers,180
Stack Overflow,Null Pointer,210
Off By One,Array Index,195
Infinite Loop,The Debuggers,240
Garbage Collection,Null Pointer,165
Runtime Error,Byte Code,188
Syntax Sugar,The Synthesizers,205
Segmentation Fault,Null Pointer,300
Merge Conflict,The Debuggers,150
Push to Master,Array Index,220
Blue Screen,Byte Code,190
Cache Miss,The Synthesizers,215
Brute Force,The Debuggers,140
Rubber Ducking,Array Index,175
Memory Leak,Null Pointer,260
Boolean Logic,Byte Code,180
Time Complexity,The Synthesizers,230
Kernel Panic,Null Pointer,270
Refactoring,Array Index,190
Git Commit,The Debuggers,160
```

You are responsible for testing your program, but as an example your program should work with the following main:

```python
def main():
    playlist = Playlist("My Playlist")
    playlist.load_songs("songs.csv")
    playlist.add_song(Song("My Fav Song", "Megabytes", 250))
    playlist.print_playlist()
    playlist.get_total_duration()
    playlist.find_by_artist("Null Pointer")
```

And produce the output:
```
MY PLAYLIST
-----------------
Hello World,The Synthesizers
Stack Overflow,Null Pointer
Off By One,Array Index
Infinite Loop,The Debuggers
Garbage Collection,Null Pointer
Runtime Error,Byte Code
Syntax Sugar,The Synthesizers
Segmentation Fault,Null Pointer
Merge Conflict,The Debuggers
Push to Master,Array Index
Blue Screen,Byte Code
Cache Miss,The Synthesizers
Brute Force,The Debuggers
Rubber Ducking,Array Index
Memory Leak,Null Pointer
Boolean Logic,Byte Code
Time Complexity,The Synthesizers
Kernel Panic,Null Pointer
Refactoring,Array Index
Git Commit,The Debuggers
My Fav Song,Megabytes
71:53
SONGS BY NULL POINTER
-----------------------
Stack Overflow,Null Pointer
Garbage Collection,Null Pointer
Segmentation Fault,Null Pointer
Memory Leak,Null Pointer
Kernel Panic,Null Pointer
```
<details>
<summary>Click here for a hint</summary>

Before you get started, answer the following questions: 

1. Read through the sample main and summarize it. 
2. How do you get the contents of a file as a list, one line per list?
3. What does CSV stand for?

Decomposing the problem:

1. Create the `Song` class. Test it by creating a song and printing its properties
2. Create a `Playlist` class. Test it by creating a playlist and printing its properties. 
3. Add the `add_song(song)` method. This should be extremely similar to the `add_item()` method from the previous problem.
4. Add the `get_total_duration()` method. Remember this prints the total time
5. Add the `find_by_artist(artist_name)` method. This should use a loop to find all the songs by a given artist.
6. Add the `print_playlist()` method.
7. Add the `load_songs(filename)` method. Remember to use what you researched. 
8. Use the provided main to test your program.

</details>

## Tips, Tricks, and Resources
- [Objects in Python Notes](#Pi's-and-Python/Objects-In-Python-Notes)
- [W3 Schools - Classes](https://www.w3schools.com/python/python_classes.asp)
- [Geeks for Geeks - Python Objects](https://www.geeksforgeeks.org/python/python-object/)
- [Introduction to Classes and Objects](https://www.youtube.com/watch?v=8yjkWGRlUmY) and [Using Classes and Objects in Python](https://www.youtube.com/watch?v=wfcWRAxRVBA)
- [Reading Files in Python](https://www.w3schools.com/python/python_file_open.asp)

## Extensions
1.  For Playist, Write a `shuffle()` method that randomizes the order of the `Song` objects in the playlist array. Research and implement the **Fisher-Yates Shuffle** (sometimes called the Knuth Shuffle). It’s an algorithm that shuffles an array "in-place" in O(n) time by looping through the array and swapping the current element with a randomly chosen element that comes before it.

## Reflection Questions
1. When you create three different `Song` objects from the same class, what do they share, and what is entirely unique to each of them?
2. How do you decide if something should be a property (a variable holding state) or a method (a function calculating something)?
3. Object-oriented programming is a fantastic tool, but it's not the _only_ way to write code. Can you think of a simple script or a small data-processing task where creating a class architecture would be overkill?

## Deliverables Checklist
- [ ] Demonstrate 4 working programs to your instructor in class 
- [ ] A repository with all 4 of your programs uploaded, attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person. 

## Rubric
- **20 points** - All required items are present.
- **15 points** - Task was completed, but supplementary materials are weak or missing.
- **10 points** - Task was attempted, but is missing major components.
- **0 points** - Task was not attempted to 50% completion or student should reattempt.