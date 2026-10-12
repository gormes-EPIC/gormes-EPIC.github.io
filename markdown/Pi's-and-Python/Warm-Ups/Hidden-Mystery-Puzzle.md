
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 1 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 1 | 2 | 3 | 2 | 2 | 1 | 1 | 1 | 1 | 1 | 1 |
| 1 | 1 | 1 | 1 | 2 | 2 | 2 | 3 | 2 | 2 | 2 | 1 | 1 | 1 | 1 |
| 1 | 1 | 2 | 2 | 4 | 4 | 4 | 3 | 2 | 4 | 4 | 2 | 2 | 1 | 1 |
| 1 | 2 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 2 | 1 |
| 1 | 2 | 4 | 2 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 2 | 4 | 2 | 1 |
| 2 | 4 | 4 | 2 | 2 | 2 | 4 | 4 | 4 | 2 | 2 | 2 | 4 | 4 | 2 |
| 2 | 4 | 4 | 2 | 2 | 5 | 2 | 4 | 2 | 5 | 2 | 2 | 4 | 4 | 2 |
| 2 | 4 | 4 | 4 | 2 | 2 | 2 | 4 | 2 | 2 | 2 | 4 | 4 | 4 | 2 |
| 2 | 4 | 2 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 2 | 4 | 2 |
| 1 | 2 | 4 | 2 | 2 | 4 | 2 | 4 | 2 | 4 | 2 | 2 | 4 | 2 | 1 |
| 1 | 2 | 4 | 4 | 4 | 2 | 4 | 2 | 4 | 2 | 4 | 4 | 4 | 2 | 1 |
| 1 | 1 | 2 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | 2 | 1 | 1 |
| 1 | 1 | 1 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 1 | 1 |

---

Trace the snippet then color in the squares with the corresponding output **black**.

```python
def h(y):
    b = 0
    for x in y:
        if x % 2 == 0:
            b += x * 3
        else:
            b -= x
    return b

o = [4, 7, 3]
print(h(o))
```

Trace the snippet then color in the squares with the corresponding output **white**.

```python
def m(d):
    z = 0
    for t in d:
        if t % 2 == 1:
            z += t
        else:
            z -= t // 2
    return z

v = [7, 4, 6, 3]
print(m(v))
```

Trace the snippet then color in the squares with the corresponding output **purple**.

```python
def r(n):
    s = 0
    for j in n:
        if j % 2 == 0:
            s += j * 2
        else:
            s -= j
    return s

c = [3, 2, 5, 4, 3]
print(r(c))
```

Trace the snippet then color in the squares with the corresponding output **orange**.

```python
def k(f):
    a = 0
    for u in f:
        if u % 3 == 0:
            a += u
        else:
            a -= 1
    return a

l = [6, 1, 2]
print(k(l))
```

Trace the snippet then color in the squares with the corresponding output **brown**.

```python
def w(e):
    g = 0
    for i in e:
        if i % 2 == 0:
            g += i // 2
        else:
            g -= i
    return g

p = [10, 3, 4, 1]
print(w(p))
```