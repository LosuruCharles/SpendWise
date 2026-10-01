# SpendWise
SpendWise
SpendWise is a budgeting web application that helps users track their spending. This stage of the project adds a JavaScript foundation, so SpendWise can now collect budgeting information from the user, process it, and report the results instead of only displaying a visual layout.

What the Project Does

When the page loads, SpendWise:

Asks the user for their name and monthly budget.
Asks how much they spent on food, transport and other items.
Calculates their total expenses, remaining balance and the percentage of the budget spent.
Tells the user whether they are within budget or over budget.
Prints a clearly labeled summary to the browser console.
How to Run
Make sure index.html and script.js are in the same folder.
Confirm index.html includes this line just before the closing </body> tag:
html
   <script src="script.js"></script>
Open index.html in a browser.
Answer the prompts that appear.
Press F12 and open the Console tab to see the results.

**JavaScript concepts implemented**
Linking an external JavaScript file to an HTML page
Variables (let and const)
Data types (strings, numbers and booleans)
User input with prompt()
Type conversion with Number()
Input validation using conditionals (if / else if / else)
Arithmetic calculations
Reusable functions with parameters and return values
String concatenation
Console output with console.log() 
**How Variables Are Used**
Variables store the data SpendWise works with.
Variable	Type	Purpose
appName	  string (const)	Name of the app, used in prompts and output
currency	string (const)	Currency label shown with amounts
userName	string	The user's name
monthlyBudget	number	The user's total monthly budget
foodExpense, transportExpense, otherExpense	number	Spending in each category
totalExpenses	number	Sum of all expenses
remainingBalance	number	Budget minus total expenses
isOverBudget	boolean	true if spending is greater than the budget

Values that never change (appName, currency) are declared with const. Values that change as the user provides input are declared with let.

**How user input is collected**

SpendWise uses the browser's prompt() function to ask the user questions. The answers are stored in the variables above.

Because prompt() always returns text, the getNumberInput() function converts the answer to a number using Number(). It then checks whether the input is valid. If the user cancels the prompt, leaves it blank, types something that is not a number or enters a negative value, the function shows a warning in the console and uses 0 instead. This prevents invalid input from breaking the calculations.

The name prompt works similarly: if the user leaves it empty, the name defaults to "Guest".

**How Calculations Are Performed**

All calculations use the numbers collected from the user:

Total expenses = food + transport + rent + entertainment + utilities +savings
Remaining balance = monthly budget − total expenses
Percentage spent = (total expenses ÷ monthly budget) × 100
Over budget check = whether the remaining balance is less than 0

The percentage calculation first checks that the budget is not 0, which avoids dividing by zero. The remaining balance is also used to choose a status message: over budget, entire budget used or within budget.

**How functions help organize the code**

The program logic is split into small functions that each do one job. This keeps the code readable, avoids repetition and makes each part easy to test or change.

Function	responsibility
getNumberInput(message)	Prompts the user and returns a validated number
calculateTotalExpenses(food, transport, rent, utilities, savings, entertainment)	Adds the expense categories together
calculateRemainingBalance(budget, expenses)	Returns the balance left after spending
calculatePercentageSpent(budget, expenses)	Returns the share of the budget spent
getBudgetStatus(balance)	Returns a status message based on the balance
formatMoney(amount)	Formats a number as an amount with the currency and two decimals
displayResults()	Prints the full labeled summary to the console
runSpendWise()	Runs the whole flow: input, calculations, and output

The calculation functions take values as parameters and return a result, so they can be reused with different numbers. runSpendWise() is called once at the bottom of the file to start the application.


