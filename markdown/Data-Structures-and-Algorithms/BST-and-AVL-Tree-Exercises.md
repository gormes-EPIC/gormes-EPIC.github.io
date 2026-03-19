# BST and AVL Tree Exercises

### Exercise 1

Create a binary search tree with the letters: ALANTURING

<details>
<summary>Click here to view the answer</summary>

<img src="/assets/bst-and-avl-ex-1.png">

</details>



### Exercise 2

Create a binary search tree with the numbers: 18, 23, 10, 5, 6, 10, 23, 45, 60

<details>
<summary>Click here to view the answer</summary>

<img src="/assets/bst-and-avl-ex-2.png">

</details>


### Exercise 3

Create an AVL tree with the numbers: 50, 45, 20, 35, 38, 76, 65

<details>
<summary>Click here to view the answer</summary>

<img src="/assets/bst-and-avl-ex-3.png">

</details>

### Exercise 4

Create an AVL tree with the numbers: COMPUTER

<details>
<summary>Click here to view the answer</summary>

<img src="/assets/bst-and-avl-ex-4.png">

</details>

### Exercise 5

Delete the root node from this binary search tree and redraw the tree.

<img src="/assets/bst-and-avl-ex-5.png">

<details>
<summary>Click here to view the answer</summary>

<img src="/assets/bst-and-avl-ex-5-answer.png">

</details>

### Exercise 6
Draw the BST created by inserting this exact sequence: 50, 30, 70, 20, 40, 60, 80. Next to it, draw the BST created by inserting the exact same numbers, but sorted: 20, 30, 40, 50, 60, 70, 80.

In Big O notation, what is the worst-case runtime to search each tree.

<details>
<summary>Click here to view the answer</summary>

<img src="/assets/bst-and-avl-ex-6.png">

The one on the left is $O(log(n))$ in the worst-case. The one on the right is $O(n)$ in the worst case. 

</details>

### Exercise 7

Give the pre-order, in-order, and post-order traversals of the following tree.

<img src="/assets/bst-and-avl-ex-7.png">

<details>
<summary>Click here to view the answer</summary>

- **Pre-order:** 50, 30, 20, 25, 40, 70, 60, 55, 80
- **In-order:** 20, 25, 30, 40, 50, 55, 60, 70, 80 
- **Post-order:** 25, 20, 40, 30, 55, 60, 80, 70, 50

</details>

### Exercise 8 

Calculate the balance factor of each node in this AVL tree.

<img src="/assets/bst-and-avl-ex-8.png">

<details>
<summary>Click here to view the answer</summary>

<img src="/assets/bst-and-avl-ex-8-answer.png">

</details>


### Exercise 9

What is the minimum possible number of nodes in an AVL tree of height 3? What is the maximum number of nodes?

<details>
<summary>Click here to view the answer</summary>

Minimum: 8, Maximum: 15

</details>


### Exercise 10 

What kind of BST traversal allows me to reconstruct the original tree?

<details>
<summary>Click here to view the answer</summary>

A pre-order traversal. 

</details>

### Exercise 11

If an AVL tree guarentees $O(log(n))$ searching time in every case, why would an engineer choose to use a regular BST instead?

<details>
<summary>Click here to view the answer</summary>

If the priority was fast adding and removing, the engineer might choose a BST instead. AVL trees require you to update the balance factor of every node and rotate unbalanced sections. From a memory perspective, AVL trees also require storing a balance factor for each node. 

</details>

### Exercise 12

What would happen if you had an AVL that required the balance factor to be 0 in every case? What would need to be true about your tree?

<details>
<summary>Click here to view the answer</summary>

Every tree would need to have the right number of elements(1, 3, 7, 15, etc.) so all the children are on the same level and each level is completely full. 

</details>

### Exercise 13

Write a function `prune_tree(TreeNode<Integer> root, int min_val, int max_val)`that removes any nodes whose values do not fall within the inclusive range `[min_val, max_val]`. As an example, draw a tree with values 1-10. Then remove all the values outside of [4, 7] inclusive.

<details>
<summary>Refer to this TreeNode<E> class</summary>

