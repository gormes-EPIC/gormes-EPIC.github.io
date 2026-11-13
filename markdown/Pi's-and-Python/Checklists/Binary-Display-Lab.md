# Binary Display Lab: Checklist

> **The goal:** write a recursive function that converts a decimal number to binary, then show that binary number on a row of 8 LEDs.

## Step 1: Gather Your Materials

- [ ] 8 5mm LEDs
- [ ] 8 130 Ω (Ohm) resistors
- [ ] 16 male-to-male jumper wires
- [ ] An additional breadboard (if you need more room)

## Step 2: Write the Recursive Function

Here is how to convert 10 to binary by hand. Divide by 2 over and over, keeping track of the remainders:

| Step | Remainder | Continue with |
| ----------- | ----------- | ----------- |
| 10 % 2 | 0 | 10 // 2 = 5 |
| 5 % 2 | 1 | 5 // 2 = 2 |
| 2 % 2 | 0 | 2 // 2 = 1 |
| 1 % 2 | 1 | stop, since 1 // 2 = 0 |

Reading the remainders from the **bottom up** gives **1010**.

- [ ] Practice by converting 6 and 13 to binary on paper. (You should get 110 and 1101.)
- [ ] Create a new program called `binary.py` on your Pi.
- [ ] Define your function with the header `def to_binary(n):` where `n` is a base 10 integer. It should return a **string** of 1's and 0's.
- [ ] Add your **base case**.
- [ ] Add your **recursive case**. Look back at the conversion by hand above to guide you.
- [ ] Test it: `to_binary(10)` should return `"1010"`, `to_binary(6)` should return `"110"`, and `to_binary(13)` should return `"1101"`.
- [ ] Ask the user for a number and print its binary value.
- [ ] Commit and push `binary.py` to GitHub.

<details>
<summary>Stuck on the recursion?</summary>

- [Geeks for Geeks: Decimal to Binary with Recursion](https://www.geeksforgeeks.org/dsa/decimal-binary-number-using-recursion/)

</details>

## Step 3: Wire 8 LEDs

> **Warning!** Not following these rules could permanently damage your Pi, or hurt you or your classmates.
> - Keep your Pi turned off while you connect anything to the GPIO pins.
> - Every LED needs its own resistor.
> - Don't bend the GPIO pins.

- [ ] Shut down your Pi and unplug its power.
- [ ] Wire your first LED and resistor to a GPIO pin, the same way you did in the [Light the LED Lab](#Pi's-and-Python/Light-the-LED-Lab).

<img src="assets/light-the-led-wiring.png">

- [ ] Repeat for the other 7 LEDs, each on a **different** GPIO pin. Line them up in a row so they read like a binary number.
- [ ] Write down which GPIO pin each LED is connected to, from left to right.
- [ ] Plug your Pi back in and turn it on.

## Step 4: Light Up the Display

- [ ] Activate your virtual environment in the VS Code terminal:

  ```
  source venv/bin/activate
  ```

- [ ] Import `LED` from `gpiozero` at the top of `binary.py`.
- [ ] Set up your 8 LEDs in your code like you have in previous labs. A list can keep 8 LEDs from getting messy.
- [ ] Test your wiring by making sure every LED can turn on.
- [ ] Make sure your binary string is always **8 digits** long, so it lines up with your 8 LEDs. For example, 10 should become `"00001010"`.
- [ ] Light up the LEDs to match your binary string. A `1` is a light that's **on**, and a `0` is a light that's **off**.
- [ ] Test with 0 (all off), 10, and the largest number your display can show (all on).
- [ ] Commit and push your finished `binary.py` to GitHub.

## Step 5: Reflect and Submit

- [ ] Answer the reflection questions:
  - [ ] What is the maximum number your LED display can show? Why?
  - [ ] What is the **base case** and what is the **recursive case** in your `to_binary()` function?
  - [ ] How did you efficiently set up and manage your lights? If your solution isn't efficient, go back and edit it now.
- [ ] Attach your GitHub repository to Google Classroom.
- [ ] ✋ Show your instructor your GitHub repository with your program.
- [ ] ✋ Demonstrate your binary display to your instructor in class.

## Extension (Optional)

- [ ] Represent negative numbers using [Two's Complement](https://en.wikipedia.org/wiki/Two%27s_complement). If a user enters -5, your program should calculate and display its 8-bit Two's Complement representation.
