# ArrayList, LinkedList, and List Interface Notes

## ArrayList

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