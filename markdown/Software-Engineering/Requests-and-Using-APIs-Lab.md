# `requests` and Using APIs

## Objectives
1. Review how to use environment variables to store private information
2. Use the `requests` library to send GET or POST requests
3. Use JSON to format requests and responses

## Vocabulary

| Vocabulary | Description |
| ----------- | ----------- |
|||

## Your Task

Before you get started review [these notes on HTTP/HTTPS](#Software-Engineering/HTTP-and-HTTPS-Notes).

Complete the following four problems using the `requests` library. 
- [Pokedex](#pokedex)
- [Weather Data](#weather-data)
- [World Quiz](#world-quiz)
- [NASA Image of the Day](#nasa-image)


### <a id="pokedex"></a>Pokedex

Use the [PokeAPI](https://pokeapi.co/) to get information about a Pokemon by it's number.

An example run of the program work look like: 
```
What number? 2
----------------
POKEDEX ENTRY 2
----------------
Name: Ivysaur
Types: grass, poison
Height: 10
Weight: 130
```


### <a id="weather-data"></a>Weather Data

Use the [Open-Meteo API](https://open-meteo.com/) to access historical weather data for a specific longitude and latitude. You will create a Python program to allow a user to type in a city and a date and get the weather for that day. 

See the following examples:

```
Enter a city: Denver
Enter a date: 09/22/2000 
--------------------------------------------
Conditions:    Slight rain
High:          52.9°F
Low:           39.5°F
Precipitation: 0.173 in
Max wind:      9.9 mph
```

```
Enter a city: Boulder
Invalid city
Enter a city: New York
Enter a date: 02-11-1960 
--------------------------------------------
Conditions:    Moderate rain
High:          60.0°F
Low:           44.5°F
Precipitation: 1.248 in
Max wind:      19.7 mph
```
**Note: Your program needs to accept dates in the format MM/DD/YYYY and MM-DD-YYYY**

You may use the following dictionary to convert eligible cities to their associated latitude and longitude since Open-Meteo needs you to query by those values, not city name. 

```python
cities = {
    "New York":     {"latitude": 40.7128,  "longitude": -74.0060},
    "London":       {"latitude": 51.5074,  "longitude": -0.1278},
    "Tokyo":        {"latitude": 35.6762,  "longitude": 139.6503},
    "Sydney":       {"latitude": -33.8688, "longitude": 151.2093},
    "Cairo":        {"latitude": 30.0444,  "longitude": 31.2357},
    "São Paulo":    {"latitude": -23.5505, "longitude": -46.6333},
    "Mumbai":       {"latitude": 19.0760,  "longitude": 72.8777},
    "Cape Town":    {"latitude": -33.9249, "longitude": 18.4241},
    "Paris":        {"latitude": 48.8566,  "longitude": 2.3522},
    "Mexico City":  {"latitude": 19.4326,  "longitude": -99.1332},
    "Moscow":       {"latitude": 55.7558,  "longitude": 37.6173},
    "Singapore":    {"latitude": 1.3521,   "longitude": 103.8198},
    "Buenos Aires": {"latitude": -34.6037, "longitude": -58.3816},
    "Nairobi":      {"latitude": -1.2921,  "longitude": 36.8219},
    "Denver":       {"latitude": 39.7392,  "longitude": -104.9903},
}
```

### <a id="world-quiz"></a>World Quiz

Use the [REST Countries API](https://restcountries.com/). To create a World Facts quiz. Your program will choose a random country and give you the capital. You will then guess the name of the country.

1. Create a free account and get your API key. 

2. Create a new file called `.env`. In the file, add a line `REST_COUNTRIES_API_KEY=your_key_here`. Then add the `.env` file to your `.gitignore`!

3. `pip install requests python-dotenv` to make sure you can use the following to load your API key into the program.

```
import os
try:
    from dotenv import load_dotenv

    load_dotenv()
except ImportError:
    pass 

API_KEY = os.environ.get("REST_COUNTRIES_API_KEY")

```

4. Create your program to ask the user about 5 countries and tabulate their score. Here are some sample runs:

```
Welcome to the WORLD QUIZ
--------------------------------
1. What country's capital is Brasília?
Answer: Brazil
Correct!

2. What country's capital is Rome?
Answer: Greece
Incorrect.

...

You answered 3/5 correctly. 
```
### <a id="nasa-image"></a>NASA Image of the Day

Use the [NASA API](https://api.nasa.gov) to view the NASA "Image of the Day". 

1. Create an account for an API key. Then set up your `.env` files and `.gitignore` just like the last question.

2. Create a Python program to load your API and download the image of the day.

3. Display the image with this sample code. You will need to install `pygame` with `pip install pygame`. 

```
import sys

import pygame


def main():
    # Load image.png from the same directory as this script
    base_dir = os.path.dirname(os.path.abspath(__file__))
    image_path = os.path.join(base_dir, "image.png")

    pygame.init()

    try:
        # Create a temporary display so convert_alpha() works
        pygame.display.set_mode((1, 1))
        image = pygame.image.load(image_path).convert_alpha()
    except (pygame.error, FileNotFoundError) as e:
        print(f"Could not load {image_path}: {e}")
        pygame.quit()
        sys.exit(1)

    # Size the window to the image, but cap it to the screen size
    info = pygame.display.Info()
    max_w, max_h = int(info.current_w * 0.9), int(info.current_h * 0.9)
    img_w, img_h = image.get_size()

    if img_w > max_w or img_h > max_h:
        scale = min(max_w / img_w, max_h / img_h)
        image = pygame.transform.smoothscale(
            image, (int(img_w * scale), int(img_h * scale))
        )
        img_w, img_h = image.get_size()

    screen = pygame.display.set_mode((img_w, img_h))
    pygame.display.set_caption("image.png")

    clock = pygame.time.Clock()
    running = True

    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE:
                running = False

        screen.fill((30, 30, 30))
        screen.blit(image, (0, 0))
        pygame.display.flip()
        clock.tick(60)

    pygame.quit()


if __name__ == "__main__":
    main()
```


## Extensions

1. Modify your Pokedex to view the information visually with `pygame`.
2. Modify your Weather Data application to allow more date formats. 
3. Modify your world quiz to show the flag instead of the capital and have users guess the country for one point and the capital for two points. 
4. Modify your NASA program to accept any date from the user and show the picture of the day from that date instead.

## Reflection Questions
1. What is the difference between a `GET` and `POST` request?
2. Explain the 4-5 parts of a URL.
3. What do status codes in the 200s mean? What about 400s and 500s?
4. What is the JSON format and how can we easily interact with it using Python


## How to Submit

Show your instructor your GitHub repository. Answer the reflection questions. When you are all done, upload your GitHub link to Google Classroom and hit submit.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.