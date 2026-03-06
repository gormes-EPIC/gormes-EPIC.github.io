# ArrayList Lab

## Objective

1. You will use the `ArrayList` class to solve problems in Java

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| `ArrayList` | A class that implements the `List` interface by creating and resizing arrays |

## Your Task

You will complete two programs using `ArrayList`. 

- [Chat History](#chat-history)
- [Leaderboard](#leaderboard)

## <a id="chat-history"></a>Chat History

First, create a program which allows the user to enter sentences over and over, adding each word in the sentence to an ArrayList. When the word `"STOP"` is entered, stop allowing the user to enter input and move on to the analysis phase. 

For the analysis phase, determine and print the following:
- The number of total words
- The number of unique words
- The number of times "the" appears
- The longest word
- If all words are lowercase or not

Then print a condensed version of the chat history with all duplicates and three letter or less words removed.

A complete run of the program will look like this:
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

## <a id="leaderboard"></a>Leaderboard

First, create the class `Score`. `Score` has the two instance variables described below and appropriate constructor/getters/setters.

| Variable    | Description                                              |
| ----------- | -------------------------------------------------------- |
| String name | A three letter name(all caps) associated with each score |
| int score   | A numerical score                                        |

Also, create a `toString()` method for the `Score` class. 

Then, create the class `Leaderboard`. `Leaderboard` has two instance variables described below. 

| Variable                      | Description                                                                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| int capacity                  | The capacity of the scoreboard. The number of scores on the scoreboard must not exceed this number.                                                     |
| ArrayList\<Score\> scoreboard | An ArrayList of `Score` representing the scoreboard. The items are stored with the largest first, then the second largest, then the third largest, etc. |

`Leaderboard` has one constructor: `Leaderboard(int capacity)` which initialized the `capacity` of `Leaderboard` and creates a new ArrayList of the given capacity. 

`Leaderboard` has the following methods: 

| Method                                       | Description                                                                                                                                                                                                                                                                                |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| public void addScore(String name, int score) | This adds a new score to the scoreboard in the appropriate location. The scoreboard should always maintain it's order of the largest as the first element, the second largest as the second etc. If adding the score exceeds the max capacity, remove the element with the smallest score. |
| public int getHighScore()                    | Returns the high score of the scoreboard                                                                                                                                                                                                                                                  |
| public int getAverageScore()                 | Returns the average score of the scoreboard                                                                                                                                                                                                                                                |
| public boolean break1000()                   | Returns true if one of the scores on the scoreboard has over 1000 points                                                                                                                                                                                                                   |
| public void printLeaderboard()               | Prints the scoreboard, largest first.                                                                                                                                                                                                                                                      |
Test your code with the following main method: 

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


## Tips, Tricks, and Resources
- [W3 Schools](https://www.w3schools.com/java/java_arraylist.asp?authuser=0)
- [Array vs ArrayList](https://www.youtube.com/watch?v=NbYgm0r7u6o)
- [Learn ArrayList in 9 minutes](https://www.youtube.com/watch?v=wsTSREgCE5E)

## Extensions
1. For `ChatHistory`: Instead of just hardcoding a check for the word "the", challenge students to find and print the most frequently used word in the entire chat. Look into [HashMaps](https://www.youtube.com/watch?v=H62Jfv1DJlU).
2. For `Leaderboard`:  Have the program read from a scores.txt file when the Leaderboard is instantiated, and rewrite to that file every time addScore() is called. This will allow the program to have persistant storage between runs. 

## Reflection Questions
1. In Chat History, why was it necessary to use an `ArrayList` instead of a standard array [] to store the user's input?
2. In the Chat History analysis, how did you determine the number of unique words? Walk through the logic of your algorithm.
3. In Leaderboard, you created a custom `Score` class to hold the name and the numerical score. Why is it better to have an `ArrayList<Score>` rather than trying to maintain two separate lists like an `ArrayList<String>` for names and an `ArrayList<Integer>` for scores?
4. Rate your confidence with ArrayLists from 1-5. What specific part is keeping you from a 5?  

## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person


## Rubric
- **6 points** - All required items are present.
- **5 points** - Task was completed, but supplementary materials are weak or missing.
- **4 points** - Task was attempted, but is missing major components.
- **3 points** - Did not attempt or student should reattempt.