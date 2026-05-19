# Maze Solver Lab

## Objective
1. Apply graph traversal algorithms to solve a real-world pathfinding problem
2. Load and parse structured data from a CSV file to construct a graph
3. Use breadth-first search and depth-first search to find paths through a maze

## Vocabulary
| Vocabulary | Description |
| --- | --- |
| pathfinding | the process of finding a route between two points in a graph or grid |
| shortest path | the path between two vertices that crosses the fewest edges |
| parent map | a data structure used during BFS to record which vertex each node was discovered from, enabling path reconstruction |
| adjacency (grid) | two cells in a grid are adjacent if they share an edge (up, down, left, or right — no diagonals) |

## Your Task

In this lab, you will build a `MazeSolver` class that loads a maze from a CSV file, converts it into a `Graph` using your implementation from the Graphs Lab, and finds paths from the start to the exit using both breadth-first search and depth-first search.

## Maze File Format

Your mazes will be stored in CSV files. Each cell in the grid contains one of the following values:
- `1` — a wall (impassable)
- `0` — an open path
- `S` — the start position (exactly one per maze)
- `E` — the exit (exactly one per maze)

Create a file called `maze1.csv` with the following contents:

```
1,1,1,1,1,1,1
1,S,0,1,0,E,1
1,0,1,1,0,0,1
1,0,0,0,0,1,1
1,1,1,0,1,0,1
1,0,0,0,0,0,1
1,1,1,1,1,1,1
```

## Getting Started

Add the `Graph` and `Vertex` classes from the Graphs Lab to your project. Then create a `MazeSolver` class with the following structure.

### Fields

- A 2D `String` array to store the raw maze grid
- A `Graph` to represent the open cells of the maze
- `String` fields to store the start and end vertex labels

### Vertex Labels

Each open cell in the maze becomes a vertex in your graph. Label each vertex using the format `"row_col"` — for example, the cell at row 2, column 3 gets the label `"2_3"`.

### Methods

**`MazeSolver(String fileName)`**
- Constructor that calls `loadMaze(fileName)` to build the maze and graph

**`void loadMaze(String fileName)`**
- Read the CSV file line by line using a `Scanner`; split each line on commas to fill the 2D array
- For each cell that is not a wall (`"0"`, `"S"`, or `"E"`), add a vertex to the graph labeled `"row_col"`
- After reading all cells, iterate over every open cell and add edges to any adjacent open neighbors (up, down, left, right only)
- If a cell contains `"S"`, record its label as the start; if `"E"`, record it as the end

**`ArrayList<Vertex> solveBFS()`**
- Performs BFS from the start vertex to find the shortest path to the end vertex
- Use a `HashMap<String, String>` called `parentMap` to track discovery: the key is a vertex label and the value is the label of the vertex it was reached from (set the start's entry to `null`)
- Use a `Queue<String>` (a `LinkedList` works) and enqueue vertex labels rather than `Vertex` objects
- When you dequeue the end vertex label, trace back through `parentMap` to build the path, then reverse it
- Return an `ArrayList<Vertex>` representing the path from start to end (inclusive), or an empty list if no path exists
- **Note:** You cannot reuse your `Graph`'s `breadthFirstTraversal` directly — you need the parent map to reconstruct the path, so write BFS from scratch inside `solveBFS()`

**`ArrayList<Vertex> solveDFS()`**
- Performs DFS from the start vertex to find *a* path to the end vertex (not necessarily the shortest)
- Use the same `parentMap` approach as `solveBFS()` to reconstruct the path
- Use a `Stack<String>` (or recursion) instead of a queue
- Return an `ArrayList<Vertex>` representing the path from start to end (inclusive), or an empty list if no path exists

**`void printMaze()`**
- Print the 2D array as a grid, with cells separated by spaces

**`void printSolution(ArrayList<Vertex> path)`**
- Print the maze grid with each path cell replaced by `*`
- The start cell should still display `S` and the end cell should still display `E`

**`main` method**

```java
public static void main(String[] args) {
    MazeSolver solver = new MazeSolver("maze1.csv");
    System.out.println("Maze:");
    solver.printMaze();

    ArrayList<Vertex> bfsPath = solver.solveBFS();
    if (bfsPath.isEmpty()) {
        System.out.println("BFS: No path found!");
    } else {
        System.out.println("BFS path length: " + bfsPath.size() + " cells");
        System.out.println("\nBFS Solution:");
        solver.printSolution(bfsPath);
    }

    ArrayList<Vertex> dfsPath = solver.solveDFS();
    if (dfsPath.isEmpty()) {
        System.out.println("DFS: No path found!");
    } else {
        System.out.println("DFS path length: " + dfsPath.size() + " cells");
        System.out.println("\nDFS Solution:");
        solver.printSolution(dfsPath);
    }
}
```

Your BFS output for `maze1.csv` should show the shortest path of **9 cells** from `S` to `E`. The DFS path may be longer. The BFS solution should look like this:

```
1 1 1 1 1 1 1
1 S 0 1 * E 1
1 * 1 1 * 0 1
1 * * * * 1 1
1 1 1 0 1 0 1
1 0 0 0 0 0 1
1 1 1 1 1 1 1
```

## Tips, Tricks, and Resources
- [BFS Shortest Path — Geeks for Geeks](https://www.geeksforgeeks.org/shortest-path-unweighted-graph/)
- [DFS — Geeks for Geeks](https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/)
- To read a CSV in Java, open the file with a `Scanner` and call `line.split(",")` on each line to get the values for that row
- You will need to first figure out the number of rows and columns before allocating your 2D array — consider reading the file twice, or using an `ArrayList` to collect rows and convert afterward
- When reconstructing the path from `parentMap`, build the list backwards (from end to start) using `parentMap.get()` repeatedly until you reach the start, then call `Collections.reverse()` on it

## Extensions
1. Add a `int countDeadEnds()` method that returns the number of open cells with exactly one open neighbor
3. Add support for a cost tile `"2"` in the CSV (a "slow" cell that counts as 2 steps) and implement **Dijkstra's algorithm** to find the minimum-cost path instead of the shortest-hop path
4. Implement **A\*** (A-star) search using the Manhattan distance from each cell to the exit as the heuristic — compare its performance to Dijkstra's on a large maze

## Reflection Questions
1. `solveBFS()` guarantees the *shortest* path while `solveDFS()` does not. Explain why, in terms of the order in which each algorithm explores vertices.
2. What role does the `parentMap` play in both solve methods? Could you reconstruct the path without it? Why or why not?
3. Converting the maze grid into a graph means treating cells as vertices and shared edges as connections. What advantage does this give you? What information about the maze, if any, is lost in the conversion?

## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person

## Rubric
- **6 points** - All required items are present.
- **5 points** - Task was completed, but supplementary materials are weak or missing.
- **4 points** - Task was attempted, but is missing major components.
- **3 points** - Did not attempt or student should reattempt.
