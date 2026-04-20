# Light the LED Walkthrough

## Objective

1. Wire a circuit using a Raspberry Pi and a breadboard
2. Create a Python program to make an LED blink

## Materials 

<img src="/assets/
light-the-led-walkthrough-figure-1.png">

- Raspberry Pi with T-cobbler and breadboard
- 2 M-M jumper wires
- 5MM LED
- Resistor (over 130 Ohms)

## Overview and Vocabulary

<img src="/assets/
light-the-led-walkthrough-figure-2.png">

n order to turn on our light using Python, we will need to take advantage of our Raspberry Pi's **GPIO pins** or general purpose input-output pins. Some of the pins can be turned on and off using Python, which is how we will power our light.

Right now, your Pi already is connected to a **breadboard** using a **T-cobbler**. A breadboard allows us to quickly create circuits with M-M wires instead of soldering. The T-cobbler connects each of the Pi's pins to your breadboard . You can tell which pin you are using by reading the white text on the blue T-cobbler. 

<img src="/assets/
light-the-led-walkthrough-figure-3.png">

To connect a wire to another wire using a breadboard, plug the two wires into the same **rail** or horizontal row on the board. _Note: the horizontal rails of the breadboard are not connected across the gap in the middle or to either of the colored vertical rails on each side._

When our circuit is complete, we want it to look something like this: 

<img src="/assets/
light-the-led-walkthrough-figure-4.png">


# Part 1: Wiring Your Pi

## *Complete the following steps with the Pi off!*

## Step 1: Connect to GPIO Pin 18

1. Get one jumper wire and plug one end into the same row on your breadboard as pin 18 on your T-cobbler. _Use the numbering on the blue T-cobbler, not the breadboard._

<img src="/assets/
light-the-led-walkthrough-figure-5.png">

## Step 2: Plug the Other End into an Empty Rail 

1. Connect the other end of the wire you just connected into an empty rail of the breadboard. **DO NOT** put it in the same row as any other piece of your T-cobbler.

<img src="/assets/
light-the-led-walkthrough-figure-6.png">

## Step 3: Connect Your Light

1. Put the **long end of your light bulb** into the same row as the wire in step 2. If you connect the short end instead, your light will not turn on. 


<img src="/assets/
light-the-led-walkthrough-figure-7.png">

2. **DO NOT** put the short end of the light bulb in the same row, **instead** put it in an adjacent row like the picture below. 

<img src="/assets/
light-the-led-walkthrough-figure-8.png">


3. Push down on the light to make sure it is actually in the breadboard. You may need to apply a little bit of force. 

## Step 4: Connect the Resistor 

1. Connect one end of the resistor to the same row as the short end of your light, as shown in green below.

<img src="/assets/
light-the-led-walkthrough-figure-9.png">

2. Connect the other end to an empty rail. This can be any empty rail; it does not have to be on the other side of the breadboard.

**DO NOT PUT BOTH ENDS OF THE RESISTOR IN THE SAME RAIL AS YOUR LIGHT.** Because all wires in the same rail are connected, electricity will not pass through the resistor. This can cause your light bulb to explode.

## Step 5: Connect the Last Wire

1. Put one end of your last jumper wire into the same rail as the end of the resistor that is in an empty row.

<img src="/assets/
light-the-led-walkthrough-figure-10.png">

2. Then put the other end next to any pin in your T-cobbler labeled **GND** for Ground.

<img src="/assets/
light-the-led-walkthrough-figure-11.png">

## *Get your circuit checked before continuing!*

# Part 2: Programming Your Pi

Now that your circuit is built, it is time to turn your Pi back on and get programming!

## Step 0: Login to your Pi

1. Power on your Pi by plugging it back in and login. 
2. The username is `pi` and the password is `raspberry`. 
3. When you log in, it will warn you that you have an insecure password; you can ignore the warning.

## Step 1: Create a new file called `light.py`

<img src="/assets/
light-the-led-walkthrough-figure-12.png">

1. Right click on the Desktop and select `New File`. 
2. Create a new file called `light.py`. 
	- The `py` extension is important here so we create a Python file instead of a regular text file.

## Step 2: Edit your Python File

1. Install VSCode with `sudo apt install code` in your terminal
2. Right-click on your file name and open it with VSCode

Programs in Python execute line-by-line starting from the top of the file to the bottom. We are going to write a program to set up our GPIO pins, turn on a light, wait 10 seconds, then turn it off again. 

A few quick tips about programming in Python: 
- If you want your program to stop running at any point, click on the shell and use `CTRL-C`  to stop your program. 
- `#` characters are used to create comments or non-executable lines. Anything after `#` on a line will be ignored by the interpreter, which is why programmers use them to leave notes for themselves in their code.

2. Set up your GPIO pins in your Python program. At the beginning of your program, add the following lines. Note: you do not need to copy the comments, just the code. 

```python
from gpiozero import LED # Import the LED object from gpiozero 
from time import sleep # Import the sleep function from time 

led = LED(18) # Set up the LED on pin 18
```

3. Now, we are going to make our light bulb turn on using pin 18

```python
while True: # Repeat the following statements
    led.on() # Turn the LED on
    sleep(1) # Wait for 1 second
    led.off() # Turn the LED off
    sleep(1) # Wait for 1 second
```

4. Save and run your program! Your light should turn on for 5 seconds and turn off again.

## Troubleshooting

Fixing bugs is a huge part of computer science, so don't be discouraged if it doesn't work the first time!

If your program isn't working, here are some things to look for:
- *Did you spell everything correctly and use the correct syntax?* - If you misspell anything or use slightly different syntax, your program will not run.
- *Are any of your lines indented by mistake?* - Indentation has a specific purpose in Python, so we can't indent random lines. If any of your lines start with extra space(s), your program may error
- *Did you save your file?* - VS Code not autosave your files, so you will need to save them manually every time you make changes. Use `CTRL-S` or the `Save` button to save your file. 
- *Is your circuit correct?* - If your program is running but the light doesn't turn on, you may have an issue with your circuit.

If you are still having trouble, try running the `troubleshoot.py` file on the Desktop from VSCode. 

# Step 3: Have Some Fun!

Now that your program works, try modifying it! You could try making it blink a couple times or maybe even communicate a message in Morse code! Or if you want some practice with hardware, come get another light bulb to add a second light. 

