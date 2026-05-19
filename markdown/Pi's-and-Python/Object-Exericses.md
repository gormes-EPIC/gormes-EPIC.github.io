# Object Exercises

### Exercise 1

What is the difference between a **class** and an **object**? Give a real-world analogy to support your answer.

<details>
<summary>Click here to view the answer</summary>

A **class** is a blueprint or template. It is the actual code being written. In contrast, an **object** is a specific thing built from that blueprint. 

For example, a class is like the blueprints for a house. The blueprints define what rooms exist and how big they are, but the blueprints themselves are not a house you can live in. An object is an actual house built from those blueprints. You can build many different houses from the same blueprint, just like you can create many objects from the same class.

</details>

### Exercise 2

What is the purpose of `self` in a Python class? Why must it be the first parameter in every instance method?

<details>
<summary>Click here to view the answer</summary>

`self` refers to the specific object instance that a method is being called on. It must be the first **parameter** so that when you call `my_object.some_method()`, Python knows which object's instance variables to read and modify. Without `self`, instance methods would have no way to access the data belonging to a particular object.

</details>

### Exercise 3

Predict the output of the following code.

```python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def speak(self):
        print(self.name + " says woof!")

dog1 = Dog("Rex", "Labrador")
dog2 = Dog("Bella", "Poodle")

dog1.speak()
dog2.speak()
print(dog1.breed)
```

<details>
<summary>Click here to view the answer</summary>

```
Rex says woof!
Bella says woof!
Labrador
```

</details>

### Exercise 4

Write a `Student` class with the instance variables `name` (string), `grade` (integer), and `passing` (boolean, defaults to `True`). Include a method `fail()` that sets `passing` to `False` and prints `"{name} is now failing."`.

<details>
<summary>Click here to view the answer</summary>

```python
class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade
        self.passing = True

    def fail(self):
        self.passing = False
        print(self.name + " is now failing.")
```

</details>

### Exercise 5

Predict the output of the following code.

```python
class Counter:
    def __init__(self):
        self.count = 0

    def increment(self):
        self.count += 1

    def reset(self):
        self.count = 0

c1 = Counter()
c2 = Counter()

c1.increment()
c1.increment()
c1.increment()
c2.increment()

print(c1.count)
print(c2.count)

c1.reset()
print(c1.count)
print(c2.count)
```

<details>
<summary>Click here to view the answer</summary>

```
3
1
0
1
```

`c1` and `c2` are separate objects with their own independent `count` variables. Resetting `c1` has no effect on `c2`.

</details>

### Exercise 6

The following `Rectangle` class is missing a method. Add a method called `is_square()` that returns `True` if the rectangle's width and height are equal, and `False` otherwise.

```python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height
```

<details>
<summary>Click here to view the answer</summary>

```python
def is_square(self):
    return self.width == self.height
```

</details>

### Exercise 7

The following code has a bug. Identify the problem and explain how to fix it.

```python
class Car:
    def __init__(self, make, model, mpg):
        make = make
        model = model
        mpg = mpg

    def describe(self):
        print("This is a " + self.make + " " + self.model)
```

<details>
<summary>Click here to view the answer</summary>

The constructor is assigning each parameter to itself instead of to the instance variable. `make = make` just reassigns the local variable `make` — it doesn't save anything to the object. Every line should use `self`:

```python
def __init__(self, make, model, mpg):
    self.make = make
    self.model = model
    self.mpg = mpg
```

</details>

### Exercise 8

What is a **class attribute**, and how does it differ from an **instance variable**? Write a short example of a class that uses both.

<details>
<summary>Click here to view the answer</summary>

A **class attribute** is a variable defined directly inside the class body (outside any method). It is shared across all instances of the class. An **instance variable** is defined inside a method using `self` and belongs to one specific object.

```python
class BankAccount:
    interest_rate = 0.05  # class attribute — same for all accounts

    def __init__(self, owner, balance):
        self.owner = owner      # instance variable — unique to each object
        self.balance = balance  # instance variable — unique to each object
```

</details>

### Exercise 9

Given the list of `Car` objects below, write a loop that prints the `make` and `model` of each car whose `mpg` is greater than 30.

```python
class Car:
    def __init__(self, make, model, mpg):
        self.make = make
        self.model = model
        self.mpg = mpg

car1 = Car("Toyota", "Prius", 35)
car2 = Car("Subaru", "Outback", 32)
car3 = Car("Ford", "F150", 25)
car4 = Car("Honda", "Civic", 28)

parking_lot = [car1, car2, car3, car4]
```

<details>
<summary>Click here to view the answer</summary>

```python
for car in parking_lot:
    if car.mpg > 30:
        print(car.make + " " + car.model)
```

Output:
```
Toyota Prius
Subaru Outback
```

</details>

### Exercise 10

Predict the output of the following code.

```python
class Book:
    def __init__(self, title, author, checked_out=False):
        self.title = title
        self.author = author
        self.checked_out = checked_out

    def check_out(self):
        if not self.checked_out:
            self.checked_out = True
            return True
        return False

book1 = Book("1984", "George Orwell")
book2 = Book("Dune", "Frank Herbert", True)

print(book1.check_out())
print(book1.check_out())
print(book2.check_out())
print(book1.checked_out)
```

<details>
<summary>Click here to view the answer</summary>

```
True
False
False
True
```

The first call to `book1.check_out()` succeeds because it wasn't checked out. The second call fails because it is now checked out. `book2` was already checked out when created, so its call also returns `False`.

</details>

### Exercise 11

Write a class `Inventory` that has one instance variable `items`, which starts as an empty list. Add two methods:
- `add_item(name, quantity)`: appends a tuple `(name, quantity)` to `items`.
- `total_items()`: returns the sum of all quantities in `items`.

<details>
<summary>Click here to view the answer</summary>

```python
class Inventory:
    def __init__(self):
        self.items = []

    def add_item(self, name, quantity):
        self.items.append((name, quantity))

    def total_items(self):
        total = 0
        for name, quantity in self.items:
            total += quantity
        return total
```

</details>

### Exercise 12

Predict the output of the following two code snippets. What is the difference between the behavior in **Snippet A** and **Snippet B**, and why does it happen?

```python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

**Snippet A**
```python
dog1 = Dog("Rex", 3)
dog2 = dog1

dog2.name = "Bella"

print(dog1.name)
print(dog2.name)
```

**Snippet B**
```python
import copy

dog1 = Dog("Rex", 3)
dog2 = copy.copy(dog1)

dog2.name = "Bella"

print(dog1.name)
print(dog2.name)
```

<details>
<summary>Click here to view the answer</summary>

**Snippet A output:**
```
Bella
Bella
```

**Snippet B output:**
```
Rex
Bella
```

In **Snippet A**, `dog2 = dog1` does not create a new object. Both variables point to the exact same `Dog` in memory. Changing `dog2.name` changes the name on the one object they both share. This is called a **shallow copy**.

In **Snippet B**, `copy.copy()` creates a brand new, independent `Dog` object with the same starting values. `dog1` and `dog2` now refer to two separate objects, so renaming one has no effect on the other. This is called a **deep copy**.

</details>

