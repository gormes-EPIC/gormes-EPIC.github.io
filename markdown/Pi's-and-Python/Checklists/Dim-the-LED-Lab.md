# Dim the LED Lab: Checklist

> Work from top to bottom and check off each step as you finish it. Your progress is saved in this browser, so you can come back to it later.
>
> **The goal:** turn a rotary encoder knob to smoothly dim and brighten an LED.

## Step 1: Gather Your Materials

- [ ] 2 male-to-male jumper wires
- [ ] 4 male-to-female jumper wires
- [ ] 1 5mm LED
- [ ] 1 130 Ω (Ohm) resistor
- [ ] 1 5-pin rotary encoder

## Step 2: Set Up a Dimmable LED

> **Warning!** Keep your Pi turned off while you connect anything to the GPIO pins, and don't bend the GPIO pins.

- [ ] Shut down your Pi and unplug its power.
- [ ] Wire your LED and resistor to a GPIO pin, the same way you did in the [Light the LED Lab](#Pi's-and-Python/Light-the-LED-Lab).
- [ ] Plug your Pi back in, open your project folder in VS Code, and activate your virtual environment:

  ```
  source venv/bin/activate
  ```

- [ ] Create a new program called `dimmable.py`.
- [ ] Set up your LED as a `PWMLED` (a pulse-width modulation LED) using the [gpiozero variable brightness recipe](https://gpiozero.readthedocs.io/en/latest/recipes.html#led-with-variable-brightness).
- [ ] Set the `PWMLED`'s `value` to a few different numbers between 0 and 1, and run your program after each one to see how the brightness changes.

## Step 3: Wire the Rotary Encoder

- [ ] Shut down your Pi and unplug its power.
- [ ] Wire your rotary encoder using the diagram below. **DT** goes to GPIO 16 and **CLK** goes to GPIO 20. [This guide](https://thepihut.com/blogs/raspberry-pi-tutorials/how-to-use-a-rotary-encoder-with-the-raspberry-pi) explains the wiring and how rotary encoders work.

<img src="assets/dim-the-led-wiring.png">

- [ ] Double-check each wire against the diagram.
- [ ] Plug your Pi back in and turn it on.

## Step 4: Read the Rotary Encoder

- [ ] Add the starter code below to your program.

```python
from gpiozero import RotaryEncoder

rotor = RotaryEncoder(16, 20, wrap=True, max_steps=180) # DT goes to 16, CLK goes to 20

while True: # This while statement will repeat all of the statements inside it forever
	print(rotor.steps) # the value of rotor.steps will change as you rotate the device
```

- [ ] Run it and turn the knob. Watch the value of `rotor.steps` change in the terminal.
- [ ] Turn the knob in **both** directions, and write down the range of values you see.
- [ ] Press **Ctrl + C** to stop the program.

<details>
<summary>Want to learn more?</summary>

The [gpiozero rotary encoder recipe](https://gpiozero.readthedocs.io/en/latest/recipes.html#rotary-encoder) has more information. Its example is more complex than what you need for this lab.

</details>

## Step 5: Dim the LED with the Knob

A `PWMLED`'s `value` must be between 0 and 1, but `rotor.steps` goes up to 180.

- [ ] Write down how you'll turn a `rotor.steps` value into a brightness between 0 and 1.
- [ ] Use it in your loop to set your LED's brightness from the rotary encoder.
- [ ] Run your program and turn the knob. The LED should get brighter and dimmer as you turn it.
- [ ] Make sure the brightness never goes below 0 or above 1, no matter which way you turn the knob.

## Step 6: Make the Dimming Look Smooth

People see brightness on a curve, so a straight-line increase makes the LED look fully bright very quickly. The second half of the knob seems to do almost nothing. This brightness function fixes that:

$$b(x) = (\frac{x}{180})^2$$

Here, $x$ is the value from the rotary encoder and $b(x)$ is the brightness.

- [ ] Change your program to use this brightness function instead.
- [ ] Turn the knob slowly from one end to the other. The LED should now appear to brighten evenly.
- [ ] Commit and push `dimmable.py` to GitHub.

## Step 7: Reflect and Submit

- [ ] Answer the reflection questions:
  - [ ] What debugging strategies did you use to identify and fix problems in this lab?
  - [ ] How could you systematically test whether an issue was in your hardware or your code?
  - [ ] Write the equation that converts an encoder value $x$ (from 0–180) into a brightness value $b$ (from 0–1).
- [ ] Attach your GitHub repository to Google Classroom.
- [ ] ✋ Show your instructor your GitHub repository with your program.
- [ ] ✋ Demonstrate your LED turning on and dimming to your instructor in class.

## Extension (Optional)

- [ ] Swap your LED for a 4-pin RGB LED (using `RGBLED` in `gpiozero`). Map the 0–180 steps of the rotary encoder to smoothly move through the colors of the rainbow. Before you start, write a [piecewise function](https://en.wikipedia.org/wiki/Piecewise_function) to model your LED. For example, split the 180 steps into three 60-step zones where different colors rise and fall.
