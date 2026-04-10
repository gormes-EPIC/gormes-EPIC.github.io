# Digital Slot Machine Lab

<video controls width="100%">
  <source src="assets/digital-slot-machine.mov" type="video/mp4">
  Your browser does not support the video tag.
</video>


## Objective

1. Create a button activated slot machine using Python. 
2. Distinguish between fair and unfair probabilistic systems. 

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| 7 Segment Display | A display that used 7 segments to represent numbers and certain letters |

## Your Task

Create a digital slot machine with a button and a display. When you click the button, the screen should randomly display 4 numbers. If the 4 numbers are the same, then the LED light will blink for 5 seconds.

## Materials 

1. 1 LED 
2. 1 130 Ohm Resistor
3. 7-segment display or LCD Screen(see options below) 
4. 1 digital push button

## Getting Started

1. Create a small program to light an LED.
2. Modify your program to light the light when the button is pressed. See [this sample code](https://gpiozero.readthedocs.io/en/stable/recipes.html#button) to program your button. See the diagram below for wiring. Notice that the `Button` you are instantiating is a class!

<img src="/assets/button-wiring.png">

3. Get a 7-segment display from the class supplies. *The back of these displays can get hot. If it is too hot to handle, then recycle it and get a new display. It may have faulty internal wiring. Be careful when handling.*

4. Install the necessary library with `pip3 install raspberrypi-tm1637`. *Make sure your virtual environment is active!* See [this](https://pypi.org/project/raspberrypi-tm1637/) for library reference. If pip isn't installed, use `sudo apt install pip`.

<img src="/assets/digital-slot-machine-wiring.png">

5. Use this [site](https://thingsdaq.org/2022/10/02/7-segment-led-display-with-raspberry-pi/) as a reference to wire your display and for the code. **WARNING: Please wire your display CAREFULLY. If you switch your voltage and ground pins when setting up your display, it will get extremely hot very quickly and begin to burn.**
6. Create a program with the following game loop: When the button is pressed, your program will select 4 random numbers and display them on the screen. If all 4 numbers match, the light will flash for 5 seconds.


## Rig The Game

1. Using a mechanism of your choice, create a game mode where the results are rigged in favor of winning. This could be triggered by a second button, a double click, a key on the keyboard, it's up to you! The only requirement is that there is an above average chance of winning. 


## Tips, Tricks, and Resources
- [7 Segment Displays with Raspberry Pi's](https://thingsdaq.org/2022/10/02/7-segment-led-display-with-raspberry-pi/)

## Extensions
1. Instead of a 7 segment display, use a 16x2 I2C LCD screen. There are many different libraries you can use for this. I have used [rpi-lcd](https://github.com/bogdal/rpi-lcd) in the past, but you can use whatever works for you. Remember to enable I2C in the raspi-config menu before starting or your program will not run regardless.

## Reflection Questions
1. How does your program detect a button press and trigger the game loop?
2. If I ran the slot machine 1000 times and graphed the results on a number line, would the results look like? What would they look like for your rigged version?
3. How did you use randomness in your program? Was it truly random? How could you test it?
4. How did you guarantee the results would favor winning? How did you change your game logic to accomplish this? 


## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person

## Rubric
- **20 points** - All required items are present.
- **15 points** - Task was completed, but supplementary materials are weak or missing.
- **10 points** - Task was attempted, but is missing major components.
- **0 points** - Task was not attempted to 50% completion or student should reattempt.