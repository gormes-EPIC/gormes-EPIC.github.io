# ArrayList Lab

## Objective

1. Use Java's `ArrayList` class to solve problems.
2. Build a class that keeps an `ArrayList` of objects in order.

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| `ArrayList` | A class that implements the `List` interface by creating and resizing arrays |
| capacity | The most items something is allowed to hold |

## Your Task

You will write two programs that use `ArrayList`.

Following the steps below, you will create the following:

1. A [`ChatHistory` program](#chat-history) that reads sentences and reports on the words
2. A [`Score` class](#score)
3. A [`Leaderboard` class](#leaderboard) that keeps the top scores in order
4. A [`main` method](#test) that tests your `Leaderboard`

Test each part as soon as you write it.

### <a id="chat-history"></a>Step 1: Chat History

In a class called `ChatHistory`, let the user type sentences over and over. Add each word of each sentence to an `ArrayList`. When the user types `STOP`, stop asking for input.

Then print a report with:
- The total number of words
- The number of unique words
- The number of times "the" appears
- The longest word
- Whether all the words are lowercase

Finally, print a **condensed chat history**: every word, in lowercase, with duplicates and words of three letters or fewer removed.

> Ignore uppercase vs. lowercase when you count unique words, count "the", and remove duplicates. `THE` and `the` are the same word.

A complete run of the program looks like this:
```
Enter a sentence: the quick brown fox jumped over THE LAZY DOG
Enter a sentence: hello there
Enter a sentence: HELLO WORLD
Enter a sentence: STOP

Chat Report:
You used 13 words.
You used 11 unique words.
You used "the" 2 times.
"jumped" was the longest word.
Are all words lowercase? false

Condensed Chat History:
quick
brown
jumped
over
lazy
hello
there
world
```

### <a id="score"></a>Step 2: The `Score` Class

| Instance Variable | Description |
| --- | --- |
| `String name` | A three-letter name in all caps, like `"ABC"` |
| `int score` | The number of points |

Give `Score` a constructor, getters and setters, and a `toString()` method that shows the name and the score.

### <a id="leaderboard"></a>Step 3: The `Leaderboard` Class

| Instance Variable | Description |
| --- | --- |
| `int capacity` | The most scores the leaderboard can hold |
| `ArrayList<Score> scoreboard` | The scores, stored from **largest to smallest** |

The constructor `Leaderboard(int capacity)` sets the capacity and creates a new, empty `ArrayList`.

| Method | What it does |
| --- | --- |
| `void addScore(String name, int score)` | Adds a new score in the right spot, so the list stays largest to smallest. If that puts the list over capacity, removes the smallest score. |
| `int getHighScore()` | Returns the highest score. |
| `int getAverageScore()` | Returns the average score. |
| `boolean break1000()` | Returns `true` if any score is over 1000 points, `false` otherwise. |
| `void printLeaderboard()` | Prints the scores, largest first. |

### <a id="test"></a>Step 4: Test Your Leaderboard

Run this `main` method:

```java
public static void main(String[] args) {
    Leaderboard board = new Leaderboard(5);

    board.addScore("ABC", 100);
    board.addScore("DEF", 200);
    board.addScore("GHI", 250);
    board.addScore("JKL", 300);
    board.addScore("MNO", 205);

    System.out.println("High Score: " + board.getHighScore());
    System.out.println("Average Score: " + board.getAverageScore());
    System.out.println("Did a player break 1000 points?: " + board.break1000());

    System.out.println("\nLeaderboard: ");
    board.printLeaderboard();

    System.out.println("\nLeaderboard: ");
    board.addScore("PQR", 150);
    board.printLeaderboard();
}
```

| Code | Expected result |
| --- | --- |
| `getHighScore()` | `300` |
| `getAverageScore()` | `211` |
| `break1000()` | `false` |
| First `printLeaderboard()` | JKL 300, GHI 250, MNO 205, DEF 200, ABC 100 |
| `addScore("PQR", 150)`, then `printLeaderboard()` | JKL 300, GHI 250, MNO 205, DEF 200, PQR 150 (ABC is bumped off) |

## Tips, Tricks, and Resources
- [W3 Schools](https://www.w3schools.com/java/java_arraylist.asp?authuser=0)
- [Array vs ArrayList](https://www.youtube.com/watch?v=NbYgm0r7u6o)
- [Learn ArrayList in 9 minutes](https://www.youtube.com/watch?v=wsTSREgCE5E)

## Extensions
1. For `ChatHistory`: instead of only counting "the", find and print the most-used word in the whole chat. Look into [HashMaps](https://www.youtube.com/watch?v=H62Jfv1DJlU).
2. For `Leaderboard`: read the scores from a `scores.txt` file when the `Leaderboard` is created, and rewrite the file every time `addScore()` is called. This saves the scores between runs.

## Reflection Questions
1. In Chat History, why was it necessary to use an `ArrayList` instead of a standard array [] to store the user's input?
2. In the Chat History analysis, how did you determine the number of unique words? Walk through the logic of your algorithm.
3. In Leaderboard, you created a custom `Score` class to hold the name and the numerical score. Why is it better to have an `ArrayList<Score>` rather than trying to maintain two separate lists like an `ArrayList<String>` for names and an `ArrayList<Integer>` for scores?
4. Rate your confidence with ArrayLists from 1-5. What specific part is keeping you from a 5?

## How to Submit

Attach your GitHub repository to Google Classroom. Then, show your instructor your GitHub repository and demonstrate your working program in class. You will also need to answer the reflection questions, either written or in person.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.
