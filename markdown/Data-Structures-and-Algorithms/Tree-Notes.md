# Tree Notes 

## Vocabulary

| Vocabulary| Description |
| ----------- | ----------- |
| tree | A graph of connected nodes with no cycles(there is no way to get back to the original node) |
| binary tree | A tree where each node can have 0-2 children |
| binary search tree | A binary tree where each node less than or equal to another node is placed on the left and every node greater than the original node is placed on the right |
| balanced tree | A tree with log(n) levels |
| unbalanced tree | A tree with n levels |
| AVL tree | A type of self-balancing binary search tree that is balanced by calculating the balance factor of each node. Each balance factor must be 0, -1, or 1. |
| balance factor | The height of left subtree – height of right subtree |

## Trees

**Trees** are sets of connected nodes with no **cycles**. **Cycles** occur when a node can be reached again by following the edges, forming a loop. 

<img src="/assets/tree-notes-figure-1.png">

We typically describe the relationship between nodes in a tree similarly to familial relationships. The **parent** of a node has **child** nodes that it points to. 

<img src="/assets/tree-notes-figure-2.png">

### Tree Vocabulary

The **level** of a node in a tree can be found by counting down from the top of the tree. 

<img src="/assets/tree-notes-figure-4.png">

The **level** of a node is the same as the **depth** of a node. The **height** of a node can be found by counting up from the bottom of the tree. The **height of the tree** is the height of the root node. 

<img src="/assets/tree-notes-figure-5.png">

## Binary Search Trees

Each node in a **binary tree** has between 0 and 2 children. **Binary search trees** are binary trees where each left child is smaller than or equal to the node and each right child is greater than the node.

<img src="/assets/tree-notes-figure-3.png">

### Adding to a Binary Tree

To add to a binary tree, you place the node so that it is to the left of nodes it is smaller than or equal to and to the right of nodes it is larger than.

As an example, add the following items **in order** to a binary search tree: 10, 17, 19, 8, 9, 2

<img src="/assets/tree-notes-figure-10.png">

### Removing from a Binary Tree

There are three different ways to remove a node based on how many children it has. 
- **If a node has no children**, delete it 
- **If a node has 1 child**, delete it and replace it with its child's subtree
- **If a node has 2 children**, delete it, replace it with its left child's subtree and reinsert the right child's subtree into the tree.

In the following tree, we will delete 2, then 8, then 10.

<img src="/assets/tree-notes-figure-11.png">

### Three Ways to Traverse a Binary Tree

#### Pre-order

In a **pre-order traversal**, you write down the name of the root first, then the left child, then the right child. 

<img src="/assets/tree-notes-figure-6.png">

Given a pre-order traversal, you can reconstruct the original tree. Try it for yourself by creating a tree for the pre-order traversal: 10, 8, 2, 9, 17, 19. 

<details>
<summary>Click here to view the answer</summary>

<img src="/assets/tree-notes-figure-9.png">

</details>

#### In-order

In a **in-order traversal**, you write down the name of the left child first, then the root, then the right child. 

<img src="/assets/tree-notes-figure-7.png">

#### Post-order

In a **post-order traversal**, you write down the name of the left child first, then the right child, then the root. 

<img src="/assets/tree-notes-figure-8.png">

### Runtime

Let's look at our balanced and unbalanced trees again.

<img src="/assets/tree-notes-figure-12.png">

How many levels does a balanced tree have when $n$ elements have been added? How many levels does an unbalanced have when $n$ elements have been added?

<img src="/assets/tree-notes-figure-13.png">

In the **worst-case**, we would need to search all $n$ elements in an unbalanced tree. In the **best-case**, we would need to search only $log(n)$ elements in a balanced tree.

## AVL Trees

An **AVL tree**(named after inventors Adelson-Velsky and Landis) is a self-balancing binary search tree where the height difference (**balance factor**) of left and right subtrees for any node is between -1 and 1.

### Balance Factor

To understand how an AVL tree stays balanced, we need to compute each node's balance factor. The **balance factor** of a node is the height of its left subtree - the height of its right subtree. 

Let's compute the balance factors of the nodes on this tree.

<img src="/assets/tree-notes-figure-14.png">

### Adding to an AVL Tree

To add to an AVL tree, we first add the element like we would to a regular binary search tree. Then we compute the balance factor for each node and if the factor is greater than 1 or less than -1, we rotate the nodes to rebalance the tree.

Let's walk through an example and see how each of the 4 rotations work.

First add 10, then 8, then 2 to a binary search tree. Notice that 10 now has a balance factor of 2! This is an example of the **left-left** case. Since 10 is the lowest node with an incorrect balance factor and this is a left-left case, we rotate right at 10. 

<img src="/assets/tree-notes-figure-15.png">

Now let's add 0 and 1. This is an example of the **left-right** case. Since 2 was the lowest node with an incorrect balance factor and this is a left-right case, we rotate left first and then right. 

<img src="/assets/tree-notes-figure-16.png">

The **right-right** and **right-left** cases are symetrical to **left-left** and **left-right** cases.

### Removing from an AVL Tree

When removing from an AVL tree, we will need to find a replacement node for the target we are deleting. 

The replacement can be either:

- The inorder successor — the smallest value in the right subtree, which is the next greater value than the target node.
- The inorder predecessor — the largest value in the left subtree, which is the next smaller value than the target node.

Once the replacement node is chosen, we replace the target node’s value with that node’s value, and then delete the replacement node, which will now fall under the "no childen" case or the "one child" case. 