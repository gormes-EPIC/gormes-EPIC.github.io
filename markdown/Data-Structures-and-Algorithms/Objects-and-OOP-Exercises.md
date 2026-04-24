# Objects and Object-oriented Programming Exercises

## Exercise 1

Trace the following code and give the output of the program for the Car object.

```java
class Car {
    String color, brand;
    Car(String c, String b) { 
        color = c; 
        brand = b; 
    }
    void drive() { 
        System.out.println("Driving a " + color + " " + brand); 
    }
}

// Inside main method
Car myCar = new Car("Red", "Toyota");
myCar.drive();
```

<details>
<summary>Click here to view the answer</summary>

```
Driving a Red Toyota
```

</details>

## Exercise 1

Trace the following code and give the output of the program for the Car object.

```java
class Car {
    String color, brand;
    Car(String c, String b) { 
        color = c; 
        brand = b; 
    }
    void drive() { 
        System.out.println("Driving a " + color + " " + brand); 
    }
}

// Inside main method
Car myCar = new Car("Red", "Toyota");
myCar.drive();
```

<details>
<summary>Click here to view the answer</summary>

```
Driving a Red Toyota
```

</details>

## Exercise 2

What is the difference between a **class** and an **object**?

<details>
<summary>Click here to view the answer</summary>

A **class** is a piece of code that defines a new variable type. An **object** or **instance** is the thing created based on the class. Think of the class as a blueprint and an object as the actual house. 

</details>

## Exercise 3

Consider the following Java code snippet:
```
class Robot {
    public void powerOn() {
        System.out.println("Powered on!");
    }
}

public class Main {
    public static void main(String[] args) {
        Robot[] fleet = new Robot[5];
        fleet[0].powerOn();
    }
}
```
- A. Prints "Powered on!" five times.
- B. Prints "Powered on!" one time.
- C. Compilation Error: The `Robot` class is missing a constructor.
- D. `NullPointerException` is thrown at runtime.

<details>
<summary>Click here to view the answer</summary>

D. `NullPointerException` is thrown at runtime.

When you create a new array of type `Robot`, each `Robot` has a value of null. In order to create a new `Robot` you must use the `new` keyword. For example: `fleet[0] = new Robot();`

</details>

## Exercise 4

Trace the code and predict the console output:

```java
class Box {
    int value = 10;
}

public class Main {
    public static void modifyBox(Box b1, Box b2) {
        b1.value = 50;
        b2 = new Box();
        b2.value = 100;
    }

    public static void main(String[] args) {
        Box myBox1 = new Box();
        Box myBox2 = new Box();
        
        modifyBox(myBox1, myBox2);
        
        System.out.println(myBox1.value + ", " + myBox2.value);
    }
}
```


<details>
<summary>Click here to view the answer</summary>

```
50, 10
```

</details>

## Exercise 5

Consider the class defined below:

``` java
public class Item {

    private String name;
    private int weight;

    public Item(String n, int w){
        name = n;
        weight = w;
    }

    public String getName() {
        return name;
    }

    public int getWeight() {
        return weight;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    @Override
    public boolean equals(Object obj) {
        if(obj.getClass() == this.getClass()){
            if(((Item) obj).getName().equals(name)){
                return true;
            }
            return false;
        }
        return false;
    }

}
```

What does this main method print?

```java
public class Main {
    public static void main(String[] args) {
        Item item1 = new Item("Apple", 1);
        Item item2 = new Item("Bottle", 3);
        Item item3 = new Item("Crab", 10);
        Item item4 = new Item("Crab", 5);

        Item[] inventory = new Item[6];

        inventory[0] = item1;
        inventory[1] = item2;
        inventory[2] = item3;
        inventory[3] = inventory[1];
        inventory[4] = null;
        inventory[5] = item3;

        System.out.println("item3 equals item4? " + item3.equals(item4));
        System.out.println("item3 == item4? " + (item3 == item4));

        System.out.println("inventory[4]: " + inventory[4]);
        inventory[4] = item4;
        System.out.println("inventory[4]: " + inventory[4]);

        inventory[3].setWeight(27);
        inventory[1] = new Item("Bottle", 99);
        inventory[5].setWeight(inventory[5].getWeight() + 5);

        int sum = 0;
        for (int i = 0; i < inventory.length; i++) {
            if (inventory[i] != null) {
                sum += inventory[i].getWeight();
            }
        }

        System.out.println("Sum: " + sum);

        item3 = item4;
        item3.setWeight(100);

        System.out.println("item4 weight: " + item4.getWeight());
        System.out.println("inventory[2] weight: " + inventory[2].getWeight());
    }

}

```
<details>
<summary>Click here to view the answer</summary>

```
item3 equals item4? true
item3 == item4? false
inventory[4]: null
inventory[4]: Item@27716f4
Sum: 162
item4 weight: 100
inventory[2] weight: 15
```

</details>

