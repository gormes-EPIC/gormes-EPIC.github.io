# Binary Display Lab

<video controls width="100%">
  <source src="assets/binary-display.mov" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Objective

1. Create a recursive function to convert base 10(decimal) into base 2(binary)
2. Display binary numbers on a set of LEDs

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| recursive function | a function that solves problems by calling itself |
| base case | the end case for a recusive function. Instead of calling the function again, we return a standard value we know |
| recursive case | a case for a recusive function where you call the function again |

## Your Task

Create a function that converts decimal numbers to binary numbers. Then light up 8 lights that correspond to 8 binary digits.

## Materials
- 8 5mm LEDs
- 8 130 Ω(Ohm) resistors
- 16 M-M jumper wires
- Additonal breadboard(if needed)

## Getting Started

1. Create a new program `binary.py` on your Pi. In the file define the new function `to_binary(n)` where `n` is a base 10 integer. This function will use **recursion** to convert `n` to its binary representation(a string of 1's and 0's).
2. Next, modify your program to take input from the user and print the binary value.

Here is a quick example of how to convert from decimal to binary: 

- To convert 10 to binary
- 10 % 2 = 0, continue with 10 / 2 = 5
- 5 % 2 = 1, continue with 5 / 2 = 2
- 2 % 2 = 0, continue with 2 / 2 = 1
- 1 % 2 = 1, stop as 1 / 2 = 0
- Reading remainders gives 1010 (binary).

3. Now, wire your 8 lights to 8 different GPIO pins.
4. Set up your 8 LEDs in your code like you have in previous labs. You may want to use a list for this because 8 LED's can get messy pretty quickly.
5. Modify your program to light up the corresponding LEDs with the binary value. 1 is represented by a light that is on. 0 is represented by a light that is off.

## Tips, Tricks, and Resources
- [Geeks for Geeks - Decimal to Binary with Recursion](https://www.geeksforgeeks.org/dsa/decimal-binary-number-using-recursion/)

## Extensions
1. Represent negative integers using [Two's Complement](https://en.wikipedia.org/wiki/Two%27s_complement). If a user enters -5, the code should calculate and display the 8-bit Two's Complement representation.

## Reflection Questions
1. What is the maximum number your LED display can display? Why?
2. What is the **base case** and what is the **recursive case** in your function `to_binary()`?
3. How did you efficiently set up and mangage your lights? If your solution is not effecient, go back and edit it now.

## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person

## Rubric
- **20 points** - All required items are present.
- **15 points** - Task was completed, but supplementary materials are weak or missing.
- **10 points** - Task was attempted, but is missing major components.
- **0 points** - Task was not attempted to 50% completion or student should reattempt.