```java
import com.sun.source.tree.Tree;

/**
 * A class representing a node in a binary tree
 * @param <E> the kind of elements the tree will hold
 */
public class TreeNode<E extends Comparable<E>> {
    private E value;
    private TreeNode<E> leftChild;
    private TreeNode<E> rightChild;

    /**
     * Creates a new TreeNode
     * @param val - the value held at the node
     * @param left - the left child
     * @param right - the right child
     */
    public TreeNode(E val, TreeNode<E> left, TreeNode<E> right){
        value = val;
        leftChild = left;
        rightChild = right;
    }

    /**
     * Retrieves the left child of this node
     * @return the left child of the node
     */
    public TreeNode<E> getLeftChild(){
        return leftChild;
    }

    /**
     * Retrieves the right child of this node
     * @return the right child of this node
     */
    public TreeNode<E> getRightChild(){
        return rightChild;
    }

    /**
     * Retrieves the value of this node
     * @return the value contained at this node
     */
    public E getValue(){
        return value;
    }

    /**
     * Sets the left child to the node given
     * @param left the new left child node
     */
    public void setLeftChild(TreeNode<E> left){
        leftChild = left;
    }

    /**
     * Sets the right child to the node given
     * @param right the new right child node
     */
    public void setRightChild(TreeNode<E> right){
        rightChild = right;
    }

    /**
     * Sets the value to the value given
     * @param val the new value of the node
     */
    public void setValue(E val){
        value = val;
    }

    /**
     * Compares the values of this node to another node
     * Returns 0 if the two are equal
     * Returns a negative number if value is less than the given node
     * Returns a positive number if it is greater than the given node
     * @param node the node to compare the current node to
     * @return the numerical value of the comparsion between the two nodes
     */
    public int compareTo(TreeNode<E> node){
        return value.compareTo(node.getValue());
    }
}
```

</details>



<details>
<summary>Click here to view the answer</summary>

```java
import com.sun.source.tree.Tree; // Imported as requested

public class TreePruner {

    /**
     * Prunes a Binary Search Tree to only contain values within the inclusive range [min_val, max_val].
     * * @param root The root of the BST
     * @param min_val The minimum allowed value
     * @param max_val The maximum allowed value
     * @return The new root of the pruned BST
     */
    public static TreeNode<Integer> prune_tree(TreeNode<Integer> root, int min_val, int max_val) {
        // Base case: if we reach a null leaf, return null
        if (root == null) {
            return null;
        }

        // 1. Recursively prune the left and right subtrees first (Post-order traversal)
        root.setLeftChild(prune_tree(root.getLeftChild(), min_val, max_val));
        root.setRightChild(prune_tree(root.getRightChild(), min_val, max_val));

        // 2. Evaluate the current node
        int currentValue = root.getValue();

        // If the current node is smaller than the minimum value, 
        // the node itself AND its entire left subtree are out of bounds.
        // We bypass this node and return its pruned right child instead.
        if (currentValue < min_val) {
            return root.getRightChild();
        }

        // If the current node is larger than the maximum value,
        // the node itself AND its entire right subtree are out of bounds.
        // We bypass this node and return its pruned left child instead.
        if (currentValue > max_val) {
            return root.getLeftChild();
        }

        // 3. If the node falls within [min_val, max_val], it is valid. 
        // Return the node itself to be reattached to its parent.
        return root;
    }
}
```


</details>

### Exercise 14

Write the function `find_closest(TreeNode<Integer> root, double target)` which returns the value in the tree closest to the `target` value. As an example, create a tree with the numbers 1-10. For `target = 3.4`, the function would return `3`.

<details>
<summary>Refer to this TreeNode<E> class</summary>

```java
import com.sun.source.tree.Tree;

/**
 * A class representing a node in a binary tree
 * @param <E> the kind of elements the tree will hold
 */
public class TreeNode<E extends Comparable<E>> {
    private E value;
    private TreeNode<E> leftChild;
    private TreeNode<E> rightChild;

    /**
     * Creates a new TreeNode
     * @param val - the value held at the node
     * @param left - the left child
     * @param right - the right child
     */
    public TreeNode(E val, TreeNode<E> left, TreeNode<E> right){
        value = val;
        leftChild = left;
        rightChild = right;
    }

    /**
     * Retrieves the left child of this node
     * @return the left child of the node
     */
    public TreeNode<E> getLeftChild(){
        return leftChild;
    }

    /**
     * Retrieves the right child of this node
     * @return the right child of this node
     */
    public TreeNode<E> getRightChild(){
        return rightChild;
    }

    /**
     * Retrieves the value of this node
     * @return the value contained at this node
     */
    public E getValue(){
        return value;
    }

    /**
     * Sets the left child to the node given
     * @param left the new left child node
     */
    public void setLeftChild(TreeNode<E> left){
        leftChild = left;
    }

    /**
     * Sets the right child to the node given
     * @param right the new right child node
     */
    public void setRightChild(TreeNode<E> right){
        rightChild = right;
    }

    /**
     * Sets the value to the value given
     * @param val the new value of the node
     */
    public void setValue(E val){
        value = val;
    }

    /**
     * Compares the values of this node to another node
     * Returns 0 if the two are equal
     * Returns a negative number if value is less than the given node
     * Returns a positive number if it is greater than the given node
     * @param node the node to compare the current node to
     * @return the numerical value of the comparsion between the two nodes
     */
    public int compareTo(TreeNode<E> node){
        return value.compareTo(node.getValue());
    }
}
```

</details>

<details>
<summary>Click here to view the answer</summary>

