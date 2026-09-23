# Terminal Commands Notes

<img src="/assets/terminal-notes-1.gif">

## Welcome to the Terminal

The **terminal** is a text-based interface that is used to communicate with your computer. You enter commands in the terminal and the associated program will run on your computer.

1. Once you are logged in, use `CTRL-ALT-T` to open the terminal. If you are on your home computer or a chromebook you can use [the website](https://epic-terminal.chals.io/). Here is my terminal: 

<img src="/assets/terminal-notes-2.png">


2. Look at your terminal header. It contains some important information.

<img src="/assets/terminal-notes-3.png">

- **username** - the name of the user you are currently logged into the computer as
- **hostname** - the name of the computer you are using
- **current folder** - the folder you are currently "in". By default you are in your user's home folder(`~`).

3. Type `ls` in your terminal and hit enter. You should see a *list* of all the files and folders in your current folder.

<img src="/assets/terminal-notes-4.png">

4. Type `pwd` into your terminal and hit enter. You should see the current **full path** to the folder you are in. This is a list of folders separated by slashes.

<img src="/assets/terminal-notes-5.png">

Currently, I am in the folder `epic_cs` which is in the folder `home` which is in the largest folder on the filesystem `/`. On computers, **filesystems** are made up of folders inside folders inside folders. `/` is the largest folder on the system and contains all of the data stored on your computer. All of your user's data is always in the folder `/home/<YOUR USERNAME>`; it is also called your **home folder**. Your home folder is also called `~` for short. Your home folder contains your `Documents`, `Desktop`, and `Downloads` folders. 

5. Type `cd Desktop` into your terminal and hit enter. *Make sure you capitalize Desktop!*. 

<img src="/assets/terminal-notes-6.png">

You have now "changed directories" into your `Desktop` folder. You will see your current path has been updated in your terminal header. If you list the files in this folder with `ls` you will see everything on your Desktop.


## Terminal Commands Cheat Sheet

| Command | Description | 
| --- | --- | 
|`cd <directory>`| Changes the directory to the directory listed|
|`cd ..`| Moves up one folder in the directory hierarchy|
|`~`| Represents the home directory |
|`.`|Represents your current directory|
|`ls`| Lists the files in the current directory |
|`ls -a`|Lists the files in the current directory, including hidden files(files whose name starts with `.`)|
|`touch <file>`| Creates a new file|
|`cat <file>`| Prints the contents of the file|
|`rm <file>`| Removes the file|
|`pwd`|Prints full path of the current directory. Stands for print working directory. |
|`find <path> <criteria>`| Lists files in the given path that meet the criteria. For example, `find . -name "file.txt"` looks for an exact file name in the current folder.|
|`file <options> <file>`| It performs internal tests to identify whether a file is text, an image, a compiled binary, or a zip archive.|
|`ssh username@ip_address -p <port>`|Lets you remotely control a computer. It logs into the computer at the IP with the username given on the port given. |
| `scp <file> username@ip_address:/home/username/destination_folder/` |Copies the file to the computer accessiable at the IP using the user listed in the directory listed. |
|`nano <file>`| Edits file. Press Ctrl + O to save and Ctrl + X to exit.|
|`mkdir <directory>`|Creates the directory |
|`rmdir <directory>`|Removes the directory|
|`grep "pattern" <file>` |Finds every line in the file that contains the pattern|
|`wget <url>`|Downloads the URL to the computer |
|`mv <current path> <new path>`|Moves a file from one path to another. Can be used to rename files|
|`cp <file> <new path>`|Creates a duplicate of the file at the given path|
|`gh auth login` |Logs into GitHub|
|`git clone <URL>`| Copies or "clones" the remote GitHub repository to your local computer |
|`git add .`|Stages all the changes in your current directory |
|`git commit -m "message"` |Commits your changes with the given message |
|`git push -u origin main` |Pushes to your remote repository and sets the main branch as the default |
|`git push` |Pushes your changes to your remote repository|
|`CTRL-ALT-T`|Keyboard shortcut for opening the terminal|
|`history`| Shows your terminal history |
|`man <command>`|Shows the manual for the command|
|`clear` or `CTRL-L`|Clears the screen|