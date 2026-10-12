```python
@app.route("/api/todos/<int:todo_id>", methods=["DELETE"])
def delete_todo(todo_id):
    todo = find_todo(todo_id)
    if todo is None:
        return {"error": "To-do not found"}, 404
    todos.remove(todo)
    return {"message": f"Deleted to-do {todo_id}"}
```

1. What method and path would a client use to delete to-do number 4?
2. What does `<int:todo_id>` do?
3. What happens if a client sends a `GET` request to this path instead?
