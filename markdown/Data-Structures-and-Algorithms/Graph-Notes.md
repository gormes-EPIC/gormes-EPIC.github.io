# Graph Notes

A **graph** is a set of connected nodes. The nodes are called **vertices** and the connections are called **edges**.

Graphs can be sorted into two categories: **undirected graphs** and **directed graphs**. Edges in **undirected graphs** go both directions. If A is connected to B in an undirected graph, then B is connected to A. Edges in **directed graphs** go in only one direction. If A is connected to be in a directed graph, B isn't necessarily connected to A.

<img src="/assets/graph-notes-figure-1.png">

Graphs can also be categorized into **weighted graphs** and **unweighted graphs**. In a **weighted graph** each edge has a value or weight. In an **unweighted graph** each edge does not.

<img src="/assets/graph-notes-figure-8.png">

Here is some more vocabulary about graphs.

| Vocabulary    | Description                                              |
| ----------- | -------------------------------------------------------- |
| degree | The number of edges involving a vertex |
| in-degree  | The number of edges pointing to the vertex in a directed graph |
| out-degree | The number of edges pointing away from the vertext in a directed graph |
| adjacent(neighbors) | two vertices are adjacent if there is an edge that connects them in a graph |
| neighborhood | the set of all adjacent vertices to a particular vertex |
| pendant | a vertex with degree 1 |
| isolated | a vertext with degree 0 |
| path | ordered edges that connect any two vertices in a graph |

A **subgraph** of a graph *G* is a subset verticies and their corresponding edges. The graph on the right is a subgraph of the graph on the left.

<img src="/assets/graph-notes-figure-2.png">


## Traversals

In a **tree**, a **depth-first traversal** goes "down" as far as possible before revisiting a previous node to find other paths. 

<img src="/assets/graph-notes-figure-3.png">

In a **graph**, a **depth-first traversal** goes as far “away” from other vertices before revisiting vertices.

<img src="/assets/graph-notes-figure-4.png">

In a **tree**, a **breadth-first traversal** keeps as close to the current node as possible in the tree. This appears to go by levels in a tree.

<img src="/assets/graph-notes-figure-5.png">

In a **graph**, a **breadth-first traversal** stays as close to the current vertex as possible, finding all adjacent vertices before moving to another.

<img src="/assets/graph-notes-figure-7.png">


## Representations of Graphs

There are multiple ways to store a graph. The two most common ways are with an **adjacency list** and an **adjacency matrix**. 

An **adjacency list** shows what vertices a particular vertex is adjacent to.

<img src="/assets/graph-notes-figure-9.png">

In the graph above, our adjacency list would look like:

| Vertex    | Edges                                              |
| ----------- | -------------------------------------------------------- |
| a | {d} |
| b | {d} |
| c | {d, e, f} |
| d | {a, b, c, f} |
| e | {c} |
| f | {c, d} |


An **adjacency matrix** is an $nxn$ matrix storing whether an edge is present between two vertices. The adjacency matrix for graph G is shown to the right.

<img src="/assets/graph-notes-figure-10.png">

