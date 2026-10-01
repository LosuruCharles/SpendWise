// SpendWise Javascript code
//1. Confirm script is linked
runSpendWise();
console.log("Welcome to SpendWise");

//2. Store application data
const appName = "SpendWise";
const currency = "KES";
let userName = "";
let monthlyBudget = 0;
let foodExpense = 0;
let transportExpense = 0;
let rentExpense = 0;
let entertainmentExpense = 0;
let savingsExpense = 0;
let utilitiesExpense = 0;
let totalExpenses = 0;
let remainingBalance = 0;
let isOverBudget = false;



//3. Collect user input
function runSpendWise() {
    userName = prompt("Please enter your name");
    monthlyBudget = getNumberInput("Hi " + userName + " Please enter your monthly budget in " + currency);
    foodExpense = getNumberInput("How much did you spend on food?");
    transportExpense = getNumberInput("How much did you spend on transport?");
    rentExpense = getNumberInput("How much did you spend on rent?");
    entertainmentExpense = getNumberInput("How much did you spend on entertainment?");
    savingsExpense = getNumberInput("How much did you save?");
    utilitiesExpense = getNumberInput("How much did you spend on utilities?");
}

//Budget calculation
totalExpenses = calculateTotalExpenses(foodExpense, transportExpense, rentExpense, entertainmentExpense, savingsExpense, utilitiesExpense);
remainingBalance = calculateRemainingBalance(monthlyBudget, totalExpenses);
isOverBudget = remainingBalance <0;


//5. Create reusable functions
//Ask user for a number
function getNumberInput(message){
    const answer = prompt(message);
    const value = Number(answer);
    if (answer === null || answer.trim() === "" || isNan(value) || value < 0) {
        console.warn("Invalid input for: \"" + message + "\". Using 0 instead.");
        return 0;
    }
    return value;
}

// Add up all expenses
function calculateTotalExpenses(food, transport, rent, entertainment, savings, utilities) {
    return food + transport + rent + entertainment + savings + utilities;
}

//Budget minus expenses/Remaining balance
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

//% of budget spent
function calculatePercentageSpent(expenses, budget) {
    if (budget === 0) {
        return 0;
    }
    return (expenses / budget) * 100;
}
//Status message based on budget
function getBudgetStatus(balance) {
    if (balance < 0) {
        return "Over budget! You have overspent";
    } else if (balance === 0) {
        return "You have used entire budget.";
    } else {
        return "Within budget. Keep it up!";
    }
}
//format a number as money
function formatMoney(amount) {
    return currency + " " + amount.toFixed(2);
}

//Print all results to the console
function displayResults() {
    console.log("=================");
    console.log(appName + " - Budget Summary");
    console.log("=================");
    console.log("User: " + userName);
    console.log("Monthly Budget: " + formatMoney(monthlyBudget));
    console.log
    console.log("Food Expenses: " + formatMoney(foodExpense));
    console.log("Transport Expenses: " + formatMoney(transportExpense));
    console.log("Rent Expenses: " + formatMoney(rentExpense));
    console.log("Entertainment Expenses: " + formatMoney(entertainmentExpense));
    console.log("Savings: " + formatMoney(savingsExpense));
    console.log("Utilities Expenses: " + formatMoney(utilitiesExpense));  
    console.log("-----------------");
    console.log("Total Expenses: " + formatMoney(totalExpenses));
    console.log("Remaining Balance: " + formatMoney(remainingBalance));
    console.log("Percentage of Budget Spent: " + calculatePercentageSpent(totalExpenses, monthlyBudget).toFixed(2) + "%");
    console.log("Budget Status: " + getBudgetStatus(remainingBalance));
    console.log
}

//6. Display results
displayResults();

