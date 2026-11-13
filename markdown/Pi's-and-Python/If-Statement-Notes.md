# If Statement Notes

<tabs>
<tab title="Grade Level">

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| if statement | runs a block of code only if a condition is true |
| condition | an expression that evaluates to either `True` or `False` |
| comparison operator | a symbol that compares two values, like `==`, `<`, or `!=` |
| boolean | a data type that can only be `True` or `False` |
| logical operator | `and`, `or`, and `not`, which combine or flip conditions |
| `elif` / `else` | extra branches of an if statement that run when the earlier conditions are false |
| match case | a statement that compares one variable against a list of possible values |

## What is an If Statement?

An **if statement** is used to run a block of code *if* a condition is true.

Let's look at an example.

```python
a = 33
b = 200
if b > a:
    print("b is greater than a")
```

In this example, we created two variables, `a` and `b`. Then we used an if statement to print out `"b is greater than a"` if a condition was true. The condition is `b > a`.

There are multiple ways to compare variables in an if statement. They should look familiar to you.

| Operator | Meaning | Example |
| ----------- | ----------- | ----------- |
| `==` | equals | `a == b` |
| `!=` | not equals | `a != b` |
| `<` | less than | `a < b` |
| `<=` | less than or equal to | `a <= b` |
| `>` | greater than | `a > b` |
| `>=` | greater than or equal to | `a >= b` |

Let's look closely at the "equals" condition. Notice that there are two equals signs instead of one. **One equals sign** is used to assign values to variables. **Two equals signs** are used to compare two values.

## How If Statements Work

The if statement evaluates a condition (an expression that results in `True` or `False`). If the condition is true, the code block inside the if statement is executed. If the condition is false, the code block is skipped.

Indentation is really important here! The statements inside the if statement (the ones you want to run if the condition is true) must be indented, and the line with the condition must end with a colon (`:`). The second example below will raise an `IndentationError` because the `print` isn't indented.

```python
number = 15
if number > 0:
    print("The number is positive")
```

```python
number = 15
if number > 0:
print("The number is positive")
```

Python uses indentation to know where the if statement's code block ends. In the example below, only the first `print` belongs to the if statement. The second one always runs.

```python
number = -3
if number > 0:
    print("The number is positive")
print("Done checking!")   # Always runs, since it isn't indented
```

## `else` and `elif`

An `else` block runs when the if statement's condition is **false**. Exactly one of the two blocks will run.

```python
battery = 15

if battery > 20:
    print("Battery is fine")
else:
    print("Plug in your device!")
```

When there are more than two possibilities, use `elif` (short for "else if") to check more conditions. Python checks each condition from top to bottom, and runs **only the first one** that's true. Everything after that is skipped. The `else` at the end is optional, and catches anything that didn't match.

```python
age = 15

if age < 3:
    print("Ticket price: free")
elif age < 13:
    print("Ticket price: $8")
elif age < 65:
    print("Ticket price: $12")
else:
    print("Ticket price: $9")
```

This prints `Ticket price: $12`. Notice that the order matters! Since `age < 13` is checked before `age < 65`, by the time Python reaches `age < 65`, it already knows the age is at least 13.

### Separate Ifs vs. `elif`

Compare these two programs:

```python
score = 95

if score >= 90:
    print("Great job!")
if score >= 70:
    print("You passed!")
```

```python
score = 95

if score >= 90:
    print("Great job!")
elif score >= 70:
    print("You passed!")
```

The first program prints **both** messages, because separate if statements are each checked on their own. The second program only prints `Great job!`, because `elif` is skipped once an earlier condition in the same chain is true.

## `and`, `or`, and `not`

We can combine multiple conditions into one statement using the keywords `and` and `or`. `and` returns `True` only if both conditions are true. `or` returns `True` if at least one condition is true.

For example:

```python
x = 5
y = 10

if x > 0 and y > 5:
    print("Both conditions are met!")
```

Since `x > 0` and `y > 5`, this snippet will print `Both conditions are met!`. If either of the conditions were `False`, the whole condition would be `False`.

Let's look at an example with `or`.

```python
is_weekend = True
has_vacation = False

if is_weekend or has_vacation:
    print("Time to relax!")
```

