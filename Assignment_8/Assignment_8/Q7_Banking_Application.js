// Q7 - Banking Application (Private Class Field)

class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative.");
        }
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0) {
            throw new Error("Deposit amount must be a positive number.");
        }

        this.#balance += amount;
        console.log(`Deposited Rs. ${amount}.`);
    }

    withdraw(amount) {
        if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0) {
            throw new Error("Withdrawal amount must be a positive number.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance. Withdrawal declined.");
        }

        this.#balance -= amount;
        console.log(`Withdrawn Rs. ${amount}.`);
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);

account.deposit(500);
console.log("Current balance: Rs.", account.getBalance());

try {
    account.withdraw(300);
    console.log("Current balance: Rs.", account.getBalance());

    account.withdraw(2000); // Invalid: amount exceeds available balance.
} catch (error) {
    console.log(`Transaction failed: ${error.message}`);
}

console.log("Final balance: Rs.", account.getBalance());

// account.#balance is intentionally inaccessible outside the class.
