# Doubly Linked List Lab

## Objective

1. Create a `Node<E>` class that uses generics to hold a value and the previous and next nodes in the list.
2. Use `Node` to build a `DoublyLinkedList` class that implements a `List` interface.
3. Test your list with JUnit.

## Vocabulary

| Vocabulary| Description |
| ----------- | ----------- |
| linked list | An ordered collection of nodes that each point to the next node in the list |
| doubly linked list | A linked list where each node also points to the node before it |
| node | A single element of a linked list |
| interface | A class-like construction that defines the required method headers each class that implements it must use |
| generics | A programming feature that lets classes, interfaces, and methods work with many data types, like the `E` in `List<E>` |
| JUnit | A framework for writing and running test cases in Java |
| code coverage | The percentage of your program's lines that your tests run |

## Your Task

You will build your own doubly linked list, then test it with JUnit.

Following the steps below, you will create the following:

1. A [`List` interface](#interface)
2. A [`Node<E>` class](#node)
3. A [`DoublyLinkedList<E>` class](#list) that implements `List`
4. A [`DoublyLinkedListTest` class](#junit) of JUnit tests
5. [Javadoc comments](#javadoc) for `Node` and `DoublyLinkedList`

Test each method as soon as you write it.

### <a id="interface"></a>Step 1: The `List` Interface

Create a new **interface** `List.java` with the following contents.

```java
public interface List<E> {

    /**
     * Add an element to the end of the list
     * @param element element to add to the list
     */
    public void add(E element);

    /**
     * Add an element to the list at index i
     * If index is invalid, throws IndexOutOfBoundsException
     * @param i index of the element
     * @param element element to add to the list
     */
    public void add(int i, E element) throws IndexOutOfBoundsException;

    /**
     * Removes the last element from the list
     * @return the element that was removed
     */
    public E remove();

    /**
     * Remove element at index i
     * If index is invalid, throws IndexOutOfBoundsException
     * @param i index of the element to remove
     * @return the element that was removed
     */
    public E remove(int i) throws IndexOutOfBoundsException;

    /**
     * Gets the element at index i
     * If index is invalid, throws IndexOutOfBoundsException
     * @param i index of the element
     * @return the element
     */
    public E get(int i) throws IndexOutOfBoundsException;

    /**
     * Sets the element at i to a new value
     * If index is invalid, throws IndexOutOfBoundsException
     * @param i index of the element to set
     * @param element new value of the element
     */
    public void set(int i, E element) throws IndexOutOfBoundsException;

    /**
     * Returns the size of the list
     * @return the size of the list
     */
    public int size();

    /**
     * Returns true if the list is empty and false if there are elements
     * @return true if the list is empty
     */
    public boolean isEmpty();

    /**
     * Prints out the list in the format [value1, value2, value3, …]
     * @return a String of the list
     */
    @Override
    public String toString();
}
```

### <a id="node"></a>Step 2: The `Node<E>` Class

A `Node<E>` holds a value of any type, plus the previous node and the next node. When there is no previous or next node, that value is `null`.

Choose the instance variables, constructors, and getters and setters you need, keeping in mind how `DoublyLinkedList` will use them. Your `Node` class also needs:

| Method | What it does |
| --- | --- |
| `String toString()` | Overrides `toString()` to return the node's value. |
| `boolean equals(Node<E> node)` | Overloads `equals()`. Returns `true` if the nodes are equivalent, `false` otherwise. |

This program should print `rubber goose`, then `false`:

```java
Node<String> first = new Node<>("obtuse");

Node<String> next = new Node<>("rubber goose");
first.setNextNode(next);
next.setPrevNode(first);

Node<String> after = new Node<>("guava juice", next);
next.setNextNode(after);
System.out.println(after.getPrevNode().getValue()); // rubber goose

Node<String> last = new Node<>("giant snake");
System.out.println(next.equals(last)); // false
```

> This is not a full test of your class. You are responsible for testing your own program.

### <a id="list"></a>Step 3: The `DoublyLinkedList<E>` Class

Create a class `DoublyLinkedList<E>` that implements your `List` interface using `Node<E>`.

- It needs every method in the interface. Each one should do what its comment says and throw the exceptions it lists.
- It needs a default constructor that creates an empty list.
- You can add any private helper methods or private instance variables you need.

> **IntelliJ tip:** write the header `public class DoublyLinkedList<E> implements List<E>`. Click the red error, press **Alt+Enter**, and pick **Implement methods**. Check **Copy JavaDoc** to bring the interface's comments along.

This program should print the results in the comments:

```java
DoublyLinkedList<Integer> list = new DoublyLinkedList<>();
list.add(10);
list.add(20);
list.add(30);
System.out.println(list.toString()); // [10, 20, 30]

list.add(2, 40);
list.add(0, 5);
list.set(2, 50);
System.out.println(list.toString()); // [5, 10, 50, 40, 30]

list.remove(4);
list.remove(2);
System.out.println(list.size()); // 3
System.out.println(list.toString()); // [5, 10, 40]
```

| Code | Expected result |
| --- | --- |
| `toString()` on an empty list | `[]` |
| `isEmpty()` on an empty list | `true` |
| `remove()` on `[5, 10, 40]` | returns `40`, and the list is `[5, 10]` |
| `get(5)` on a list of size 3 | throws `IndexOutOfBoundsException` |
| `add(-1, 7)` | throws `IndexOutOfBoundsException` |

### <a id="junit"></a>Step 4: JUnit Tests

From now on, you will write JUnit tests for all of your projects. For this lab, put your tests in a class called `DoublyLinkedListTest`.

> **IntelliJ tip:** click on your class header, press **Alt+Enter**, and pick **Create test**. Check the methods you want to test, and IntelliJ makes the test class for you. If JUnit is underlined in red, press **Alt+Enter** again to add it to your project.

The quality of your tests matters more than how many you write:
- **Test that it works:** check that each method gives the right answer.
- **Test that it breaks correctly:** check that bad input, like an invalid index, throws the right exception. These **edge cases** are hard to think of, but they're often the most valuable tests.
- **Check your code coverage:** run your tests **with Coverage** to see what percentage of your `DoublyLinkedList` lines they run. Aim for at least **80%**. The first 80% is usually easy; the last 20% is the tricky part.

### <a id="javadoc"></a>Step 5: Javadoc

Add Javadoc comments to your `Node` and `DoublyLinkedList` classes and each of their methods. See Step 3 of the [Stack and Queue Lab](#Data-Structures-and-Algorithms/Stack-and-Queue-Lab) if you need a refresher.

Your test class doesn't need Javadoc, but it should still have inline comments and follow style conventions, so someone else can tell what each test checks.

## Tips, Tricks, and Resources
- [Getting Started with JUnit 5](https://www.jetbrains.com/help/idea/junit.html)
- [Creating Tests](https://www.jetbrains.com/help/idea/create-tests.html)
- [Running Tests with Coverage](https://www.jetbrains.com/help/idea/running-test-with-coverage.html#run-config-with-coverage)
- [Reading the Coverage Report](https://www.jetbrains.com/help/idea/viewing-code-coverage-results.html)

## Extensions
1. Build an **LRU cache**. Web browsers, databases, and operating systems use one to manage memory by throwing out the least recently used items first. Combine your doubly linked list with a Hash Map: the list keeps track of how recently each item was used, and the Hash Map finds any node instantly. Every time an item is used or added, move it to the head of the list. When the cache is full, remove the node at the tail (the least recently used) from both the list and the map.

## Reflection Questions
1. In what situation would you use an `ArrayList` over a `LinkedList` and vice versa?
2. Why is accessing an element by its index an O(n) operation in a linked list, whereas it is O(1) in an array?
3. What specific limitations of a singly linked list do doubly linked lists or circular linked lists solve?

## How to Submit

Attach your GitHub repository, with your test class, to Google Classroom. Then, show your instructor your GitHub repository and demonstrate your working program and your tests' code coverage in class. You will also need to answer the reflection questions, either written or in person.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.
