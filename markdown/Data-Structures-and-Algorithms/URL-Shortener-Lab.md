# URL Shortener Lab

## Objective

1. Understand the $O(1)$ time complexity of hashmap insertions and lookups.
2. Manage state using multiple hashmaps to optimize different types of queries.
3. Handle and resolve data collisions.
4. Practice string manipulation and random generation.

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| `HashMap` | Map implementation of a hash table. |

## Your Task


## Getting Started
```
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

public class URLShortener {
    
    // The prefix for all generated URLs
    private final String baseUrl = "http://tiny.ly/";
    
    // TODO: Declare your HashMaps here.
    // Hint: You might need more than one to handle duplicates efficiently!
    

    /**
     * Initializes the URL Shortener service.
     */
    public URLShortener() {
        // TODO: Initialize your HashMaps here.
    }

    /**
     * Helper method to generate a random 6-character alphanumeric string.
     * * @return A random 6-character string.
     */
    private String generateShortCode() {
        // TODO: Generate a random string of length 6 using a-z, A-Z, and 0-9.
        // Hint: You can use java.util.Random and a String or array containing all allowed characters.
        
        return null; // Placeholder return
    }

    /**
     * Shortens a long URL. 
     * If the URL has already been shortened, returns the existing short URL.
     * * @param longUrl The original URL string (e.g., "https://www.google.com")
     * @return The generated short URL (e.g., "http://tiny.ly/aB3x9Q")
     */
    public String encode(String longUrl) {
        // TODO: Step 1 - Check if longUrl has already been shortened.
        
        // TODO: Step 2 - If not, generate a new short code using your helper method.
        
        // TODO: Step 3 - Handle collisions! Ensure your generated code 
        // isn't already being used as a key by a different URL.
        
        // TODO: Step 4 - Save the relationships in your HashMaps.
        
        // TODO: Step 5 - Return the full short URL (baseUrl + code).
        
        return null; // Placeholder return
    }

    /**
     * Restores a short URL to its original long URL.
     * * @param shortUrl The short URL string (e.g., "http://tiny.ly/aB3x9Q")
     * @return The original long URL
     * @throws IllegalArgumentException If the short URL does not exist in the system
     */
    public String decode(String shortUrl) {
        // TODO: Step 1 - Extract the 6-character code from the shortUrl.
        // Hint: You can use String.replace() or String.substring() to remove the baseUrl.
        
        // TODO: Step 2 - Look up the code in your HashMap.
        
        // TODO: Step 3 - Return the original long URL. 
        // If the code isn't found in the map, throw an IllegalArgumentException.
        
        return null; // Placeholder return
    }
}
```
1. 

## Tips, Tricks, and Resources
- 

## Extensions
1. 

## Reflection Questions
1. 

## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person

## Rubric
- **6 points** - All required items are present.
- **5 points** - Task was completed, but supplementary materials are weak or missing.
- **4 points** - Task was attempted, but is missing major components.
- **3 points** - Did not attempt or student should reattempt.