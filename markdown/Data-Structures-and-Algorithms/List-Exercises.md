# List Exercises

## Exercise 1

Trace the following program and draw a memory diagram of the resulting `LinkedList`. 
```java
Node<String> head = new Node<>("A");
Node<String> n2 = new Node<>("B");
Node<String> n3 = new Node<>("C");
Node<String> n4 = new Node<>("D");

head.setNextNode(n2);
n2.setNextNode(n3);
n3.setNextNode(n4);

Node<String> p1 = head;
Node<String> p2 = head.getNextNode();
Node<String> p3 = p2.getNextNode();

p1.setNextNode(p3.getNextNode()); 
p3.setNextNode(p1);      
p2.setNextNode(null);    
head = p3;
```

<details>
<summary>Click here to view the answer</summary>

<img src="/assets/list-ex-1.png">

</details>


## Exercise 2

Trace the following program and draw a memory diagram of the resulting `ArrayList`.

```java
ArrayList<Integer> list = new ArrayList<>();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);

int temp = list.get(0);               
list.set(0, list.get(4));            
list.set(4, list.get(1));            
list.set(1, list.get(3));             
list.set(3, temp);                    
list.set(2, list.get(0) + list.get(4)); 
```

<details>
<summary>Click here to view the answer</summary>

<img src="/assets/list-ex-2.png">

</details>

## Exercise 3

What is the best-case and worst-case time complexity of retrieving the last element in an `ArrayList` and a `LinkedList`?

<details>
<summary>Click here to view the answer</summary>

For `ArrayList`
- **best-case**: $O(1)$
- **worst-case**: $O(1)$

For `LinkedList`
- **best-case**: $O(1)$
- **worst-case**: $O(n)$ // Retrieving the last element

</details>


## Exercise 4

Write a method `public static Node<E> reverseList(Node<E> head)` which reverses a list of `Node<E>` nodes. 

<details>
<summary>Click here to view the answer</summary>

```java
public static Node<E> reverseList(Node<E> head) {
    Node<E> current = head;
    Node<E> temp = null;

    // Walk through the list until we hit the end (null)
    while (current != null) {
        // 1. Store the previous node in temp so we don't lose it
        temp = current.getPrevNode();
        
        // 2. Swap the next and prev pointers for the current node
        current.setPrevNode(current.getNextNode());
        current.setNextNode(temp);
        
        // 3. Move to the *next* node in the original sequence.
        // NOTE: Because we just swapped them, the original "next" 
        // node is now temporarily stored in current.getPrevNode()!
        current = current.getPrevNode();
    }

    // After the loop, 'temp' is pointing to the old second-to-last node.
    // Its new 'prev' pointer points to the old last node (our new head).
    // We just need to check if the list was empty or had only 1 node.
    if (temp != null) {
        head = temp.getPrevNode();
    }
    
    return head;
}
```

</details>


## Exercise 5

Write the method `public static void moveZeroes(List<Integer> list)` which moves all the zeros in the list to the end **without** create a new list. This function should swap everything in-place.  


<details>
<summary>Click here to view the answer</summary>

```java

public static void moveZeroes(List<Integer> list) {
    // This pointer keeps track of where the next non-zero number should go
    int insertPos = 0;

    // Step 1: Sweep through the list. If we find a non-zero, lock it into 
    // the insertPos and move our insert position forward.
    for (int i = 0; i < list.size(); i++) {
        if (list.get(i) != 0) {
            list.set(insertPos, list.get(i));
            insertPos++;
        }
    }

    // Step 2: At this point, all the non-zero numbers are packed at the front.
    // The insertPos is currently sitting exactly where the zeros should begin.
    // We just loop from there to the end, overwriting the garbage data with 0s.
    while (insertPos < list.size()) {
        list.set(insertPos, 0);
        insertPos++;
    }
}
```

</details>

## Exercise 6

Write the method `public static void rotateLeft(List<E> list, int k)` shifts all of the elements in the list to the left by `k`.


<details>
<summary>Click here to view the answer</summary>

There are multiple ways to solve this problem. This solution uses the **Reversal Algorithm**. It takes $O(n)$ time and requires no extra memory.

```java
public static void rotateLeft(List<E> list, int k) {
    if (list == null || list.isEmpty() || k <= 0) {
        return;
    }

    int n = list.size();
    
    // If k is larger than the list, we don't need to over-rotate.
    // Rotating a list of size 5 by 6 steps is exactly the same as rotating it by 1 step.
    k = k % n; 

    if (k == 0) return;

    // Step 1: Reverse the first k elements
    reverse(list, 0, k - 1);
    
    // Step 2: Reverse the remaining n-k elements
    reverse(list, k, n - 1);
    
    // Step 3: Reverse the entire list
    reverse(list, 0, n - 1);
}

// Helper method to reverse a specific chunk of the list in-place
private static void reverse(List<E> list, int start, int end) {
    while (start < end) {
        T temp = list.get(start);
        list.set(start, list.get(end));
        list.set(end, temp);
        start++;
        end--;
    }
}
```

</details>

## Exercise 7

If `ArrayList` objects begin with 10 slots in memory and double themselves everytime that capacity is exceeded, how many slots will exist after 1000 elements have been added to the list? How much memory will be taken up if these were added to a `LinkedList` instead?

