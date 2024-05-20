#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
    },
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
// For conversion first we need to convert the amount to USD base currency
// Then we can convert the USD base currency to the desired currency
let baseAmount = amount / fromAmount; // USD Base Currency
let convertedAmount = baseAmount * toAmount; // Desired Currency
console.log(convertedAmount);
