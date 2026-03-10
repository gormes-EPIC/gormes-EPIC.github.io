# File Reading and Writing Notes

## Reading from Files

Create a new file `demo.txt` with the following contents:
```
Hello!
This is a file.
It has three lines.
```

Then, create a new python file `reader.py` with the following contents. Make sure you are in the same directory as `demo.txt`
```python
lines = []
with open("demo.txt", "r") as f:
    lines = f.readlines()

for line in lines:
    print(line.strip())
```

When you run `reader.py` you should see the contents of the file appear in your terminal. Now let's go through `reader.py` line by line. 

| Line | Description |
| ----------- | ----------- |
| `lines = []` | Create a new list called lines. This will store each line of our file as an element in the list. |
| `with open("demo.txt", "r") as f:` | Open the file `demo.txt` as a readable file(`"r"`) and create a new variable `f` of type `File`. |
| `lines = f.readlines()` | Set `lines` equal to the contents of file. This will store each line of our file as an element in the list. |
| `for line in lines:` | Create a for loop where `line` is each of the elements in `lines` |
| `print(line.strip())` | Print each line out with the extra newline character removed. |

## Writing from Files

Let's keep using our `demo.txt` and create a new file `writer.py` with the following contents. If you run the program below, this should replace the contents of `demo.txt`.
```python
text = "Hello there!"
with open("demo.txt", "w") as f:
    f.write(text)
```
Let's go through the program line by line.

| Line | Description |
| ----------- | ----------- |
| `text = "Hello there!"` | Defines a new string variable. |
| `with open("demo.txt", "w") as f` | Open the file `demo.txt` as a writable file(`"w"`) and create a new variable `f` of type `File`. |
| `f.write(text)` | Write the string text to the file. |

### "w" vs "a"

Change your program above to replace `"w"` with `"a"`. What happens to your file?

You should see that each time you run the program another `Hello there!` gets added instead of replacing the contents. This is the key difference between `"a"` and `"w"`.

The `with open(...)` construction can be used with three different options: 

| Options | Description |
| ----------- | ----------- |
| `a` | Appends a string to the end of the lines in a file. |
| `r` | Reads the contents of a file. |
| `w` | Writes a string to a file and replaces it's contents. |
