# Objects  Notes

## Vocabulary

| Vocabulary| Description |
| ----------- | ----------- |
| class | The template for an object |
| object | A variable of a custom type, as defined by the class |
| instance variable | Variables that belong to each object instance |
| constructor | A special method that instantiates instance variables when an object is created |

## A Thought Experiment

What if I wanted to create a program that stored information about my car? I want to store the  make, model, gas mileage, and current gas level in my car. 

My program might look something like this:
```python
make = "Toyota"
model = "Prius"
mpg = 38
gas = 8
```

What if I wanted to make another car that stored the same information? Now my program might look something like this.
```python
make_1 = "Toyota"
model_1 = "Prius"
mpg_1 = 38
gas_1 = 8

make_2 = "Ford"
model_2 = "F150"
mpg_2 = 25
gas_2 = 14

```

or 

```python
makes = ["Toyota", "Ford"]
models = ["Prius", "F150"]
mpg = [38, 25]
gas = [8, 14]
```

If I know what attributes and actions I want every car to have, is there a way to define my own data type? 

## Classes and Objects

By writing **classes** you are creating a blueprint for variables of type **object**. Each **object** has it's own set of **instance variables** and **methods** that belong to it. This way you can easily store and manipulate information in your own custom data type.

Thinking about our car example from above. I could create a new class `Car`.
```python 
class Car: # defines a new class Car
    def __init__(self, make, model, mpg, gas): # constructor 
        self.make = make
        self.model = model
        self.mpg = mpg
        self.gas = gas
```

To create a class you start with the header `class ClassName`. Typically we capitalize the names of classes. 

### Constructors

Inside our class, we can then create a special method called a **constructor**. This method, defined as `def __init__(self,...)`, is automatically called when you create a new instance of a class. It defines and initializes all of our **instance variables** or variable that belong to an instance of a class.

To create a new instance of type `Car`(an **object**), we will call it's constructor. 
```python
my_car = Car("Toyota", "Prius", 38, 8)
```

In memory, our car would look like:
<img src="/assets/obj-notes-figure-1.png">


To create another car, I can just call the constructor again:
```python
your_car = Car("Ford", "F150", 25, 14)
```

Now, our memory diagram would look like: 
<img src="/assets/obj-notes-figure-2.png">

**Notice** how each instance of `Car` has there own instance of `make` and `model` that are different. This is what it means to be an **instance variable**.

### Instance Variables

To access the instance variables we can call them using the name of the object.
```python
print(my_car.make) #Toyota
print(my_car.model) #Prius
```
If I wanted to update the `gas` variable, I could subtract some gas with:
```python
my_car.gas -= 2
print(my_car.gas) # 6
```

### Instance Methods

Just like we have **instance variables**, there are also **instance methods** or functions that belong to an instance of a class. 

For example,  we can take a look at the class `Bank Account` 
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
my_account.display_balance()  # Output: Account Owner: Alice | Current Balance: $100.00
my_account.deposit(50.00)     # Output: Deposited $50.00. New balance is $150.00.
my_account.withdraw(20.00)    # Output: Withdrew $20.00. New balance is $130.00.
my_account.withdraw(200.00)   # Output: Insufficient funds! You only have $130.00.
```

What do you think would happen if I tried to call `deposit()` on its own like: 
```
deposit(100.00)
```

This line would error since it is an **instance method** and must be called on an instance of a class. This is same for **instance variables**. I couldn't reference `owner` without calling it on an instance of `BankAccount`. 