This program prints `Time to relax!` if either `is_weekend` or `has_vacation` is `True`. They can both be `True`, but they don't have to be.

The `not` keyword flips a condition: `True` becomes `False`, and `False` becomes `True`.

```python
is_raining = False

if not is_raining:
    print("Let's go outside!")
```

Here's a summary of all three:

| `a` | `b` | `a and b` | `a or b` | `not a` |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| `True` | `True` | `True` | `True` | `False` |
| `True` | `False` | `False` | `True` | `False` |
| `False` | `True` | `False` | `True` | `True` |
| `False` | `False` | `False` | `False` | `True` |

Let's look at one more:

```python
num = 7

if num == 5 or 10:
    print("Apple")
else:
    print("Blueberry")
```

Reading quickly, you might think the previous program would print `Blueberry`. If you run it, you will find it prints `Apple`. This is because we set up our condition incorrectly. Python reads it as `(num == 5) or (10)`. The first part is `False`, but Python treats any number other than `0` as true on its own, so the whole condition is true.

If we wanted to check if `num` was 5 or 10 we would need to write the whole thing out as `if num == 5 or num == 10`. It is a little annoying to write out, but we can't cut any corners if we want our program to work as intended.

You can include as many `and` and `or` keywords in your condition as you want; you aren't limited to two! When you mix them, use parentheses to make the order clear, like `if (a or b) and c:`.

### Checking a Range

To check if a number is between two values, you can combine two comparisons with `and`. Python also lets you write a range in one line, like in math class:

```python
temp = 72

if temp >= 65 and temp <= 80:
    print("Nice weather!")

if 65 <= temp <= 80:      # Same thing, written as a range
    print("Nice weather!")
```

## Comparing Strings

You can compare strings with `==` and `!=`, too. But be careful: string comparisons are **case-sensitive**, and spaces count.

```python
answer = "Yes"

print(answer == "yes")           # False: "Y" and "y" are different
print(answer.lower() == "yes")   # True
```

When you're checking something a user typed, it's a good idea to convert it to lowercase first, so `Yes`, `YES`, and `yes` all work.

## Booleans

In addition to strings, ints, and floats there is another data type we haven't talked about yet: booleans. A **boolean** is a data type representing a true or false value. To initialize a boolean, set it equal to either `True` or `False`, with a capital letter and no quotes. We can also use a comparison operator, like `==`, to assign a boolean based on a condition.

Let's look at an example:

```python
check = True

if check:
    print("True!")
else:
    print("False!")
```

This program will print `True!` because `check` is a boolean with a value of `True`. Notice we wrote `if check:`, not `if check == True:`. Since `check` is already a boolean, there's no need to compare it to `True`.

Let's look at another example:

```python
x = 10
statement = x == 5

if statement:
    print("The statement is correct")
else:
    print("The statement is false")
```

This program will print `The statement is false` since `x == 5` evaluates to `False`.

## Nested If Statements

You can put an if statement inside another if statement. The inner one is only checked if the outer condition is true.

```python
has_ticket = True
age = 10

if has_ticket:
    if age >= 13:
        print("Enjoy the movie!")
    else:
        print("You need an adult with you.")
else:
    print("Please buy a ticket first.")
```

Nesting is useful, but too many levels gets hard to read. Sometimes `and` or `elif` is a simpler choice.

## Match Cases

A **match case** compares one variable to a list of possible values. If the variable matches a value, that case's code block is run. This is very similar to an if/elif chain, but it can be easier to read when you're only checking whether one variable **equals** different values.

Let's look at this program:

```python
status_code = 404

match status_code:
    case 200:
        print("Success")
    case 400:
        print("Bad Request")
    case 404:
        print("Not Found")
    case _:
        print("Unknown Status")
```

We define a variable `status_code`, then create our match statement using that variable (it appears in the header `match status_code`). For each case, we compare `status_code` to a different value. In this case, `status_code` is `404`, so our program will print `Not Found`. The `case _` is a catch-all for every other value not in the cases (like an `else` statement).

A single case can also match more than one value, using `|` to mean "or":

```python
day = "Saturday"

match day:
    case "Saturday" | "Sunday":
        print("Weekend!")
    case _:
        print("School day")
```

