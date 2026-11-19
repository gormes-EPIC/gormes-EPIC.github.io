# Getting Started in Java Notes

<tabs>
<tab title="Grade Level">

## Vocabulary

| Vocabulary | Description |
| ----------- | ----------- |
| compiler | A program that translates your whole program into a lower-level form before it runs |
| `main` method | The method where every Java program starts running |
| primitive type | One of Java's 8 built-in types that store a simple value directly, like a number or `true`/`false` |
| reference type | Any type that stores the address of an object instead, like `String` or `Rectangle` |
| bit | The smallest unit of data: a single 0 or 1 |
| byte | 8 bits |
| overflow | When a value gets too big for its type and wraps around to the other end of its range |
| casting | Converting a value from one type to another |
| array | A fixed-size list of values that all have the same type |
| index | The position of an item in an array, starting at 0 |
| for-each loop | A loop that visits every item in an array, one at a time |
| method header | The first line of a method: it gives the method's name, what it takes in, and what it gives back |
| return type | The type of value a method gives back, or `void` if it gives back nothing |
| parameter | A variable in a method header that holds a value passed in when the method is called |

## Your First Program

Every line of Java code lives inside a **class**. The file name must match the class name, so this class goes in `HelloWorld.java`.

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

Unlike Python, Java is **compiled**. Running a program takes two steps:

1. `javac HelloWorld.java` **compiles** your code into a file called `HelloWorld.class`. If there are any errors, like a missing semicolon or a wrong type, you find out now, before anything runs.
2. `java HelloWorld` **runs** the compiled program.

Most editors do both steps when you press **Run**. We will use a special Java-speciific IDE(integrated development environment) called **IntelliJ**. This should be pre-installed on your computer.

## The `main` Method

When you run a Java program, it starts at the first line of `main` and runs until the end of `main`. The header is always the same:

```java
public static void main(String[] args)
```

| Part | Meaning |
| --- | --- |
| `public` | Java can call this method from outside the class |
| `static` | It belongs to the class itself, so Java can run it without creating an object first |
| `void` | It doesn't return anything |
| `main` | The name Java looks for when it starts your program |
| `String[] args` | An array of any words typed after the program name when it's run from the terminal |

A few more rules that are different from Python:
- Every statement ends with a semicolon (`;`).
- Curly braces `{ }` mark where a class, method, `if`, or loop starts and ends. Indentation is just for readability.
- `System.out.println(...)` prints and moves to a new line. `System.out.print(...)` prints without one.
- Comments start with `//` for one line, or go between `/*` and `*/` for several lines.

## Declaring Variables

In Java, every variable has a **type**, and you declare it before you use it. Once a variable has a type, it can only hold that type.

```java
int age = 16;
double price = 4.99;
age = 17;          // Fine: still an int
age = "seventeen"; // Error: a String can't go in an int
```

Add `final` to make a **constant**, a variable that can't change. Constants are usually named in all caps:

```java
final int MAX_PLAYERS = 4;
```

## The 8 Primitive Types

