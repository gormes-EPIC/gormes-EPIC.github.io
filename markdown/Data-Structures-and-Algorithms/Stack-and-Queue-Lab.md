# Stack and Queue Lab

## Objective

1. Implement a stack and queue class using an **array** of integer values. 
2. Program in teams of two, where one person completes `Stack` and the other completes `Queue`.

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| stack  | an abstract data structure that follows the "last in, first out" property |
| queue  | an abstract data structure that follows the "first in, first out" property |

## Your Task

- Create a class `Stack` which implements a simple stack using an array of integer values and contains the following methods.
	- `void push(int element)`: push element onto the top of the stack
	- `int pop()`: removes and returns the top of the stack. Throws EmptyStackException if the stack is empty.
	- `int peek()`: returns, but does not remove, the top of the stack. Throws EmptyStackException if the stack is empty.
	- `int size()`: returns the number of elements in the queue.
	- `bool isEmpty()`: returns true if there are no elements in the stack, false otherwise.
- Create a class `Queue` which implements a simple queue using an array of integer values and contains the following methods.
	- `add(int element)`: adds element to the queue.
	- `remove()`: removes and returns the head of the queue. Throws NoSuchElementException if the queue is empty.
	- `peek()`: returns, but does not remove, the head of the queue. Throws NoSuchElementException if the queue is empty.
	- `size()`: returns the number of the elements in the queue.
	- `isEmpty()`: returns true of there are no elements in the queue, false otherwise.
- For each class, add appropriate Javadoc comments and generate Stack.HTML and Queue.HTML for your classes. **Include the runtime of each method in each Javadoc comment description.**

## Tips, Tricks, and Resources
- To copy arrays easily, you can use the built in Java method: ` System.arraycopy();`
- [Stacks and Queues](https://www.andrew.cmu.edu/course/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html)

## Extensions
1. Change your implementation to use a linked list instead. How would this affect the runtime of your solution.

## Reflection Questions
1. What is the fundamental principle behind a stack?
2. In what situations would using a stack be beneficial?
3. What is the fundamental principle behind a queue?
4. In what situations would using a queue be beneficial?


## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program with Javadoc comments attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person

## Rubric
- **6 points** - All required items are present.
- **5 points** - Task was completed, but supplementary materials are weak or missing.
- **4 points** - Task was attempted, but is missing major components.
- **3 points** - Did not attempt or student should reattempt.