*Match cases were added in Python 3.10. If you get a `SyntaxError` on a `match` line, check your Python version with `python3 --version`.*

## Common Mistakes

- **Using `=` instead of `==`.** `if x = 5:` is a `SyntaxError`. Use `==` to compare.
- **Forgetting the colon.** Every `if`, `elif`, `else`, `match`, and `case` line ends with `:`.
- **Wrong indentation.** The code inside each block must be indented the same amount.
- **Writing `or` as a shortcut.** `if x == 5 or 10:` is always true. Write `if x == 5 or x == 10:`.
- **Putting conditions in the wrong order.** In an `elif` chain, only the first true condition runs, so check the most specific conditions first.
- **Comparing a number to a string.** `input()` returns a string, so `"5" == 5` is `False`. Convert with `int()` first.

</tab>
<tab title="Explain It Like I'm 10">

## Words to Know

- **If statement:** code that only runs when something is true.
- **Condition:** a yes-or-no question for the computer, like "Is it raining?"
- **Boolean:** the answer to a yes-or-no question. In Python, it's either `True` or `False`.
- **`else`:** what to do when the answer is no.
- **`elif`:** short for "else if." Another question to ask if the first answer was no.
- **`and`, `or`, `not`:** words for combining or flipping questions.

## Making Decisions

You make decisions all day long: *If it's raining, I'll bring an umbrella. Otherwise, I won't.*

Programs make decisions the same way, using an **if statement**:

```python
is_raining = True

if is_raining:
    print("Bring an umbrella!")
else:
    print("Leave the umbrella at home.")
```

- `if` asks a yes-or-no question. Here, the question is "Is it raining?"
- If the answer is **yes** (`True`), Python runs the indented lines under `if`.
- If the answer is **no** (`False`), Python runs the indented lines under `else` instead.

Only one of the two blocks ever runs. It's like a fork in the road: you can go left or right, but not both.

## Asking Questions with Comparisons

Most questions compare two things. Python has symbols for that:

| Symbol | Question it asks | Example |
| ----------- | ----------- | ----------- |
| `==` | Are these the same? | `score == 100` |
| `!=` | Are these different? | `answer != "no"` |
| `<` | Is the left one smaller? | `age < 13` |
| `>` | Is the left one bigger? | `temp > 90` |
| `<=` | Smaller, or the same? | `price <= 20` |
| `>=` | Bigger, or the same? | `height >= 48` |

**Watch out:** one equals sign (`=`) and two equals signs (`==`) mean totally different things.
- `x = 5` **puts** 5 into the box called `x`.
- `x == 5` **asks** "Is the thing in the box 5?"

## Indenting Matters

Python uses spaces at the start of a line to know which lines belong to the `if`. Lines that are indented underneath it only run when the answer is yes. Lines that aren't indented always run.

```python
temp = 95

if temp > 90:
    print("It's hot!")        # Only runs if temp is over 90
    print("Drink water!")     # Only runs if temp is over 90
print("Have a good day!")     # Always runs
```

And don't forget the colon (`:`) at the end of the `if` line!

## More Than Two Choices: `elif`

What if there are more than two options? Think about a movie theater with different ticket prices for different ages. You need to ask several questions in a row. That's what `elif` is for:

```python
age = 15

if age < 3:
    print("Free")
elif age < 13:
    print("$8")
elif age < 65:
    print("$12")
else:
    print("$9")
```

Python goes down the list, asking one question at a time. As soon as it gets a **yes**, it runs that block and skips everything else. It's like a game of 20 Questions: once you guess right, you stop asking.

Here, `age < 3` is no. `age < 13` is no. `age < 65` is **yes**, so it prints `$12` and stops. The `else` at the end catches anyone who didn't match any of the questions.

## Combining Questions: `and`, `or`, `not`

Sometimes one question isn't enough.

- **`and`:** both must be yes. *"Can you ride the roller coaster?" Only if you're tall enough **and** you have a ticket.*
- **`or`:** at least one must be yes. *"Do you get the day off?" Yes if it's the weekend **or** a holiday.*
- **`not`:** flips the answer. *"Is it **not** raining?" is yes when it's dry.*

