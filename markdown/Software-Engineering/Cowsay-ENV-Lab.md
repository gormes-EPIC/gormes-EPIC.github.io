# Cowsay [ENV] Lab

## Objective

1. Install `conda` and set up a `conda` environment
2. Understand the purpose of environments when using Python
3. Set up, use, and understand the purpose of environment variables  
4. Install packages using `pip`


## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| `conda` environment | an isolated workspace that allows you to manage specific versions of software and their dependencies independently for different projects |
| environment variable | a user-definable value that can affect the way running processes will behave on a computer |


## Your Task

In this assignment, you will create a script to make a cow echo an environment variable in the terminal.

For example,

```
 _____________
< hello world >
 -------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
                
```

where "hello world" is stored in an environment variable. 


## Installing `conda`

To get started, we are going to set up `conda` on your machine. `conda` allows you to create environments which are separate from each other so you can maintain different versions of Python with different packages installed on the same machine. This program allows you to quickly switch between different named Python versions on your machine. 

1. Use [this guide](https://www.anaconda.com/docs/getting-started/miniconda/install/linux-install) to install Miniconda on your machine. You should see the `(base)` appear before your username if you open up a new terminal. This represents your base `conda` environment.
2. To create a new environment, use `conda create -n <NAME> python=<VERSION NUMBER>`. 
3. Then use `conda activate <NAME>` to activate it. The name of you environment should now appear in the terminal instead of "base". To exit back to your original environment, use `conda deactivate`. 

Every Python package you install inside a `conda` environment only exists within that environment. So if you install something in base, it will not automatically exist in any other environment. This allows you to create environments specific to specific applications.  

## Using `pip`

You should be familiar with `pip` or the [package installer for Python](https://pypi.org/). This program allows you to easily install Python packages listed on the Python Package Index. 

1. Install `cowsay` with `pip install cowsay`.
2. Here is the [pip entry for cowsay](https://pypi.org/project/cowsay/). Use the starter code provided to create a cow in the terminal that says "hello world" 

## Environment Variables

An **environment variable** is a user-definable value that can affect the way running processes will behave on a computer. We can use environment variables to store information on our machine an access it from any subprocess, like a Python program. 

1. To create a permanent environment variable edit the file `nano ~/.bashrc` and add `export MY_GLOBAL_VAR="system_value"` to the bottom. Then run `source ~/.bashrc` to add them to your current session. This will create a new environment variable called "MY_GLOBAL_VAR" (typically environment variables are in all caps) with the value "system_value". **You'll need to log out or reboot for this to take effect.**
2. Then, print the contents of your variable with `echo $MY_GLOBAL_VAR`. 

### Accessing Environment Variables with Python

To access an environment variable from Python we use the `os` library. 

1. Create a new Python script for this lab.
2. Import the `os` library and use `value = os.environ.get("MY_GLOBAL_VAR")` to get the value of your environment variable like this:
```python
import os

value = os.environ.get("MY_GLOBAL_VAR")
print(value)

``` 
3. Modify your cowsay program to print the contents of your environment variable instead of "hello world". 

## Unit Testing

Because we are printing out information and not using functions, we will skip the unit testing for this lab. 

## README

Before uploading, create a new document called `README.md` in your project folder. Here, you will write a technical document to explain how to use your program. Review these [principles of effective documentation](#Workforce-Readiness/Technical-Writing-Notes) from last semester. Please include the following sections:

1. Header and short description
2. How to use environment variables
3. How to install `cowsay` using pip

Make sure you are effectively using structure, visuals, and professional language as you write.

## Tips, Tricks, and Resources

- [pip entry for cowsay](https://pypi.org/project/cowsay/)

## Extensions

1. Add additional functionality to override the environment variable if a message is passed in via CLI (shown below). You will need to use the `sys.args` list and the `os.environ.get()` function. 

```
$ python cow.py
# uses ENV var if available

$ python cow.py "custom message"
# overrides ENV var
```


## Reflection Questions
1. How could environment variables help us make our code more secure?
2. What is the difference between using an environment variable or a `.gitignore` file? Why would you use one over the other? 
3. What is the purpose of using a `conda` environment? Give some examples of when it would be appropriate to use one.


## How to Submit

Show your instructor your GitHub repository with your code and your commit history.  Demostrate your program working with the environment variables. Answer the reflection questions. When you are all done, upload your GitHub link to Google Classroom and hit submit.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.