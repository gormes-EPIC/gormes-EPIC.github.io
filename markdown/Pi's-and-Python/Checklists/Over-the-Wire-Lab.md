# Over the Wire Lab: Checklist

> **The goal:** beat levels 0 through 5 of the **bandit** wargame by finding the password for each next level, up to the password for level 6, and document how you got through each one.

<img src="assets/bandit-header.png">

## Step 1: Get Ready

- [ ] Open a document where you'll record your solutions.
- [ ] Open the [bandit](https://overthewire.org/wargames/bandit/) website.
- [ ] Review the commands from the vocabulary table: `cd`, `ls`, `pwd`, `cat`, `man`, `file`, `find`, `du`, and `grep`. You'll need to research each one a little deeper to beat the levels.
- [ ] Make sure you're connected to the **EPIC CS** wifi.
- [ ] Open your terminal. Try **Ctrl + Alt + T** as a shortcut.

> **Please don't look up walkthroughs.** They exist online, but they'll take away your learning and the satisfaction of figuring it out yourself. Use the hints on each level's page and the `man` pages instead.

## Step 2: Level 0

- [ ] Read the [Level 0 page](https://overthewire.org/wargames/bandit/bandit0.html).
- [ ] Log in with `ssh`. The username is **bandit0** and the password is **bandit0**:

  ```
  ssh bandit0@bandit.labs.overthewire.org -p 2220
  ```

- [ ] Record the command you used to log in, in your solutions document.

## Step 3: Beat Each Level

For **every** level below:
1. Read the level's page for the goal and the suggested commands.
2. Use the terminal to find the password for the next level.
3. Document the commands you used, with screenshots or by copying the commands and their output.
4. Type `exit` to log out, then `ssh` in as the next user (`bandit1`, `bandit2`, and so on) with the password you found.

- [ ] [Level 0 → Level 1](https://overthewire.org/wargames/bandit/bandit1.html): password found and documented.
- [ ] Logged in as **bandit1**.
- [ ] [Level 1 → Level 2](https://overthewire.org/wargames/bandit/bandit2.html): password found and documented.
- [ ] Logged in as **bandit2**.
- [ ] [Level 2 → Level 3](https://overthewire.org/wargames/bandit/bandit3.html): password found and documented.
- [ ] Logged in as **bandit3**.
- [ ] [Level 3 → Level 4](https://overthewire.org/wargames/bandit/bandit4.html): password found and documented.
- [ ] Logged in as **bandit4**.
- [ ] [Level 4 → Level 5](https://overthewire.org/wargames/bandit/bandit5.html): password found and documented.
- [ ] Logged in as **bandit5**.
- [ ] [Level 5 → Level 6](https://overthewire.org/wargames/bandit/bandit6.html): password found and documented. 🎉

<details>
<summary>Stuck on a level?</summary>

- Read the level's page again, especially the **commands you may need** list.
- Use `man <command>` to read the manual for any command, like `man find`. Press **q** to quit the manual.
- For a complete overview of Linux terminal commands, see [The Linux Command Line book](https://wiki.lib.sun.ac.za/images/c/ca/TLCL-13.07.pdf) by William E. Shotts, Jr.

</details>

## Step 4: Reflect and Submit

- [ ] Prepare your answers to the reflection questions. You'll answer them out loud:
  - [ ] What is SSH and why is it used?
  - [ ] What is a "hidden file" and how do you make one?
  - [ ] If you wanted to know your current directory using terminal commands, what would you use?
  - [ ] How did you handle any obstacles or difficulties? Can you think of other approaches you might try next time?
- [ ] ✋ Call over your instructor and walk them through your solutions, either in the terminal or with your screenshots.
- [ ] ✋ Answer the reflection questions out loud for your instructor.

## Extension (Optional)

- [ ] Keep going up to level 10 of bandit, or beat the first 5 levels of another wargame like [Leviathan](https://overthewire.org/wargames/leviathan/) or [Narnia](https://overthewire.org/wargames/narnia/).
