# Music with JFugue

## Getting Started

1. Create a new Java project in IntelliJ
2. Download the JFugue HAR file from [this website](http://www.jfugue.org/download.html)
3. Go to 'File' then 'Project Structure' and select the 'Modules' tab on the left. 
4. Click on the one module listed (it should be the name of your project) then click 'Dependencies' on the right.
5. Click the plus and select your JAR file you just downloaded. Then hit 'Apply' and 'Ok' on the bottom right. JFugue should now be added to your project.


## Creating Your First Sounds

We are going to play a simple scale to start. 

1. Create a new class and import JFugue with `import org.jfugue.player.Player;`.
2. Create a main and define a new player with `Player player = new Player();`
3. Then add `player.play("Cq Dq Eq Fq Gq Aq Bq C6q");` This will play a simple scale from C5 up to C6. Each `q` represents a quarter note. Run your file to hear the scale!


## Making Music

Now that you can play simple notes, let's try some chords. 

1. Add the line `player.play("I[Guitar] Cmajw Fmajw Gmajw Cmajw");` `I[Guitar]` changes the instrument to a guitar. `maj` means play the major chord associated with the note and `w` stands for whole note. 
2. To play mutiple tracks together, label them with `VO` and `V1`. See the example below of a piano and electric bass track played together. 

```
// Voice 0 is our rhythmic Piano playing chords
String pianoTrack = "V0 I[Piano] Cmajq Cmajq Fmajq Cmajq";

// Voice 1 is our Electric Bass playing single low notes (3rd octave)
String bassTrack = "V1 I[Electric_Bass_Finger] C3q C3q F3q C3q";

// Combine them with a space and play!
player.play(pianoTrack + " " + bassTrack);

```

## Syntax

- Notes: `A, B, C, D, E, F, G`
- Octaves: Add a number (e.g., `C5` is middle C, `C3` is low, `C7` is high).
- Durations: `w` (whole), `h` (half), `q` (quarter), `i` (eighth), `s` (sixteenth).
- Rests: `R` (e.g., `Rq` is a quarter-note rest of silence).

### The Instruments

There are 128 total instruments to choose from but here are some highlights. 

| Category | Example JFugue Instruments | Vibe / Best For |
| :--- | :--- | :--- |
| **Pianos & Keyboards** | `Piano`, `Electric_Grand`, `Honky_Tonk`, `Harpsichord`, `Clavinet` | Classic melodies, saloon music, and rhythmic chords. |
| **Guitars & Bass** | `Acoustic_Guitar_Nylon`, `Electric_Guitar_Clean`, `Overdriven_Guitar`, `Slap_Bass_1` | Rock anthems, acoustic ballads, and funky basslines. |
| **Strings & Orchestra** | `Violin`, `Cello`, `Pizzicato_Strings`, `Orchestral_Harp`, `Timpani` | Epic orchestral tracks or sneaky, plucked background music. |
| **Brass & Wind** | `Trumpet`, `Trombone`, `Alto_Sax`, `Flute`, `Oboe`, `Ocarina` | Jazz bands, classical winds, or recreating Zelda themes. |
| **Synths & Electronic** | `Lead_Square`, `Lead_Sawtooth`, `Pad_Warm`, `Sci_Fi` | 8-bit retro video game music and ambient electronic beats. |
| **Quirky Sound Effects** | `Bird_Tweet`, `Telephone_Ring`, `Helicopter`, `Applause`, `Gunshot` | Making incredibly weird and experimental noise! (Yes, these play at different pitches). |

#### A Note on Drums
Drums are handled a little differently. Instead of changing the instrument, General MIDI always reserves **Voice 9** (`V9`) specifically for the drum kit. 

If you switch to `V9`, the notes you play no longer represent pitches (like A, B, C); instead, they represent different pieces of the drum kit! For example, on `V9`, playing a `C` might trigger a kick drum, while playing an `F#` might trigger a hi-hat.
