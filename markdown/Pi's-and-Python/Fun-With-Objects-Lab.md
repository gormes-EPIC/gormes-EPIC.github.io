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

## Your Task

Solve these 4 programming challenges:
- [Parking Lot](#parking-lot)
- [Bookshelf](#bookshelf)
- [Coffee Shop](#coffee-shop)
- [Playlist](#playlist)

## Getting Started
1. Create a new repository on GitHub to store your code. 
2. When you have finished solving each problem, upload your code there. 

## <a id="parking-lot"></a>Parking Lot

## <a id="bookshelf"></a>Bookshelf

## <a id="coffee-shop"></a>Coffee Shop

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
- 

## Extensions
1. 

## Reflection Questions
1. 

## Deliverables Checklist
- [ ] 

## Rubric
- **6 points** - All required items are present.
- **5 points** - Task was completed, but supplementary materials are weak or missing.
- **4 points** - Task was attempted, but is missing major components.
- **3 points** - Did not attempt or student should reattempt.