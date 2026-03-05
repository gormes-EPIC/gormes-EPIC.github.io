# Light the LED Lab

## Objective

1. Build a circuit using a breadboard
2. Calculate the appropriate resistor using Ohm's Law
3. Write a Python script to light an LED using the Raspberry Pi's GPIO pins

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| GPIO pins | Controllable pins on the Raspberry Pi used to read and write data  |
| breadboard  | A breakout board used to create quick circuits without soldering |
| rails  | Horizontal rows on a breadboard that are connected internally|
| resistor  | Adds resistance to a circuit to constrict the flow of electric current in a circuit  |
| Ohm's Law  | V = IR |
| voltage  | The electrical pressure or potential difference that pushes charges, similar to the water presssure in a pipe  |
| current  | Current is the actual rate of electron flow through a counductor, similar to the rate of water flow through a pipe |
| resistance  | The opposition to the flow of electric current in a circuit |
| volts  | The unit representing voltage  |
| amps  | The unit representing current |
| ohms  | The unit representing resistance |

## Your Task

Your task is to create a circuit and a Python program to light up a 5MM LED light bulb.

## Calculating Your Resistor

In this circuit, you will need a specfic resistor to lower the overall current applied to the LED to safe levels. We can calculate the resistor we need using **Ohm's Law**. 

Ohm's law states **V = IR**. **V** represents voltage and is measured in volts(V). **I** represents current and is measured in amps(A). R represents resistance and is measured in Ohms(Ω).

1. We trying to solve for required **resistance**(which we will apply with a resistor), so reorganize the function to solve for resistance. When you are finished, you should have a function where **R** equals some combination of **V** and **I**.

2. Next, we need to find the voltage that will be applied to the light. The total voltage is equal to **V_supply − V_forward** . Replace **V** in the function with **V_supply − V_forward**. 

3. Since we are going to use a GPIO pin as our supply, **V_supply** = 3.3V.

4. To find the **V_forward**, we need to find the forward voltage of our light bulb. See the [documentation on the SparkFun website](https://www.sparkfun.com/led-basic-red-5mm.html) to find the forward voltage.

5. Next, we need to find the safe current value for the LED. This information is also [on the SparkFun website](https://www.sparkfun.com/led-basic-red-5mm.html). 

6. But wait! There are two things we need to do before we can plug all our current into our function. Since we only want about half the maximum current to be applied to our LED, half your safe current value. Our safe current value is still in **mA** instead of **A**, so divide you **mA** value by 1000 to get it to **A**.   

7. Now, plug all of your values in and solve for resistance. Check your work with an instructor before moving forward.

8. You must select a resistor with **the resistance you solved for or greater** or your LED will explode.
   
## Materials

<img src="/assets/light-the-led-supplies.jpeg">

- Raspberry Pi
- Breadboard and T-Cobbler
- A resistor (see above to figure out which one you need)
- 5MM LED light (two prongs, any color)
- Male-to-Male Jumper wires

## Getting Started - Wiring

**Warning! The following could permanently damage your Pi if you do not heed the warnings below.**

- Turn off your Pi when connecting cables to the GPIO ports.
- Use a resistor, the LED will consumer as much voltage as it can (and explode!). This may damage your Pi, you or your classmates.
- Do not bend the GPIO pins. Once placing your T-Cobbler onto the Pi, you should not remove it.

Ok now that you have all your supplies, we are ready to get started.

1. Use the diagram below to wire your circuit. Remember that each horizontal rail of your breadboard is connected. If you want to connect the long prong of your LED and a jumper wire, they need to be plugged into the same rail.

<img src="/assets/light-the-led-wiring.png">

2. When you are all done, your circuit should look like this. 

<img src="/assets/light-the-led-complete.png">

## Getting Started - Programming

1. Install Visual Studio Code with the command
```
sudo apt install code
```
2. Open VS Code from the Programming tab in the menu on the upper left corner or by typing `code` in your terminal
3. Use the Explorer menu on the left hand side to open up the folder you created in a previous lab. It should have a folder called `venv` inside it. If you did not create this folder in a previous lab, refer to the [Meet Your Raspberry Pi](#Pi's-and-Python/Meet-Your-Raspberry-Pi) instructions to set up a **virtual environment**. 
4. Use the Terminal menu in the upper left of VSCode to open a new terminal. Activate your virtual environment with the command:
```
source venv/bin/activate
```
5. Now you are ready to start programming. Create a new file `light.py` either by right-clicking on the Explorer or using `touch` in the terminal.
6. Then use [this website](https://gpiozero.readthedocs.io/en/latest/recipes.html#led) to help your program your LED.
7. If you did everything correctly, your light will turn on for a few seconds then turn off.

## Tips, Tricks, and Resources
- See [this website](https://gpiozero.readthedocs.io/en/latest/recipes.html#led) for wiring and programming help. 
- If you need a more thorough walkthrough, [use this document](https://drive.google.com/file/d/1bAUwScfuLpdcxtPwUdWppxUo2y2kaoa6/view?usp=sharing) from EPIC Showcase Night. 
- If you are interested in controlling the pins directly from the terminal, [see this website](https://embeddedcomputing.com/technology/processing/interface-io/quick-start-raspberry-pi-gpio-terminal-interface). 

## Extensions
1. Create and document a circuit to control an RGB lightbulb(4 prong).
2. Create and document how to SSH intro your Raspberry Pi and activate the lightbulb.
3. Create a game of Simon with 4 LEDs and 4 buttons. If you don't know how to play Simon, [here is an online version](https://freesimon.org/).


## Reflection Questions
1. What is the purpose of breadboard?
2. Does the LED orientation matter (cathode & abode)?
3. Why do you put a resistor in your circuit?
4. How will a resistor with greater resistance affect the light?

## Deliverables Checklist
- [ ] Demonstrate your light turning on to your instructor
- [ ] Upload your code to GitHub and attach your repository to Google Classroom
- [ ] Submit written answers to the reflection questions or answer them in person with your instructor
 
## Rubric
- **6 points** - All required items are present.
- **5 points** - Task was completed, but supplementary materials are weak or missing.
- **4 points** - Task was attempted, but is missing major components.
- **3 points** - Did not attempt or student should reattempt.