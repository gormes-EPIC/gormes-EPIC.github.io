# `requests` and Using APIs: Checklist

> **The goal:** use the `requests` library to get data from four real APIs (PokeAPI, Open-Meteo, REST Countries, and NASA), and keep your API keys private with environment variables.

## Step 1: Get Set Up

- [ ] Review the [HTTP/HTTPS Notes](#Software-Engineering/HTTP-and-HTTPS-Notes), especially URLs, GET and POST requests, and status codes.
- [ ] Create a new repository on GitHub for this lab, and clone it.
- [ ] Activate your Python virtual environment, then install the libraries you'll need:

  ```
  pip install requests python-dotenv
  ```

- [ ] Create a `.gitignore` file in your repository, and add `.env` to it **now**, before you have any keys. That way your keys can never be pushed to GitHub by accident.

<details>
<summary>Need a refresher on the basics of <code>requests</code>?</summary>

```python
import requests

response = requests.get("https://example.com/api/thing")
print(response.status_code)   # 200 means success
data = response.json()        # Turns a JSON response into Python dictionaries and lists
```

- Open an API's URL in your browser first to see what the JSON looks like.
- Print `data` (or `data.keys()`) to explore the response before you write the rest of your program.

</details>

## Step 2: Pokedex

Use the [PokeAPI](https://pokeapi.co/) to look up a Pokemon by its number.

- [ ] Create a new program for your Pokedex.
- [ ] Find the PokeAPI endpoint that returns a Pokemon by its number. Open it in your browser with the number `2` to see the data.
- [ ] Ask the user for a number, and send a GET request to that endpoint.
- [ ] Check the status code, and print a helpful message if the request didn't succeed.
- [ ] Find the name, types, height, and weight in the JSON response.
- [ ] Print the entry in the same format as the example below. Pay attention to how the types are listed.

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

- [ ] Test it with a few different numbers, including a number that doesn't exist.
- [ ] Commit and push your program to GitHub.

## Step 3: Weather Data

Use the [Open-Meteo API](https://open-meteo.com/) to show the weather in a city on a specific past date.

- [ ] Create a new program for your weather app.
- [ ] Copy the `cities` dictionary from the [lab page](#Software-Engineering/Requests-and-Using-APIs-Lab) into your program. Open-Meteo looks up weather by latitude and longitude, not city name.
- [ ] Ask the user for a city. If it isn't in your dictionary, print `Invalid city` and ask again.
- [ ] Ask the user for a date. Make sure your program accepts **both** `MM/DD/YYYY` and `MM-DD-YYYY`.
- [ ] Convert the date into the format Open-Meteo expects. Check the API docs to find out what that is.
- [ ] Find the Open-Meteo API for **historical** weather in its docs.
- [ ] Build your request with query parameters for the location, the date, and the daily values you need: weather conditions, high, low, precipitation, and max wind.
- [ ] Find the parameters that return Fahrenheit, inches, and miles per hour, so you don't have to convert them yourself.
- [ ] Turn the weather code from the response into a description, like `Slight rain`. The docs have a table of what each code means.
- [ ] Print the results in the same format as the examples below:

```
Enter a city: Boulder
Invalid city
Enter a city: New York
Enter a date: 07-11-2026
--------------------------------------------
Conditions:    Moderate rain
High:          60.0°F
Low:           44.5°F
Precipitation: 1.248 in
Max wind:      19.7 mph
```

- [ ] Test it with a few cities and dates, in both date formats.
- [ ] Commit and push your program to GitHub.

<details>
<summary>Stuck on query parameters?</summary>

You can write them straight into the URL after a `?`, or pass a dictionary to `requests` and let it build the URL for you:

```python
params = {"name": "value", "other_name": "other value"}
response = requests.get(url, params=params)
print(response.url)   # Shows the full URL that was sent
```

Printing `response.url` and opening it in your browser is a great way to check your request.

</details>

## Step 4: World Quiz

Use the [REST Countries API](https://restcountries.com/) to quiz the user on world capitals.

- [ ] Create a free REST Countries account, and get your API key.
- [ ] Create a file called `.env`, and add the line `REST_COUNTRIES_API_KEY=your_key_here` with your real key.
- [ ] Check that `.env` is listed in your `.gitignore`.
- [ ] Copy this code into your program to load your API key:

```python
import os
try:
    from dotenv import load_dotenv

    load_dotenv()
except ImportError:
    pass

API_KEY = os.environ.get("REST_COUNTRIES_API_KEY")
```

- [ ] Print `API_KEY` once to make sure it loaded, then **delete that print** so your key never shows up on screen.
- [ ] Find the REST Countries endpoint that returns countries with their capitals.
- [ ] Pick a random country, and ask the user which country has that capital.
- [ ] Tell the user whether they were correct. Make sure capitalization doesn't count against them.
- [ ] Repeat for 5 countries, then print the user's score.
- [ ] Watch out for countries without a capital. Make sure your quiz skips them.
- [ ] Check that your output matches the example:

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

- [ ] Run `git status` and make sure `.env` is **not** listed before you commit.
- [ ] Commit and push your program to GitHub.

## Step 5: NASA Image of the Day

Use the [NASA API](https://api.nasa.gov) to download and display NASA's Astronomy Picture of the Day.

- [ ] Create a NASA account, and get your API key.
- [ ] Add your NASA key to your `.env` file on a new line, and load it the same way as in Step 4.
- [ ] Find the NASA endpoint for the Astronomy Picture of the Day, and send a request with your key.
- [ ] Find the image's URL in the JSON response.
- [ ] Download the image, and save it as a file. *Hint: an image isn't text, so look for the part of the response that holds raw bytes, and write the file in binary mode.*
- [ ] Install `pygame`:

  ```
  pip install pygame-ce
  ```

- [ ] Copy the sample display code from the [lab page](#Software-Engineering/Requests-and-Using-APIs-Lab), and replace `image.jpeg` with your image's file name.
- [ ] Run your program, and make sure the image appears in a window.
- [ ] Run `git status` and make sure `.env` is **not** listed, then commit and push your program to GitHub.

<details>
<summary>Stuck? Read this if the image won't load.</summary>

- Some days, the Picture of the Day is a **video** instead of an image. Check the `media_type` field in the response. If it's not an image, try another date while you test.
- Print the image URL, and open it in your browser to make sure it works.
- Check the file extension. If the image is a `.png`, saving it as `.jpeg` won't change what kind of file it is.

</details>

## Step 6: Reflect and Submit

- [ ] Answer the reflection questions:
  - [ ] What is the difference between a `GET` and `POST` request?
  - [ ] Explain the 4–5 parts of a URL.
  - [ ] What do status codes in the 200s mean? What about 400s and 500s?
  - [ ] What is the JSON format, and how can we easily interact with it using Python?
- [ ] Check your repository on GitHub one last time. There should be **no** `.env` file or API keys anywhere in it.
- [ ] ✋ Show your instructor your GitHub repository, and answer the reflection questions.
- [ ] Upload your GitHub link to Google Classroom, and hit submit.

## Extensions (Optional)

- [ ] Modify your Pokedex to show the information visually with `pygame`.
- [ ] Modify your Weather Data application to allow more date formats.
- [ ] Modify your World Quiz to show the flag instead of the capital. Users guess the country for one point and the capital for two points.
- [ ] Modify your NASA program to accept any date from the user, and show the picture of the day from that date instead.
