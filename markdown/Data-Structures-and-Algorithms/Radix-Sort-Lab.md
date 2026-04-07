# Radix Sort Lab

## Objective

1. Implement a radix sort that sorts words in order

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| radix sort | A sorting algorithm that works by sorting elements by their last digit, then the second to last digit, etc. |

## Your Task

You are to implement a program to take in a list of words from a file, sort them using radix sort, and output them in alphabetical order. You will need at least one class to implement the following program: write a short console program that will take in the name of a file containing the words to be sorted (i.e. file_name.txt). You can assume the file will contain several words, one word per line, mixed letter case, and with no additional spaces before or after the words. Your program will then write these words sorted in alphabetical order (not lexicographical order) into a file named the file name followed by “\_key” (i.e. file_name_key.txt) after sorting them using radix sort.


Example:

| //contents of some_file.txt  | //contents of some_file_key.txt |
|---|---|
|enthusiasm<br><br>milder<br><br>STENCILED<br><br>LIBELEES<br><br>ReFurbISHMENT<br><br>ComMANDEERs<br><br>spectroscopy<br><br>DiSeMbOdyING<br><br>pAnDErING<br><br>EXPLORATIONS|ComMANDEERs<br><br>DiSeMbOdyING<br><br>enthusiasm<br><br>EXPLORATIONS<br><br>LIBELEES<br><br>milder<br><br>pAnDErING<br><br>ReFurbISHMENT<br><br>spectroscopy<br><br>STENCILED|

  
**Hints:** It will help if you use the lower case version of all the Strings in the file while you radix sort. Each bucket can then be associated with the numeric value of each letter. It will help to pad shorter words with spaces before processing the list.

## Javadoc
For your main class, create Javadoc comments and generate a Javadoc HTML reference. 
## Testing
Create JUnit tests with **85% code coverage.** Though there is not a specific requirement, you will need to write multiple sets of wordlist files and a way to compare the validate the outputted lists. I recommend you create a testing directory in your project to hold all of these files. You can mark a directory as your testing suite inside the project settings.

## Tips, Tricks, and Resources
- [Radix Sort on the Playground](https://www.youtube.com/watch?v=ibtN8rY7V5k)

## Extensions
1. 

## Reflection Questions
1. What is the runtime of radix sort?


## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program and tester attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person

## Rubric
- **6 points** - All required items are present.
- **5 points** - Task was completed, but supplementary materials are weak or missing.
- **4 points** - Task was attempted, but is missing major components.
- **3 points** - Did not attempt or student should reattempt.