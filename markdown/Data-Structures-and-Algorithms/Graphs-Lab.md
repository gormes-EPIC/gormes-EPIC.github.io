# Graphs Lab

## Objective

1. Practice graphs by implementing them in Java
2. Traverse graphs with depth-first and breadth-first search

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| undirected graph | a set of connected vertices where you can traverse each edge both ways |
| vertex | an element of a graph that is connected to other vertices via an edge |
| edge | the connection between two verticies |

## Your Task

In this lab, you will write a `Graph` class that represents a simple, undirected graph. 

## Getting Started

A graph object carries a set of vertices. To your project, you will need to add two classes: 

## `Vertex` 

- Each vertex will carry a label/name, an indicator of whether or not this vertex has been visited, and an adjacency list (what other vertices is it connected to?) 
- To make an instance of this class, the client must provide a label/name 
- Contains appropriate mutators/accessors for the fields
- toString method for the vertex (gives the name of the vertex followed by a list of its neighbors in this format: `A [C, D, F, G]` //A is the vertex; it is connected to C, D, F, and G) 

## `Graph` 

-  Each graph has a HashMap of vertices (label is the key, vertex object is the value). 
- Contains a default constructor that creates an empty set of vertices
- The following methods: 
	- `void addEdge(String startLabel, String endLabel)` 
		- Adds an edge between the vertices by the given names (updates their adjacency lists)
		- If a vertex does not exist in the graph, then it will be added to the graph before the adjacency lists are updated
	- `void addEdgesFromFile(String fileName)` 
		- Reads from the file of the specified name and adds the edges listed in the file
		- The file will contain several lines of text. Each line will contain two vertex labels (separated by a space) between which an edge exists. 
	- `ArrayList<Vertex> depthFirstTraversal(String label)`
		- Generates a list of vertices in the order of visitation that is a valid depth first traversal of all vertices starting at the vertex with the given label
		- If the vertex does not exist, an empty list will be returned
	- `ArrayList<Vertex> breadthFirstTraversal(String label)`  
		- Generates a list of vertices in the order of visitation that is a valid breadth first traversal of all vertices starting at the vertex with the given label
		- If the vertex does not exist, an empty list will be returned
	- `String toString()`
		- Returns information about each of the vertices contained in the Graph (the values() method in HashMap will be useful to you) 

## Testing and Javadoc

Make sure your code has a Javadoc file and a tester with 85% coverage. 

## Tips, Tricks, and Resources
- [Geeks for Geeks](https://www.geeksforgeeks.org/dsa/graph-data-structure-and-algorithms/)
- [W3 Schools](https://www.w3schools.com/dsa/dsa_theory_graphs.php)

## Extensions
1. Add a method `ArrayList<Vertex> shortestPath(String start, String end)` that finds the shortest path(by number of verticies) between two verticies. You will want to start by modifying breadth-first search.
2. Add a `boolean hasCycle()` method to detect if there is a cycle(a way to get from one vertex back to itself) within a graph. You will want to start by modifying your depth-first search.
3. Add a `boolean isConnected()` method that returns true if all the nodes in the graph are connected. 
4. Add an `int distance(String start, String end)` that returns the number of edges between two vertices.

## Reflection Questions
1. The Graph class uses a `HashMap` to store its vertices. What is the Big O time complexity of finding a specific vertex by its label? How would this performance change if we stored the vertices in a standard `ArrayList` instead?
2. Explain the fundamental difference in how Depth-First Search (DFS) and Breadth-First Search (BFS) explore a graph.
3. Which data structure (Stack or Queue) is naturally associated with DFS, and which is associated with BFS? If you implemented DFS recursively, where is the stack hiding?

## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program and tester attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person

## Rubric
- **6 points** - All required items are present.
- **5 points** - Task was completed, but supplementary materials are weak or missing.
- **4 points** - Task was attempted, but is missing major components.
- **3 points** - Did not attempt or student should reattempt.