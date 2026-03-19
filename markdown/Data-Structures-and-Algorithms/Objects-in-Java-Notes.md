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
        return this.fieldName;
    }
}
```

This is an example of a *has-a* relationship as `Field` has a `Rectangle` as its instance variable.

```java
Field f = new Field("lettuce", new Rectangle(50,50), 3.50)
```

<img src="/assets/obj-java-notes-figure-2.png">