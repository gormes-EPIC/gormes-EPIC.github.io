# Stack and Queue Notes

## Outline

### 1. Stacks
- **LIFO:** last in, first out
- Real-world examples: a stack of plates, undo, the browser's back button
- The **call stack** from recursion is a stack
- Operations: `push`, `pop`, `peek`, `size`, `isEmpty`
- Diagram: pushing and popping, with the top marked
- Popping or peeking an empty stack: `EmptyStackException`

### 2. Queues
- **FIFO:** first in, first out
- Real-world examples: a line at the store, a printer queue, a playlist
- Operations: `add`, `remove`, `peek`, `size`, `isEmpty`
- Diagram: adding at the back, removing from the front
- Removing or peeking an empty queue: `NoSuchElementException`

### 3. Building a Stack with an Array
- Instance variables: an `int[]` for the data, and an `int` count of the elements
- The top of the stack is the last used index (`count - 1`), so push and pop never shift anything
- What happens when the array is full: make a bigger array (usually double) and copy everything over
  - `System.arraycopy()` or `Arrays.copyOf()`

### 4. Building a Queue with an Array
- The simple way: remove from index 0 and shift everything left
  - Why this makes `remove()` $O(n)$
- The better way: keep a `front` index, and wrap around to the start with `%` (a circular array)
- Growing a circular array when it's full: copy the elements in order, starting from `front`

### 5. Runtimes
- Table of each method's runtime for the stack and the queue
- Why growing the array is rare enough that `push` and `add` are still $O(1)$ on average
- Compare: queue `remove()` with shifting vs. with a circular array

### 6. Throwing Exceptions
- `throw new EmptyStackException();`
- `throw new NoSuchElementException("Queue is empty");`
- `throw new IllegalArgumentException("Invalid postfix expression");` (for the RPN lab)
- Importing from `java.util`
- Catching them with `try` / `catch` when testing

### 7. Javadoc
- Covered in the [Stack and Queue Lab](#Data-Structures-and-Algorithms/Stack-and-Queue-Lab), Step 3
- Include the runtime in each method's description

### 8. Java's Built-in Stack and Queue
- `Stack<Integer> stack = new Stack<>();`
- `Queue<Integer> queue = new LinkedList<>();`. `Queue` is an interface, so you pick a class that implements it.
- Generics: why it's `Integer`, not `int` (autoboxing)
- Method names that differ from ours: `offer` / `poll` vs. `add` / `remove`, and that `poll` returns `null` instead of throwing
- Using `Character` or `String` stacks for operators in the RPN lab

### 9. Infix, Postfix, and Prefix Notation
- Infix: `3 + 4`. Postfix (Reverse Polish Notation): `3 4 +`. Prefix: `+ 3 4`
- Why computers prefer postfix: no parentheses, no precedence rules, read left to right once
- Practice: convert small expressions by hand both ways

### 10. Evaluating Postfix with a Stack
- The algorithm: push numbers; for an operator, pop two, compute, push the result
- Walkthrough of `7 2 + 9 / 3 5 * -` = `-14`
- Operand order: the first value popped is the **right** side (matters for `-` and `/`)
- Integer division: `7 / 2` is `3`
- Spotting invalid expressions:
  - An operator with fewer than two values on the stack
  - More than one value left at the end
  - A token that isn't a number or an operator

### 11. Working with Strings (for the RPN lab)
- Splitting the input into tokens: `input.split(" ")`
- Turning a token into a number: `Integer.parseInt()`
- Comparing strings with `.equals()`, not `==`
- Telling the operator `-` apart from a negative number like `-3`
- Building the output string with `+=` or a `StringBuilder`, and trimming the extra space

### 12. Converting Infix to Postfix
- The stack holds **operators**, and numbers or letters go straight to the output
- Precedence: `*` and `/` before `+` and `-`
  - A helper method that returns an operator's precedence
- The rules:
  - Before pushing an operator, pop operators with higher or equal precedence to the output
  - Always push `(`
  - On `)`, pop to the output until the `(`, then throw the `(` away
  - At the end, pop everything left to the output
- Walkthrough of `a + b * c + ( d * e + f ) * g`
- Checking your work: translate, then evaluate the result

### 13. Testing
- Test each method as soon as you write it
- Edge cases: an empty stack or queue, a full array, a single number, negative numbers, invalid input
