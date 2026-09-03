# Variables and Function Notes

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| file extension | a short suffix at the end of a file name that tells your computer what kind of data is inside and which program should open it (ex. `.txt` or `.py`)|
| Python interpreter | the program that reads Python files and executes them as machine code, line-by-line | 
| function | a named block of text that is run when the function is called |
| calling a function | to call a function (use it), you type it's name followed by parentheses. Any arguments are comma-separated in the parentheses| 
| argument | a value passed to a function |
| string | a data type that holds text and is always surrounded by quotation marks |  
| variable | a named spot in memory that holds a value |
| variable type or data type | classifications of data that your interpreter uses (ex. string, integer, or float) |  

## Hello World

1. Create a new file on your computer called `hello.py`. You can use VSCode or just open the terminal and use `touch hello.py`.

2. Inside the file, put `print("hello world")` and save. 

3. Then flip back to your terminal and run the program with `python3 hello.py`. You should see `hello world` appear in your terminal!

<img src="/assets/var-and-fun-notes-1.gif">

Congratulations, you just wrote your first Python program!

### What Just Happened?

When you typed `python3 hello.py` in your terminal, you used the **Python interpreter** to execute `hello.py` line-by-line. A Python interpreter is the software program that reads and executes Python code. Computers cannot directly understand human-readable languages like Python, so they require a translator. The interpreter acts as this translator, converting your code into instructions that your computer’s hardware can actually execute.

In your program, you only had one line: `print("hello world")`.

Let's breakdown what this statement means:
<img src="/assets/var-and-fun-notes-2.png">

`print()` is a function that prints out whatever is in the parentheses(argument) to the console. A **function** is a named block of code that is executed when the function is called. An **argument** is a value passed to a function, within the parentheses that modifies the function. *Note: when you are Googling you may come across the term parameter which is extremely similar to argument. Technically there is a difference, but for the purposes of this class we will use the term argument.*

In our example, `"hello world"` is an example of a string. A **string** is a data type in Python that holds text and is always contained in quotation marks. This helps us distinguish between function names, variables, and regular text!

### Modifying Your Program

Try changing `"hello world"` to different string, but keep the quotation marks. What happens to the output?

What happens when you type `print("hello world)`? Or `print("hello world`?

Notice that when you make an error, the interpreter tells you what exact error occured and line the error was on. This is incredibly useful for fixing your program!

## Creating Variables

Let's create a new program that uses a variable. Very similar to math class, a **variable** is a named container in memory that holds a value.

Create a new program called `greeting.py` with the following contents:

```
name = "Steve"
print("Hello name!")
```

`name` is an example of a variable. This variable is called `name` and has a value of `"Steve"`. Note that `"Steve"` is a string, so we would say that `name` has the data type string. 

Before you run your program, guess what you think it will output. 

<img src="/assets/var-and-fun-notes-3.gif">

Hmm... what happened there. We wanted to print out `Hello Steve!`, but we got `Hello name!` instead. Since `name` is inside the quotes it is part of the string. Let's try this instead:

```
name = "Steve"
print("Hello " + name + "!")
```

<img src="/assets/var-and-fun-notes-4.gif">

We did it! Instead of putting `name` inside the quotes, we added it to two other strings. 


Another way to get the same result is to use a formated string. We put `f` before the quotes and then put the name of our variable in curly braces(`{}`).

```
name = "Steve"
print(f"Hello {name}!")
```

Let's create a second variable. Change `greeting.py` to contain the following:

```
name = "Steve"
age = "15"
print("My name is " + name + " and I am " + age + " years old.")
```

We can use almost anything as the name of a variable, as long as it is not an existing keyword in Python already. Anytime you want to create a variable, you use the variables's name, then a single equal sign (`=`), followed by what you want to be in the variable. The value on the right is assigned to the variable on the left. 


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

Here is another example function: 

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

