# Dim the LED Lab

## Objective

1. Write a program to create a dimmable LED
2. Use a rotary encoder to read rotary values

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| rotary encoder | An electromechanical device that converts motion into analog or digital signals |
| PWM(pulse-width modulation) | A power-control technique that regulates analog devices using digital signals by rapidly switching power on and off  |


## Your Task

Use the starter code below to dim an LED using a rotary encoder.

## Materials

1. 2 M to M jumper wires
2. 4 M to F jumper wires
3. 1 5mm LED
4. 1 130 Ω (Ohm) resistor
5. 5 pin rotary encoder

## Getting Started

1. Create a new script `dimmable.py` and wire your LED like in the last lab. 
2. Rather than setting up our LED program like the last time, we are going to use a `PWMLED` or a pulse-width-modulation LED. Use the [code provided here](https://gpiozero.readthedocs.io/en/latest/recipes.html#led-with-variable-brightness) to set up your `PWMLED`. We will take advantage of the `PWMLED`'s variable `value` to achieve different brightness's. Try a few different values of `value` between 0 and 1 to set your LED.

<img src="/assets/dim-the-led-wiring.png">

3. Wire your 5 pin rotary encoder with the diagram above. See [this website](https://thepihut.com/blogs/raspberry-pi-tutorials/how-to-use-a-rotary-encoder-with-the-raspberry-pi) for more information on wiring and how they work.
4. Next we are going to write the code. The position on the rotary encoder should start at 0 then slowly increase to 180. You need to translate that value into a value between 0-1 to set the led based on the rotary encoder.  See the starter code below. See [this website](https://gpiozero.readthedocs.io/en/latest/recipes.html#rotary-encoder) for more information. *Note: this example is more complex than what I am asking you to do.* 

```python
from gpiozero import RotaryEncoder

rotor = RotaryEncoder(16, 20, wrap=True, max_steps=180) # DT goes to 16, CLK goes to 20

while True:
	print(rotor.steps) # the value of rotor.steps will change as you rotate the device

```

## Tips, Tricks, and Resources
- Remember that `rotor.steps` is the variable that is holding the rotary encoded value. You are trying to convert that value into a PWM signal. PWM signals must be between 0 and 1, so you will need to transform the values in some way.

## Extensions
1. Swap out your single-color LED for a 4-pin RGB LED (using `RGBLED` in `gpiozero`). Map the 0-180 steps of the rotary encoder to smoothly transition the LED through different colors of the rainbow instead of just changing the brightness of a single color.

## Reflection Questions
1. What debugging strategies did you use to identify and fix these problems?
2. How could you systematically test whether the issue was in hardware or code?
3. Write the equation that converts an encoder value x (from 0–180) into a brightness value b (from 0–1)

## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person

## Rubric
- **6 points** - All required items are present.
- **5 points** - Task was completed, but supplementary materials are weak or missing.
- **4 points** - Task was attempted, but is missing major components.
- **3 points** - Did not attempt or student should reattempt.