# Quad Sorts Lab: Checklist

> **The goal:** program bubble, selection, insertion, and merge sort, then time and graph them to see how their speed changes as the array gets bigger.

## Step 1: Get Set Up

- [ ] Create a new IntelliJ project and share it on GitHub. The [Object Review Lab](#Data-Structures-and-Algorithms/Object-Review-Lab) has the steps if you need a refresher.
- [ ] Create a class called `QuadSorts`. All four sorting methods go here.
- [ ] Create a `main` method you can use to test each sort as you go. Every sort should turn `{5, 2, 9, 1, 7}` into `{1, 2, 5, 7, 9}`.

<details>
<summary>Stuck on printing an array?</summary>

Printing an array directly shows a memory address. Use `Arrays.toString()` instead:

```java
import java.util.Arrays;

int[] nums = {5, 2, 9, 1, 7};
System.out.println(Arrays.toString(nums)); // [5, 2, 9, 1, 7]
```

</details>

## Step 2: Bubble Sort

Go through the array and swap any two neighbors that are out of order. Keep making passes until a pass makes no swaps.

- [ ] Watch bubble sort run on [VisuAlgo](https://visualgo.net/en/sorting).
- [ ] Trace it by hand on `{5, 2, 9, 1, 7}`. Write down the array after each pass.
- [ ] Write `public static int[] bubbleSort(int[] arr)`.
- [ ] Test it on `{5, 2, 9, 1, 7}`.
- [ ] Commit and push your code to GitHub.

## Step 3: Selection Sort

Find the smallest element and swap it to the front. Then find the smallest of the rest and swap it into the second spot, and so on.

- [ ] Watch selection sort run on [VisuAlgo](https://visualgo.net/en/sorting).
- [ ] Trace it by hand on `{5, 2, 9, 1, 7}`. Write down the array after each swap.
- [ ] Write `public static int[] selectionSort(int[] arr)`.
- [ ] Test it on `{5, 2, 9, 1, 7}`.
- [ ] Commit and push your code to GitHub.

## Step 4: Insertion Sort

Treat the start of the array as a sorted section. Take the next element and slide it left into the right spot in the sorted section. Repeat until every element is in the sorted section.

- [ ] Watch insertion sort run on [VisuAlgo](https://visualgo.net/en/sorting).
- [ ] Trace it by hand on `{5, 2, 9, 1, 7}`. Write down the array after each element is inserted.
- [ ] Write `public static int[] insertionSort(int[] arr)`.
- [ ] Test it on `{5, 2, 9, 1, 7}`.
- [ ] Commit and push your code to GitHub.

## Step 5: Merge Sort

Merge sort is **recursive**.

**Base case:** an array with 0 or 1 elements is already sorted.

**Recursive case:** split the array in half, merge sort each half, then merge the two sorted halves into one sorted array.

- [ ] Watch merge sort run on [VisuAlgo](https://visualgo.net/en/sorting).
- [ ] Draw a recursion tree or a stack diagram for merge sort on `{5, 2, 9, 1, 7}`.
- [ ] Write a helper method that merges two sorted arrays into one sorted array.
- [ ] Test your helper: merging `{2, 5, 9}` and `{1, 7}` should give `{1, 2, 5, 7, 9}`.
- [ ] Write `public static int[] mergeSort(int[] arr)`.
- [ ] Test it on `{5, 2, 9, 1, 7}`.
- [ ] Commit and push your code to GitHub.

<details>
<summary>Stuck on splitting the array?</summary>

`Arrays.copyOfRange(arr, start, end)` makes a new array from index `start` up to, but not including, `end`.

```java
int[] nums = {5, 2, 9, 1, 7};
int[] firstTwo = Arrays.copyOfRange(nums, 0, 2); // [5, 2]
```

</details>

## Step 6: Time Your Sorts

- [ ] Create a new class called `SortingTester`.
- [ ] Write code that makes a random `int` array of any size n.
- [ ] Time one sort: call `System.currentTimeMillis()` right before and right after it. The difference is how many milliseconds it took.
- [ ] Time all four sorts for n = 100, 1,000, 10,000, 100,000, and 1,000,000.
- [ ] Give each sort its **own copy** of the same random array. If you sort the same array twice, the second sort gets an array that's already sorted.
- [ ] Record your results in a table like this:

| n | Bubble | Selection | Insertion | Merge |
| --- | --- | --- | --- | --- |
| 100 | | | | |
| 1,000 | | | | |
| 10,000 | | | | |
| 100,000 | | | | |
| 1,000,000 | | | | |

*Note: Bubble sort (and maybe others) will take too long at the biggest sizes. If a sort takes more than a few minutes, stop it and write "too long."*

- [ ] Commit and push your code to GitHub.

## Step 7: Graph Your Results

- [ ] Put your table into Google Sheets or a similar program.
- [ ] Make a line graph with n on the x-axis and time in milliseconds on the y-axis, with one line per sort.
- [ ] Add a title, axis labels, and a legend.
- [ ] *Optional:* try a logarithmic scale on the x-axis. n grows by 10 times each row, so this spreads the points out.

## Step 8: Reflect and Submit

- [ ] Answer the reflection questions:
  - [ ] What is the runtime of each of the 4 sorting algorithms you programmed in this lab?
  - [ ] Why is considering the runtime of your programs important?
  - [ ] Why do we use Big O notation instead of just measuring how many seconds an algorithm takes to run on a computer?
  - [ ] Bubble, Insertion, and Selection sort all have the same worst-case runtimes. However, Insertion sort is actually incredibly fast if the array is already mostly sorted. Why does Insertion sort adapt so well to nearly-sorted data, while Selection sort does not?
- [ ] Make sure all your code is pushed to your GitHub repository.
- [ ] Attach your GitHub repository and your graph to Google Classroom.
- [ ] ✋ Show your instructor your GitHub repository and demonstrate your working program.

## Extensions (Optional)

- [ ] Add Quick Sort to your `QuadSorts` class and to your graph.
