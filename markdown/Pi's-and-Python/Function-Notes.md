# Function Notes

## Creating Functions
Functions are defined with the `def` keyword, followed by a name, parentheses (with optional parameters), and a colon. The function body is indented.
```
def say_hello():
    print("Hello!")

say_hello()  # calling the function
```
- `def` starts the definition.
- The function name should be descriptive and follow `snake_case` convention.
- Parentheses `()` hold arguments (inputs), even if empty.
- The body is indented and runs only when the function is **called**.
- A function is just defined once but can be called many times.
```
def add(a, b):
    total = a + b
    print(total)

print(add(2, 3))  # 5
print(add(10, 20))  # 30

```
## Variable Scope

Scope determines where in your code a variable can be accessed.
- **Local scope**: Variables defined inside a function only exist within that function.
- **Global scope**: Variables defined outside any function can be accessed anywhere in the file (read-only inside functions, unless you use `global`).

```
x = 10  # global

def show():
    y = 5  # local
    print(x, y)  # works: can read global x

show()
print(y)  # ERROR: y doesn't exist outside the function

```

To modify a global variable inside a function, use the `global` keyword:
```
count = 0

def increment():
    global count
    count += 1

```

## Arguments
Arguments let you pass data into a function.

```
def greet(name, greeting):  
    print(f"{greeting}, {name}!")

greet("Alice")              # ERROR: Incorrect number of arguments
greet("Bob", "Hi")           # Hi, Bob!
```

- **Positional arguments**: matched by order.

## Return Statements
`return` sends a value back to the caller and ends the function.
```
def square(n):
    return n * n

result = square(4)  # result = 16
```
- A function without return returns `None`.
- Code after `return` inside a function never runs.

