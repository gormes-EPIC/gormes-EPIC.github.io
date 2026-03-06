# Priority Queue

## Objective

1. 

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| heap | a complete binary tree data structure that satisfies the heap property |
| heap property | for every node, the value of its children is greater than or equal to its own value |
| priority queue | a queue in which the element with highest priority is always at the front of the queue |

## Your Task

Priority queues have a number of applications in programming, such as scheduling jobs for CPU or processing the order of printing jobs. Depending on how the priority is defined (i.e. time entered into queue, length of job, etc.) the average waiting time for jobs to be completed will vary.

In this lab, you will implement your own generic `PriorityQueue` class that will store a queue using a heap. A priority queue is a queue in which the element with highest priority (noted by the “smallest” value for this lab) is always at the front of the queue.

## Creating a Priority Queue

For this assignment, you are to use the provided `PriorityQueue.java` class. You are to fill out all of the stubbed methods for this class. The methods that are labeled private are helper methods that also need to be filled. These can (and should) be used in other methods of this class. Remember to handle the cases when the queue is empty. The toString method should just show the contents of the array (from index 0, up to size – 1).

```java
import java.util.ArrayList;

/**
 * This class represents a Priority Queue (heap) based on the ordering
 * defined by the compareTo method for the element. "Lower" value will
 * mean "higher" priority.
 *
 * @param <E> the type of elements in the queue
 * @author
 */
public class PriorityQueue<E extends Comparable<E>> {

    private ArrayList<E> myHeap; //array representation of the heap

    /**
     * Creates an empty Priority Queue
     */
    public PriorityQueue() {
        myHeap = new ArrayList<E>();
    }

    /**
     * Adds the element to the priority queue
     *
     * @param element the element to be added
     */
    public void add(E element) {

    }

    /**
     * Swaps two elements in the queue.
     * Pre-condition: 0 <= posOne, posTwo < size of queue
     *
     * @param posOne the first element's position in the queue
     * @param posTwo the second element's position in the queue
     */
    private void swap(int posOne, int posTwo) {

    }

    /**
     * Returns whether or not the element is in the heap
     *
     * @param element the element to be searched for
     * @return true if the element is in the queue, false otherwise
     */
    public boolean contains(E element) {
        return false;
    }

    /**
     * Returns the element of highest priority, null if queue is empty.
     * Post-condition: the queue is not changed
     *
     * @return the element of highest priority queue
     */
    public E peek() {
        return null;
    }

    /**
     * Removes and returns the element of highest priority,
     * returns null if queue is empty.
     *
     * @return the element of highest priority
     */
    public E poll() {
        return null;
    }

    /**
     * Will "sift down" the element at the given position
     * down to restore the heap property
     *
     * @param pos the starting position for heapify
     */
    private void heapify(int pos) {

    }

    /**
     * Finds and removes the given element from the queue.
     * Returns true if an element was deleted from the queue,
     * false otherwise.
     *
     * @param element the element to be removed from the queue
     * @return true if an element was removed from the queue, false otherwise
     */
    public boolean remove(E element) {
        return false;
    }

    /**
     * Returns the number of elements in the queue
     *
     * @return the number of elements in the queue
     */
    public int size() {
        return -1;
    }

    /**
     * Returns the String representation of the heap
     * (by the order of list, each element separated
     * with a single space)
     *
     * @return the String representation of the heap
     */
    public String toString() {
        return "toString";
    }


    /**
     * Main method - contains console program used
     * for testing of the PriorityQueue class.
     *
     * @param args
     */
    public static void main(String[] args) {
// TODO Auto-generated method stub

    }

}
```
Your class will be tested with the instructor’s main. Be sure to test yours thoroughly and be sure to NOT change the names of the methods and files in the skeleton. If you would like to add your own helper methods, you are welcome to do so.

## Testing
Please create JUnit tests with 85% coverage for your program.

## Javadoc
Fill in the Javadoc comments and generate a Javadoc HTML reference for your program.

## Tips, Tricks, and Resources
- [Priority Queue in 5 Minutes](https://www.youtube.com/watch?v=7z_HXFZqXqc)
- [Geeks for Geeks](https://www.geeksforgeeks.org/java/priority-queue-in-java/)

## Extensions
1. Implement a constructor that takes an entire unsorted array and uses the bottom-up approach. This should run in linear time instead of O(n log n)

## Reflection Questions
1. When inserting an element, why do we add it to the end and bubble it up? Conversely, when removing the max/min, why do we move the last element to the root and sift it down?
2. Compare the Big O complexity of enqueue and dequeue in your heap-based priority queue versus an implementation using a sorted array. Which one wins for a high volume of insertions?
3. How does the space complexity of this array-based heap compare to a pointer-based binary search tree?

## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person

## Rubric
- **6 points** - All required items are present.
- **5 points** - Task was completed, but supplementary materials are weak or missing.
- **4 points** - Task was attempted, but is missing major components.
- **3 points** - Did not attempt or student should reattempt.