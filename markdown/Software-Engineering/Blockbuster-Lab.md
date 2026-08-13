# Blockbuster Lab

## Objective
1. Use Python to model data using object-oriented programing 
2. Use Git and GitHub to track version control and hosting your project


## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| class | a piece of code that defines an object. Think of it like a blueprint for a house. |
| object | an instance of a class. Think of it like the actual house | 

## Your Task

Your task is to create a program to represent a movie rental company. 

0. In a browser, Login to GitHub and create a new repository. Open your terminal and navigate to where you want your project to live. Clone your repo(make a local copy of it) with `git clone <url>`. The URL can be found under the green "Code" button. Then, do all of your programming inside the folder that was just created.
1. First create the class `Movie` that has five instance variables `title`, `tagline`, `director`, `rental_price`, and `rented`(a boolean variable). 
2. Then create the class `Rental` that has a list of movies. Use the CSV below to populate your rental store.

<details>
<summary>Click here to view `movies.csv`</summary>
```
title,tagline,director,rental_price,rented
The Last Horizon,Home is where the heart breaks,Elena Marquez,5.70,TRUE
Silent Echoes,What we lose defines who we become,Sofia Bergman,5.67,TRUE
Crimson Tide Rising,Some hearts never stop searching,Henry Okonkwo,2.15,TRUE
Midnight in Paris Again,The sky is never really the limit,David Okafor,4.52,TRUE
The Forgotten Path,Redemption is never out of reach,Isabella Rossi,5.57,FALSE
Starlight Over Denver,What we lose defines who we become,Mei Tanaka,4.94,TRUE
Whispers of the Deep,Nothing gold can stay forever,Henry Okonkwo,3.69,TRUE
The Iron Curtain Falls,The sky is never really the limit,Grace Lindqvist,2.50,FALSE
Neon Dreams,Some secrets are worth keeping,Omar Haddad,6.23,FALSE
The Wandering Star,Not every hero wears a cape,Mei Tanaka,4.67,FALSE
Beneath the Willow Tree,One night can change everything,Felix Adeyemi,3.46,FALSE
Shattered Glass City,The truth costs more than lies,Isabella Rossi,5.51,TRUE
The Last Lighthouse,What we lose defines who we become,Julian Achebe,6.92,TRUE
Voyage to Nowhere,Some secrets are worth keeping,Vivian Castellano,3.38,FALSE
The Painted Sky,Nothing gold can stay forever,Omar Haddad,3.77,FALSE
Echoes of Tomorrow,The truth always finds a way out,Rafael Suarez,5.16,TRUE
The Velvet Storm,Nothing gold can stay forever,Mei Tanaka,3.89,TRUE
Ghosts of the Prairie,The heart remembers what the mind forgets,Thomas Whitfield,3.14,TRUE
The Golden Hour,The heart remembers what the mind forgets,Vivian Castellano,3.33,TRUE
Rain on Broadway,The truth costs more than lies,Grace Lindqvist,3.05,FALSE
The Quiet Rebellion,Hope is the last thing to die,Mei Tanaka,2.70,TRUE
City of Endless Nights,Every shadow hides a story,Felix Adeyemi,4.68,FALSE
The Hollow Crown,Some hearts never stop searching,Vivian Castellano,3.80,TRUE
Wildfire Season,Family is found not always born,Alistair Finch,2.44,TRUE
The Glass Ocean,Home is where the heart breaks,Sofia Bergman,5.13,FALSE
Autumn in New York City,Every mile tells a different truth,Priya Chandran,3.91,FALSE
The Silver Compass,The night has a thousand eyes,Renee Fontaine,6.85,TRUE
Frozen River Road,Home is where the heart breaks,Felix Adeyemi,5.74,FALSE
The Last Symphony,Home is where the heart breaks,Julian Achebe,4.16,FALSE
Beyond the Horizon,Some stories refuse to stay buried,Renee Fontaine,6.85,TRUE
The Copper Sky,Family is found not always born,Marcus Delgado,6.34,FALSE
Winter's Embrace,Family is found not always born,Rafael Suarez,2.98,FALSE
The Broken Mirror,Nothing gold can stay forever,Felix Adeyemi,6.76,TRUE
Sands of Time Forgotten,Every mile tells a different truth,Grace Lindqvist,4.43,TRUE
The Crimson Letter,The fire that burns brightest fades fastest,Julian Achebe,3.19,TRUE
Echo Park Nights,The truth costs more than lies,Priya Chandran,2.42,FALSE
The Long Way Home,The truth always finds a way out,Felix Adeyemi,5.82,TRUE
Falling Stars Over Texas,The stars remember everything,Felix Adeyemi,2.82,FALSE
The Marble Garden,The sky is never really the limit,Felix Adeyemi,5.77,TRUE
Shadows of the Past,Freedom comes at a price,Vivian Castellano,6.97,FALSE
The Emerald City Lights,A promise made is a promise kept,Camila Duarte,4.25,TRUE
Runaway Train,What we lose defines who we become,Priya Chandran,3.68,TRUE
The Whispering Pines,Some hearts never stop searching,David Okafor,2.03,TRUE
Ocean's Whisper,What we lose defines who we become,Priya Chandran,6.52,FALSE
The Paper Moon,The truth always finds a way out,Camila Duarte,3.18,FALSE
Storm Chasers United,The sky is never really the limit,Felix Adeyemi,2.65,FALSE
The Velvet Underground Story,Every shadow hides a story,Alistair Finch,6.03,TRUE
Chasing Fireflies,Some secrets are worth keeping,Marcus Delgado,5.28,FALSE
The Last Train South,The world keeps turning without us,Henry Okonkwo,4.33,TRUE
Solstice,Some secrets are worth keeping,Thomas Whitfield,4.00,FALSE
The Amber Room,Some secrets are worth keeping,David Okafor,2.95,FALSE
Beneath a Blood Moon,The past never really leaves,Henry Okonkwo,2.91,FALSE
The Wandering Fox,Every shadow hides a story,Priya Chandran,4.21,TRUE
City Lights Fade,Love finds you when you least expect it,Felix Adeyemi,6.17,TRUE
The Grand Illusion,Every shadow hides a story,Nathaniel Cho,4.02,FALSE
Rustwater,The sky is never really the limit,Vivian Castellano,6.50,TRUE
The Painted Desert,Every scar tells a different story,Elena Marquez,6.92,FALSE
Fragments of Light,Destiny waits for no one,Julian Achebe,4.11,FALSE
The Endless Summer,Courage is a choice not a gift,Isabella Rossi,3.47,TRUE
Shadow Puppet,Some hearts never stop searching,Felix Adeyemi,2.29,FALSE
The Distant Shore,Love finds you when you least expect it,Thomas Whitfield,4.91,TRUE
Ivory Coast Nights,Love finds you when you least expect it,Camila Duarte,2.39,TRUE
The Burning Field,The truth always finds a way out,Rafael Suarez,2.33,TRUE
Frost and Fire,Hope is the last thing to die,Marcus Delgado,6.70,TRUE
The Silent Witness,Some hearts never stop searching,Rafael Suarez,2.19,TRUE
Aftermath Rising,Some battles are fought in silence,Nora Kristiansen,4.82,FALSE
The Copper Kettle,The road less traveled finds you back,Isabella Rossi,5.34,FALSE
Beneath the Surface,Every shadow hides a story,Renee Fontaine,3.97,FALSE
The Last Waltz Home,Destiny waits for no one,Grace Lindqvist,6.64,TRUE
Wildflower Junction,Some stories refuse to stay buried,Mei Tanaka,5.10,TRUE
The Iron Rose,The truth always finds a way out,Felix Adeyemi,3.06,FALSE
Nightfall in Rome,The past never really leaves,Omar Haddad,6.39,TRUE
The Broken Compass,The fire that burns brightest fades fastest,Julian Achebe,2.78,FALSE
Echo Chamber,The wind carries what words cannot,Camila Duarte,2.03,FALSE
The Traveling Circus,Some secrets are worth keeping,Sofia Bergman,3.31,TRUE
Highway to Yesterday,Redemption is never out of reach,Sofia Bergman,3.35,TRUE
The Blue Hour,There is beauty in every ending,Isabella Rossi,5.43,FALSE
Cold Case Sunrise,Family is found not always born,Alistair Finch,3.25,TRUE
The Vanishing Point,One night can change everything,Henry Okonkwo,6.14,TRUE
Salt and Ash,Some stories refuse to stay buried,Grace Lindqvist,5.85,FALSE
The Winter Garden,Nothing gold can stay forever,Mei Tanaka,4.75,FALSE
Nomads of the North,Redemption is never out of reach,Elena Marquez,2.55,TRUE
The Crystal Cave,Sometimes the map is the mystery,Thomas Whitfield,6.16,TRUE
Firelight Serenade,The world keeps turning without us,Sofia Bergman,2.20,FALSE
The Long Road West,Not every hero wears a cape,Omar Haddad,3.04,TRUE
Static and Silence,Some secrets are worth keeping,Omar Haddad,5.89,FALSE
The Hidden Valley,The wind carries what words cannot,Sofia Bergman,6.62,TRUE
Moonlit Confessions,Nothing gold can stay forever,Nathaniel Cho,6.40,TRUE
The Great Escape Artist,In the end only memories remain,Grace Lindqvist,5.90,FALSE
Redwood Falls,Every shadow hides a story,Renee Fontaine,2.79,TRUE
The Silver Screen Dream,Every scar tells a different story,Thomas Whitfield,6.28,TRUE
Undertow,Some journeys have no map,Mei Tanaka,3.74,TRUE
The Painted Ladies,What we lose defines who we become,Elena Marquez,5.29,FALSE
Harbor Lights,There is beauty in every ending,Renee Fontaine,6.31,FALSE
The Final Curtain Call,Not all who wander are lost,Camila Duarte,3.99,FALSE
Wanderlust Junction,Every ending has a beginning,Marcus Delgado,6.38,FALSE
The Quiet Storm Rises,In the end only memories remain,Nora Kristiansen,6.80,FALSE
Riverbend,Not every hero wears a cape,Marcus Delgado,4.97,FALSE
The Last Frontier Town,The heart remembers what the mind forgets,Henry Okonkwo,5.02,TRUE
Aurora Borealis Rising,Every scar tells a different story,Nora Kristiansen,2.94,TRUE
```
</details>