<details>
<summary>Click here to view the answer</summary>

The `ArrayList` will take up 1280 contiguous spaces in memory and the `LinkedList` will take up 1000 scattered spaces. 

</details>


## Exercise 8

A circular linked list is defined as a linked list whose last node will point back to the head node. Write the `add(int index, E element)` method for `CircularLinkedList`: 

```java
public class CircularLinkedList<E>{ 
    private Node<E> head; 
    private Node<E> tail; 

    public void add(int index, E element){ 
        // Your implementation here
    } 

    public class Node<E>{ 
        private E value; 
        private Node<E> next; 

        public Node(E val, Node<E> n){ /* implem. not shown */ } 
        public E getValue(){ /* implementation not shown */ } 
        public Node<E> getNext(){ /* implem. not shown */ } 
        public void setValue(E val){ /* implem. not shown */ } 
        public void setNode(Node<E> n){ /* implem. not shown */ } 
    } 
}
```

<details>
<summary>Click here to view the answer</summary>

```java
public void add(int index, E element) {
    if (index < 0) {
        throw new IndexOutOfBoundsException("Index cannot be negative.");
    }

    // Case 1: The list is currently empty
    if (head == null) {
        if (index != 0) {
            throw new IndexOutOfBoundsException("List is empty, index must be 0.");
        }
        // Create the new node pointing to null initially
        Node<E> newNode = new Node<>(element, null);
        head = newNode;
        tail = newNode;
        
        // Complete the circle
        tail.setNode(head); 
        return;
    }

    // Case 2: Inserting at the head (Index 0)
    if (index == 0) {
        // New node points to the current head
        Node<E> newNode = new Node<>(element, head);
        head = newNode; // Reassign the head pointer
        
        // The tail must be updated to point to the *new* head to maintain the circle
        tail.setNode(head); 
        return;
    }

    // Case 3: Inserting in the middle or at the tail
    Node<E> current = head;
    int count = 0;

    // Traverse the list to find the node right BEFORE our insertion point (index - 1)
    while (count < index - 1) {
        current = current.getNext();
        count++;
        
        // If we loop all the way back to the head before reaching our index, 
        // the index provided is larger than the size of the list.
        if (current == head) {
            throw new IndexOutOfBoundsException("Index out of bounds: " + index);
        }
    }

    // Create the new node, pointing it to current's next node
    Node<E> newNode = new Node<>(element, current.getNext());
    
    // Point current to our new node, linking it into the chain
    current.setNode(newNode);

    // If we just inserted a node after the tail, our new node is the new tail!
    if (current == tail) {
        tail = newNode;
        // (No need to explicitly set tail.setNode(head) here because 
        // newNode was already set to point to current.getNext(), which was the head).
    }
}
```

</details>


## Exercise 9

Trace the following code. What exception is thrown, and why? How can you modify the code to safely remove the element without throwing an exception?

```java
List<String> list = new ArrayList<>(Arrays.asList("apple", "banana", "cherry"));
for (String fruit : list) {
    if (fruit.equals("banana")) {
        list.remove(fruit);
    }
}
```
<details>
<summary>Click here to view the answer</summary>

This code will throw a `ConcurrentModificationException` because you modified the list as you were using an `Iterator` in a enhanced for loop to traverse the list.

```java
for (int i = list.size() - 1; i >= 0; i--) {
    if (list.get(i).equals("banana")) {
        list.remove(i);
    }
}
```

</details>


## Exercise 10

Assume you have a custom doubly linked list. Write a method `public void insertAfter(Node<E> target, E data)` that inserts a new node containing data immediately after the target node. Assume target is not null and is already a valid node in the list.

<details>
<summary>Click here to view the answer</summary>

```java
public void insertAfter(Node<E> target, E data) {
    // 1. Create the new node
    Node<E> newNode = new Node<>(data);
    
    // 2. Identify the node currently sitting after our target
    Node<E> nextNode = target.getNext();
    
    // 3. Link the new node to its surroundings
    newNode.setPrev(target);
    newNode.setNext(nextNode);
    
    // 4. Update the target node to point forward to the new node
    target.setNext(newNode);
    
    // 5. If the target wasn't the tail, update the next node to point back to the new node
    if (nextNode != null) {
        nextNode.setPrev(newNode);
    }
}
```

</details>


## Exercise 11

You are designing a system that reads a continuous stream of sensor data. You frequently need to add new readings to both the beginning and the end of the sequence, but you rarely need to look up a reading by a specific index.

Which `List` implementation (`ArrayList` or `LinkedList`) is the better choice for this specific scenario, and why?

<details>
<summary>Click here to view the answer</summary>

`LinkedList` is the better choice for this scenario.

Adding an element to the end of either list is generally $O(1)$, though it can be $O(n)$ for `ArrayList`. However, adding an element to the beginning of an ArrayList requires shifting every existing element one index to the right, which takes $O(n)$ time.

A `LinkedList` (specifically a doubly linked list, which is how Java's `LinkedList` is implemented) maintains pointers to both the head and the tail. Adding to the beginning or the end simply requires updating a few pointers, which operates in constant $O(1)$ time. Since you rarely need random access lookups (which is where `ArrayList` excels), `LinkedList` is much more efficient for frequent head/tail insertions.

</details>