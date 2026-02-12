# Writing Unit Tests for Clean Code

## Research

### Importance of unit testing in software development

Unit testing is a vital process in order to ensure code quality and reliability. It involves rigorous testing that helps identify bugs and errors early on.

## Task

1. Choose a testing framework

   For this test, I utilized Jest.

2. Write a few unit tests

   I created a test file as shown in the image below or refer to mathOp.js and mathOp.test.js files:

   ![alt text](docs/image.png)
   ![alt text](docs/image_2.png)

   I tried running the test and it shows that my code works based on the tests deployed.

   ![alt text](docs/image_3.png)

## Reflection

### How do unit tests help keep code clean

Unit tests help keep code clean by:

1. Encouraging modular design: Writing testable code naturally leads to smaller, focused functions with single responsibilities
2. Documenting behavior: Tests serve as living documentation showing how functions should be used and what they should return
3. Preventing regressions: Tests catch bugs early when refactoring or adding features, ensuring code remains clean and functional
4. Enforcing good practices: The need to write tests pushes developers to avoid code smells like tight coupling and unclear naming
5. Building confidence: With tests in place, developers can refactor and improve code quality without fear of breaking functionality

### What issues did you find while testing

While testing the mathOp functions, I encountered an issue with the file path in the require statement. Initially, I used backslashes and an absolute path (`require('jest\project\mathOp.js')`), which is incorrect in JavaScript. I learned that:

- Require statements need relative paths starting with `./` or `../`
- Forward slashes should be used instead of backslashes to avoid escape character issues
- The correct path from `jest/test/mathOp.test.js` to `jest/project/mathOp.js` is `../project/mathOp.js`

This issue helped me understand the importance of proper module paths in Node.js and Jest testing environments. 

---

# Commenting and Documentation

## Research

### Best practices for writing comments and documentation

Effective comments and documentation enhance code maintainability without cluttering the codebase. Best practices include:

1. Code should be self-explanatory about what it does; comments should explain why decisions were made
2. Keep comments updated. Outdated comments are worse than no comments; update them when code changes
3. Use clear naming over comments
4.  Always document functions that will be used by others, including parameters, return values, and examples
5. Use TODO/FIXME appropriately
6. Don't restate what the code obviously does
7. Write documentation at the right level such as: High-level overview in README files, detailed API docs in code, inline comments only when necessary

## Task

1. Find an example of poorly commented code and rewrite the comments to be more useful

Poorly commented code:

```javascript
// This function calculates
function calc(x, y, z) {
  // Add x and y
  let a = x + y;
  // Divide by z
  let b = a / z;
  // Return the result
  return b;
}

// Loop through array
for (let i = 0; i < users.length; i++) {
  // Check if active
  if (users[i].active) {
    // Do something
    processUser(users[i]);
  }
}

// Magic number for discount
const discount = 0.15;
```

Rewritten with better comments and improved code:

```javascript
/**
 * Calculates the average of two numbers.
 * Used for computing mean temperature readings from two sensors.
 * 
 * @param {number} value1 - First temperature reading in Celsius
 * @param {number} value2 - Second temperature reading in Celsius
 * @param {number} count - Number of readings (typically 2)
 * @returns {number} Average temperature in Celsius
 */
function calculateAverage(value1, value2, count) {
  const sum = value1 + value2;
  const average = sum / count;
  return average;
}

// Process only active users eligible for the monthly newsletter
for (let i = 0; i < users.length; i++) {
  if (users[i].active) {
    processUser(users[i]);
  }
}

// 15% loyalty discount for customers with 1+ year membership
const LOYALTY_DISCOUNT_RATE = 0.15;
```

## Reflection

### When should you add comments

Comments should be added when:

1. Explaining complex algorithms.
2. Documenting business rules.
3. Warning about things such as non-obvious side effects, edge cases, or potential pitfalls
4. Explaining why a particular approach was chosen over alternatives for specific reasons
5. Legal or licensing requirements.
6. there are Public API documentation.
7. When temporary solutions exist that need future attention
8. When code behavior depends on external systems, APIs, or configurations

### When should you avoid comments and instead improve the code

Avoid comments and refactor the code when and if there are:

1. Obvious statements
2. Commented-out code
3. Outdated information
4. Complex expressions
5. Long functions
6. Magic numbers
7. Unclear logic