// Q3 – Monthly Expense Tracker
"use strict";

const expenses = [
  { category: "Food", amount: 6500 },
  { category: "Travel", amount: 2200 },
  { category: "Rent", amount: 12000 },
  { category: "Bills", amount: 1800 },
  { category: "Leisure", amount: 1500 }
];

let totalExpenses = 0;
for (const expense of expenses) {
  totalExpenses += expense.amount; // Assignment operator accumulates category amounts.
}
const averageExpense = totalExpenses / expenses.length;
const tax = totalExpenses * 0.10;
const finalAmount = totalExpenses + tax;

console.log("===== MONTHLY EXPENSE REPORT =====");
console.table(expenses);
console.log(`Total: ₹${totalExpenses.toFixed(2)}`);
console.log(`Average: ₹${averageExpense.toFixed(2)}`);
console.log(`Tax (10%): ₹${tax.toFixed(2)}`);
console.log(`Final after tax: ₹${finalAmount.toFixed(2)}`);
