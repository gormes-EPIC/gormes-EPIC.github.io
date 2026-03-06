# Quad Sorts Lab

## Objective

1. In this lab, you will learn to implement multiple sorting algorithms and present 

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| Big O Notation |  describe the efficiency, scalability, and performance of an algorithm as the input size (\(n\)) grows |

## Your Task

Your task is to implement four sorting algorithms: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort.

## Getting Started

1. For this lab, you will create a class `QuadSorts` with four static methods. 
    - `public static int[] bubbleSort(int[] arr)` - sorts an array arr using bubble sort and returns the sorted array
    - `public static int[] selectionSort(int[] arr)` - sorts an array arr using selection sort and returns the sorted array 
    - `public static int[] insertionSort(int[] arr)` - sorts an array arr using insertion sort and returns the sorted array 
    - `public static int[] mergeSort(int[] arr)` - sorts an array arr using merge sort and returns the sorted array
2. Use `System.currentTimeMillis()` in a new class `SortingTester` to time each of the 4 sorts for random arrays of size n = 100, 1000, 10000, 100000, 1000000. *Note: You will not be able to run BubbleSort for all of these sizes of n. It will take too long to run.*
3. Use Google Sheets or a similar program to create a graph of how long each method takes for each of 5 given values of n. 

## Tips, Tricks, and Resources
- [VisualAlgo](https://visualgo.net/en/sorting)
- [W3 Schools](https://www.w3schools.com/dsa/dsa_algo_bubblesort.php)

## Extensions
1. Add QuickSort to your list of sorts and to your graph

## Reflection Questions
1. What is the runtime of each of the 4 sorting algorithms you programmed in this lab?
2. Why is considering the runtime of your programs important?
3. Why do we use Big O notation instead of just measuring how many seconds an algorithm takes to run on a computer?
4. Bubble, Insertion, and Selection sort all have the same worst-case runtimes. However, Insertion sort is actually incredibly fast if the array is already mostly sorted. Why does Insertion sort adapt so well to nearly-sorted data, while Selection sort does not?


## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program attached to Google Classroom
- [ ] Attach your graph to Google Classroom
- [ ] Answers to the reflection questions, either written or in person. 


## Rubric
- **6 points** - All required items are present.
- **5 points** - Task was completed, but supplementary materials are weak or missing.
- **4 points** - Task was attempted, but is missing major components.
- **3 points** - Did not attempt or student should reattempt.