# Currency Translator Lab

*This assignment is under construction and is subject to change for the 26-27 school year.* 


## Objective
1. Use Python to convert between different currencies using current rates
2. Use Git and GitHub to track version control and hosting your 
3. Use pytest to write unit tests for your methods
4. Automate your tests using GitHub Actions
5. Document your project with a detailed README


## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| unit test | a test unique to a small portion of a program, like a method, to verify it for correctness |
| CI/CD | stands for Continuous Integration and Continuous Delivery. It automates building, testing, and deploying code changes | 
| GitHub Actions | a native CI/CD platform integrated directly into GitHub | 
| `pytest` | a robust and widely used Python testing framework designed to simplify writing small, readable tests while scaling to support complex functional testing |
| fixture | a value that exists across multiple `pytest` methods | 
| edge cases | a problem or situation that occurs only at an extreme maximum or minimum operating parameter |
| workflow | in GitHub Actions,  a workflow is a configurable automated process that will run one or more jobs, for example `pytest` |
| YAML | stands for Yet Another Markup Language. We use YAML to define workflows in GitHub Actions |

## Your Task

Your task is to create a program to convert between different currencies.

1. In a file, `currency.py`, define the class `CurrencyConverter`. It will have one constructor with one parameter, a dictionary of currencies. A sample one is provided below.

```
exchange_rates = {
    "USD": 1.0,
    "EUR": 0.92,
    "GBP": 0.78,
    "JPY": 150.50,
    "INR": 83.30
}
```
2. This class will contain two instance methods:
    - `convert(self, amount, from_currency, to_currency)`: this returns a double with two decimal places representing the converted price. This should prevent you from trying to convert negative money and other disallowed states.
    - `add_rate(self, currency, rate)`: this returns nothing, but adds a rate to the dictionary. 

3. To test, try initializing your class and using it with the sample dictionary provided.

## Unit Testing

You will create unit tests for your project. 

1. First, make sure `pytest` is installed on your machine with: `pip install pytest`.
2. `pytest` automatically discovers tests by looking for files that start with `test_`. Create a new file in the same directory named `test_currency.py`
3. To avoid creating the sample dictionary and instantiating the CurrencyConverter in every single test, we will use a **fixture**.

```python
import pytest
from currency import CurrencyConverter

@pytest.fixture
def converter():
    exchange_rates = {
        "USD": 1.0,
        "EUR": 0.92,
        "GBP": 0.78,
        "JPY": 150.50,
        "INR": 83.30
    }
    return CurrencyConverter(exchange_rates)
```

4. Now, let's test the successful execution of your two instance methods. We will use the `assert` keyword to verify the math is correct and that the dictionary updates properly. Add the following tests to the testing files:

```python

def test_convert_to_base_currency(converter):
    # Tests converting EUR to USD (100 / 0.92 * 1.0 = 108.6956...)
    result = converter.convert(100, "EUR", "USD")
    assert result == 108.70

def test_convert_between_non_base_currencies(converter):
    # Tests converting GBP to JPY (100 / 0.78 * 150.50 = 19294.871...)
    result = converter.convert(100, "GBP", "JPY")
    assert result == 19294.87

def test_add_rate(converter):
    # Tests adding a new currency (CAD) and using it
    converter.add_rate("CAD", 1.36)
    
    # Verify it exists by converting USD to CAD
    assert converter.convert(100, "USD", "CAD") == 136.00
```

5. To run your test, use the command `pytest` in the terminal. To see the names of each passing test, use `pytest -v` instead.

6. Now, go back and make your tests more robust. Make sure they are testing each possible case of each method. Think about **edge-cases** like off-by-ones or empty variables.

## CI/CD with GitHub Actions

Now, you will automate your `pytest` tests with GitHub Actions. **Note: you will need to create a tutorial for setting up automated testing for this project so be sure to take notes and screenshots during this process.** 

1. Before setting up GitHub Actions, your two files need to be committed and pushed to a repository on GitHub.
2. GitHub Actions looks for a very specific folder structure to find your automated workflows.
    - In the root directory of your project (where your Python files are), create a folder named exactly `.github` (notice the period at the beginning).
    - Inside the `.github` folder, create another folder named `workflows`.
3. Workflows are written in YAML (Yet Another Markup Language). Inside the `.github/workflows` folder, create a new file named `run-tests.yml`.
4. Open `run-tests.yml` and paste the following code. This configuration tells GitHub exactly when and how to run your tests.

```yaml
# .github/workflows/run-tests.yml

name: Python Unit Tests

# This tells GitHub to run the workflow when code is pushed to the 'main' branch,
# or when a Pull Request is opened against the 'main' branch.
on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  test:
    # This specifies the operating system for the virtual machine running your code
    runs-on: ubuntu-latest

    steps:
    # Step 1: Check out your repository's code onto the runner
    - name: Check out repository code
      uses: actions/checkout@v4

    # Step 2: Set up the Python environment
    - name: Set up Python
      uses: actions/setup-python@v5
      with:
        python-version: "3.11" # You can change this to match your local version

    # Step 3: Install pytest (and any other requirements)
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install pytest
        # If you add a requirements.txt later, you would uncomment the line below:
        # pip install -r requirements.txt

    # Step 4: Execute the tests
    - name: Run tests with pytest
      run: |
        pytest -v
```

5. Now that your workflow file is created, you need to push it to your repository to activate it.  Use our traditional git command sequence. 

6. Once you push the code, GitHub will immediately detect the workflow file and start running your tests. To verify, 
    - Open your web browser and navigate to your repository on GitHub.
    - Click on the "Actions" tab near the top of the page.
    - You will see a workflow run in progress (or already completed).
    - Click on that run, and then click on the "test" job on the left sidebar to see the terminal output. You will see the familiar green pytest output showing that your tests passed successfully on GitHub's servers.

From now on, whenever you push changes to your `CurrencyConverter` class or add new tests, GitHub Actions will automatically verify that nothing is broken. Try adding a new test and check your work.

## README documentation

Before uploading, create a new document called `README.md` in your project folder. Here, you will write a technical document to explain how to use your program. Review these [principles of effective documentation](#Workforce-Readiness/Technical-Writing-Notes) from last semester. Please include the following sections:

1. Header and short description
2. A outline of your class (think about using a UML diagram here)
3. How to use with sample code
4. Automated testing walkthrough

Make sure you are effectively using structure, visuals, and professional language as you write.


## Tips, Tricks, and Resources

- [GitHub Actions for Python](https://docs.github.com/en/actions/tutorials/build-and-test-code/python)
- [pytest GitHub Actions Example](https://github.com/ericsalesdeandrade/pytest-github-actions-example)

## Extensions

1. Raise errors due to illegal states and test them using `pytest.raises`.

## Reflection Questions
1. What are three qualities of effective unit tests? Do your tests fulfill these qualities?
2. Explain the importance of the `assert` keyword in a unit test.
3. If you wanted to run your automatic tests with a different version of Python, how would you change it?
4. Do some research into how to use `requirements.txt` within GitHub Actions. What is its purpose and how do you use it?
5. What are three qualities of effective documentation? Does your documentation fulfill these qualities?

## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person

## Rubric
- **20 points** - All required items are present.
- **15 points** - Task was completed, but supplementary materials are weak or missing.
- **10 points** - Task was attempted, but is missing major components.
- **0 points** - Task was not attempted to 50% completion or student should reattempt.
