# Heap Notes

A **heap** is a **complete binary tree** data structure that satisfies **the heap property**. Let's break that down.

We have previously defined a **binary tree** as a **tree** where each node has 0, 1, or 2 children. A **complete binary tree** is a binary tree data structure where every level, except possibly the last, is completely filled with nodes, and all nodes in the last level are positioned as far left as possible.

<img src="/assets/heap-notes-figure-2.png">

In addition to being complete binary trees, heaps also fulfill the **heap property**.
- In a **max heap** the **heap property** states that every child must be smaller than its parent. 
- In a **min heap** the **heap property** states that every child must be larger than its parent.

<img src="/assets/heap-notes-figure-3.png">

Notice that heaps do not fulfill properties of **binary search trees**, just **binary trees**.

## Adding to a Heap

To add an element to a heap, you insert the new value at the next available spot, then swap elements upwards to maintain the heap property. 


Let's see an example.

If we want to add 1 to the heap on the left, we start by adding the new element at the next available spot to keep the tree complete. 

<img src="/assets/heap-notes-figure-4.png">

Then, we notice that the heap property has been violated. To fix this, we will swap elements upward until it is a valid heap.

<img src="/assets/heap-notes-figure-5.png">

### Runtime

Since heaps are complete trees, they have $log(n)$ levels by definition. This mean we will need to swap the new element at most $log(n)$ times. The runtime of adding to a heap is $O(log(n))$.


## Removing from a Heap

Typically when we are talking about removing from a heap, we are interested in removing the largest or the smallest element(depending on which kind of heap it is).

If we wanted to remove the head of this min heap, we would first replace it with the right-most node. Then we would compare the new head with its children. If either child is smaller than the head, then we replace the head with the smallest child. This continues down the tree until the heap property is fulfilled.

<img src="/assets/heap-notes-figure-6.png">

### Runtime

Since a heap has at most $log(n)$ levels, we have to swap down at most $log(n)$ times. The runtime of removing from a heap is $O(log(n))$.

## HeapSort

We can take advantage of quickly adding and removing the largest/smallest element to sort elements. If I add all elements I want to sort to a min heap then remove the smallest element over and over again until there are none left, I will have removed each element in a sorted order. 

Let's see an example. First, add 4, 6, 7, 8, 2, 3, 1 to a min heap.

<img src="/assets/heap-notes-figure-8.png">


Then, we can remove the smallest element and record it in the output.

<img src="/assets/heap-notes-figure-9.png">

Now, we can remove the smallest element again and record it in the output.

<img src="/assets/heap-notes-figure-10.png">

This process will continue until there are no elements left.

### Runtime 

The runtime of HeapSort is the sum of the runtime of adding all the elements into the heap and removing all of them from the heap. Adding one element has a runtime of $log(n)$. For $n$ elements, the runtime is $nlog(n)$. The runtime of removing everything is the same, $nlog(n)$. Therefore, HeapSort has a runtime of $O(nlog(n))$. 

## Storing Heaps in an Array

Since heaps are **complete trees**, they are able to be stored in an array. Look at the heap below and the array that holds it. Notice that you can redraw the original heap using just the array if you go layer by layer from left to right.

<img src="/assets/heap-notes-figure-11.png">

It's easy to compute the array index of a node's parent, left child, or right child, given the array index `i` of the node:

- The parent is at index `(i-1)/2` (using integer division).
- The left child is at index `2*i + 1`.
- The right child is at index `2*i + 2`.
