# Quad Sorts Lab

## Objective

1. In this lab, you will learn to implement multiple sorting algorithms
2. Then, you will graph each algorithm to compare its runtime over different inputs of n.

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| Big O Notation | Describes the efficiency, scalability, and performance of an algorithm as the input size n grows |
| Bubble Sort | Sorts an array by continuously swapping adjacent elements |
| Selection Sort | Sorts an array by selecting the smallest element and swapping it to the front |
| Insertion Sort | Sorts an array by separating the array into a sorted and non-sorted section and moving elements one by one into the sorted section |
| Recursive Methods | Methods that call themselves |
| Merge Sort | Sorts an array by recursively separating the array into smaller arrays and merge sorting them |


## Your Task

You will program four sorting algorithms, then time them to see how their speed changes as the array gets bigger.

Following the steps below, you will create the following:

1. A [`bubbleSort` method](#bubble)
2. A [`selectionSort` method](#selection)
3. An [`insertionSort` method](#insertion)
4. A [`mergeSort` method](#merge)
5. A [`SortingTester` class](#tester) that times each sort
6. A [graph](#graph) that compares the four sorts

Put all four sorting methods in a class called `QuadSorts`. Each one is `public static`, takes an `int[]`, and returns the sorted `int[]`.

Test each sort as soon as you write it. Every method should turn `{5, 2, 9, 1, 7}` into `{1, 2, 5, 7, 9}`. *Tip: print arrays with `Arrays.toString(arr)`.*

### <a id="bubble"></a>Step 1: Bubble Sort

`public static int[] bubbleSort(int[] arr)`

Go through the array and swap any two neighbors that are out of order. Keep making passes until a pass makes no swaps.

### <a id="selection"></a>Step 2: Selection Sort

`public static int[] selectionSort(int[] arr)`

Find the smallest element and swap it to the front. Then find the smallest of the rest and swap it into the second spot, and so on.

### <a id="insertion"></a>Step 3: Insertion Sort

`public static int[] insertionSort(int[] arr)`

Treat the start of the array as a sorted section. Take the next element and slide it left into the right spot in the sorted section. Repeat until every element is in the sorted section.

### <a id="merge"></a>Step 4: Merge Sort

`public static int[] mergeSort(int[] arr)`

Merge sort is **recursive**:
- **Base case:** an array with 0 or 1 elements is already sorted.
- **Recursive case:** split the array in half, merge sort each half, then merge the two sorted halves into one sorted array.

> You'll probably want a helper method that merges two sorted arrays into one sorted array.

### <a id="tester"></a>Step 5: The `SortingTester` Class

In a new class `SortingTester`, time each sort on random arrays of size n = 100, 1,000, 10,000, 100,000, and 1,000,000.

- Use `System.currentTimeMillis()` right before and right after a sort. The difference is how many milliseconds it took.
- Give each sort its **own copy** of the same random array. If you sort the same array twice, the second sort gets an array that's already sorted.
- Record your results in a table like this:

| n | Bubble | Selection | Insertion | Merge |
| --- | --- | --- | --- | --- |
| 100 | | | | |
| 1,000 | | | | |
| 10,000 | | | | |
| 100,000 | | | | |
| 1,000,000 | | | | |

*Note: Bubble sort (and maybe others) will take too long at the biggest sizes. If a sort takes more than a few minutes, stop it and write "too long."*

### <a id="graph"></a>Step 6: Graph Your Results

Use Google Sheets or a similar program to make a line graph of your table:
- **x-axis:** n
- **y-axis:** time in milliseconds
- **One line per sort**, with a title, axis labels, and a legend

*Tip: n grows by 10 times each row, so try a logarithmic scale on the x-axis to spread the points out.*

## Tips, Tricks, and Resources
- [VisualAlgo](https://visualgo.net/en/sorting)
- [Other Algorithm Visualizer](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)
- [Another Visualizer](https://algorithm-visualizer.seancoughlin.me/sorting/bubbleSort)
- [W3 Schools](https://www.w3schools.com/dsa/dsa_algo_bubblesort.php)

## Extensions
1. Add Quick Sort to your `QuadSorts` class and to your graph.

## Reflection Questions
1. What is the runtime of each of the 4 sorting algorithms you programmed in this lab?
2. Why is considering the runtime of your programs important?
3. Why do we use Big O notation instead of just measuring how many seconds an algorithm takes to run on a computer?
4. Bubble, Insertion, and Selection sort all have the same worst-case runtimes. However, Insertion sort is actually incredibly fast if the array is already mostly sorted. Why does Insertion sort adapt so well to nearly-sorted data, while Selection sort does not?


## How to Submit

Attach your GitHub repository and your graph to Google Classroom. Then, show your instructor your GitHub repository and demonstrate your working program in class. You will also need to answer the reflection questions, either written or in person.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.