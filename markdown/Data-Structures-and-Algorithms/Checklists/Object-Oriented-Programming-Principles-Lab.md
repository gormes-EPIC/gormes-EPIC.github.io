# Object-oriented Programming Principles Lab: Checklist

> **The goal:** build a small character creator in Java (`Hero`, `Warrior`, an optional `Mage`, and `Party`) that uses all 4 principles: abstraction, encapsulation, inheritance, and polymorphism.

## Step 1: Get Set Up

- [ ] Review the [Object-oriented Programming Principles Notes](#Data-Structures-and-Algorithms/Object-Oriented-Programming-Principles-Notes).
- [ ] Create a new IntelliJ project and share it on GitHub. The [Object Review Lab](#Data-Structures-and-Algorithms/Object-Review-Lab) has the steps if you need a refresher.
- [ ] Create a `Main` class with a `main` method.

## Step 2: The `Hero` Class

`Hero` is the superclass for every character. There's no such thing as a plain "hero," so it's **abstract**.

- [ ] Create a new class called `Hero` and make it `abstract`.
- [ ] Add these **private instance variables**:
  - [ ] `String name`: the hero's name
  - [ ] `int health`: the hero's current health
  - [ ] `int maxHealth`: the most health the hero can have
- [ ] Write the constructor `Hero(String name, int maxHealth)`. Heroes start at full health.
- [ ] Write `getName()`, `getHealth()`, and `getMaxHealth()`.
- [ ] Write `isAlive()`. It returns `true` if health is above 0.
- [ ] Write `takeDamage(int amount)`. Health can never go below 0.
- [ ] Write `heal(int amount)`. Health can never go above `maxHealth`.
- [ ] Add an `abstract` method `performAction(Hero target)` with no body.
- [ ] Write `toString()`. It returns the name and health, like `Thor (HP: 120/120)`.

> Other classes should only change a hero's health through `takeDamage()` and `heal()`, never directly.

<details>
<summary>Stuck on abstract classes?</summary>

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

## Step 3: The `Warrior` Class

- [ ] Create a class called `Warrior` that **extends** `Hero`.
- [ ] Add a private `int strength`: how much damage the warrior deals.
- [ ] Write the constructor `Warrior(String name, int maxHealth, int strength)`. Pass `name` and `maxHealth` to `super`, then set `strength`.
- [ ] Override `performAction(Hero target)`. Print a message like `Thor swings a sword at Goblin for 15 damage!`, then deal `strength` damage to `target`.
- [ ] Quick test in `main`: make two warriors, have one attack the other once, and print the one that got hit. A 100-health warrior hit for 15 should print `(HP: 85/100)`.

<details>
<summary>Stuck on making a subclass?</summary>

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

- [ ] Commit and push your code to GitHub.

## Step 4: The `Mage` Class (Optional)

- [ ] Create a class called `Mage` that **extends** `Hero`.
- [ ] Add these **private instance variables**:
  - [ ] `int mana`: magic energy the mage spends to cast spells
  - [ ] `int spellPower`: how much damage a spell deals
- [ ] Write the constructor `Mage(String name, int maxHealth, int mana, int spellPower)`. Pass `name` and `maxHealth` to `super`.
- [ ] Write `getMana()`.
- [ ] Override `performAction(Hero target)`:
  - [ ] If the mage has at least 10 mana: spend 10 mana, print a message like `Merlin casts a fireball at Goblin for 25 damage!`, and deal `spellPower` damage to `target`.
  - [ ] Otherwise: print `Merlin is out of mana and rests.` and gain back 10 mana.
- [ ] Commit and push your code to GitHub.

## Step 5: The `Party` Class

A `Party` holds heroes in an **array** and takes turns in order.

- [ ] Create a class called `Party`.
- [ ] Add these **private instance variables**:
  - [ ] `Hero[] members`: an array of the heroes in the party
  - [ ] `int count`: how many heroes have been added so far
  - [ ] `int currentTurn`: the index of the member whose turn it is
- [ ] Write the constructor `Party(int size)`. It creates the array with room for `size` heroes and starts on turn 0.
- [ ] Write `addMember(Hero hero)`. It puts `hero` in the next empty spot. If the party is full, print a message instead.
- [ ] Write `getCurrentMember()`. It returns the hero whose turn it is.
- [ ] Write `executeTurn(Hero target)`. The current member performs their action on `target`, then the turn moves to the next member. After the last member (index `count - 1`), go back to the first.
- [ ] Write `printParty()`. It prints every member.

> `Party` should work with **any** kind of `Hero`. It should never check if a member is a `Warrior` or a `Mage`.

- [ ] Commit and push your code to GitHub.

## Step 6: Test It in `Main`

- [ ] Create a `Party` with room for 2 heroes.
- [ ] Add a `Warrior` named Thor (120 max health, 15 strength).
- [ ] If you made a `Mage`, add one named Merlin (80 max health, 20 mana, 25 spell power).
- [ ] Create an enemy `Warrior` named Goblin (100 max health, 5 strength).
- [ ] Print the party.
- [ ] While Goblin is alive, run the party's next turn against Goblin and print Goblin.
- [ ] Print that Goblin has been defeated.
- [ ] Run it and check that your output matches one of these:

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

- [ ] Commit and push your code to GitHub.

## Step 7: Reflect and Submit

- [ ] Answer the reflection questions:
  - [ ] Give an example of how encapsulation appears in your code.
  - [ ] Give an example of how abstraction appears in your code.
  - [ ] Give an example of how inheritance appears in your code.
  - [ ] Give an example of how polymorphism appears in your code.
- [ ] Make sure all your classes are pushed to your GitHub repository.
- [ ] Attach your GitHub repository to Google Classroom.
- [ ] ✋ Show your instructor your GitHub repository with your program.

## Extensions (Optional)

- [ ] Build a `Cleric` or `Healer` subclass of `Hero`. Instead of dealing damage, its `performAction()` targets another hero and raises their health (without going over their max health).
- [ ] Add a `speed` integer to `Hero`. Before `executeTurn()` runs in `Party`, sort the `members` array from highest speed to lowest speed.
