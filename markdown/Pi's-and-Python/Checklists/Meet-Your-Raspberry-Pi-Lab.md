# Meet Your Raspberry Pi Lab: Checklist

> **The goal:** set up your Raspberry Pi, label and explain its parts in a PDF, create a Python virtual environment, and upload your PDF to GitHub.

## Step 1: Gather Your Materials

- [ ] The bin that matches your computer number
- [ ] Raspberry Pi kit: Pi, power cord, and microSD card. *This is your kit for the semester.*
- [ ] External keyboard. *Return it at the end of class.*
- [ ] External mouse. *Return it at the end of class.*
- [ ] Micro HDMI to HDMI cable
- [ ] USB to SD card reader
- [ ] Raspberry Pi Imager. *This should already be installed on your laptop.*

## Step 2: Set Up Your Pi's Operating System

- [ ] Follow the [official setup steps](https://www.raspberrypi.com/documentation/computers/getting-started.html#setting-up-your-raspberry-pi) to install the operating system on your microSD card with Raspberry Pi Imager.
- [ ] When it asks for a username, use the **same username as your laptop account** to keep things simple.
- [ ] Write down your username and password somewhere safe so you don't forget them.
- [ ] Put the microSD card in your Pi, connect the keyboard, mouse, and screen, then plug in the power.
- [ ] Make sure your Pi boots up to its desktop.
- [ ] Open the terminal and update your Pi:

  ```
  sudo apt update
  sudo apt upgrade -y
  ```

- [ ] Install VS Code:

  ```
  sudo apt install code
  ```

- [ ] Check that the keyboard, mouse, and screen all work.
- [ ] ✋ Check in with your instructor that your Pi is working before moving on.

> **Every day you use your Pi**, clean up before you leave. Put the supplies you're using in your bin, and return any unused supplies to the shelves in the back.

## Step 3: Document Your Pi

- [ ] Take a clear photo of your Raspberry Pi from the top down.
- [ ] In Google Drawings, Google Slides, or a similar program, label every component of your Pi. Make sure you include every part labeled in the image below.

<img src="assets/meet-your-raspberry-pi-demo.png">

- [ ] For each component, write a short explanation of what it is and what it does. The [official Raspberry Pi documentation](https://www.raspberrypi.com/documentation/) can help.
- [ ] Export your labeled diagram and explanations as a **PDF**.

## Step 4: Create a Virtual Environment for Python

Sensors for the Pi need extra Python packages, and those packages can interfere with each other. A **virtual environment** keeps them separate, so you can always go back to a clean version of Python. Without one, `pip install` gives you an `externally-managed-environment` error.

- [ ] Open your terminal and create a new folder for this class's Python scripts. It can be anywhere on your Pi.
- [ ] `cd` into your new folder.
- [ ] Install the `venv` program:

  ```
  sudo apt install python3-venv
  ```

- [ ] Create a virtual environment:

  ```
  python3 -m venv venv --system-site-packages
  ```

- [ ] Use `ls` to check that there's now a `venv` folder inside your folder.
- [ ] Activate your virtual environment:

  ```
  source venv/bin/activate
  ```

- [ ] Write down that command and your folder's location. **You'll need to `cd` into this folder and activate your environment every time you open a new terminal.**
- [ ] Test your setup by installing a package. It should install without any errors:

  ```
  pip install cowsay
  ```

- [ ] *(Optional)* In VS Code, set your Python interpreter to your virtual environment. See [the VS Code docs](https://code.visualstudio.com/docs/python/environments) or ask for help.

## Step 5: Upload Your PDF to GitHub

> You'll need your **phone** for GitHub's two-factor authentication.

- [ ] Log in to GitHub.
- [ ] Create a new repository. (A repository is like a folder in Google Drive.)
- [ ] Choose **one** way to upload your PDF:

**Option 1: In the browser**

- [ ] Click the **Add file** button next to the green **Code** button, and choose **Upload files**.
- [ ] Select your PDF.
- [ ] Click **Commit changes** to upload it.
- [ ] Check that your PDF shows up in the list of files, and click it to make sure it opens.

**Option 2: In the terminal (more challenging)**

- [ ] Copy your repository's URL from under the green **Code** button.
- [ ] In the terminal, `cd` to the folder where your PDF is saved, and clone your repository with `git clone <url>`.
- [ ] Log in to GitHub from the terminal with `gh auth login`. Choose **GitHub.com**, then **HTTPS**, then **Paste an authentication token**.
- [ ] In GitHub in your browser, go to **Settings → Developer settings → Personal access tokens → Tokens (classic)**.
- [ ] Create a new classic token: give it a name, choose an expiration date, and check the **repo** box.
- [ ] Copy the token, paste it into your terminal, and press **Enter**.
- [ ] `cd` into the folder you cloned, and move your PDF into it.
- [ ] Stage, commit, and push your PDF:

  ```
  git add .
  git commit -m "Add my Raspberry Pi diagram"
  git push -u origin main
  ```

- [ ] Check that your PDF shows up in your repository on GitHub. (Next time, just `git push` is enough.)

## Step 6: Reflect and Submit

- [ ] Answer the reflection questions:
  - [ ] What does GPIO stand for, and what is its purpose?
  - [ ] What does CPU stand for, and what is its purpose?
  - [ ] What does RAM stand for, and what is its purpose?
- [ ] In Google Classroom, select **Mark as Done**.
- [ ] ✋ Show your instructor your GitHub repository with your PDF.
- [ ] ✋ Point out the important parts of your Pi and answer the reflection questions for your instructor.
- [ ] Clean up: put your supplies in your bin and return the keyboard, mouse, and any unused supplies.
