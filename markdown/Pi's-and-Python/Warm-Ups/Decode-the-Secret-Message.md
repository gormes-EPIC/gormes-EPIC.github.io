To answer the riddle below, complete the practice problems and find the corresponding letter in the chart below. Then enter the letter into the blank labeled with the question number.

| A | B | C | D | E | F | G | H | I | J | K | L | M |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 27 | 5 | 13 | 82 | 4 | 71 | 9 | 2 | 15 | 26 | 67 | 25 | 8 |

| N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 10 | 35 | 18 | 34 | 63 | 1 | 38 | 14 | 55 | 87 | 3 | 17 | 20 |




**Riddle:** Why do programmers prefer dark mode?

| _ | _ | _ | _ | _ | _ | _ | _ | _ | _ | _ | _ | _ | _ | _ | _ | _ |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 6 | 9 | 3 | 8 | 1 | 7 | 1 | 1 | 5 | 7 | 2 | 1 | 4 | 11 | 10 | 3 | 4 |

---

#### Question 1: What does this function return?

```python
def f(a, b):
    x = 0
    for n in a:
        if n > b:
            x = x + n
    return x

f([5, 12, 3, 20, 6, 2], 5)
```

#### Question 2: How many times is hello printed in the following segment?

```python
for i in range(20):
    if i % 3 != 0:
        print("hello")
```

#### Question 3: What is at index 1?

```python
d = {"a": 4, "b": 7, "c": 2, "d": 5}
a = []
for k in d:
    if d[k] > 3:
        a.append(d[k] + 2)
print(a[1])
```

#### Question 4: What does the following segment print?

```python
d = {"a": 4, "b": 0, "c": 2}
x = 0
for k in d:
    if d[k] == 0:
        x = x + 1
print(x)
```

#### Question 5: What does the function return?

```python
def f(d):
    x = 0
    for k in d:
        if d[k] % 7 == 0:
            x = x + d[k]
    return x

f({"a": 14, "b": 10, "c": 21, "d": 28, "e": 5})
```

#### Question 6: Evaluate the expression:

```python
d = {"a": [5, 10, 15], "b": [20, 25, 30]}
d["a"][2] + d["b"][0] - d["a"][1]
```

#### Question 7: How many times is hello printed?

```python
for i in range(3):
    for j in range(10):
        if i != j:
            print("hello")
```

#### Question 8: What is the value of x at the end of this snippet?

```python
x = 80
while x > 2:
    if x % 2 == 0:
        x = x // 2
    else:
        x = x - 1
```

#### Question 9: What is at index 1?

```python
a = []
for i in range(6):
    if i % 2 == 1:
        a.append(i * 5)
print(a[1])
```

#### Question 10: What does this print?

```python
a = [7, 2, 9, 4, 16, 3]
x = a[0]
y = a[0]
for n in a:
    if n < x:
        x = n
    if n > y:
        y = n
print(y - x)
```

#### Question 11: Fill in the blank so the program prints 3.

```python
c = 0
for i in range(____):
    if i >= 2:
        c = c + 1
print(c)
```