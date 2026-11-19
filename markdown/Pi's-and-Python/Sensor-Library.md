# Sensor Library

<!--
HOW TO ADD A PART: copy this under Inputs or Outputs and fill it in. Put images in assets/sensors/.

### Part Name

<img src="assets/sensors/placeholder.png" alt="Photo of the Part Name" width="160">

| Bin | Pi 4 library | Pi 5 library | Used in |
| --- | --- | --- | --- |
| ___ | [library](https://___) | [library](https://___) | [___ Lab](#Pi's-and-Python/___) |

**Wiring:** ___ → ___, ___ → ___.

<img src="assets/sensors/wiring-placeholder.png" alt="Wiring diagram for the Part Name" width="300">
-->

> This page is currently under construction!

## Basic Supplies

| Supply | Bin |
| --- | --- |
| Breadboard and T-Cobbler | ___ |
| Male-to-male jumper wires | ___ |
| Male-to-female jumper wires | ___ |
| Resistors | ___ |

## Inputs

### Push Button

<img src="assets/sensors/placeholder.png" alt="Photo of the Push Button" width="160">

| Bin | Pi 4 library | Pi 5 library | Used in |
| --- | --- | --- | --- |
| ___ | [gpiozero `Button`](https://gpiozero.readthedocs.io/en/stable/api_input.html#button) | [gpiozero `Button`](https://gpiozero.readthedocs.io/en/stable/api_input.html#button) | [Digital Slot Machine](#Pi's-and-Python/Digital-Slot-Machine-Lab) |

**Wiring:** S → any GPIO, V → 5V, G → GND.

<img src="assets/button-wiring.png" alt="Wiring diagram for the Push Button" width="300">

### Rotary Encoder

<img src="assets/sensors/placeholder.png" alt="Photo of the Rotary Encoder" width="160">

| Bin | Pi 4 library | Pi 5 library | Used in |
| --- | --- | --- | --- |
| ___ | [gpiozero `RotaryEncoder`](https://gpiozero.readthedocs.io/en/stable/api_input.html#rotaryencoder) | [gpiozero `RotaryEncoder`](https://gpiozero.readthedocs.io/en/stable/api_input.html#rotaryencoder) | [Dim the LED](#Pi's-and-Python/Dim-the-LED-Lab) |

**Wiring:** CLK → GPIO 20, DT → GPIO 16, VCC → power, GND → GND. SW isn't used.

<img src="assets/dim-the-led-wiring.png" alt="Wiring diagram for the Rotary Encoder" width="300">

### DHT11 Temperature and Humidity Sensor

<img src="assets/sensors/placeholder.png" alt="Photo of the DHT11 Temperature and Humidity Sensor" width="160">

| Bin | Pi 4 library | Pi 5 library | Used in |
| --- | --- | --- | --- |
| ___ | [adafruit-circuitpython-dht](https://pypi.org/project/adafruit-circuitpython-dht/) | ___ | [Temperature in Color](#Pi's-and-Python/Temperature-in-Color-Lab) |

**Wiring:** S → GPIO 16, VCC → 5V, G → GND. **The two types of DHT11 have their pins in different orders.**

<img src="assets/temperature-in-color-wiring.png" alt="Wiring diagram for the DHT11 Temperature and Humidity Sensor" width="300">

## Outputs

### 5mm LED

<img src="assets/sensors/placeholder.png" alt="Photo of the 5mm LED" width="160">

| Bin | Pi 4 library | Pi 5 library | Used in |
| --- | --- | --- | --- |
| ___ | [gpiozero `LED`](https://gpiozero.readthedocs.io/en/stable/api_output.html#led), [gpiozero `PWMLED`](https://gpiozero.readthedocs.io/en/stable/api_output.html#pwmled) | [gpiozero `LED`](https://gpiozero.readthedocs.io/en/stable/api_output.html#led), [gpiozero `PWMLED`](https://gpiozero.readthedocs.io/en/stable/api_output.html#pwmled) | [Light the LED](#Pi's-and-Python/Light-the-LED-Lab) |

**Wiring:** Long leg → GPIO, short leg → resistor → GND. **Always use a resistor.**

<img src="assets/light-the-led-wiring.png" alt="Wiring diagram for the 5mm LED" width="300">

### RGB LED

<img src="assets/sensors/placeholder.png" alt="Photo of the RGB LED" width="160">

| Bin | Pi 4 library | Pi 5 library | Used in |
| --- | --- | --- | --- |
| ___ | [gpiozero `RGBLED`](https://gpiozero.readthedocs.io/en/stable/api_output.html#rgbled) | [gpiozero `RGBLED`](https://gpiozero.readthedocs.io/en/stable/api_output.html#rgbled) | [Dim the LED](#Pi's-and-Python/Dim-the-LED-Lab) (extension) |

**Wiring:** Red, green, and blue legs → one GPIO each, through a resistor. Longest leg → GND.

<img src="assets/sensors/wiring-placeholder.png" alt="Wiring diagram for the RGB LED" width="300">

### 4-Digit 7-Segment Display (TM1637)

<img src="assets/sensors/placeholder.png" alt="Photo of the 4-Digit 7-Segment Display (TM1637)" width="160">

| Bin | Pi 4 library | Pi 5 library | Used in |
| --- | --- | --- | --- |
| ___ | [raspberrypi-tm1637](https://pypi.org/project/raspberrypi-tm1637/) | ___ (raspberrypi-tm1637 needs `RPi.GPIO`, which a Pi 5 can't run) | [Digital Slot Machine](#Pi's-and-Python/Digital-Slot-Machine-Lab) |

**Wiring:** CLK → GPIO, DIO → GPIO, VCC → 3.3V, GND → GND. **Swapping VCC and GND makes it burn.**

<img src="assets/digital-slot-machine-wiring.png" alt="Wiring diagram for the 4-Digit 7-Segment Display (TM1637)" width="300">

### 16x2 I2C LCD Screen

<img src="assets/sensors/placeholder.png" alt="Photo of the 16x2 I2C LCD Screen" width="160">

| Bin | Pi 4 library | Pi 5 library | Used in |
| --- | --- | --- | --- |
| ___ | [rpi-lcd](https://github.com/bogdal/rpi-lcd) or [RPLCD](https://rplcd.readthedocs.io/en/stable/) | ___ | [Digital Slot Machine](#Pi's-and-Python/Digital-Slot-Machine-Lab) (extension) |

**Wiring:** ___. Enable I2C in `sudo raspi-config` first.

<img src="assets/sensors/wiring-placeholder.png" alt="Wiring diagram for the 16x2 I2C LCD Screen" width="300">
