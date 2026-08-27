# Variables and Functions Exercises

## Exercise 1

Use Ohm's law to calcuate the necessary resistory for the following circuit. **V_supply** is  5V.  **V_forward** is 1.5V. The safe current is 50mA which means we can safely send 25mA across it. Solve for resistance.

<details>
<summary>Click here to view the answer</summary>

Ohm's law is **V = IR**. We can rearrange this is **R = V/I**. 

Voltage is **V_supply − V_forward** so our equation is **R = (V_supply − V_forward)/I**. 

Now before we plug everything in, we need to make sure our units match. So 25mA is 0.025A. When we plug everything in we get **R = (5V-1.5V)/0.025A**. Solving for R, we get **140 ohms**.

</details>

## Exercise 2

Identify the variables in this code snippet and their variable types.
```
name = input("What is your name?")
age = input("What is your age?")
secret = int(age) * 3
```

<details>
<summary>Click here to view the answer</summary>

`name` is a variable of type string. `age` is a variable of type string. Remember `input()` always returns a string! `secret` is an integer. 

</details>

## Exercise 3

What does it mean for a function to **return** something? How is it different than printing?

<details>
<summary>Click here to view the answer</summary>

Printing shows data in the terminal for a human user to read, while returning gives a value back to the program so the code can use it in later calculations. We often use return statements to set variables when the function is called.

</details>

## Exercise 4

If I want to display the following message in the terminal **with one line of Python**, what line would I use? 
```
It's a sunny day.
She said, "Python is awesome!"
```
<details>
<summary>Click here to view the answer</summary>

`print("It's a sunny day.\nShe said, \"Python is awesome!\"")`

</details>

## Exercise 5

Write a Python program to take in a first name and last name and create a username. For example if my name was John Smith, my username is `john-smith`. If my name is Jane Doe, my username is `jane-doe`.

<details>
<summary>Click here to view the answer</summary>

There are multiple correct solutions. Here is an example: 

```
fname = input("What is your first name?").strip().lower()
lname = input("What is your last name?").strip().lower()
print(fname + "-" + lname)
```

</details>

## Exercise 6

How do I create a comment in Python?

<details>
<summary>Click here to view the answer</summary>

You start the line with a hashtag(`#`).

</details>

## Exercise 7

Identify the **argument** of the following function.

```
def is_even(number):
    return number % 2 == 0
```

<details>
<summary>Click here to view the answer</summary>

`number` is the argument of the function. 

</details>

## Exercise 8

What does this program output? **Be precise!**

```
def process_data(x):
    y = float(x) * 2
    return y

a = "5"
b = process_data(a)

print(b) 
```

<details>
<summary>Click here to view the answer</summary>

`10.0`

</details>

## Exercise 9

What does this program output?

```
def process_data(x, y):
    z = (int(x) ** int(y)) + 5
    return z

a = "3"
b = "2"
c = process_data(a, b)

print(c)
```

<details>
<summary>Click here to view the answer</summary>

`14`

</details>

## Exercise 10
Re-organize this program so that it calculates and prints `c` using the function `calculate` with arguments `a` and `b`. 

```
print(c)
    z = (int(x) * int(y)) + 10
c = calculate(a, b)
def calculate(x, y):
a = "4"
b = "3"
    return z
```

<details>
<summary>Click here to view the answer</summary>

There are multiple correct solutions, but here is an example: 

```
def calculate(x, y):
    z = (int(x) * int(y)) + 10
    return z

a = "4"
b = "3"

c = calculate(a, b)
print(c)
```

</details>

## Exercise 11

Write a Python function that takes a float as an argument representing temperature in Farienheit and returns the temperature converted to Celsius.


<details>
<summary>Click here to view the answer</summary>

There are multiple correct solutions, but here is an example: 

```
def process_temperature(fahrenheit):
    celsius = (fahrenheit - 32) * (5 / 9)
    return round(celsius, 2)
```

</details>

## Exercise 12

Solve the following expressions for `result`.

```
result = 17 % 5
result = 3 % 8
result = 24 % 6
result = 136 % 60
result = 3847 % 10
result = -7 % 3
result = 0 % 5
```


<details>
<summary>Click here to view the answer</summary>

```
2
3
0
16
7
2
0
```

</details>


## Exercise 13

Define **voltage**, **current**, and **resistance**.


<details>
<summary>Click here to view the answer</summary>

- Voltage ($V$): The electrical pressure or potential difference that pushes charges through a conductor. Measured in Volts (V). (Water analogy: The water pressure provided by a pump).
- Current ($I$): The rate at which electric charge actually flows past a point per second. Measured in Amperes (A) or "amps". (Water analogy: The volume of water flowing through the pipe).
- Resistance ($R$): The opposition to the flow of electric current. Measured in Ohms ($\Omega$). (Water analogy: A narrow section or clog in the pipe slowing down the water).



</details>