3. The `Rental` class contains these instance methods:
    1. `get_movie(name)` - Returns the movie object 
    2. `rent_movie(name)` - Sets the `rented` value of the movie to true. Returns the cost of the rental.

4. Login to GitHub using the terminal with `gh auth login`. 
    1. Use the arrow keys to select GitHub.com and press Enter. Select HTTPS as your preferred protocol.
    2. When asked how you want to authenticate, select Paste an authentication token. 
    3. Open your GitHub site and navigate to the Settings and then the Developer Settings. Then click on Personal Access Token and Classic Token. Create a new **classic token** by naming it, select a expiration date, then checking the box for `repo` permissions. Copy your token and paste it back into your terminal and press Enter.
    4. Then to upload: use `git add .` to stage your changes, `git commit -m "message"` to commit them and `git push -u origin main` to push your changes to GitHub. In the future, you will only need to use `git push` to push for this repository.


## Tips, Tricks, and Resources
- [Objects in Python Notes](#Pi's-and-Python/Objects-In-Python-Notes)
- [W3 Schools - Classes](https://www.w3schools.com/python/python_classes.asp)
- [Geeks for Geeks - Python Objects](https://www.geeksforgeeks.org/python/python-object/)
- [Introduction to Classes and Objects](https://www.youtube.com/watch?v=8yjkWGRlUmY) and [Using Classes and Objects in Python](https://www.youtube.com/watch?v=wfcWRAxRVBA)
- [Reading Files in Python](https://www.w3schools.com/python/python_file_open.asp)


## Extensions
1. Update `Movie` to track available copies (`stock: int`) rather than a simple `rented` boolean. Update `rent_movie` to decrement stock and prevent rentals when stock hits 0.
2. Add methods to Rental such as `search_by_director(director_name)`, `get_available_movies()`, or `filter_by_price(max_price)`.

# Reflection Questions
1. Why is it better to separate data and methods into `Movie` and `Rental` classes rather than storing everything in flat dictionaries or lists?
2. What is the operational difference between git add, git commit, and git push? 
3. How does writing meaningful commit messages help other developers when reviewing a repository's history?

## How to Submit

Show your instructor your GitHub repository with your code. Then, run your code for your instructor to demonstrate your program and answer the reflection questions. to be graded. When you are all done, upload your GitHub link to Google Classroom and hit submit.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.