Java has 8 **primitive types**. A primitive variable stores its value directly in memory. Every other type, including `String`, is a **reference type**, which stores the address of an object, like the `Rectangle` objects in the [Objects in Java Notes](#Data-Structures-and-Algorithms/Objects-in-Java-Notes).

| Type | Size | Range or precision | Default | Example |
| --- | --- | --- | --- | --- |
| `byte` | 1 byte (8 bits) | -128 to 127 | `0` | `byte level = 12;` |
| `short` | 2 bytes (16 bits) | -32,768 to 32,767 | `0` | `short year = 2026;` |
| `int` | 4 bytes (32 bits) | about ±2.1 billion (-2,147,483,648 to 2,147,483,647) | `0` | `int score = 1500;` |
| `long` | 8 bytes (64 bits) | about ±9.2 quintillion | `0L` | `long views = 8000000000L;` |
| `float` | 4 bytes (32 bits) | about 6–7 significant digits | `0.0f` | `float temp = 98.6f;` |
| `double` | 8 bytes (64 bits) | about 15–16 significant digits | `0.0` | `double price = 4.99;` |
| `char` | 2 bytes (16 bits) | one character, stored as a number from 0 to 65,535 | `'\u0000'` | `char grade = 'A';` |
| `boolean` | not set by Java (usually 1 byte) | `true` or `false` | `false` | `boolean done = false;` |

The **default** is the value an instance variable gets if the constructor doesn't set it. Local variables (variables inside a method) don't get defaults: Java won't compile if you use one before giving it a value.

### Which one should I use?

- Whole numbers: use `int`. Use `long` if the number could go past about 2 billion. `byte` and `short` are mostly used to save memory when you store huge numbers of values.
- Decimals: use `double`. `float` saves memory but is less precise.
- A single character: `char`, in **single** quotes. Text: `String`, in **double** quotes.
- Yes or no: `boolean`.

### Why size matters

Each type has a fixed number of bits, so it can only store so many different values. With $n$ bits, you can store $2^n$ different values. A `byte` has 8 bits, so it can store $2^8 = 256$ values: -128 to 127.

If a value goes past the end of its range, it **overflows** and wraps around to the other end, without any error:

```java
int big = 2147483647;  // The largest int
big = big + 1;
System.out.println(big);  // -2147483648
```

Decimal types can't store most decimals exactly, so tiny rounding errors can appear:

```java
System.out.println(0.1 + 0.2);  // 0.30000000000000004
```

### Literals and suffixes

- A whole number like `42` is an `int` by default. Add `L` to make it a `long`: `8000000000L`.
- A decimal like `4.99` is a `double` by default. Add `f` to make it a `float`: `98.6f`.
- A `char` goes in single quotes, like `'A'`. Because a `char` is stored as a number, `'A' + 1` is `66`.

## Doing Math with Types

When both sides of a math operation are integers, the answer is an integer, and the decimal part is cut off:

```java
System.out.println(7 / 2);    // 3, not 3.5
System.out.println(7 / 2.0);  // 3.5, because 2.0 is a double
System.out.println(7 % 2);    // 1, the remainder
```

## Casting

Java automatically converts a smaller type into a bigger one, since nothing is lost. Going the other way can lose information, so you have to **cast** it yourself by putting the new type in parentheses:

```java
int whole = 7;
double decimal = whole;          // Automatic: 7.0

double price = 4.99;
int dollars = (int) price;       // Cast: 4 (the decimal part is cut off, not rounded)

double average = (double) 7 / 2; // 3.5: cast before dividing to avoid integer division
```

## If Statements

If statements work like Python's, with three changes: the condition goes in **parentheses**, the code goes in **curly braces**, and `elif` becomes `else if`.

```java
int score = 85;

if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else {
    System.out.println("Keep practicing!");
}
```

| Python | Java |
| --- | --- |
| `and` | `&&` |
| `or` | `\|\|` |
| `not` | `!` |
| `elif` | `else if` |

Compare numbers with `==`, but compare Strings with `.equals()`, like `name.equals("Ana")`. See the [Objects in Java Notes](#Data-Structures-and-Algorithms/Objects-in-Java-Notes) for why.

## Loops

### While Loops

A `while` loop repeats as long as its condition is `true`, just like Python.

```java
int count = 3;
while (count > 0) {
    System.out.println(count);  // 3, then 2, then 1
    count--;                    // Same as count = count - 1
}
```

`count++` adds 1 and `count--` subtracts 1.

### For Loops

A `for` loop has three parts, separated by semicolons: **start**, **condition**, and **update**.

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);  // 0, 1, 2, 3, 4
}
```

1. **Start:** `int i = 0` runs once, before the loop.
2. **Condition:** `i < 5` is checked before each pass. The loop stops when it's `false`.
3. **Update:** `i++` runs after each pass.

| Python | Java |
| --- | --- |
| `for i in range(5):` | `for (int i = 0; i < 5; i++)` |
| `for i in range(2, 10, 2):` | `for (int i = 2; i < 10; i += 2)` |
| `for i in range(5, 0, -1):` | `for (int i = 5; i > 0; i--)` |

### For-Each Loops

A **for-each loop** visits every item in an array, like Python's `for name in names:`.

```java
String[] names = {"Ana", "Ben", "Cy"};

for (String name : names) {
    System.out.println(name);
}
```

Read the `:` as "in." Use a for-each loop when you need every item but not its index.

## Arrays

An **array** stores a list of values. Unlike a Python list, an array has a **fixed size**, and every item must be the **same type**.

```java
int[] primes = {2, 3, 5, 7};    // Make an array with values
int[] scores = new int[3];      // Make an empty array of 3 ints: [0, 0, 0]