```python
height = 52
has_ticket = True

if height >= 48 and has_ticket:
    print("Enjoy the ride!")
```

**A common trap:** if you want to know whether `num` is 5 or 10, you have to write out the whole question both times:

```python
num = 7

if num == 5 or num == 10:    # Correct
    print("num is 5 or 10")
```

Writing `if num == 5 or 10:` doesn't work, even though it sounds right in English. Python thinks the `10` is its own separate question, and it treats any number besides `0` as a "yes." So that condition is **always** true.

## True and False: Booleans

A **boolean** is a value that can only be `True` or `False`, like a light switch that's either on or off. You can store one in a variable:

```python
has_homework = False

if has_homework:
    print("Do your homework first.")
else:
    print("Free time!")
```

Booleans always start with a capital letter (`True`, not `true`), and they don't go in quotes.

## Checking Words

You can compare words too, but Python is picky about capital letters. To Python, `"Yes"` and `"yes"` are different words!

```python
answer = "Yes"
print(answer == "yes")           # False
print(answer.lower() == "yes")   # True
```

A good trick: turn what the user typed into all lowercase first. Then it doesn't matter how they capitalized it.

## Match Cases: A Menu of Choices

When you're checking one variable against a bunch of exact values, a **match case** can be easier to read than a long `elif` chain. It works like a menu: find the item that matches, and do what it says.

```python
day = "Saturday"

match day:
    case "Saturday" | "Sunday":
        print("Weekend!")
    case "Friday":
        print("Almost the weekend!")
    case _:
        print("School day")
```

The `|` means "or." The `case _` at the bottom matches anything else, like `else` does.

## Common Mistakes

- Using `=` when you mean `==`.
- Forgetting the colon (`:`) at the end of `if`, `elif`, and `else` lines.
- Forgetting to indent the lines that belong to the `if`.
- Writing `if x == 5 or 10:` instead of `if x == 5 or x == 10:`.
- Comparing what the user typed to a number. `input()` always gives you text, so `"5"` is not the same as `5`. Use `int()` first.

</tab>
<tab title="Just the Highlights">

## Syntax

```python
if condition:          # Colon at the end
    ...                # Indented block runs if condition is True
elif other_condition:  # Optional, as many as you need
    ...                # Runs if this is the FIRST true condition
else:                  # Optional, at most one, always last
    ...                # Runs if nothing above was True
```

- Exactly one block of an if/elif/else chain runs, at most. Conditions are checked top to bottom, and the first true one wins.
- Separate `if` statements are each checked on their own, so more than one can run.
- Indentation defines the block. Missing indentation is an `IndentationError`. A missing colon is a `SyntaxError`.

## Comparisons and Logic

| Operator | Meaning |
| ----------- | ----------- |
| `==` `!=` | equal, not equal (`=` assigns, `==` compares) |
| `<` `<=` `>` `>=` | less / greater than (or equal to) |
| `and` | `True` only if both sides are `True` |
| `or` | `True` if at least one side is `True` |
| `not` | flips `True` and `False` |

- Ranges can be chained: `65 <= temp <= 80`.
- `x == 5 or 10` is **always** `True`, because `10` is truthy on its own. Write `x == 5 or x == 10`.
- Use parentheses when mixing `and` and `or`.

## Booleans

- `True` and `False`: capitalized, no quotes.
- A comparison produces a boolean: `is_adult = age >= 18`.
- Write `if flag:` instead of `if flag == True:`.

## Strings

- String comparisons are case-sensitive: `"Yes" == "yes"` is `False`. Normalize with `.lower()`.
- `input()` returns a string, so `"5" == 5` is `False`. Convert with `int()` first.

## Match Case (Python 3.10+)

```python
match value:
    case 1:
        ...
    case 2 | 3:        # | means "or"
        ...
    case _:            # Catch-all, like else
        ...
```

- Best when comparing **one** variable against exact values. Use `if`/`elif` for ranges and complex conditions.

## Watch Out For

- `=` instead of `==`.
- Missing colons or inconsistent indentation.
- The `or` shortcut that's always true.
- An `elif` chain in the wrong order: put the most specific conditions first.

</tab>
</tabs>
