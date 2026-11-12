# Temperature in Color Lab: Checklist

> Work from top to bottom and check off each step as you finish it. Your progress is saved in this browser, so you can come back to it later.
>
> **The goal:** a red LED lights up when the temperature is over 72°F, and a blue LED lights up when it's under 72°F. Then you'll record temperature data and graph it.

## Step 1: Gather Your Materials

- [ ] 1 red and 1 blue 5mm LED (or one [RGB LED](https://www.sparkfun.com/led-rgb-diffused-common-cathode.html), if you want a challenge)
- [ ] 2 130 Ω (Ohm) resistors
- [ ] 7 male-to-male jumper wires
- [ ] 1 DHT11 temperature sensor (blue)

## Step 2: Wire and Test the LEDs

> **Warning!** Keep your Pi turned off while you connect anything to the GPIO pins, and don't bend the GPIO pins.

- [ ] Shut down your Pi and unplug its power.
- [ ] Wire the red LED and the blue LED to two different GPIO pins using the diagram below. Each LED needs its own resistor.

<img src="assets/temperature-in-color-wiring.png">

- [ ] Plug your Pi back in, open your project folder in VS Code, and activate your virtual environment:

  ```
  source venv/bin/activate
  ```

- [ ] Create a new program called `temperature.py`.
- [ ] Write a short program that turns on the red LED for one second, then the blue LED for one second. Both lights should be off when it finishes.
- [ ] Run it and make sure both LEDs work.

## Step 3: Wire the Temperature Sensor

- [ ] Shut down your Pi and unplug its power.
- [ ] Check which type of DHT11 you have. **There are two different types, and they're wired differently.**
- [ ] Wire the DHT11 using the diagram above, with its data pin on **GPIO 16**. (If you use a different pin, change the pin number in the starter code.)
- [ ] Plug your Pi back in and turn it on.
- [ ] With your virtual environment active, install the sensor library:

  ```
  python3 -m pip install adafruit-circuitpython-dht
  ```

## Step 4: Read the Temperature

- [ ] Save your LED test code somewhere else for now, then copy the starter code below into `temperature.py`.

```python
import time
import board
import adafruit_dht
from datetime import datetime

sensor = adafruit_dht.DHT11(board.D16) # Change the pin number to the data pin of your DHT11 

print("time,celsius,fahrenheit")

def to_fahrenheit(c):
    # TODO: Assign f where f represents the Fahrenheit equivalent to the input Celsius c
    f = ??
    return f 

while True:
    try:
        celsius = sensor.temperature # Get the temperature in Celsius from the sensor
        fahrenheit = to_fahrenheit(celsius)
        current_time = datetime.now()
        print("{0},{1:0.1f},{2:0.1f}".format(current_time.strftime("%H:%M:%S"), celsius, fahrenheit))

        # TODO: Light up the red light when the temperature is above 72, and blue when it is below 72.
        time.sleep(3.0)
    except RuntimeError as error:
        # Errors happen fairly often, DHT's are hard to read, just keep going
        print(error.args[0])
        time.sleep(2.0)
        continue
    except Exception as error:
        sensor.exit()
        raise error    
```

- [ ] Look up the formula for converting Celsius to Fahrenheit.
- [ ] Complete the `to_fahrenheit(c)` function. (Your program won't run until you replace the `??`.)
- [ ] Run your program. You should see a new line with the time and temperature every few seconds.
- [ ] Gently hold the sensor between your fingers for a few seconds and watch the temperature go up.
- [ ] Press **Ctrl + C** to stop the program.

<details>
<summary>Seeing errors?</summary>

- A few error messages here and there are normal. DHT11 sensors are hard to read, so the program just tries again.
- If you **only** see errors, double-check your wiring and the pin number in your code.
- Try the [DHT11/DHT22 tutorial](https://randomnerdtutorials.com/raspberry-pi-dht11-dht22-python/) or the [alternate library](https://pypi.org/project/dht11/).

</details>

## Step 5: Light Up the Temperature

This is a **piecewise function**: one output (red) above 72 degrees, and a different output (blue) below 72 degrees.

- [ ] Bring your LED setup code from Step 2 into the starter code.
- [ ] Complete the TODO in the loop so the red LED is on when the temperature is above 72°F and the blue LED is on when it's below 72°F.
- [ ] Make sure only one LED is on at a time.
- [ ] Test it by warming the sensor in your hand until the light changes.
- [ ] Commit and push `temperature.py` to GitHub.

## Step 6: Record Temperature Decay

- [ ] Review the [File Reading and Writing Notes](#Pi's-and-Python/File-Reading-and-Writing-Notes).
- [ ] Change your program to write its output to a new file called `temperature.csv` instead of printing it. Each line should hold the time, Celsius, and Fahrenheit, separated by commas.
- [ ] Make sure each reading goes on its **own line** in the file. Python won't add the line breaks for you!
- [ ] Run your program for a few readings, then open `temperature.csv` to check that it looks right.
- [ ] Start your program again and place an ice pack on your sensor for a few minutes.
- [ ] Remove the ice pack and let your program keep running until the temperature climbs back to room temperature.
- [ ] Stop your program, then commit and push `temperature.py` and `temperature.csv` to GitHub.

## Step 7: Graph Your Data

- [ ] Open `temperature.csv` in Google Sheets (or a similar program).
- [ ] **Graph 1:** Make a **scatter plot** of **Celsius vs. Fahrenheit**.
  - [ ] Add a trendline. Try different types (linear, quadratic, and so on) and pick the one with the highest $R^2$ value.
  - [ ] Add a title and axis labels.
- [ ] **Graph 2:** Make a **scatter plot** of **temperature over time**. Select only the part of your data where the sensor is **warming back up**.
  - [ ] Add a trendline. Try different types and pick the one with the highest $R^2$ value.
  - [ ] Add a title and axis labels.

## Step 8: Reflect and Submit

- [ ] Answer the questions about your first graph:
  - [ ] What is the equation of the line of best fit? How do you know it's the best option?
  - [ ] Why does that make sense based on what we know about Celsius and Fahrenheit?
- [ ] Answer the questions about your second graph:
  - [ ] What kind of model best represents your data (linear, quadratic, exponential)? How do you know it's the best option?
  - [ ] What is the equation of the line of best fit?
  - [ ] Why does this make sense for representing temperature? *Hint: research the formula for temperature decay from Newton's Law of Cooling.*
- [ ] Attach your GitHub repository to Google Classroom.
- [ ] ✋ Show your instructor your GitHub repository with your program and your graphs.
- [ ] ✋ Demonstrate your lights and temperature sensor to your instructor in class.

## Extension (Optional)

- [ ] Also read the humidity (`sensor.humidity`). Write a new function to calculate the **Heat Index** (what the temperature actually feels like, based on humidity), and change your program to light the red or blue LED based on the Heat Index.
