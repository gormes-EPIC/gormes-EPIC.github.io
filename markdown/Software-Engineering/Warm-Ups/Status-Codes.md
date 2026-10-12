For each situation, write the status code your API should send back.

1. A client asks for `GET /api/pokemon/9999`, and there is no Pokemon with that number.
2. A client sends a `POST` that successfully adds a new row to the database.
3. A client sends a `POST` with no JSON body.
4. Your SQL query has a typo, and the server crashes while running it.

```python
@app.route("/api/pokemon/<int:number>")
def get_pokemon(number):
    if number not in pokedex:
        return {"error": "Pokemon not found"}
    return pokedex[number]
```

5. What status code does the code above send when the Pokemon is missing? How would you fix it?
