# Heap Exercises

### Exercise 1

Trace the insertion of the following sequence of elements into an initially empty Min-Heap: `[15, 8, 20, 5, 12]`. What is the final array representation of the heap?

<details>

<summary>Click here to view the answer</summary>

1.  **Insert 15:** Array is `[15]`
2.  **Insert 8:** Array is `[15, 8]`. Sift up: $8 < 15$, so swap. Array becomes `[8, 15]`.
3.  **Insert 20:** Array is `[8, 15, 20]`. Sift up: $20 > 8$, no swap needed.
4.  **Insert 5:** Array is `[8, 15, 20, 5]`. Sift up: $5 < 15$, swap $\rightarrow$ `[8, 5, 20, 15]`. $5 < 8$, swap $\rightarrow$ `[5, 8, 20, 15]`.
5.  **Insert 12:** Array is `[5, 8, 20, 15, 12]`. Sift up: $12 > 8$, no swap needed.

The final array representation is `[5, 8, 20, 15, 12]`.

</details>

### Exercise 2

Given the following Max-Heap represented as an array: `[50, 30, 40, 10, 20, 35, 15]`. Trace the state of the array after calling `removeMax()` once.

<details>

<summary>Click here to view the answer </summary>

1.  `removeMax()` removes the root (the maximum value, $50$).
2.  Replace the root with the last element in the heap ($15$): `[15, 30, 40, 10, 20, 35]`
3.  Sift down the new root ($15$). Compare it with its children ($30$ and $40$).
4.  Since this is a Max-Heap, swap $15$ with its largest child ($40$). Array becomes: `[40, 30, 15, 10, 20, 35]`
5.  Continue sifting down $15$. Compare it with its new children (only $35$ in this case, as it's at index 3, and its left child is at index $2(3) = 6$, which holds $35$).
6.  Swap $15$ with $35$.

The final 1-indexed array representation is `[40, 30, 35, 10, 20, 15]`.

</details>

### Exercise 3

In a array representation of a binary heap, what are the mathematical formulas to find the left child, right child, and parent of a node located at index $i$?

<details>

<summary>Click here to view the answer</summary>

  * **Left child:** $2i + 1$
  * **Right child:** $2i + 2$
  * **Parent:** $\lfloor(i - 1) / 2\rfloor$ (integer division of $(i - 1)$ by $2$)

</details>



### Exercise 4

Show the resulting min heap when the following data is inserted: EPICCAMPUS

<details>

<summary>Click here to view the answer</summary>

<img src="/assets/heap-ex-2.png">

</details>


### Exercise 5

Show the resulting max heap when the following data is inserted: PENGUINSROCK


<details>

<summary>Click here to view the answer</summary>

<img src="/assets/heap-ex-3.png">

</details>


### Exercise 6

Are the following **complete trees**? Why or why not?

<img src="/assets/heap-ex-1.png">

<details>

<summary>Click here to view the answer</summary>

- (a) is not a complete tree. All of the leaves are on the same row, but are not as far left as possible.   
- (b) is a complete tree. All the leaves are on the same row and are as far left as possible.

</details>


### Exercise 7

Tell whether each is a valid heap or not. 

<img src="/assets/heap-ex-4.png">

<details>

<summary>Click here to view the answer</summary>

- (a) This is not a complete tree and therefore not a heap. 
- (b) This is a heap. It is a complete tree and it fulfills the max heap property.
- (c) This is not a heap. 25 and 19 violate the min heap property.

</details>

### Exercise 8

Build the max heap from the following set of data:  50, 23, 11, 14, 52, 66, 19, 20, 13.

Then, draw the array that corresponds to the heap.

<details>

<summary>Click here to view the answer</summary>

<img src="/assets/heap-ex-5.png">

The array that corresponds to the heap above is `[66,50,52,20,23,11,19,14,13]`.

</details>

### Exercise 9

Show the resulting heap when the max is removed from the heap in Exercise 8.

<details>

<summary>Click here to view the answer</summary>

<img src="/assets/heap-ex-6.png">

</details>

### Exercise 10

Give the following heap:

<img src="/assets/heap-ex-7.png">

Show the resulting array when 33 and 17 are added to the heap (in that order).

<details>

<summary>Click here to view the answer</summary>

The array is `[17, 25, 51, 42, 33, 60, 69, 49, 44, 47]`

</details>

### Exercise 11

Show the heap after the minimum has been removed from the heap in Exercise 10.

<details>

<summary>Click here to view the answer</summary>

The array is `[25, 33, 51, 42, 47, 60, 69, 49, 44]`

</details>