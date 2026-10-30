1. Using the data and the class below, write the function `points(kid)` which returns the number of points that each kid has in candy.
2. Next write the method `best_swap(kid, others)` which determines the best 1-1 swap for `kid` where the other kid will not lose points.
3. Modify your method to add two points for each kid's favorite candy and -1 points for their least favorite.
4. Then, write a program to determine all possible best swaps to and print out each kid's ending candy values. 

### Example Class

```python
class Kid:
    """One trick-or-treater and their candy haul."""
 
    def __init__(self, name, candy=None, favorite=None, least_favorite=None):
        self.name = name
        self.candy = dict(candy) if candy else {}  # copy so we don't change the original data
        self.favorite = favorite
        self.least_favorite = least_favorite
 
    @classmethod
    def from_dict(cls, name, data):
        """Build a Kid from one entry of the hauls dictionary."""
        return cls(name, data["candy"], data.get("favorite"), data.get("least_favorite"))
```



### Example Haul 1

```
hauls = {
    "Xia":  {"candy": {"Snickers": 2, "Skittles": 1},
             "favorite": "Twix", "least_favorite": "Skittles"},
    "Yuri": {"candy": {"Twix": 2, "Candy Corn": 1},
             "favorite": "Snickers", "least_favorite": "Candy Corn"},
    "Zoe":  {"candy": {"Skittles": 1, "Candy Corn": 2},
             "favorite": "Skittles", "least_favorite": "Twix"},
}

default_candy_values = {"Snickers": 3, "Twix": 3, "Skittles": 2, "Candy Corn": 1}
```
**Results after swaps**
- Xia: 11 points
- Yuri: 10 points
- Zoe: 9 points

### Example Haul 2
```
hauls = {
    "Ana": {
        "candy": {"Snickers": 3, "Skittles": 5, "Kit Kat": 2, "Milky Way": 1, "Tootsie Roll": 4, "Butterfinger": 2},
        "favorite": "Reese's",
        "least_favorite": "Candy Corn",
    },
    "Ben": {
        "candy": {"Skittles": 1, "Reese's": 4, "Candy Corn": 6, "Twix": 2, "Milky Way": 3, "Tootsie Roll": 2},
        "favorite": "Snickers",
        "least_favorite": "Candy Corn",
    },
    "Chloe": {
        "candy": {"Kit Kat": 4, "Snickers": 1, "Twix": 3, "Butterfinger": 2, "Tootsie Roll": 5, "Candy Corn": 1},
        "favorite": "Kit Kat",
        "least_favorite": "Tootsie Roll",
    },
    "Dev": {
        "candy": {"Candy Corn": 2, "Twix": 1, "Reese's": 2, "Skittles": 2, "Snickers": 2, "Milky Way": 1},
        "favorite": "Twix",
        "least_favorite": "Skittles",
    },
    "Eli": {
        "candy": {"Reese's": 1, "Butterfinger": 3, "Kit Kat": 2, "Candy Corn": 4, "Skittles": 3, "Tootsie Roll": 1},
        "favorite": "Butterfinger",
        "least_favorite": "Reese's",
    },
    "Fatima": {
        "candy": {"Twix": 2, "Milky Way": 2, "Snickers": 1, "Skittles": 4, "Butterfinger": 1, "Kit Kat": 3},
        "favorite": "Milky Way",
        "least_favorite": "Butterfinger",
    },
}

default_candy_values = {
    "Snickers": 3, "Kit Kat": 3, "Twix": 3, "Milky Way": 3, "Butterfinger": 3,
    "Reese's": 4, "Skittles": 2, "Candy Corn": 1, "Tootsie Roll": 1,
}
```
