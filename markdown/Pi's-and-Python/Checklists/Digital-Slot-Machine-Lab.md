# Digital Slot Machine Lab: Checklist

> **The goal:** when you press the button, the display shows 4 random numbers. If all 4 numbers match, the LED blinks for 5 seconds.

## Step 1: Gather Your Materials

- [ ] 1 LED
- [ ] 1 130 Ω (Ohm) resistor
- [ ] 1 digital push button
- [ ] 1 7-segment display (from the class supplies)
- [ ] Male-to-male jumper wires

## Step 2: Light the LED

> **Warning!** Keep your Pi turned off while you connect anything to the GPIO pins, and don't bend the GPIO pins.

- [ ] Shut down your Pi and unplug its power.
- [ ] Wire your LED and resistor to a GPIO pin, the same way you did in the [Light the LED Lab](#Pi's-and-Python/Light-the-LED-Lab).
- [ ] Plug your Pi back in, open your project folder in VS Code, and activate your virtual environment:

  ```
  source venv/bin/activate
  ```

- [ ] Create a new program called `slot_machine.py`.
- [ ] Write a small program that turns your LED on, and run it to test your wiring.

## Step 3: Add the Button

- [ ] Shut down your Pi and unplug its power.
- [ ] Wire your button to a GPIO pin using the diagram below.

<img src="assets/button-wiring.png">

- [ ] Plug your Pi back in and turn it on.
- [ ] Read the [gpiozero button recipe](https://gpiozero.readthedocs.io/en/stable/recipes.html#button). Notice that the `Button` you create is an object made from a class!
- [ ] Change your program so the LED lights up when the button is pressed.
- [ ] Run it and test the button.

## Step 4: Add the 7-Segment Display

> **Warning!** The back of these displays can get hot. If one is too hot to handle, it may have faulty wiring inside. Put it in the recycling and get a new one.
>
> **Wire your display CAREFULLY.** If you switch the voltage and ground pins, the display will get extremely hot very quickly and begin to burn.

- [ ] Get a 7-segment display from the class supplies and check that it isn't hot.
- [ ] With your virtual environment active, install the display library:

  ```
  pip3 install raspberrypi-tm1637
  ```

  If `pip3` isn't installed, run `sudo apt install pip` first.

- [ ] Shut down your Pi and unplug its power.
- [ ] Wire the display using the diagram below. Use [this guide](https://thingsdaq.org/2022/10/02/7-segment-led-display-with-raspberry-pi/) and [this library page](https://pypi.org/project/python-tm1637/) as references.

<img src="assets/digital-slot-machine-wiring.png">

- [ ] ✋ Double-check that the **voltage** and **ground** pins are in the right place before turning anything on.
- [ ] Plug your Pi back in and turn it on. If the display gets hot, unplug your Pi right away and recheck your wiring.
- [ ] Using the [library reference](https://pypi.org/project/raspberrypi-tm1637/), write a small test that shows a number on the display.

## Step 5: Build the Game

- [ ] When the button is pressed, choose 4 random numbers.
- [ ] Show the 4 numbers on the display.
- [ ] Check whether all 4 numbers match.
- [ ] If they all match, make the LED blink for 5 seconds.
- [ ] Make sure the game keeps running so you can press the button again and again.
- [ ] Play several rounds and make sure a new set of numbers shows up on every press.
- [ ] Commit and push `slot_machine.py` to GitHub.

## Step 6: Rig the Game

- [ ] Choose how a player switches into rigged mode. It could be a second button, a double click, a key on the keyboard, or anything else you come up with.
- [ ] Add your rigged mode so that the player has an **above average** chance of winning.
- [ ] Test both modes and make sure the rigged mode wins more often than the normal mode.
- [ ] Commit and push your changes to GitHub.

## Step 7: Reflect and Submit

- [ ] Answer the reflection questions:
  - [ ] How does your program detect a button press and trigger the game loop?
  - [ ] If you ran the slot machine 1000 times and graphed the results on a number line, what would the results look like? What would they look like for your rigged version?
  - [ ] How did you use randomness in your program? Was it truly random? How could you test it?
  - [ ] How did you guarantee the results would favor winning? How did you change your game logic to do this?
- [ ] Attach your GitHub repository to Google Classroom.
- [ ] ✋ Show your instructor your GitHub repository with your program.
- [ ] ✋ Demonstrate your slot machine to your instructor in class.

## Extension (Optional)

- [ ] Use a 16x2 I2C LCD screen instead of a 7-segment display. You can use any library you like, such as [rpi-lcd](https://github.com/bogdal/rpi-lcd). Enable **I2C** in the `raspi-config` menu before you start, or your program won't run.
