# Final Project: Checklist

> **The goal:** invent a device that combines Python and hardware to do something useful, test it, and document it with a professional README that you could show to an employer.

## Step 1: Understand the Requirements

| | Working alone | Team of 2 |
| ----------- | ----------- | ----------- |
| Sources of **input** (like a button, sensor, or knob) | at least 1 | at least 2 different |
| Sources of **output** (like an LED, display, or buzzer) | at least 1 | at least 2 different |
| **New components** you've never used before | at least 1 | at least 2 |

- [ ] Decide whether you're working alone or with a partner.
- [ ] Look through the example projects from former students to get a sense of the scope:
  - [ ] [Plant Watering Robot](https://github.com/Cbents/Raspberry-Pi-s-and-Python-EPIC-Campus-Final-Project?authuser=0)
  - [ ] [Music Player](https://github.com/NorahAhnstedt/Music-Player)
  - [ ] [Tic-Tac-Toe](https://github.com/miloskud/Tic-Tac-Toe-Project)
  - [ ] [Plant Guardian](https://kcook204.gitbook.io/plant-waterhelper)
- [ ] Look at the [Stoplight Project](https://www.google.com/url?sa=D&q=https://github.com/gormes-EPIC/ProximitySensor/tree/main&ust=1777471500000000&usg=AOvVaw0h132amDiPQfHhoDSbCyaE&hl=en) as an example of the final documentation.

## Step 2: Brainstorm and Get Approved

- [ ] Brainstorm at least three ideas for your invention.
- [ ] For each idea, write down who would use it and what problem it solves.
- [ ] Pick your favorite idea.
- [ ] List the inputs, outputs, and new component(s) it will use, and check them against the requirements in Step 1.
- [ ] Find out whether the parts you need are available in class.
- [ ] ✋ Get your project idea approved by your instructor **before** you start building.

## Step 3: Plan and Research

- [ ] Create a new GitHub repository for your project.
- [ ] Make a list of every material you'll need.
- [ ] Research your new component(s): how they're wired, and which Python library controls them.
- [ ] Start a list of every resource you use (title and link). You'll need it for your README.
- [ ] Sketch a rough diagram of how your parts will connect.

## Step 4: Build It

> **Remember:** keep your Pi turned off while you connect anything to the GPIO pins, always use resistors with LEDs, and don't bend the GPIO pins.

- [ ] Wire and test each input on its own with a small test program.
- [ ] Wire and test each output on its own with a small test program.
- [ ] Get your new component(s) working on their own.
- [ ] Combine everything into your main program, one piece at a time, testing as you go.
- [ ] Take progress photos and videos as you build. You'll want them for your README.
- [ ] Commit and push your code to GitHub regularly, not just at the end.
- [ ] Keep adding to your list of resources.

## Step 5: Test It

Once you're about 50%–75% of the way through your build, start writing tests.

- [ ] Write down how you'll measure whether your project is a success, based on your original idea.
- [ ] Write a list of test cases. For each one, include the **test condition** and the **expected result**.
- [ ] Include tests for unexpected events, not just the obvious ones. (What should your program do when something goes wrong? "It errors" isn't an acceptable answer!)
- [ ] Run every test and record whether it passed.
- [ ] Fix anything that failed, then run your tests again.

## Step 6: Write Your README

Your README's audience is other students like you, who know some Python. Write in professional language: this is the main piece that will represent your project.

- [ ] Create a file called `README.md` in your repository.
- [ ] **About the Project:** what your project does and the problem it solves, with one of your videos of it in action.
- [ ] **List of Materials:** every component someone would need.
- [ ] **How to Wire It:** written instructions with diagrams or photos.
- [ ] **How to Run Your Program:** steps written for beginners. Screenshots help!
- [ ] **What the Code Does:** comments that explain your code, either in your Python files or in your README.
- [ ] **Resources:** the title and link of every resource you used.
- [ ] Proofread your README, then open your repository on GitHub to make sure it displays correctly.
- [ ] Commit and push your final code and README.

<details>
<summary>Need help?</summary>

- The [gpiozero](https://gpiozero.readthedocs.io/en/stable/) library's 'Basic Recipes' and 'Advanced Recipes' pages have sample projects to look through.
- Look back at your earlier labs, like [Light the LED](#Pi's-and-Python/Light-the-LED-Lab), [Digital Slot Machine](#Pi's-and-Python/Digital-Slot-Machine-Lab), and [Temperature in Color](#Pi's-and-Python/Temperature-in-Color-Lab), for wiring and code you can build on.
- See [Style Guides and Great READMEs](#Software-Engineering/Style-Guides-and-Great-READMEs) for examples of strong documentation.

</details>

## Step 7: Reflect and Submit

- [ ] Answer the reflection questions, either in writing or in person:
  - [ ] Who is the audience for your product and what problem does it solve?
  - [ ] What is the biggest thing you learned from this project?
  - [ ] How will programming be relevant to your life moving forward?
- [ ] Attach your GitHub repository to Google Classroom.
- [ ] ✋ Demonstrate your working project to your instructor in class.
- [ ] ✋ Walk your instructor through your repository and README.
