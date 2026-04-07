# Welcome to Java Notes

## What is Java?

<img src="/assets/java-notes-figure-1.png">

## Interpreters vs Compiliers

Java is what's called a **compiled language** meaning it uses a **compiler** to translate machine code into an executable file, then runs the file. This is in contrast to **interpreted languages** like Python. 

**Interpreters** run the code and convert the program into machine instructions directly, rather than using multiple steps. While **compilers** translate the code into an executable file, then 


## Hello World

To create your first Java program, create a class(`.java`) named `HelloWorld` in your IDE. Then add the following program.

```java
public class HelloWorld {
    public static void main(String[] args){

        System.out.println("Hello World");

    }
}
```

When you run it, you should see `Hello World` appear in the terminal. If you change the words inside the quotation marks and re-run it you should see the output update. If you add a second `System.out.println` statement, you should see a second line of text appear. 

Let's break down the primary line: 

<img src="/assets/java-notes-figure-4.png">

Zooming out, every Java program contains a method named `main` with a very specific header: `public static void main(String[] args)`. **Only the code within this method will be run when the program is run.** Now let's break down the `main` method header:

<img src="/assets/java-notes-figure-3.png">

This method header will remain the same across every Java program you create. Don't worry too much of all of the components of the header don't make sense yet. 

Now let's zoom out even more and look at the class header. Every line of code you write in Java must be contained by a class. In this example, our class is named `HelloWorld`. 

<img src="/assets/java-notes-figure-2.png">



JDKs 