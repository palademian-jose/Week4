//main.js;

class SimpleCalculator {
  constructor() {}
  // Polymorphic function to perform arithmetic calculations

  add(num1, num2) {
    return num1 + num2;
  }

  substract(num1, num2) {
    return num1 - num2;
  }

  divide(num1, num2) {
    if (num2 === 0) return "Cannot divide by zero";
    return Math.floor(num1 / num2);
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  modulus(num1, num2) {
    return Math.floor(num1 % num2);
  }

  calculate(operation, num1, num2) {
    // Write function description
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    const operations = ["add", "subtract", "multiply", "divide", "modulus"];
    if (!operations.includes(operation)) {
      return "Invalid operation";
    }

    if (isNaN(num1) || isNaN(num2)) {
      return "Invalid input: num1 and num2 must be numbers";
    }

    switch (operation) {
      case "add":
        return this.add(num1, num2);
      case "subtract":
        return this.substract(num1, num2);
      case "multiply":
        return this.multiply(num1, num2);
      case "divide":
        return this.divide(num1, num2);
      case "modulus":
        return this.modulus(num1, num2);
    }

    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
  }
}

// Instructor's test cases
// ===== ===== ===== ===== =====

const calculator = new SimpleCalculator();

console.log(calculator.calculate("add", 5, 3));
// Expected Output: 8
console.log(calculator.calculate("subtract", 10, 4));
// Expected Output: 6
console.log(calculator.calculate("multiply", 6, 7));
// Expected Output: 42
console.log(calculator.calculate("divide", 8, 2));
// Expected Output: 4
console.log(calculator.calculate("divide", 9, 2));
// Expected Output: 4
console.log(calculator.calculate("divide", 8, 0));
// Expected Output: Cannot divide by zero
console.log(calculator.calculate("modulus", 8, 3));
// Expected Output: 2
console.log(calculator.calculate("add", 5, "three"));
// Expected Output: Invalid input: num1 and num2 must be numbers
