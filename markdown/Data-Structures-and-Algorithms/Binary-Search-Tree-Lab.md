# Binary Search Tree Lab

## Objective

1. Practice binary search trees by implementing one in Java. 

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| tree | a graph with no cycles |
| tree node | an element of a tree that holds a value and points to its children |
| binary tree | a tree where each node had two children |
| binary search tree | a tree where each value smaller than or equal to the node is placed on the left and anything larger than the node is placed on the right |

## Your Task

1. In this lab, you are to implement several methods for a binary search tree. You will also implement a console program that will allow you to test your methods for your search tree efficiently. 


## Getting Started

1. Your final `BST` class should have the following methods:
- `void add(E value)`
- `boolean contains(E value)`
- `int countNodes()` //returns the number of nodes in the tree
- `int countLeafNodes()` //returns the number of leaf nodes in tree
- `int getHeight()` //returns the longest path from the root to a leaf node
- `void printInorder()`
- `void printPreorder()`
- `void printPostorder()`
- `E delete(E value)` //returns the deleted node

## `TreeNode`
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

## Console Program
The console program should allow the following options:
1. Fill the tree from a file
2. Add a value to tree
3. Delete a value from the tree
4. See if tree contains a value
5. Test traversals (pre, in, post)
6. Print stats (nodes, leaf nodes, height)
7. Clear the tree
8. Exit Program

## Testing
You may assume the file to be read will contain only integers. (You may ask the user which it is before you build the tree.) The file will have all the data listed one at a time, each on a new line. If the user enters an invalid entry for the menu, the program will prompt the user for a valid menu entry.

Please create JUnit tests with 85% coverage for your program.

## Javadoc
Add Javadoc comments and generate a Javadoc HTML reference for your program.

## Tips, Tricks, and Resources
- [Learn Binary Search Trees Video](https://www.youtube.com/watch?v=Gt2yBZAhsGM)
- [Geeks for Geeks Trees](https://www.geeksforgeeks.org/dsa/tree-data-structure/) and [Binary Search Trees](https://www.geeksforgeeks.org/dsa/introduction-to-binary-search-tree/)

## Extensions
1. Add the methods `E findMin()`, `E findMax()`, and `boolean isBalanced()`
2. Add a menu options to "Save Tree to File" and "Load Tree from File".

## Reflection Questions
1. Many BST methods (like `getHeight`, `countNodes`, and the traversals) are most easily written using recursion. Choose one of your recursive methods and explain the "base case" and the "recursive step."
2. What is the Big O time complexity for your contains method in the best-case scenario versus the worst-case scenario?
3. Imagine reading a file where the numbers are perfectly sorted from smallest to largest (e.g., 1, 2, 3, 4, 5). What would the structure of your resulting BST look like? How does this shape affect the efficiency of your tree?

## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program and tester attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person

## Rubric
- **6 points** - All required items are present.
- **5 points** - Task was completed, but supplementary materials are weak or missing.
- **4 points** - Task was attempted, but is missing major components.
- **3 points** - Did not attempt or student should reattempt.