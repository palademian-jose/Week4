//main.js

// Students write their code between these lines.
//
// Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
//
// Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
//
// Stuents should carefully read the test cases for the correct output.
//

// Write isPrime(num), which returns true if the number is prime and false otherwise.
function isPrime(num) {
  // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv

  // students must use polymorphic messageFormatter function to display answer
  if (typeof num !== "number" || !Number.isInteger(num)) {
    return messageFormatter("Invalid input");
  }
  return messageFormatter(num);
  // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Extend with findPrimesInRange(start, end) to return all prime numbers within a specified range.
function findPrimesInRange(range) {
  // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv

  // reuse isPrime() function here
  const start = range[0];
  const end = range[1];
  // students must use polymorphic messageFormatter function to display answer
  if (
    !Array.isArray(range) ||
    range.length !== 2 ||
    !range.every((num) => typeof num === "number" && Number.isInteger(num))
  ) {
    return messageFormatter("Invalid input");
  }

  const primes = [];
  for (let num = start; num <= end; num++) {
    if (isPrimeHelper(num)) {
      primes.push(num);
    }
  }
  return messageFormatter(range);
  // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

function isPrimeHelper(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Polymorphic messageFormatter function
function messageFormatter(input) {
  // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
  // Number type handling
  if (typeof input === "number") {
    if (input <= 1) return `${input} is NOT a prime number.`;
    return isPrimeHelper(input)
      ? `${input} is a prime number.`
      : `${input} is NOT a prime number.`;
  }

  // Array type handling
  if (Array.isArray(input)) {
    if (
      input.length !== 2 ||
      !input.every((num) => typeof num === "number" && Number.isInteger(num))
    ) {
      return "Invalid input. Please provide a valid range (array of two numbers).";
    }
    const [start, end] = input;
    const primes = [];
    for (let num = start; num <= end; num++) {
      if (isPrimeHelper(num)) primes.push(num);
    }
    return `Primes between ${start} and ${end}: [${primes.join(", ")}]`;
  }

  // String type handling
  if (typeof input === "string") {
    return "Invalid input. Please provide a number or a valid range (array of two numbers).";
  }

  // Default case
  return "Invalid input. Please provide a number or a valid range (array of two numbers).";
  // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Instructor's test cases
// ===== ===== ===== ===== =====

console.log(isPrime(2));
// Expected Output: 2 is a prime number.

console.log(isPrime(1));
// Expected Output: 1 is NOT a prime number.

console.log(isPrime(13));
// Expected Output: 13 is a prime number.

console.log(isPrime(25));
// Expected Output: 25 is NOT a prime number.

console.log(findPrimesInRange([10, 20]));
// Expected Output: Primes between 10 and 20: [11, 13, 17, 19]

console.log(findPrimesInRange([30, 50]));
// Expected Output: Primes between 30 and 50: [31, 37, 41, 43, 47]

console.log(findPrimesInRange("test"));
// Expected Output: Invalid input. Please provide a number or a valid range (array of two numbers).