```java
public class TreeSearcher {

    /**
     * Finds the integer value in a BST that is closest to the given target decimal.
     * * @param root The root of the BST
     * @param target The decimal number to find the closest integer for
     * @return The integer value in the tree closest to the target
     */
    public static Integer find_closest(TreeNode<Integer> root, double target) {
        // Edge case: Empty tree
        if (root == null) {
            return null; 
        }

        // Initialize the closest value to the root's value
        Integer closest = root.getValue();
        TreeNode<Integer> current = root;

        while (current != null) {
            int currentValue = current.getValue();

            // 1. Check if the current node is strictly closer to the target 
            // than our previously recorded 'closest' value.
            if (Math.abs(target - currentValue) < Math.abs(target - closest)) {
                closest = currentValue;
            }

            // 2. Decide which way to traverse based on the BST property
            if (target < currentValue) {
                // The target is smaller, so the closest match must be to the left
                current = current.getLeftChild();
            } else if (target > currentValue) {
                // The target is larger, so the closest match must be to the right
                current = current.getRightChild();
            } else {
                // We found an exact match (e.g., target was 5.0 and node is 5)
                // We can't get any closer than a difference of 0, so stop searching.
                break;
            }
        }

        return closest;
    }
}

```
</details>

### Exercise 15

For this code segment, draw a memory simulation and the resulting output.

```java
ArrayList<Integer> nums = new ArrayList<Integer>(2);
for(int i = 0; i < 5; i ++){
    nums.add(i * 2 + 1);
}
System.out.println(nums.remove(3));
System.out.println(nums.get(1));
nums.add(10, 2);
nums.add(21, 2);
System.out.println(nums.size());
```

<details>
<summary>Click here to view the answer</summary>

<img src="/assets/bst-and-avl-ex-9.png">

</details>

### Exercise 16

For this code segment, draw a memory simulation and the resulting output.

```java
LinkedList<Integer> nums = new LinkedList<Integer>();
for(int i = 0; i < 5; i ++){
    nums.add(i * 2);
}
System.out.println(nums.remove(2));
System.out.println(nums.get(1));
nums.add(10, 2);
nums.add(21, 2);
System.out.println(nums.size());
```

<details>
<summary>Click here to view the answer</summary>

<img src="/assets/bst-and-avl-ex-10.png">

</details>

### Exercise 17

Assume you have a generic `Node` class that contains a value and a reference to the next node (`next()`). In a `LinkedList` class, you will add a method called `addToFront`, which will add a value to the front of the list. Write the method below. Assume the `LinkedList` has a private instance variable called `headNode`.

<details>
<summary>Click here to view the answer</summary>

```java
public void addToFront(Node<E> node){

    // If the head is null, set the head to the new node
    if(headNode == null){
        headNode = node;
        return;
    }

    // If not, save the head as a temp node, set the head to the new node and connect the new head to the old head.
    Node<E> temp = headNode;
    headNode = node;
    node.setNextNode(temp);
}

```

</details>

### Exercise 18

The following code is supposed to delete the node at a given index. Why does this not work?
```java
public E delete(int index){
    Node<E> temp = headNode;
    Node<E> toReturn = headNode;
    if(headNode == null)
        return null;
    for(int k = 0; k < index-1; k++){
        temp = temp.getNextNode();
    }
    toReturn = temp.getNextNode();
    temp.setNextNode(temp.getNextNode().getNextNode());
    return toReturn.getValue();
}
```

<details>
<summary>Click here to view the answer</summary>

There are two problems. First, of a user calls `delete(0)`, your for loop doesn't run, and the code immediately tries to delete `temp.getNextNode()`. In a zero-indexed world, if index is 0, you need to update the headNode itself. This code completely ignores the possibility of deleting the first element. Second, if you are "walking" down the list with `temp.getNextNode()`, but you never check if `temp` or `temp.getNextNode()` is actually null. If the list has 2 items and I ask to delete index 50, your code will throw a `NullPointerException` as it "marches" off the end of the list.

</details>

### Exercise 19

Write a method that will delete the tail element of a singly `LinkedList`. Assume the `LinkedList` has a private instance variable called `headNode`.

<details>
<summary>Click here to view the answer</summary>

```java
public E removeTail() {
    // Case 1: Empty list
    if (headNode == null) {
        return null;
    }

    E removedValue;

    // Case 2: Only one element
    if (headNode.getNextNode() == null) {
        removedValue = headNode.getValue();
        headNode = null;
        return removedValue;
    }

    // Case 3: Multiple elements
    Node<E> temp = headNode;
    // Look two steps ahead to stop at the second-to-last node
    while (temp.getNextNode().getNextNode() != null) {
        temp = temp.getNextNode();
    }

    removedValue = temp.getNextNode().getValue(); // Capture the data
    temp.setNextNode(null); // Sever the link to the tail
    
    return removedValue;
}

```

</details>


### Exercise 20

For the following tree, trace a breadth-first traversal and a depth-first traversal starting at the root node.

<img src="/assets/tree-ex-figure-1.png">

<details>
<summary>Click here to view the answer</summary>

- Breadth-first: 47, 35, 24, 27, 56, 50, 82
- Depth-first: 47, 35, 56, 24, 50, 82, 27

</details>