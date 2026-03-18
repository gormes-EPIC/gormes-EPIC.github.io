# Objects  Notes

## Vocabulary

| Vocabulary| Description |
| ----------- | ----------- |
| class | The template for an object |
| object | A variable of a custom type, as defined by the class |
| instance variable | Variables that belong to each object instance |
| class attributes | Variables that belong to all objects of a certain type |
| constructor | A special method that instantiates instance variables when an object is created |
| instance method | A method that belongs to a specific class and can only be called on an instance of a class |

## A Thought Experiment

What if I wanted to create a program that stored information about a dog? I want to store the  name, breed, and age of a dog.  

My program might look something like this:
```python
name = "Buddy"
breed = "Golden Retriever"
age = 3
```

What if I wanted to make another dog that stored the same information? Now my program might look something like this.
```python
name_1 = "Buddy"
breed_1 = "Golden Retriever"
age_1 = 3

name_2 = "Luna"
breed_2 = "Husky"
age_2 = 5
```

or 

```python
names = ["Buddy", "Luna"]
breeds = ["Golden Retriever", "Husky"]
age = [3, 5]
```

If I know what attributes and actions I want every dog to have, is there a way to define my own data type? 

## Classes and Objects

By writing **classes** you are creating a blueprint for variables of type **object** or **instance**. Each **object** has it's own set of **instance variables** and **methods** that belong to it. This way you can easily store and manipulate information in your own custom data type.

Thinking about our Dog example from above. I could create a new class `Dog`.
```python
class Dog:
    # The __init__ method initializes the object's attributes
    def __init__(self, name, breed, age):
        self.name = name
        self.breed = breed
        self.age = age
```

To create a class you start with the header `class ClassName`. Typically we capitalize the names of classes. 

### Constructors

Inside our class, we can then create a special method called a **constructor**. This method, defined as `def __init__(self,...)`, is automatically called when you create a new instance of a class. It defines and initializes all of our **instance variables** or variable that belong to an instance of a class.

To create a new instance of type `Dog`(an **object**), we will call it's constructor. 
```python
dog1 = Dog("Buddy", "Golden Retriever", 3)
```

In memory, our dog would look like:
<img src="/assets/obj-notes-figure-1.png">


To create another dog, I can just call the constructor again:
```python
dog2 = Dog("Luna", "Husky", 5)
```

Now, our memory diagram would look like: 
<img src="/assets/obj-notes-figure-2.png">

**Notice** how each instance of `Dog` has there own instance of `name` and `breed` that are different. This is what it means to be an **instance variable**.

### Instance Variables

To access the instance variables we can call them outside of the class using the name of the object.
```python
print(dog1.name)  # Buddy
print(dog2.breed) # Husky
```
If I wanted to update the `age` variable, I could add some age with:
```python
dog1.age += 1
print(dog1.age) # 4
```

Inside the class, I can access them using the `self` keyword. 
```python
class Dog:
    def __init__(self, name, breed, age):
        self.name = name
        self.breed = breed
        self.age = age

    def have_birthday(self):
        self.age += 1
```
### Class Attributes

**Instance variables** belong to instances of a class. **Class attributes** are the same across all instances.

Say I wanted to store the species of dog. Since all dogs are the same species(Canis familiaris) I could create a **class attribute** to store the information. Look at the difference between instance variables and class attributes below. 

```python
class Dog:
    # Class attribute: Shared by all dogs
    species = "Canis familiaris"

    def __init__(self, name, age):
        # Instance attributes: Unique to each dog
        self.name = name
        self.age = age
```

Each instance shares class attributes. 

```python
dog1 = Dog("Buddy", 3)
dog2 = Dog("Luna", 5)

print(dog1.species) # Canis familiaris
print(dog2.species) # Canis familiaris
```

### Instance Methods

Just like we have **instance variables**, there are also **instance methods** or functions that belong to an instance of a class. 

For example,  we can take a look at the class `Bank Account`:
```python
class BankAccount:
    # Constructor The __init__ method initializes the instance variables
    def __init__(self, owner, starting_balance):
        self.owner = owner                 # Instance variable 1
        self.balance = starting_balance    # Instance variable 2

    # Instance method to add money to the account
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"Deposited ${amount:.2f}. New balance is ${self.balance:.2f}.")
        else:
            print("Deposit amount must be positive.")

    # Instance method to remove money from the account
    def withdraw(self, amount):
        if amount > self.balance:
            print(f"Insufficient funds! You only have ${self.balance:.2f}.")
        elif amount > 0:
            self.balance -= amount
            print(f"Withdrew ${amount:.2f}. New balance is ${self.balance:.2f}.")
        else:
            print("Withdrawal amount must be positive.")

    # Method to display the current state of the account
    def display_balance(self):
        print(f"Account Owner: {self.owner} | Current Balance: ${self.balance:.2f}")

```

Now we can create a new instance(object) of the `BankAccount` class:
```python
my_account = BankAccount("Alice", 100.00)
```

Then, we can call instance methods on the instance of the class as well.
```python
my_account.display_balance()  # Account Owner: Alice | Current Balance: $100.00
my_account.deposit(50.00)     # Deposited $50.00. New balance is $150.00.
my_account.withdraw(20.00)    # Withdrew $20.00. New balance is $130.00.
my_account.withdraw(200.00)   # Insufficient funds! You only have $130.00.
```

Notice what parameter is part of each instance method header. **The `self` keyword** is critical. Without it you cannot call the method on the instance of class. 



What do you think would happen if I tried to call `deposit()` on its own like: 
```
deposit(100.00)
```

This line would error since it is an **instance method** and must be called on an instance of a class. This is same for **instance variables**. I couldn't reference `owner` without calling it on an instance of `BankAccount`. 

#### `__str__()`

There is are a couple of special instance methods that Python will call automatically in different situations. One example is a **constructor** which we talked about above. Another is  `__str__()`.

`__str__()` is reserved for converting your class into a string. It always returns a string and is typically in the form `ClassName(var={self.var})`. It is automatically called when you print out an instance of an class.
