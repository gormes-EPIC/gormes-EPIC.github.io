# ArrayList, LinkedList, and List Interface Notes

- [ArrayList](#arraylist)
- [LinkedList](#linkedlist)
- [List Interface](#the-list-interface)

## <a id="arraylist"></a>ArrayList

An `ArrayList` is a like a resizeable array. It is type of `List` and part of the package `java.util`.

### Creating an ArrayList

To create an `ArrayList` first import the package, then create a new object of type `ArrayList`. Notice you have to specify which type of `ArrayList` you want in angle brackets(`<>`). In this example, we have chosen to make an `ArrayList` of type `String`. 

```java
import java.util.ArrayList; // Import the ArrayList class

ArrayList<String> cars = new ArrayList<String>(); // Create an ArrayList object
```

### Adding to an ArrayList

To add to an `ArrayList`, we use the method `add(E element)`.

```java
cars.add("Ferrari");
```

After adding a new thing to our `ArrayList`, the memory of our program looks something like: 

<img src="/assets/list-notes-figure-1.png">

Let's add three more cars.


```java
cars.add("Ferrari");
cars.add("BMW");
cars.add("Ford");
cars.add("Mazda");
```

<img src="/assets/list-notes-figure-2.png">

Alternatively, we could add numbers with `add(int index, E element)`. With this add method, you can add elements at any index. 

### Removing from an ArrayList

To remove from an `ArrayList`, we use the method `E remove(int index)`. This method returns the value of the element that was deleted from the `ArrayList`.


```java
cars.remove(0);
```

Our memory diagram from above would now look like:
<img src="/assets/list-notes-figure-3.png">


### Accessing an Element of an ArrayList

To access an element, we use the method `E get(int index)`.

```java
System.out.print(cars.get(0)); //BMW
```

### Setting an Element of an ArrayList

To set an element, we use the method `set(int index, E element)`.

```java
System.out.print(cars.set(0, "Toyota"));
```

Our list now looks like:

<img src="/assets/list-notes-figure-4.png">

### How ArrayList Works

`ArrayList` implements the `List` interface by manipulating arrays behind the scenes. The class creates larger and larger arrays as elements are added. 

A new `ArrayList` initializes an array with 10 slots.

<img src="/assets/list-notes-figure-5.png">

When you add the 11th item, the size of the array grows by 50%, so there will be 15 slots. As more items are added, the array will continue to grow by 50% as the capacity is exceeded. 

## <a id="linkedlist"></a>LinkedList

An `LinkedList` is a collection of linked nodes. Each node contains a value and a link to the next node in the list. It is a type of `List` and part of the package `java.util`.

<img src="/assets/list-notes-figure-6.png">

### Creating an LinkedList

To create an `LinkedList` first import the package, then create a new object of type `LinkedList`. Notice you have to specify which type of `LinkedList` you want in angle brackets(`<>`). In this example, we have chosen to make an `LinkedList` of type `Integer`. 

```java
import java.util.LinkedList; // Import the LinkedList class

LinkedList<Integer> numbers = new LinkedList<Integer>(); // Create an LinkedList object
```
### Adding to an LinkedList

To add to an `LinkedList`, we use the method `add(E element)`.

```java
numbers.add(10);
```

After adding a new thing to our `LinkedList`, the memory of our program looks something like: 

<img src="/assets/list-notes-figure-7.png">

Let's add three more numbers.


```java
numbers.add(20);
numbers.add(30);
numbers.add(40);
numbers.add(50);
```

<img src="/assets/list-notes-figure-8.png">

Alternatively, we could add numbers with `add(int index, E element)`. With this add method, you can add elements at any index. 

### Removing from an LinkedList

To remove from an `LinkedList`, we use the method `E remove(int index)`. This method returns the value of the element that was deleted from the `LinkedList`.


```java
numbers.remove(0);
```

Our memory diagram from above would now look like:

<img src="/assets/list-notes-figure-9.png">


### Accessing an Element of an LinkedList

To access an element, we use the method `E get(int index)`.

```java
System.out.print(numbers.get(0)); // 20
```


### Setting an Element of an LinkedList

To set an element, we use the method `set(int index, E element)`.

```java
System.out.print(cars.set(0, "15"));
```

Our list now looks like:

<img src="/assets/list-notes-figure-10.png"> 

## <a id="list-interface"></a>The List Interface

Both `ArrayList` and `LinkedList` both implement the `List` **interface**.

### Interfaces

An **interface** is a blueprint of a class that defines a contract for that class' behaviors, but not the implementation of those behaviors. It is a completely abstract class that is used to group related methods with empty bodies. Interfaces **define method headers for classes**. Any class that **implements the interface** must also implement all of the methods that are defined in the interface.

### Methods in the List Interface

There are many different methods in the list interface, by we will focus on these:

| Method | Description |
| --- | ----------- |
| `void add(E element)` | Add a new element to the end of the list |
| `void add(int index, E element)` | Add an element to the list at a specified index |
| `E remove()` | Remove and return the last element |
| `E remove(int index)` | Remove the element at the specified index |
| `E get(int index)` | Get the element at the specified index |
| `void set(int index, E element)` | Replace the element at the specified index with a new element |
| `int size()` | Returns the number of elements in the list |
| `boolean isEmpty()` | Returns true if the list is empty |

