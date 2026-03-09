# Autocomplete Trie

## Objective
1.  Understand the structural properties and theoretical advantages of a Trie over standard lists or hash maps for prefix-based searches.
2. Design and implement a custom `TrieNode` class.
3. Implement core Trie operations: insertion, exact search, and prefix matching.
4. Utilize Depth-First Search (DFS) or Breadth-First Search (BFS) to traverse the Trie and gather autocomplete suggestions.

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
|       |  |

## Your Task

Create a program that defines a Trie of nodes where each node represents a character. 

## Getting Started with `TrieNode`

Before building the tree, you need to define its building blocks. Every node in your `Trie` should contain:
- Children: A collection of child nodes
- End of Word Flag: A boolean variable that is set to true if the node represents the final character of a valid inserted word.

## The `Trie` Class

1. This class will manage the root node and contain the algorithms for manipulating the data structure. 
2. It must include the following methods:
    - `void insert(String word):` Takes a string word and inserts it into the `Trie`.
    - `boolean search(String word):` Returns true if the exact string word exists in the `Trie`, and false otherwise.
    - `boolean startsWith(String prefix):` Returns true if there is any word in the `Trie` that starts with the given prefix.
    - `ArrayList<String> autocomplete(prefix):` Returns a list of all valid words in the `Trie` that begin with the given prefix.
    - `void loadWordList(filename):` Adds all the words in the wordlist to the `Trie`

## Tips, Tricks, and Resources
- 

## Extensions
1. 

## Reflection Questions
1. 

## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person

## Rubric
- **6 points** - All required items are present.
- **5 points** - Task was completed, but supplementary materials are weak or missing.
- **4 points** - Task was attempted, but is missing major components.
- **3 points** - Did not attempt or student should reattempt.