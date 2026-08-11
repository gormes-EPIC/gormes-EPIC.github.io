# Lab: Advanced Git

<img src="/assets/advanced-git-comic.png">

## Objective
1. Use branches to separate commits for developing different features 
2. Resolve conflicting commits by merging


## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| merge | resolve two conflicting commits into a single resolved commit  |
| branch | separates your commits into their own stream. Sort of like using multiple save slots instead of overriding the same one. |

## Your Task

Your task is to work with a partner to practice resolving conflicting commits an developing projects with multiple branches.

### Repo set-up

0. Find a partner
1. On someone's computer, create a new directory called `menu-app`. Move into the directory then instantiate the git repository with `git init`. 
2. Create a new menu file called `menu.txt` that lists today's menu (appetizer, main, dessert). 
3. Use `git add .` and `git commit -m "message` to commit your work.
4. Then, create a new repository that you both have permissions to push to, then add your remote repo with `git remote add origin <URL>`. 
5. Join the main branch with `git branch -M main`
6. Then push to GitHub with `git push -u origin main`.
7. You partner should clone like normal to get the menu. 

### Create and work on a new branch

**Partner A**
1. Create a new branch called `update-main-dish` with `git checkout -b update-main-dish`
2. Edit the main dish in the menu file
3. Commit and push as normal

**Partner B**
1. We are going to create a conflicting commit on a different branch with `git checkout main`. Then, `git checkout -b update-dessert`  
2. Edit the **main dish**
3. Commit and push the branch as normal

You should now see both branches on GitHub.

### Merge both branches

**Partner A**
1. Switch to the main branch and merge you own branch
```
git checkout main
git pull origin main
git merge update-main-dish
git push origin main
```
*This should go without issue*

2. Checkout partner B's branch
```
git fetch origin
git checkout update-dessert
``` 
3. Attempt to merge partner B's into main 
```
git checkout main
git merge update-dessert
```
*This will cause a conflict*
4. View the conflict in `menu.txt`. Resolve it by removing all the markers and decide on what the final content should be. 
5. Stage and commit the resolution
```
git add menu.txt
git commit -m "Resolve main dish conflict between Partner A and Partner B changes"
```
6. Push the resolved main
```
git push origin main
```

### Sync the result
1. Partner B should see the resolved conflict with
```
git checkout main
git pull origin main
cat menu.txt
```
2. Then view the logs to see the merge `git log --oneline --graph`

## .gitignore
1. Both partners should make sure they are up to date. 
```
git checkout main
git pull origin main
```
**Partner B**
2. Create a new file `secrets.txt` with a fake API key in it like `"API_KEY=super-secret-local-key-12345"`. Then create another new file called `debug.log` with a fake log method (ex. `[DEBUG] Server started on port 3000`) in it.
3. Check your Git status with `git status`. You should see two files as having **untracked changes**.
4. Create a new file called `.gitignore`. Add the following to your `.gitignore` file.
```
# Secrets
secrets.txt

# All log files
*.log
```
5. Check your status again. Your changes should not appear as untracked! Your `.gitignore` file has prevented them from being commited/pushed. 

## Tips, Tricks, and Resources
- [Learn Git Branching Interactive](https://learngitbranching.js.org/?locale=en_US)
- [Beginner's Guide to Branching and Merging](https://dev.to/niyhi/a-beginners-guide-to-git-branching-and-merging-without-the-panic-2f07)
- [Resolving a merge conflict using the command line](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/resolving-a-merge-conflict-using-the-command-line) 


# Reflection Questions
1. What role did communication play in resolving the conflict?
2. What would happen if you'd used `git pull` instead of `git fetch` + `git merge`? Recreate the issue and try the other method.
3. How would this scale to a larger team. Imagine 10 developers all branching off main and editing the same file over the course of a week, instead of just 2. What problems could arise, and what practices might reduce the chances of conflicts like this one?
4. Why would `.gitignore` files be so important? What information should we list in our `.gitignore`?

## How to Submit

Show your instructor your GitHub repository with your code and your commit history. When you are all done, upload your GitHub link to Google Classroom and hit submit.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.