//main.js

class NumberChecker {
  constructor() {}

  checkIsValidInput(input) {
    return parseInt(input) ? true : false;
  }

  // Polymorphic function to check if numbers are odd or even
  checkOddEven(input) {
    // Write function description
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv

    if (Array.isArray(input)) {
      return input.map((num) => {
        if (!this.checkIsValidInput(num)) {
          return "Invalid input";
        }
        return num % 2 === 0 ? "Even" : "Odd";
      });
    }

    if (!this.checkIsValidInput(input)) {
      return "Invalid input";
    }

    return input % 2 === 0 ? "Even" : "Odd";

    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
  }
}

// Instructor's test cases
// ===== ===== ===== ===== =====

const numberChecker = new NumberChecker();

console.log(numberChecker.checkOddEven(5));
// Expected Output: Odd
console.log(numberChecker.checkOddEven(10));
// Expected Output: Even
console.log(numberChecker.checkOddEven([3, 5, 7, 10]));
// Expected Output: ['Odd', 'Odd', 'Odd', 'Even']
console.log(numberChecker.checkOddEven("Hello"));
// Expected Output: Invalid input
