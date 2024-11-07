//main.js

// Students write their code between these lines.
//
// Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
//
// Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
//
// Stuents should carefully read the test cases for the correct output.
//

// Mock Data
let balance = 5000;
const transactionHistory = [
  "Deposited 10000 into Savings Account",
  "Withdrawn 5000 from Savings Account",
];

function getBalance() {
  return balance;
}

function deposit(amount) {
  balance += amount;
  addTransactionHistory("d", amount);
}

function withdraw(amount) {
  balance -= amount;
  addTransactionHistory("w", amount);
}

function addTransactionHistory(method, amount) {
  if (method === "d")
    transactionHistory.push(`Deposited ${amount} into Savings Account`);
  else transactionHistory.push(`Withdrawn ${amount} from Savings Account`);
}

function getTransactionHistory() {
  console.log("Transaction History");
  for (let i = 0; i < transactionHistory.length; i++) {
    console.log(`${i + 1}) ${transactionHistory[i]}`);
  }
}

// Instructor's test cases
// ===== ===== ===== ===== =====

console.log(getBalance());
// Expected Output: 5000

deposit(4000);
console.log(getBalance());
// Expected Output: 9000

withdraw(3000);
console.log(getBalance());
// Expected Output: 6000

console.log(getTransactionHistory());
/* Expected Output:

Transaction History
1) Deposited 10000 into Savings Account
2) Withdrawn 5000 from Savings Account
3) Deposited 4000 into Savings Account
4) Withdrawn 3000 from Savings Account

*/
