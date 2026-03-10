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

Create a new class `Book`. `Book` has three instance variables: `title`(a string), `author`(a string), and `checked_out`(a boolean representing whether a book has been checked out). `Book` has one method `check_out()` which returns `True` if the book is available and changes the `checked_out` variable to `False`. The method returns `False` otherwise.


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

## <a id="coffee-shop"></a>Coffee Shop

Create a new file `barista.py` and use the existing class `MenuItem`.
```python
class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price
```

Create a new class `Order`. `Order` has one instance variable  `receipt`. `Order` has three methods:
- `add_item(item)`: Appends a `MenuItem` to the order.
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
     
   order1 = Order()
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
The total due is 10.5
CROSSROAD'S CAFE
----------------
burrito: 5.0
burrito: 5.0
gum: 0.5
----------------
Total: 10.5
```


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
- **6 points** - All required items are present.
- **5 points** - Task was completed, but supplementary materials are weak or missing.
- **4 points** - Task was attempted, but is missing major components.
- **3 points** - Did not attempt or student should reattempt.