scores[0] = 95;                 // Set an item by its index
System.out.println(primes[1]);  // 3
System.out.println(primes.length);  // 4 (no parentheses)
```

Use a `for` loop with `.length` when you need the index, like to change items:

```java
for (int i = 0; i < scores.length; i++) {
    scores[i] = scores[i] + 5;  // Add 5 to every score
}
```

| Python list | Java array |
| --- | --- |
| `nums = [2, 3, 5]` | `int[] nums = {2, 3, 5};` |
| `len(nums)` | `nums.length` |
| Can grow and shrink | Fixed size |
| Can mix types | One type only |
| `print(nums)` shows the items | `System.out.println(nums)` shows a memory address. Use `Arrays.toString(nums)` instead. |

`Arrays.toString()` needs `import java.util.Arrays;` at the top of your file.

If you use an index that doesn't exist, like `primes[4]` or `primes[-1]`, Java stops with an `ArrayIndexOutOfBoundsException`. Valid indexes go from `0` to `length - 1`.

## Method Headers and Return Types

A Java method is like a Python function, but its **header** says the type of everything that goes in and comes out.

```java
public double average(int a, int b) {
    return (a + b) / 2.0;
}
```

| Part | Meaning |
| --- | --- |
| `public` | Code outside the class can call it |
| `double` | The **return type**: this method gives back a `double` |
| `average` | The method's name, in camelCase |
| `(int a, int b)` | The **parameters**: each one needs a type and a name |

The **return type** says what kind of value comes back:
- A method with a return type **must** `return` a value of that type, or it won't compile.
- A `void` method gives nothing back. It does something instead, like printing.

```java
public boolean isEven(int n) {
    return n % 2 == 0;
}

