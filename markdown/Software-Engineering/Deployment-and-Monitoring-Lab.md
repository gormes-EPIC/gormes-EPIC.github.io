# Deployment and Monitoring Lab


# Objective

# Vocabulary

# Your Task

- ping your RPi
- Clone a flask server on it, then set it up to run on boot with cron
```
#!/usr/bin/env python3
"""
A simple Flask web server.

Run it, then open http://localhost:5000 in your browser.
"""

from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello! This is a simple Flask web server."

if __name__ == "__main__":
    app.run(debug=True, port=5000)
```
- nmap it 
- creating a URL checker with requests
```
import requests

urls = [
    "https://www.google.com",
    "https://www.github.com",
    "https://this-domain-does-not-exist-xyz123.com",
]

for url in urls:
    try:
        response = requests.get(url)
        print(url, "-> UP, status code:", response.status_code)
    except:
        print(url, "-> DOWN")
```
