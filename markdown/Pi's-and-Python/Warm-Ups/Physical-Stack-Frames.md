1. Gather slips of paper to represent your **stack frame**. Remember that a stack frame saves the current function call and the current values of the any variables. The only way to share information between stack frames it to *return it*.

2. Trace the following functions using your physical stack frames.
```
def function(n):
    if n <= 2:
        return n
    else:
        return n - function(n-3)

print(function(10))

```

<details>
<summary>Click here to view the answer</summary>

<img src="assets/stack-frames-1.gif" alt="Animated trace of function(10). Frames for function(10), function(7), function(4), and function(1) stack up. function(1) returns 1, then function(4) returns 4 - 1 = 3, function(7) returns 7 - 3 = 4, and function(10) returns 10 - 4 = 6.">

**The answer is `6`.** Each frame waits for the one above it, then subtracts:

| Frame | Works out | Returns |
| --- | --- | --- |
| `function(1)` | base case | `1` |
| `function(4)` | `4 - 1` | `3` |
| `function(7)` | `7 - 3` | `4` |
| `function(10)` | `10 - 4` | `6` |

</details>

```
def function(a):
    if len(a) == 1:
        return a[0]
    else:
        m = function(a[1:])
        if a[0] > m:
            return a[0]
        else:
            return m

print(function([3, 8, 5, 1]))
```

<details>
<summary>Click here to view the answer</summary>

<img src="assets/stack-frames-2.gif" alt="Animated trace of function([3, 8, 5, 1]). Each call removes the first item until the list is [1], which returns 1. Then function([5, 1]) returns 5, function([8, 5, 1]) returns 8, and function([3, 8, 5, 1]) returns 8 because 3 is not bigger than 8.">

**The answer is `8`.** The function returns the biggest number in the list. Each frame returns the bigger of `a[0]` and `m`:

| Frame | `a[0]` | `m` | Returns |
| --- | --- | --- | --- |
| `function([1])` | `1` | | `1` (base case) |
| `function([5, 1])` | `5` | `1` | `5` |
| `function([8, 5, 1])` | `8` | `5` | `8` |
| `function([3, 8, 5, 1])` | `3` | `8` | `8` |

</details>

```
def function(n, total):
    if n == 0:
        return total
    else:
        return function(n // 10, total*10 + n % 10)

print(function(358, 0))
```

<details>
<summary>Click here to view the answer</summary>

<img src="assets/stack-frames-3.gif" alt="Animated trace of function(358, 0). Each call moves the last digit of n onto the end of total: function(35, 8), function(3, 85), then function(0, 853), which returns 853. Every frame passes 853 back down unchanged.">

**The answer is `853`.** The function reverses the digits. Each call moves the last digit of `n` onto the end of `total`:

| Frame | `n % 10` | Next call |
| --- | --- | --- |
| `function(358, 0)` | `8` | `function(35, 8)` |
| `function(35, 8)` | `5` | `function(3, 85)` |
| `function(3, 85)` | `3` | `function(0, 853)` |
| `function(0, 853)` | | base case: returns `853` |

The other frames pass `853` back unchanged.

</details>