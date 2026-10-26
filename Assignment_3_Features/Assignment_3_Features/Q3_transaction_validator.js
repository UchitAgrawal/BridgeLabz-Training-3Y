"use strict";

/*
Q3 – Transaction Validator
Custom error classes make errors easy to categorize.
Debug: add a breakpoint at the start of the loop; watch transaction, valid, invalid.
*/

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

class NegativeAmountError extends Error {
  constructor(message) { super(message); this.name = "NegativeAmountError"; }
}
class MissingFieldError extends Error {
  constructor(message) { super(message); this.name = "MissingFieldError"; }
}
class NullTransactionError extends Error {
  constructor(message) { super(message); this.name = "NullTransactionError"; }
}

const valid = [];
const invalid = [];

for (const transaction of transactions) {
  try {
    if (transaction === null) throw new NullTransactionError("Transaction entry is null.");
    if (transaction.id === undefined || transaction.amount === undefined) {
      throw new MissingFieldError("Transaction must contain both id and amount.");
    }
    if (typeof transaction.amount !== "number" || !Number.isFinite(transaction.amount)) {
      throw new TypeError("Amount must be a finite number.");
    }
    if (transaction.amount < 0) throw new NegativeAmountError("Amount cannot be negative.");

    valid.push(transaction);
    console.log(`VALID: transaction ${transaction.id}, amount ${transaction.amount}`);
  } catch (error) {
    invalid.push({ transaction, type: error.name, message: error.message });
    console.log(`INVALID: ${error.name} — ${error.message}`);
  }
}

console.log("\n===== TRANSACTION REPORT =====");
console.log(`Successful: ${valid.length}`);
console.log(`Failed: ${invalid.length}`);
console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
