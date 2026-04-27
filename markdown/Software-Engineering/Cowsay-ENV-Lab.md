# Cowsay [ENV] Lab
This assignment is under construction and is subject to change for the 26-27 school year.* 


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

1. To create a permanent environment variable edit the file `sudo nano /etc/environment` and add `MY_GLOBAL_VAR="system_value"` to the bottom. This will create a new environment variable called "MY_GLOBAL_VAR" (typically environment variables are in all caps) with the value "system_value". **You'll need to log out or reboot for this to take effect.**
2. Then, print the contents of your variable with `echo $MY_GLOBAL_VAR`. 

### Accessing Environment Variables with Python

To access an environment variable from Python we use the `os` library. 

1. Create a new Python script for this lab.
2. Import the `os` library and use `os.environ['KEY']` to get the value of your environment variable like this:
```python
import os

value = os.environ['MY_GLOBAL_VAR']
print(value)

``` 
3. Modify your cowsay program to print the contents of your environment variable instead of "hello world". 


## Unit Testing with `requirements.txt`

## README

## Tips, Tricks, and Resources

- 
## Extensions

1. 
## Reflection Questions
1. How could environment variables help us make our code more secure?


## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person

## Rubric
- **20 points** - All required items are present.
- **15 points** - Task was completed, but supplementary materials are weak or missing.
- **10 points** - Task was attempted, but is missing major components.
- **0 points** - Task was not attempted to 50% completion or student should reattempt.
