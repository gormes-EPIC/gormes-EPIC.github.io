# Light the LED Lab: Checklist

> **The goal:** calculate the right resistor with Ohm's Law, build a circuit on a breadboard, and write a Python program that turns on an LED.

## Step 1: Calculate Your Resistor

- [ ] Rearrange Ohm's Law, **V = IR**, so that **R** is by itself on one side.
- [ ] Replace **V** in your equation with **V_supply − V_forward**.
- [ ] Write down **V_supply = 3.3V**. This is the voltage a GPIO pin supplies.
- [ ] Find the LED's **forward voltage** (**V_forward**) on the [SparkFun LED page](https://www.sparkfun.com/led-basic-red-5mm.html) and write it down.
- [ ] Find the LED's **safe current** on the same [SparkFun LED page](https://www.sparkfun.com/led-basic-red-5mm.html) and write it down.
- [ ] Cut the safe current in half. We only want about half the maximum current going through the LED.
- [ ] Convert that current from **mA** to **A** by dividing it by 1000.
- [ ] Plug all of your values into your equation and solve for **R**.
- [ ] ✋ Show your math to your instructor before moving on.
- [ ] Pick a resistor with **the resistance you solved for or greater**. A smaller resistor can burn out the LED.

## Step 2: Gather Your Materials

<img src="assets/light-the-led-supplies.jpeg">

- [ ] Raspberry Pi
- [ ] Breadboard and T-Cobbler
- [ ] The resistor you picked in Step 1
- [ ] 5MM LED (two prongs, any color)
- [ ] Male-to-male jumper wires

## Step 3: Wire the Circuit

> **Warning!** Not following these rules could permanently damage your Pi, or hurt you or your classmates.
> - Keep your Pi turned off while you connect anything to the GPIO pins.
> - Always use a resistor. Without one, the LED pulls as much current as it can and can burn out.
> - Don't bend the GPIO pins. Once your T-Cobbler is on the Pi, leave it on.

- [ ] Shut down your Pi and unplug its power.
- [ ] If it isn't already attached, carefully press the T-Cobbler onto the Pi's GPIO pins without bending any of them.
- [ ] Find the LED's **long prong** (positive) and **short prong** (negative).
- [ ] Wire your circuit to match the diagram below. Each horizontal rail on the breadboard is connected, so anything that needs to connect has to be plugged into the same rail.

<img src="assets/light-the-led-wiring.png">

- [ ] Double-check that the resistor is part of the circuit and that each wire and LED prong is in the right rail.
- [ ] Compare your circuit to the finished circuit below.

<img src="assets/light-the-led-complete.png">

- [ ] Plug your Pi back in and turn it on.

## Step 4: Set Up VS Code

- [ ] If you haven't already, install VS Code from the terminal:

  ```
  sudo apt install code
  ```

- [ ] Open VS Code from the **Programming** tab of the menu in the upper left corner, or by typing `code` in your terminal.
- [ ] Use the **Explorer** on the left side to open the folder you made in an earlier lab. It should have a `venv` folder inside it. If it doesn't, follow the [Meet Your Raspberry Pi Lab](#Pi's-and-Python/Meet-Your-Raspberry-Pi-Lab) to set up a **virtual environment**.
- [ ] Open a new terminal from VS Code's **Terminal** menu, then `cd` into the folder where you keep your Python scripts.
- [ ] Activate your virtual environment:

  ```
  source venv/bin/activate
  ```

- [ ] Create a new file called `light.py`, either by right-clicking in the Explorer or with `touch light.py` in the terminal.

## Step 5: Program the LED

- [ ] Open the [gpiozero LED recipe](https://gpiozero.readthedocs.io/en/latest/recipes.html#led) to use as your guide.
- [ ] In `light.py`, import `LED` from `gpiozero` and `sleep` from `time`.
- [ ] Create an `LED` object using the number of the GPIO pin your LED is wired to.
- [ ] Turn the LED on, wait a few seconds with `sleep`, then turn it off.
- [ ] Save your file and run it:

  ```
  python light.py
  ```

- [ ] ✅ Your LED turns on for a few seconds and then turns off.

<details>
<summary>Not working? Try these.</summary>

- Check that the GPIO number in your code matches the pin your wire is plugged into on the T-Cobbler.
- Flip the LED around. It only works one way.
- Make sure every wire, LED prong, and resistor leg is pushed all the way into the correct rail.
- If you see `ModuleNotFoundError: No module named 'gpiozero'`, make sure your virtual environment is activated, then run `pip install gpiozero`.
- For a more thorough walkthrough, [use this document](https://drive.google.com/file/d/1bAUwScfuLpdcxtPwUdWppxUo2y2kaoa6/view?usp=sharing) from EPIC Showcase Night.

</details>

## Step 6: Reflect and Submit

- [ ] Commit and push `light.py` to your GitHub repository.
- [ ] Answer the reflection questions:
  - [ ] What is the purpose of a breadboard?
  - [ ] Does the LED's orientation matter (cathode and anode)?
  - [ ] Why do you put a resistor in your circuit?
  - [ ] How would a resistor with greater resistance affect the light?
- [ ] Attach your GitHub repository to Google Classroom.
- [ ] ✋ Show your instructor your GitHub repository and your resistor math.
- [ ] ✋ Show your instructor your LED turning on in class.

## Extensions (Optional)

- [ ] Build and document a circuit that controls an RGB LED (4 prongs).
- [ ] Document how to SSH into your Raspberry Pi and turn on the LED remotely.
- [ ] Build a game of Simon with 4 LEDs and 4 buttons. If you don't know the game, [play an online version](https://freesimon.org/).
