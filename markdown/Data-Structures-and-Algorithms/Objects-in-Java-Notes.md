# Objects in Java Notes

Let's review some basic vocabulary.

| Vocabulary| Description |
| ----------- | ----------- |
| class | The template for an object |
| object | A variable of a custom type, as defined by the class |
| instance variable | Variables that belong to each object instance |
| constructor | A special method that instantiates instance variables when an object is created |
| instance method | A method that belongs to the instance of a class |


## Rectangle Example

Here is a class `Rectangle.java`. It has two **instance variables** `width` and `height`. It has one **constructor** and two **instance methods**, `calculateArea` and `calculatePerimeter`. 

```java
public class Rectangle {
    // Instance variables
    private double width;
    private double height;

    // Constructor
    public Rectangle(double w, double h) {
        width = w;
        height = h;
    }

    // Instance method 1
    public double calculateArea() {
        return width * height;
    }

    // Instance method 2
    public double calculatePerimeter() {
        return 2 * (width + height);
    }
}
```

**Instance variables** are defined in the class with their **access modifier**, **variable type** and name. There are three possible access modifiers, but we almost always defined instance variables with `private`. Instance variables can be of any type, including objects. 

In Java, **constructors** are defined with the an access modifier, name of class, and whatever parameters you want. You can have as many constructors as you want as long as they have different parameters.

Then, **instance methods** are defined. We will get to how to construct a method header below.

Now that we have an class, we can **instaniate** it.

```java
Rectangle rect1 = new Rectangle(10, 50);
```

Notice how the constructor and the keyword **new** were called when creating a new `Rectangle`. In memory, this would look like:

<img src="/assets/obj-java-notes-figure-1.png">

Now that we have a rectangle, we can call instance methods on it(because it is an instance of a class). Let's call the instance method `calculateArea()`.  

```java
System.out.println(rect1.calculateArea());
```

`calculateArea()` returns an integer(the width of the rectangle * the height of the rectangle), so this will print 500.

Notice how we called `calculateArea()` on the instance of `rect1`. If we tried to call `calculateArea()` on its own, it would error since it is an **instance method**.  

## Field Example

Let's add to our previous example by creating the file `Field.java`.

```java
public class Field {
    private String fieldName;
    private Rectangle dimensions;
    private double cropPrice;

    public Field(String fN, Rectangle d, double cP) {
        fieldName = fN;
        dimensions = d;
        cropPrice = cP;
    }

    public double getTotalYield() {
        return dimensions.calculateArea() * cropPrice;
    }

    public String getFieldName() {
        return fieldName;
    }

    public void setCropPrice(double cP){
        cropPrice = cp;
    }
}
```

This is an example of a *has-a* relationship as `Field` has a `Rectangle` as its instance variable.

```java
Field f = new Field("lettuce", new Rectangle(50,50), 3.50);
```

<img src="/assets/obj-java-notes-figure-2.png">

`String` and `Rectangle` are both classes so rather than existing inside the address space associated with `f`, `f` just stores the memory address of the other classes.

Look at the method `getTotalYield()` in the class. This method calls `calculateArea()` which is an instance method of `Rectangle` and is called on an instance of `Rectangle`(`dimensions`). Inside the class we can refer to instance variables by their names, in this case `dimensions`. 

## Instance Methods

Let's take a look at how to declare an instance method. 

A method header has 4 parts(it really has 5 but we aren't going to worry about the 5th option right now). 
1. **Access Modifier**: this is a special keyword used to define the scope of the method. `public` methods can be accessed outside the class while `private` methods can only be accessed inside the class.
2. **Return Type**: the type of variable that is returned by the function. If there is nothing to return the return type is `void`. 
3. **Method Name**: the name of the method you will use to refer to it later.
4. **Parameters**: any parameters that will be passed to the method.

Let's break down a method header, for example: `public String getFieldName()`
- Access Modifier(`public`): the method will be accessable outside the class
- Return Type(`String`): the method will return a String
- Method Name(`getFieldName`): the name of the method
- Parameters(`()`): there are no parameters

Let's break down another method header: `public void setCropPrice(double cP)`
- Access Modifier(`public`): the method will be accessable outside the class
- Return Type(`void`): the method will return nothing
- Method Name(`setCropPrice`): the name of the method
- Parameters(`(double cP)`): the new price will be passed to the method as a double

### Special Methods

There are two kinds of special methods you will see over and over in Java classes: `toString()` and `equals()`. Both are inherited from the `Object` class.

#### toString()

The `toString()` method returns a String representation of a class. This method is automatically called when an object is printed. Typically it returns a string in the form `className(parameter1, parameter2, ...)`.

#### equals()

The `equals(Object obj)` method returns `True` if the parameter is equivalent to the current instance of the class and `False` otherwise. Typically this method follows the following steps:

1. Use the `@Override` annotation to ensure you are correctly overriding the method from the Object class.
2. Check for reference equality: `if (this == obj) return true;`.
3. Check for null: `if (obj == null) return false;`.
4. Check that the object being compared is of the correct class (using `instanceof` or `getClass()`).
5. Cast the object to the correct type.
6. Compare the relevant fields (use == for primitives and the `equals()` method or `Objects.equals()` utility for object types).

## A Note on Access Modifiers 

Notice that throughout these notes we have defined our instance variables as `private` and our methods as `public`. This is typical for defining methods and variables but not required. 

It is generally considered insecure to create `public` instance variables so we often make them private. If you want your variables value to be accessable, we make a method to return the value called a "getter". If you want your variable to be modifiable, then you would create a method to change the value. This is colloquially referred to as a "setter". 

Most methods you create will be `public` as they are intended to be referenced outside the class. Any method that is not intended to be used outside the class should be made `private`. These internal methods are called **helper methods**.

