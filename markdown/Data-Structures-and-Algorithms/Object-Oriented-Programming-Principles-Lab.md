# Object-oriented Programming Principles Lab

## Objective

1. Apply the 4 principles of object-oriented programming: abstraction, encapsulation, inheritance, polymorphism

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| superclass | The parent class |
| subclass | The child class that extends a parent class. It inherits properties of the parent class. |
| encapsulation | Hides the internal state and functionality of an object, requiring all interaction to occur through a public interface, which protects data integrity. |
| abstraction | Simplifies complex systems by exposing only essential features and hiding unnecessary implementation details, allowing users to focus on "what" an object does rather than "how". |
| inheritance | Allows a child class to derive properties and methods from a parent class, promoting code reusability and establishing hierarchical relationships. |
| polymorphism  | Enables objects of different types to be treated as instances of a common superclass, allowing a single interface to represent different underlying forms (e.g., method overloading/overriding) |


## Your Task

Create the following classes.  

### 1. `Hero` Class (Abstract Base Class)
This class defines the foundational properties and actions for all characters. Because it is abstract, it cannot be instantiated directly.

**Variables**
| Access Modifier | Data Type | Name | Description |
| :--- | :--- | :--- | :--- |
| `private` | `String` | `name` | Stores the name of the hero. |
| `private` | `int` | `healthPoints` | Stores the current health of the hero. |

**Methods**
| Access Modifier | Return Type | Method Signature | Description |
| :--- | :--- | :--- | :--- |
| `public` | *Constructor* | `Hero(String name, int maxHealth)` | Initializes the `name` and `healthPoints` variables. |
| `public` | `String` | `getName()` | Returns the hero's `name`. |
| `public` | `int` | `getHealth()` | Returns the hero's `healthPoints`. |
| `public abstract`| `void` | `performAction()` | **Abstract method** (no body). Forces subclasses to define their own action. |
| `public` | `void` | `takeDamage(int damageAmount)`| Subtracts damage from `healthPoints`. Includes logic to prevent health from dropping below `0`. Prints a status message. |
| `public` | `boolean` | `isAlive()` | Returns `true` if `healthPoints` is greater than 0, otherwise `false`. |


### 2. `Warrior` Class (Subclass of `Hero`)
This class extends `Hero`, inheriting its variables and standard methods, while adding warrior-specific mechanics.

**Variables**
| Access Modifier | Data Type | Name | Description |
| :--- | :--- | :--- | :--- |
| `private` | `int` | `rage` | Tracks the warrior's rage resource (starts at 0). |

**Methods**
| Access Modifier | Return Type | Method Signature | Description |
| :--- | :--- | :--- | :--- |
| `public` | *Constructor* | `Warrior(String name)` | Calls `super(name, 150)` to set name and base health to 150. Sets `rage` to 0. |
| `public` | `void` | `performAction()` | **Overrides** the abstract method. Prints a sword attack message and increases `rage` by 10. |

### 3. `Mage` Class (Subclass of `Hero`)
This class extends `Hero`, inheriting its base properties but implementing a magic-based action system.

**Variables**
| Access Modifier | Data Type | Name | Description |
| :--- | :--- | :--- | :--- |
| `private` | `int` | `mana` | Tracks the mage's magical energy (starts at 100). |

**Methods**
| Access Modifier | Return Type | Method Signature | Description |
| :--- | :--- | :--- | :--- |
| `public` | *Constructor* | `Mage(String name)` | Calls `super(name, 80)` to set name and base health to 80. Sets `mana` to 100. |
| `public` | `void` | `performAction()` | **Overrides** the abstract method. Checks if `mana` is $\ge$ 20. If true, prints a fireball message and subtracts 20 mana. If false, prints an out-of-mana message. |


### 4. `Party` Class (The Game Engine / Controller)
This class manages a group of heroes and executes their turns without needing to know their specific subclasses.

**Variables**
| Access Modifier | Data Type | Name | Description |
| :--- | :--- | :--- | :--- |
| `public` | `Hero[]` | `members` | A array that holds objects of type `Hero`. Instantiated as an empty array of size 3. |

**Methods**
| Access Modifier | Return Type | Method Signature | Description |
| :--- | :--- | :--- | :--- |
| `public` | `void` | `executeTurn()` | Loops through the `members` list. If a member `isAlive()`, it calls their `performAction()` method. |

### 5. `RPGSimulation` Class (The Main)
This class contains the main: 
```java
public static void main(String[] args) {
        Party myParty = new Party();

        Warrior aragorn = new Warrior("Aragorn");
        Mage gandalf = new Mage("Gandalf");

        myParty.members[0] = aragorn;
        myParty.members[1] = gandalf;

        System.out.println("\n--- First Turn ---");
        myParty.executeTurn();

        System.out.println("\nAn enemy strikes back!");
        aragorn.takeDamage(45);
        gandalf.takeDamage(100);

        System.out.println("\n--- Next Turn ---");
        myParty.executeTurn(); 
    }

```

## Tips, Tricks, and Resources
- [Abstract Classes in Java](https://www.geeksforgeeks.org/java/abstract-classes-in-java/)
- [Subclasses in Java](https://www.w3schools.com/java/java_inheritance.asp)

## Extensions
1. Build a `Cleric` or `Healer` subclass that extends Hero. Instead of dealing damage, the Cleric's `performAction()` should target another Hero and increase their health (without exceeding their max health limit).
2. Create a generic `Item` class. Then, create an interface called `Consumable` with a method consume(Hero target). Then create a `HealthPotion` class that implements `Consumable` and restores health, and a `ManaPotion` that restores mana.
3. Add a `speed` integer to the Hero base class. Before `executeTurn()` runs in the Party class, write an algorithm to sort the members list from highest speed to lowest speed. 

## Reflection Questions
1. Give an example of how encapsulation appears in your code.
2. Give an example of how abstraction appears in your code.
3. Give an example of how inheritance appears in your code.
4. Give an example of how polymorphism appears in your code.


## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person

## Rubric
- **6 points** - All required items are present.
- **5 points** - Task was completed, but supplementary materials are weak or missing.
- **4 points** - Task was attempted, but is missing major components.
- **3 points** - Did not attempt or student should reattempt.