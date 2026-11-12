# Fun with Objects Lab: Checklist

> Work from top to bottom and check off each step as you finish it. Your progress is saved in this browser, so you can come back to it later.

## Step 1: Get Set Up

- [ ] Review the [Objects Notes](#Pi's-and-Python/Objects-Notes).
- [ ] Review the [File Reading and Writing Notes](#Pi's-and-Python/File-Reading-and-Writing-Notes).
- [ ] Create a new repository on GitHub for this lab.
- [ ] Clone it onto your Pi, or create a folder for it, and open it in VS Code.

## Step 2: Parking Lot

- [ ] Create a new program called `parking_lot.py`.
- [ ] Copy in the starter code below.

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

- [ ] Write code in `main()` that adds up the `mpg` of every `Car` in `parking_lot` and prints the total.
- [ ] Run your program and check the total by adding the three numbers yourself.
- [ ] Commit and push `parking_lot.py` to GitHub.

## Step 3: Bookshelf

A `Book` has a `title` (string), an `author` (string), and `checked_out` (a boolean). Its `check_out()` method returns `True` and marks the book as checked out if the book is available. Otherwise, it returns `False`.

- [ ] Create a new program called `library.py`.
- [ ] Copy in the starter `main()` below.

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

- [ ] Read through `main()` and write down every variable and method it expects a `Book` to have.
- [ ] Define the class `Book`.
- [ ] Write the constructor and set up the three instance variables.
- [ ] Write the `check_out()` method.
- [ ] Run your program with the starter `main()`. It should say one book was checked out and two are still available.
- [ ] Commit and push `library.py` to GitHub.

## Step 4: Coffee Shop

An `Order` has one instance variable, `receipt`, which is a list of `MenuItem`s. It needs four methods:
- `add_item(item)`: adds a `MenuItem` to the order
- `calculate_taxes()`: returns the 7% sales tax on the items in the order
- `calculate_total()`: returns the total cost of the items, including tax
- `print_receipt()`: prints each item's name and price, the taxes, and the total

- [ ] Create a new program called `barista.py`.
- [ ] Copy in the `MenuItem` class and the starter `main()` below.

```python
class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price
```

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

   order1.print_receipt()
   

if __name__ == '__main__':
    main()
```

- [ ] Create a sample `MenuItem` and print its name and price to make sure you know how to use it.
- [ ] Define the class `Order` with its constructor and `receipt` instance variable.
- [ ] Write the `add_item()` method.
- [ ] Write the `calculate_taxes()` method.
- [ ] Write the `calculate_total()` method.
- [ ] Write the `print_receipt()` method.
- [ ] Run your program with the starter `main()` and make sure the output matches:

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

- [ ] Commit and push `barista.py` to GitHub.

## Step 5: Playlist

A `Song` has a `title` (string), an `artist` (string), and a `duration` (integer, in seconds). A `Playlist` has a `name` (string) and a list of `Song`s. A `Playlist` needs five methods:
- `add_song(song)`: adds a `Song` to the playlist
- `get_total_duration()`: prints the total length of the playlist as `MM:SS` (for example, 250 seconds prints `04:10`)
- `find_by_artist(artist_name)`: prints every song by that artist, or a message if there aren't any
- `print_playlist()`: prints the playlist's name in all caps, then each song's title and artist on its own line
- `load_songs(filename)`: adds each song from a CSV file shaped like `Title,Artist,Duration` to the playlist, in order

- [ ] Create a new program called `playlist.py`.
- [ ] Create a file called `songs.csv` in the same folder and copy in the songs below.

<details>
<summary>songs.csv</summary>

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

</details>

- [ ] Define the class `Song`. Test it by creating a song and printing its properties.
- [ ] Define the class `Playlist`. Test it by creating a playlist and printing its properties.
- [ ] Write the `add_song()` method.
- [ ] Write the `get_total_duration()` method.
- [ ] Write the `find_by_artist()` method.
- [ ] Write the `print_playlist()` method.
- [ ] Write the `load_songs()` method. Use the [File Reading and Writing Notes](#Pi's-and-Python/File-Reading-and-Writing-Notes) to help.
- [ ] Copy in the test `main()` below and run it.

```python
def main():
    playlist = Playlist("My Playlist")
    playlist.load_songs("songs.csv")
    playlist.add_song(Song("My Fav Song", "Megabytes", 250))
    playlist.print_playlist()
    playlist.get_total_duration()
    playlist.find_by_artist("Null Pointer")
```

- [ ] Make sure your output matches the expected output below.

<details>
<summary>Expected output</summary>

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

</details>

- [ ] Test `find_by_artist()` with an artist who isn't in the playlist.
- [ ] Commit and push `playlist.py` and `songs.csv` to GitHub.

<details>
<summary>Stuck? Try these resources.</summary>

- [W3 Schools: Classes](https://www.w3schools.com/python/python_classes.asp)
- [Geeks for Geeks: Python Objects](https://www.geeksforgeeks.org/python/python-object/)
- [Introduction to Classes and Objects (video)](https://www.youtube.com/watch?v=8yjkWGRlUmY)
- [Using Classes and Objects in Python (video)](https://www.youtube.com/watch?v=wfcWRAxRVBA)
- [W3 Schools: Reading Files](https://www.w3schools.com/python/python_file_open.asp)

</details>

## Step 6: Reflect and Submit

- [ ] Answer the reflection questions:
  - [ ] When you create three different `Song` objects from the same class, what do they share, and what is unique to each of them?
  - [ ] How do you decide if something should be a property (a variable holding state) or a method (a function calculating something)?
  - [ ] Can you think of a simple script or small data-processing task where creating classes would be overkill?
- [ ] Make sure all four programs are pushed to your GitHub repository.
- [ ] Attach your GitHub repository to Google Classroom.
- [ ] ✋ Show your instructor your GitHub repository with your programs in class.

## Extension (Optional)

- [ ] Add a `shuffle()` method to `Playlist` that randomizes the order of its songs. Research and use the **Fisher-Yates Shuffle** (also called the Knuth Shuffle), which shuffles a list in place in O(n) time.
