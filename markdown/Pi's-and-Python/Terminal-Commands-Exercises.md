# Terminal Commands Exercises

## Exercise 1

What command do you use to display your current location (the path of the directory you are currently in) within the filesystem?

<details>
<summary>Click here to view the answer</summary>

`pwd` (Print Working Directory)

</details>

## Exercise 2

How do you list all files and directories in your current location, including the hidden ones?

<details>
<summary>Click here to view the answer</summary>

`ls -a` (or `ls -al` for a long, detailed list)

</details>

## Exercise 3

What command would you use to create a new directory named `project_files`?

<details>
<summary>Click here to view the answer</summary>

`mkdir project_files`

</details>

## Exercise 4

Assuming you are in your home directory, what command do you use to navigate into the newly created `project_files` directory?

<details>
<summary>Click here to view the answer</summary>

`cd project_files`

</details>

## Exercise 5

How do you quickly create an empty file named `notes.txt`?

<details>
<summary>Click here to view the answer</summary>

`touch notes.txt`

</details>

## Exercise 6

What command would you use to copy `notes.txt` and create a duplicate file named `backup.txt` in the same directory?

<details>
<summary>Click here to view the answer</summary>

`cp notes.txt backup.txt`

</details>

## Exercise 7

You realized `notes.txt` is a bad name. What command do you use to rename `notetxt` to `readme.txt`?

<details>
<summary>Click here to view the answer</summary>

`mv notes.txt readme.txt`

</details>

# Exercise 8

You no longer need `backup.txt`. What command do you use to permanently delete it?

<details>
<summary>Click here to view the answer</summary>

`rm backup.txt`

</details>

## Exercise 9

How do you display the entire text content of `readme.txt` directly in the terminal?

<details>
<summary>Click here to view the answer</summary>

`cat readme.txt`

</details>

## Exercise 10

Your terminal window is getting cluttered with previous commands and outputs. What command do you type to tidy it up and give yourself a blank slate?

<details>
<summary>Click here to view the answer</summary>

`clear` (You can also use the keyboard shortcut `Ctrl + L`)

</details>

Exercise 11

You want to create a new directory named reports inside a directory named `2026`, but the `2026` directory doesn't exist yet. What command do you use to create both the parent (`2026`) and child (`reports`) directories at the exact same time without getting an error?

<details>
<summary>Click here to view the answer</summary>

`mkdir -p 2026/reports` or `mkdir 2026 && cd 2026 && mkdir reports`

(The `-p` or `--parents` flag tells the terminal to create any necessary parent directories that don't already exist.)

</details>