# Object-oriented Programming Principles Lab

## Objective

1. Apply the 4 principles of object-oriented programming: abstraction, encapsulation, inheritance, polymorphism

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| encapsulation | Hides the internal state and functionality of an object, requiring all interaction to occur through a public interface, which protects data integrity. |
| abstraction | Simplifies complex systems by exposing only essential features and hiding unnecessary implementation details, allowing users to focus on "what" an object does rather than "how". |
| inheritance | Allows a child class to derive properties and methods from a parent class, promoting code reusability and establishing hierarchical relationships. |
| polymorphism  | Enables objects of different types to be treated as instances of a common superclass, allowing a single interface to represent different underlying forms (e.g., method overloading/overriding) |
| superclass | The parent class |
| subclass | The child class that extends a parent class. It inherits properties of the parent class. |


## Your Task
You will design a character creator using Java and demonstrate the 4 object-oriented programming principles: **abstraction**, **encapsulation**, **inheritance**, **polymorphism**.


Following the steps below, you will create the following:

1. A base [`Hero` class](#hero) that defines qualities and actions for all character types
2. A child [`Warrior` class](#warrior) that inherits/overrides the components of all heroes and adds `Warrior`-specific properties
3. **[OPTIONAL]** A child [`Mage` class](#mage) that inherits/overrides the components of all heroes and adds `Mage`-specific properties
4. A [`Party` class](#party) that holds the party members and keeps track of whose turn it is
5. A [`Main` class](#main) to test your program

### <a id="hero"></a>Step 1: The `Hero` Class

`Hero` is the **superclass** for every character. Make it an `abstract` class, since there is no such thing as a plain "hero." Every character is a specific type, like a `Warrior` or a `Mage`.

**Private instance variables:**
- `String name`: the hero's name
- `int health`: the hero's current health
- `int maxHealth`: the most health the hero can have

**Methods:**
- `Hero(String name, int maxHealth)`: sets the instance variables. Heroes start at full health.
- `getName()`, `getHealth()`, `getMaxHealth()`: return each value.
- `isAlive()`: returns `true` if the hero's health is above 0.
- `takeDamage(int amount)`: lowers health by `amount`. Health can never go below 0.
- `heal(int amount)`: raises health by `amount`. Health can never go above `maxHealth`.
- `performAction(Hero target)`: an `abstract` method with no body. Each subclass decides what its action does.
- `toString()`: returns the hero's name and health, like `Thor (HP: 120/120)`.

> Other classes should only change a hero's health through `takeDamage()` and `heal()`, never directly.

<details>
<summary>What is an abstract class?</summary>

An **abstract class** is a class you can't make objects from. It's only a starting point for subclasses. It can have regular variables and methods, plus **abstract methods**: methods with no body that every subclass **must** write for itself.

```java
public abstract class Animal {
    private String name;

    public Animal(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    // An abstract method: no body, just a semicolon.
    // Every subclass of Animal must write its own makeSound().
    public abstract void makeSound();
}
```

```java
Animal a = new Animal("Rex");          // Error! You can't make an object from an abstract class.
Animal b = new Dog("Rex", "Beagle");   // Works, as long as Dog extends Animal and writes makeSound().
```

</details>

<details>
<summary>How do I make a subclass?</summary>

A **subclass** uses `extends` to get everything from its superclass. Then it adds its own variables and methods.

```java
public class Dog extends Animal {
    private String breed; // Only dogs have a breed

    public Dog(String name, String breed) {
        super(name);        // Calls Animal's constructor. It must be the first line.
        this.breed = breed;
    }

    @Override
    public void makeSound() {
        System.out.println(getName() + " says Woof!");
    }
}
```

- `extends Animal`: `Dog` gets all of `Animal`'s methods.
- `super(name)`: lets `Animal`'s constructor set the variables that belong to `Animal`.
- `@Override`: shows you're writing your own version of a superclass method. Java will warn you if the names don't match.
- `name` is `private` in `Animal`, so `Dog` can't use it directly. It calls `getName()` instead.

</details>

### <a id="warrior"></a>Step 2: The `Warrior` Class

`Warrior` **extends** `Hero`.

**Private instance variables:**
- `int strength`: how much damage the warrior deals

**Methods:**
- `Warrior(String name, int maxHealth, int strength)`: passes `name` and `maxHealth` to the `Hero` constructor with `super`, then sets `strength`.
- `performAction(Hero target)`: **overrides** `Hero`'s version. Prints a message like `Thor swings a sword at Goblin for 15 damage!`, then deals `strength` damage to `target`.

### <a id="mage"></a>Step 3: The `Mage` Class [OPTIONAL]

`Mage` **extends** `Hero`.

**Private instance variables:**
- `int mana`: magic energy the mage spends to cast spells
- `int spellPower`: how much damage a spell deals

**Methods:**
- `Mage(String name, int maxHealth, int mana, int spellPower)`: passes `name` and `maxHealth` to the `Hero` constructor with `super`, then sets `mana` and `spellPower`.
- `getMana()`: returns the mage's mana.
- `performAction(Hero target)`: **overrides** `Hero`'s version.
    - If the mage has at least 10 mana, it spends 10 mana, prints a message like `Merlin casts a fireball at Goblin for 25 damage!`, and deals `spellPower` damage to `target`.
    - Otherwise, it prints `Merlin is out of mana and rests.` and gains back 10 mana.

### <a id="party"></a>Step 4: The `Party` Class

A `Party` holds a group of heroes and takes turns in order.

**Private instance variables:**
- `Hero[] members`: an array of the heroes in the party
- `int count`: how many heroes have been added so far
- `int currentTurn`: the index of the member whose turn it is

**Methods:**
- `Party(int size)`: creates the `members` array with room for `size` heroes, and starts on turn 0.
- `addMember(Hero hero)`: puts `hero` in the next empty spot in the array. If the party is full, print a message instead.
- `getCurrentMember()`: returns the hero whose turn it is.
- `executeTurn(Hero target)`: the current member performs their action on `target`. Then the turn moves to the next member. After the last member (index `count - 1`), it goes back to the first.
- `printParty()`: prints every member of the party.

> `Party` should work with **any** kind of `Hero`. It should never need to check if a member is a `Warrior` or a `Mage`.

### <a id="main"></a>Step 5: The `Main` Class

In your `main` method:

1. Create a `Party` with room for 2 heroes.
2. Add a `Warrior` named Thor (120 max health, 15 strength) and a `Mage` named Merlin (80 max health, 20 mana, 25 spell power)(if you created a `Mage` class).
3. Create an enemy `Warrior` named Goblin (100 max health, 5 strength).
4. Print the party.
5. While Goblin is alive, run the party's next turn against Goblin and print Goblin.
6. Print that Goblin has been defeated.

Your output should match one of these:

<div class="side-by-side">
<div>

**With a `Mage`**

```
Thor (HP: 120/120)
Merlin (HP: 80/80)

Thor swings a sword at Goblin for 15 damage!
Goblin (HP: 85/100)
Merlin casts a fireball at Goblin for 25 damage!
Goblin (HP: 60/100)
Thor swings a sword at Goblin for 15 damage!
Goblin (HP: 45/100)
Merlin casts a fireball at Goblin for 25 damage!
Goblin (HP: 20/100)
Thor swings a sword at Goblin for 15 damage!
Goblin (HP: 5/100)
Merlin is out of mana and rests.
Goblin (HP: 5/100)
Thor swings a sword at Goblin for 15 damage!
Goblin (HP: 0/100)
Goblin has been defeated!
```

</div>
<div>

**Without a `Mage`**

```
Thor (HP: 120/120)

Thor swings a sword at Goblin for 15 damage!
Goblin (HP: 85/100)
Thor swings a sword at Goblin for 15 damage!
Goblin (HP: 70/100)
Thor swings a sword at Goblin for 15 damage!
Goblin (HP: 55/100)
Thor swings a sword at Goblin for 15 damage!
Goblin (HP: 40/100)
Thor swings a sword at Goblin for 15 damage!
Goblin (HP: 25/100)
Thor swings a sword at Goblin for 15 damage!
Goblin (HP: 10/100)
Thor swings a sword at Goblin for 15 damage!
Goblin (HP: 0/100)
Goblin has been defeated!
```

</div>
</div>

## Tips, Tricks, and Resources
- [Subclasses in Java](https://www.w3schools.com/java/java_inheritance.asp)

## Extensions
1. Build a `Cleric` or `Healer` subclass that extends Hero. Instead of dealing damage, the Cleric's `performAction()` should target another Hero and increase their health (without exceeding their max health limit).
2. Add a `speed` integer to the Hero base class. Before `executeTurn()` runs in the Party class, write an algorithm to sort the `members` array from highest speed to lowest speed. 

## Reflection Questions
1. Give an example of how encapsulation appears in your code.
2. Give an example of how abstraction appears in your code.
3. Give an example of how inheritance appears in your code.
4. Give an example of how polymorphism appears in your code.

## How to Submit

Attach your GitHub repository to Google Classroom. Then, show your instructor your GitHub repository with your programs in class. You will also need to answer the reflection questions.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.