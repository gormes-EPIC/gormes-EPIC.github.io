# cron Jobs Lab

## Objective

1. Learn how to schedule and automate recurring tasks on Linux using **cron**.

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| `cron`      | A time-based job scheduler built into Linux |
| `crontab`   | The file that stores a user's scheduled cron jobs |
| `crontab -e`   | Opens the crontab file for editing |
| `crontab -l`   | Lists the current user's scheduled cron jobs |
| `* * * * *`   | The five-field cron time syntax: minute, hour, day of month, month, day of week |
| `@reboot`   | A special cron schedule that runs a job once at startup |
| `wall`   | Sends a message to all logged-in users' terminals |
| `>>`   | Appends output to a file instead of overwriting it |
| `date`   | Prints or formats the current date and time |
| `cron log`   | The system log (often `/var/log/syslog` or via `grep CRON`) used to confirm a job ran |

## Your Task

Your task is to write and test **five cron jobs** on your Raspberry Pi. For each job, document the crontab line you used and evidence that it worked (a screenshot of the output file, log, or terminal message).

1. A cron job that appends the current date/time to a text file every minute
2. A job that logs CPU temperature every 10 minutes to build a simple temperature log
3. A "boot logger" using `@reboot` that records every time the Pi restarts
4. A "daily greeting" job that uses `wall` 15 minutes into class
5. A job that automatically pulls a repo from GitHub every 5 minutes

## Getting Started

Let's walk through the first two jobs together. You'll figure out the remaining three on your own using what you learn here.

### Job 1: Append the date/time to a file every minute

1. Open a terminal on your Raspberry Pi.
2. Open your crontab for editing:
```
crontab -e
```
3. If this is your first time, you may be asked to choose an editor. (Hint: you probably want `nano`) 
4. Scroll to the bottom of the file and add the following line:
```
* * * * * date >> /home/pi/date_log.txt
```
   - The five `*` symbols mean "every minute, every hour, every day, every month, every day of the week."
   - `date` prints the current date and time.
   - `>>` appends that output to `date_log.txt` instead of overwriting it.
5. Save and exit (`CTRL-O`, `Enter`, then `CTRL-X` in nano).
6. Wait a couple of minutes, then check the file:
```
cat /home/pi/date_log.txt
```
7. You should see a new timestamp added every minute. Take a screenshot showing at least two entries a minute apart.

### Job 2: Log CPU temperature every 10 minutes

1. First, find the command that reports your Pi's CPU temperature. Try:
```
vcgencmd measure_temp
```
2. Open your crontab again:
```
crontab -e
```
3. Add a line that runs this command every 10 minutes and appends the result to a log file. Think about the cron time syntax from Job 1 — which field do you need to change to mean "every 10 minutes" instead of "every minute"?
```
*/10 * * * * vcgencmd measure_temp >> /home/pi/temp_log.txt
```
   - `*/10` in the minutes field means "every 10 minutes."
4. Save and exit, then wait at least 10–20 minutes.
5. Check your log:
```
cat /home/pi/temp_log.txt
```
6. You should see temperature readings spaced 10 minutes apart. Screenshot the result.

## Now It's Your Turn

Using the same process — figuring out the right command, the right cron time syntax, and where to send the output — complete the remaining three jobs:

3. **Boot logger**: Use the `@reboot` schedule to append a timestamp (and maybe a message like "Pi rebooted") to a log file every time the Pi starts up. You'll need to actually reboot your Pi to test this one.
4. **Daily greeting**: Schedule a `wall` command to run once, 15 minutes after class starts, sending a greeting message to all logged-in users. You'll need to figure out the exact minute and hour fields for your class time.
5. **Auto-pull from GitHub**: Schedule a job that runs every 5 minutes and pulls the latest changes from a GitHub repository on your Pi. Think about what command updates a local repo from GitHub, and whether you need to `cd` into the repo's directory first.

*Note: You are allowed to look up the syntax for individual commands (like `git pull` or `wall`) but try to reason through the cron scheduling yourself before searching for the exact answer.*

## Tips, Tricks, and Resources
- Use `crontab -l` at any time to review all the jobs you've scheduled.
- If a job doesn't seem to be running, check the system log with `grep CRON /var/log/syslog` to see if cron even attempted to run it.
- Cron jobs run with a minimal environment, so commands that work fine in your terminal may fail in cron — try using full file paths (e.g. `/usr/bin/git` instead of `git`).
- For the GitHub job, remember that `git pull` only works inside a folder that is already a cloned git repository.

## Extensions
1. Modify your temperature logger to also record the date/time next to each reading, so you can graph temperature over time.
2. Write a cron job that automatically deletes log entries older than 7 days.

## Reflection Questions
1. What do each of the five fields in a cron time expression represent?
2. Why might a command that works when you type it directly into the terminal fail when run by cron?
3. What is the difference between `>` and `>>` when redirecting output to a file?
4. How did you handle any obstacles or difficulties you encountered? Can you think of alternative approaches you might try next time?

## How to Submit

Call over your instructor and walk them through your five cron jobs. Show your crontab (`crontab -l`) and the evidence (log files, screenshots, or a live demonstration) that each job ran successfully. Then answer all of the reflection questions verbally.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.