# Creating an API Lab

## Objectives
1. Design an Flask API for your PostgreSQL database
2. Write effective documentation using Markdown

## Your Task

In this lab, you will create a Flask API as an interface for your database. Refer to the [Flask Notes](#Software-Engineering/Flask-Notes). 

Using the SQL queries you wrote in the [Database Implementation Lab](#Software-Engineering/Database-Implementation-Lab), create an API that executes each query and returns the results as a JSON. You need API calls for **all of your use cases**. In the section below, we will talk about how to make sure only authorized users are able to send certain calls. You may also want to create certain API calls that are useful for the debugging process.

Using the `requests` library, make sure that you are getting the appropriate responses for your API. 

## Using `Flask-Login` for Credentialing

To protect certain calls to different types of users, we will use [Flask-Login](https://flask-login.readthedocs.io/en/latest/).



## Documentation

We will create a `github.io` site to host the documentation for your program. This site needs three sections. Use [this repo]() as a template for your site.

As part of a README for your project, you will also add documentation from your API.

Use the examples below as inspiration for your documentation