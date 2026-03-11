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