public void greet(String name) {
    System.out.println("Hi, " + name);   // No return needed
}
```

```java
// Called from another method in the same class
double avg = average(90, 85);   // 87.5
boolean even = isEven(7);       // false
greet("Sam");                   // Prints: Hi, Sam
```

| Python | Java |
| --- | --- |
| `def average(a, b):` | `public double average(int a, int b) {` |
| Can return anything, or nothing | Must return the type in the header |
| `return` is optional | `return` is required, unless the method is `void` |

</tab>
<tab title="Explain It Like I'm 10">

## Words to Know

- **Compiler:** a program that checks and translates your whole program before it runs.
- **`main`:** the method where every Java program starts.
- **Type:** what kind of value a variable holds, like a whole number or `true`/`false`.
- **Bit:** a single 0 or 1. **Byte:** 8 bits.

## Your First Program

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

- All Java code goes inside a **class**. The file name must match: `HelloWorld.java`.
- The program starts at the first line of `main` and ends at the end of `main`. The `main` header is always written exactly the same way.
- Every statement ends with a `;`.
- Curly braces `{ }` show where things start and end.

Java checks your whole program **before** it runs. Think of a teacher reading your essay for mistakes before you're allowed to read it to the class. If anything's wrong, Java tells you first.

## Every Variable Has a Type

In Java, you say what kind of value a variable will hold, and it can only ever hold that kind:

```java
int age = 16;          // A whole number
double price = 4.99;   // A decimal
char grade = 'A';      // One character, in single quotes
boolean done = false;  // true or false
```

Think of variables as boxes in different sizes. A small box can only hold small numbers. A bigger box holds bigger numbers but takes up more space.

## The 8 Primitive Types

| Type | Holds | Size |
| --- | --- | --- |
| `byte` | Small whole numbers (-128 to 127) | 1 byte |
| `short` | Medium whole numbers (up to about 32,000) | 2 bytes |
| `int` | Whole numbers (up to about 2 billion) | 4 bytes |
| `long` | Huge whole numbers | 8 bytes |
| `float` | Decimals (less exact) | 4 bytes |
| `double` | Decimals (more exact) | 8 bytes |
| `char` | One character, like `'A'` | 2 bytes |
| `boolean` | `true` or `false` | Usually 1 byte |

Most of the time you'll use `int` for whole numbers, `double` for decimals, `boolean` for yes or no, and `String` for text. `String` isn't one of the 8. It's a class.

## Too Big for the Box

If a number gets bigger than its box can hold, it wraps around to the smallest number, like a car's odometer rolling over. The largest `int` plus 1 becomes the most negative `int`.

## Whole Numbers Divide Differently

`7 / 2` is `3` in Java, because two whole numbers give a whole-number answer, and the `.5` gets dropped. Use a decimal to get `3.5`: `7 / 2.0`.

## Making Choices

An `if` statement asks a yes-or-no question. The question goes in `( )` and the code to run goes in `{ }`.

```java
if (score >= 90) {
    System.out.println("A");
} else {
    System.out.println("Keep practicing!");
}
```

Java uses symbols instead of words: `&&` means **and**, `||` means **or**, and `!` means **not**.

## Doing Things Again

- A `while` loop keeps going **while** something is true.
- A `for` loop counts. `for (int i = 0; i < 5; i++)` means: start at 0, keep going while `i` is less than 5, and add 1 each time.
- A for-each loop visits every item: `for (String name : names)` means "for each name in names."

## Arrays: A Row of Boxes

An **array** is a row of boxes, all the same type. You pick how many boxes when you make it, and you can't add more later.

```java
int[] primes = {2, 3, 5, 7};
System.out.println(primes[0]);      // 2 (the first box is number 0)
System.out.println(primes.length);  // 4 boxes
```

## Methods: Little Machines

A **method** is a little machine. You put things in, and it might hand something back. The first line, the **header**, is its label:

```java
public int doubleIt(int n) {
    return n * 2;
}
```

- `int` before the name means "this machine hands back a whole number." That's the **return type**.
- `(int n)` means "put one whole number in."
- `void` means the machine hands back nothing. It just does something, like printing.

`doubleIt(4)` hands back `8`.

</tab>
<tab title="Just the Highlights">

## Key Ideas

- All code goes in a class, and the file name matches the class name.
- Programs start in `public static void main(String[] args)`.
- Compile with `javac File.java`, then run with `java File`. Type errors are caught at compile time.
- Statements end in `;`. Blocks use `{ }`. Comments use `//` or `/* */`.
- Every variable has a fixed type. `final` makes a constant.

## The 8 Primitive Types

| Type | Bytes | Range or precision | Default |
| --- | --- | --- | --- |
| `byte` | 1 | -128 to 127 | `0` |
| `short` | 2 | -32,768 to 32,767 | `0` |
| `int` | 4 | -2,147,483,648 to 2,147,483,647 | `0` |
| `long` | 8 | about ±9.2 × 10¹⁸ | `0L` |
| `float` | 4 | about 6–7 significant digits | `0.0f` |
| `double` | 8 | about 15–16 significant digits | `0.0` |
| `char` | 2 | 0 to 65,535 (one character) | `'\u0000'` |
| `boolean` | not defined by Java | `true` or `false` | `false` |

- Defaults apply to instance variables only. Local variables must be set before use.
- Everything else, including `String`, is a reference type.
- With $n$ bits, a type can store $2^n$ values.

## Literals

- `42` is an `int`, `42L` is a `long`.
- `4.99` is a `double`, `4.99f` is a `float`.
- `'A'` is a `char`, `"A"` is a `String`.

## Control Flow and Arrays

```java
if (x > 0 && y > 0) { ... } else if (x > 0) { ... } else { ... }

while (count > 0) { count--; }

for (int i = 0; i < 5; i++) { ... }      // 0, 1, 2, 3, 4

for (String name : names) { ... }        // every item

int[] nums = {2, 3, 5};                  // fixed size, one type
int[] empty = new int[3];                // [0, 0, 0]
nums[0] = 9;  nums.length;               // index from 0; length has no ()
```

- `&&` = and, `||` = or, `!` = not. `else if`, not `elif`.
- `i++` adds 1, `i--` subtracts 1, `i += 2` adds 2.

## Methods

```java
// access  return type  name   parameters
   public  double       average(int a, int b) { return (a + b) / 2.0; }
   public  void         greet(String name) { System.out.println("Hi, " + name); }
```

- Non-`void` methods must `return` a value of the return type. `void` methods return nothing.
- Every parameter needs a type.

## Watch Out For

- **Integer division:** `7 / 2` is `3`. Make one side a `double`: `7 / 2.0` or `(double) 7 / 2`.
- **Overflow:** going past a type's range wraps around with no error.
- **Decimal rounding:** `0.1 + 0.2` prints `0.30000000000000004`.
- **Casting down cuts off, it doesn't round:** `(int) 4.99` is `4`.
- **Forgetting the suffix:** `long big = 8000000000;` won't compile. Write `8000000000L`.
- **Comparing Strings with `==`:** use `.equals()` instead.
- **Going past the end of an array:** valid indexes are `0` to `length - 1`.
- **Printing an array:** `println(nums)` shows an address. Use `Arrays.toString(nums)`.
- **Missing return:** a method that isn't `void` won't compile if any path skips `return`.

</tab>
</tabs>
