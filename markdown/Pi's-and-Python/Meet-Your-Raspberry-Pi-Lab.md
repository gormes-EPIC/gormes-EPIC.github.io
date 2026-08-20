# Meet Your Raspberry Pi Lab

## Objective

1. Install an operating system and set up your Raspberry Pi
2. Identify all the important components of a Raspberry Pi
3. Create a virtual Python environment for your Pi
4. Upload documents to GitHub using the browser

## Your Task

Set up your Raspberry Pi and create a diagram describing each of its components.

## Materials

- Raspberry Pi kit(Pi, power cord, microSD card) - *this will be your kit for the semester*
- External Keyboard - *please return at the end of class*
- External Mouse - *please return at the end of class*
- Micro HDMI to HDMI cable
- USB to SD card reader
- Raspberry Pi Imager - *this should be installed already on your framework*
- The bin that matches your computer number


## Setting Up Your Pi Operating System

1. Follow [these steps](https://www.raspberrypi.com/documentation/computers/getting-started.html#setting-up-your-raspberry-pi) to get your Raspberry Pi set up 
2. When complete, you should get to the Pi's desktop
3. You should use the same username as your user account on your laptop for simplicity. If you need to write down your login information so you don't forget it, **please do that**.
4. Once you get into your Pi, run `sudo apt update` and `sudo apt upgrade` to update your Pi.
5. Install VS Code with `sudo apt install code`. 
6. Once you are sure all of the hardware works, you are ready to move on to Part 2. Check in with your instructor that your Pi is working before moving on.

_Every day that you use your Raspberry Pi, you are responsible for cleaning up all the components before you leave. This includes putting away the supplies you are using into your bin and returning all unused supplies to the shelves in the back._  

## Documenting your Raspberry Pi

1. Take a good quality picture of your Raspberry Pi from the top down
2. Using Google Drawings or Google Slides or another similar program, label all of the components of your Pi. Make sure you label all of the parts in the image below.
<img src="/assets/meet-your-raspberry-pi-demo.png">

3. Create an PDF to elaborate on each component and it's purpose
4. You may want to consult the [official Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/)

## Creating a Virtual Environment for Python

1. In order to install Python packages on your Pi, we will need to create **a virtual Python environment**. Sensors for the Pi require you to install third party Python packages that may interfere with each other. Creating a virtual environment allows you to easily revert to a clean version of Python in case that happens. Your Pi will give you a warning if you try to install packages not in a virtual environment and you will get the following error: 

```
error: externally-managed-environment

× This environment is externally managed
╰─> To install Python packages system-wide, try apt install
    python3-xyz, where xyz is the package you are trying to
    install.

    If you wish to install a non-Debian-packaged Python package,
    create a virtual environment using python3 -m venv path/to/venv.
    Then use path/to/venv/bin/python and path/to/venv/bin/pip. Make
    sure you have python3-full installed.

    If you wish to install a non-Debian packaged Python application,
    it may be easiest to use pipx install xyz, which will manage a
    virtual environment for you. Make sure you have pipx installed.

    See /usr/share/doc/python3.11/README.venv for more information.

note: If you believe this is a mistake, please contact your Python installation or OS distribution provider. You can override this, at the risk of breaking your Python installation or OS, by passing --break-system-packages.
hint: See PEP 668 for the detailed specification.
```

2. Open your terminal and create a new folder for your Python scripts for this class. This can be anywhere on the Pi.
3. Change directory into your new directory.
4. Install the `venv` program with `sudo apt install python3-venv`
5. Then, create a new virtual environment with `python3 -m venv venv --system-site-packages`. Now there should be a folder called `venv` inside your directory.
6. To activate your virtual environment, use: `source venv/bin/activate`. **You will need to do this every time you open the terminal so you may want to write this down. Remember to cd into the correct directory before trying to activate your environment.** 
	1. Optional: If you installed VS Code you can change your Python version in the application to your virtual environment. If you are having trouble with this please ask for help or see this [documentation](https://code.visualstudio.com/docs/python/environments).
7. Try installing a package with `pip` for example `pip install cowsay` to test your set up. If set up correctly, this package should install without issue.


## Uploading to GitHub

1. Once you are all done, we are going to practice submitting documents by uploading them to GitHub. **You will need your phone for this to use two factor authentication.**

2. **Option 1(GUI):** Login to GitHub and create a new repository(this is like a folder in Google Drive). Then, click the `Add File` button next to the green `Code` button on the right side of the screen. Then, select your PDF to upload. Then click the `Commit` *button to upload. Once you can see your PDF in the list of files at the top, you have uploaded it correctly. You can click on the PDF to view it in the browser. Then, return to Google Classroom and select "Mark as Done".
3. **Option 2(Terminal):** Login to GitHub and create a new repository(this is like a folder in Google Drive). Then, open the terminal and navigate to where you saved your PDF. Clone your repo(make a local copy of it) with `git clone <url>`. The URL can be found under the green "Code" button. 
    1. Then login to GitHub using the terminal with `gh auth login`. Use the arrow keys to select GitHub.com and press Enter. Select HTTPS as your preferred protocol. When asked how you want to authenticate, select Paste an authentication token. Open your GitHub site and navigate to the Settings and then the Developer Settings. Then click on Personal Access Token and Classic Token. Create a new token by naming it, select a expiration date, then checking the box for `repo` permissions. Copy your token and paste it back into your terminal and press Enter.
    2. Now, cd into the directory you just cloned. Then move your PDF into this folder. 
    3. Then to upload: use `git add .` to stage your changes, `git commit -m "message"` to commit them and `git push -u origin main` to push your changes to GitHub. In the future you will only need to use `git push` to push.


## Tips, Tricks, and Resources
- [Setting Up Your Raspberry Pi](https://www.raspberrypi.com/documentation/computers/getting-started.html#setting-up-your-raspberry-pi)
- [Official Raspberry Pi Docs](https://www.raspberrypi.com/documentation/)
- [venv documentation](https://code.visualstudio.com/docs/python/environments)

## Reflection Questions
1. What does GPIO stand for and what is its purpose?
2. What does CPU stand for and what is its purpose?
3. What does RAM stand for and what is its purpose?

## How to Submit

Show your instructor your GitHub repository with your PDF. You also need to be able to idenify important parts of your Pi and answer the reflection questions.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.