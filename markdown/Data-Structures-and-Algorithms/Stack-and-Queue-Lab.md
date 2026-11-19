# Stack and Queue Lab

## Objective

1. Implement a stack and queue class using an **array** of integer values.
2. Program in teams of two, where one person completes `Stack` and the other completes `Queue`.

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| stack  | an abstract data structure that follows the "last in, first out" property |
| queue  | an abstract data structure that follows the "first in, first out" property |
| Javadoc | special `/** ... */` comments that Java can turn into a web page describing your class |

## Your Task

You will build your own `Stack` and `Queue` classes. Each one stores its values in an **array** of `int`s.

Following the steps below, you will create the following:

1. A [`Stack` class](#stack)
2. A [`Queue` class](#queue)
3. [Javadoc comments](#javadoc) and the generated `Stack.html` and `Queue.html` pages
4. A [`Main` class](#test) that tests both classes

Work in teams of two: one person writes `Stack`, and the other writes `Queue`. Then swap and review each other's code.

Test each method as soon as you write it.

### <a id="stack"></a>Step 1: The `Stack` Class

A stack is **last in, first out**: the last value you push is the first one you pop.

| Method | What it does |
| --- | --- |
| `void push(int element)` | Pushes `element` onto the top of the stack. |
| `int pop()` | Removes and returns the top of the stack. Throws `EmptyStackException` if the stack is empty. |
| `int peek()` | Returns, but does not remove, the top of the stack. Throws `EmptyStackException` if the stack is empty. |
| `int size()` | Returns the number of elements in the stack. |
| `boolean isEmpty()` | Returns `true` if there are no elements in the stack, `false` otherwise. |

### <a id="queue"></a>Step 2: The `Queue` Class

A queue is **first in, first out**: the first value you add is the first one you remove.

| Method | What it does |
| --- | --- |
| `void add(int element)` | Adds `element` to the back of the queue. |
| `int remove()` | Removes and returns the head of the queue. Throws `NoSuchElementException` if the queue is empty. |
| `int peek()` | Returns, but does not remove, the head of the queue. Throws `NoSuchElementException` if the queue is empty. |
| `int size()` | Returns the number of elements in the queue. |
| `boolean isEmpty()` | Returns `true` if there are no elements in the queue, `false` otherwise. |

> Both exceptions are in `java.util`, so import them at the top of your file.

### <a id="javadoc"></a>Step 3: Javadoc

Add a Javadoc comment to each class and each method. **Include the runtime of each method in its description.**

<details>
<summary>How to write Javadoc comments</summary>

A Javadoc comment starts with `/**` (two stars) and sits right above the class or method it describes.

In IntelliJ, click on the line above a method, type `/**`, and press **Enter**. IntelliJ fills in a tag for each parameter, the return value, and any exception the method throws. You just fill in the descriptions.

```java
/**
 * A simple bank account that keeps track of a balance.
 *
 * @author Your Name
 */
public class BankAccount {
    private double balance;

    /**
     * Takes money out of the account. Runtime: O(1).
     *
     * @param amount how much money to take out
     * @return the balance after the withdrawal
     * @throws IllegalArgumentException if amount is more than the balance
     */
    public double withdraw(double amount) {
        if (amount > balance) {
            throw new IllegalArgumentException("Not enough money");
        }
        balance -= amount;
        return balance;
    }
}
```

| Part | Convention |
| --- | --- |
| First sentence | A short summary of what it does. It shows up in the method list, so start with a verb: "Takes", "Returns", "Adds". |
| `@param` | One per parameter: the parameter's name, then what it means. |
| `@return` | What the method gives back. Leave it out for `void` methods. |
| `@throws` | Each exception the method can throw, and when. |
| `@author` | Your name. Goes in the class comment, not the methods. |

> IntelliJ only adds `@throws` if the method already has `throw` in it, so write the code first, or add the tag yourself.

</details>

#### Generating the HTML

1. Go to **Tools → Generate JavaDoc**.
2. Pick **Whole project** (or your file), and choose an **Output directory**, like a `docs` folder in your project.
3. Click **Generate**. IntelliJ makes the pages and opens them in your browser. Find `Stack.html` and `Queue.html` in the output folder.

### <a id="test"></a>Step 4: Test Your Classes

In a `Main` class, test both classes. For example:

| Code | Expected result |
| --- | --- |
| push `1`, `2`, `3`, then `pop()` | `3` |
| add `1`, `2`, `3`, then `remove()` | `1` |
| `peek()` on a stack holding `1`, `2` | `2`, and `size()` is still `2` |
| `pop()` on an empty stack | throws `EmptyStackException` |
| `remove()` on an empty queue | throws `NoSuchElementException` |

Make sure your classes still work after you add more elements than the array started with.

## Tips, Tricks, and Resources
- To copy arrays easily, you can use the built in Java method: `System.arraycopy();`
- [Stacks and Queues](https://www.andrew.cmu.edu/course/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html)

## Extensions
1. Change your implementation to use a linked list instead. How would this affect the runtime of your solution?

## Reflection Questions
1. What is the fundamental principle behind a stack?
2. In what situations would using a stack be beneficial?
3. What is the fundamental principle behind a queue?
4. In what situations would using a queue be beneficial?

## How to Submit

Attach your GitHub repository, with your Javadoc comments and your `Stack.html` and `Queue.html` pages, to Google Classroom. Then, show your instructor your GitHub repository and demonstrate your working program in class. You will also need to answer the reflection questions, either written or in person.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.
