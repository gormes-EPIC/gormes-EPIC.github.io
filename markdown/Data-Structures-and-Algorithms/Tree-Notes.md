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

## Binary Search Trees

Each node in a **binary tree** has between 0 and 2 children. **Binary search trees** are binary trees where each left child is smaller than or equal to the node and each right child is greater than the node.
