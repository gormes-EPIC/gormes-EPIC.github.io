# Terminal Commands Notes

| Command | Description | 
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