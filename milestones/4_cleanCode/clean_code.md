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

---

# Handling Errors and Edge Cases

## Research

### Strategies for handling errors and edge cases in code (including Guard Clauses)

Proper error handling and edge case management are essential for building reliable software. Key strategies include:

1. Guard Clauses (Early Returns)
   - Validate inputs at the beginning of functions
   - Return early or throw errors for invalid conditions
   - Reduces nesting and improves readability
   - Example: Check for null/undefined before processing

2. Input Validation
   - Validate all function parameters before use
   - Check data types, ranges, and formats
   - Fail fast with clear error messages
   - Use type checking in dynamically typed languages

3. Try-Catch Blocks
   - Wrap risky operations that might throw errors
   - Catch specific error types when possible
   - Provide meaningful error messages
   - Clean up resources in finally blocks

4. Default Values and Fallbacks
   - Provide sensible defaults for optional parameters
   - Use nullish coalescing or logical OR operators
   - Ensure the application continues functioning when possible

5. Error Objects and Custom Exceptions
   - Create descriptive error messages
   - Include context about what went wrong
   - Use custom error classes for different error types

6. Boundary Checking
   - Check array bounds before accessing elements
   - Validate numeric ranges (min/max values)
   - Handle empty collections gracefully

7. Null/Undefined Handling
   - Use optional chaining (?.) for safe property access
   - Check for null/undefined before operations
   - Consider using null object pattern

8. Graceful Degradation
   - Provide alternative functionality when features fail
   - Log errors for debugging while maintaining user experience
   - Return partial results when complete results aren't available

## Task

1. Find an existing function that does not properly handle errors or invalid inputs

Original function with poor error handling:

```javascript
function calculateDiscount(price, discountPercent, customerType) {
  let discount = price * (discountPercent / 100);
  
  if (customerType === "premium") {
    discount = discount * 1.5;
  }
  
  return price - discount;
}

function getUser(userId) {
  const user = database.find(userId);
  return user.email.toLowerCase();
}

function divideNumbers(a, b) {
  return a / b;
}

function processArray(items) {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i].value;
  }
  return total;
}
```

2. Refactor the function to improve error handling

Refactored with proper error handling:

```javascript
function calculateDiscount(price, discountPercent, customerType) {
  // Guard clauses for input validation
  if (typeof price !== 'number' || price < 0) {
    throw new Error('Price must be a non-negative number');
  }
  
  if (typeof discountPercent !== 'number' || discountPercent < 0 || discountPercent > 100) {
    throw new Error('Discount percent must be between 0 and 100');
  }
  
  if (!customerType) {
    throw new Error('Customer type is required');
  }
  
  let discount = price * (discountPercent / 100);
  
  // Validate customer type
  const validCustomerTypes = ['regular', 'premium', 'vip'];
  if (!validCustomerTypes.includes(customerType)) {
    throw new Error(`Invalid customer type. Must be one of: ${validCustomerTypes.join(', ')}`);
  }
  
  if (customerType === "premium") {
    discount = discount * 1.5;
  }
  
  const finalPrice = price - discount;
  return Math.max(0, finalPrice); // Ensure non-negative result
}

function getUser(userId) {
  // Guard clause for null/undefined userId
  if (!userId) {
    throw new Error('User ID is required');
  }
  
  const user = database.find(userId);
  
  // Guard clause for user not found
  if (!user) {
    throw new Error(`User with ID ${userId} not found`);
  }
  
  // Guard clause for missing email
  if (!user.email) {
    throw new Error('User email is missing');
  }
  
  return user.email.toLowerCase();
}

function divideNumbers(a, b) {
  // Guard clauses for input validation
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  
  if (!isFinite(a) || !isFinite(b)) {
    throw new Error('Arguments must be finite numbers');
  }
  
  // Guard clause for division by zero
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  
  return a / b;
}

function processArray(items) {
  // Guard clause for null/undefined array
  if (!items) {
    throw new Error('Items array is required');
  }
  
  // Guard clause for non-array input
  if (!Array.isArray(items)) {
    throw new Error('Items must be an array');
  }
  
  // Handle empty array
  if (items.length === 0) {
    return 0;
  }
  
  let total = 0;
  
  // Fixed: use < instead of <= to avoid out-of-bounds access
  for (let i = 0; i < items.length; i++) {
    // Guard clause for missing items
    if (!items[i]) {
      console.warn(`Skipping null/undefined item at index ${i}`);
      continue;
    }
    
    // Guard clause for missing value property
    if (typeof items[i].value !== 'number') {
      console.warn(`Skipping item at index ${i}: value is not a number`);
      continue;
    }
    
    total += items[i].value;
  }
  
  return total;
}
```

## Reflection

### What was the issue of the original code

The original code had multiple critical issues:

1. No input validation: Functions accepted any input without checking types, ranges, or validity
2. Unsafe property access: Accessed properties (user.email) without checking if the object exists
3. Division by zero: divideNumbers didn't prevent division by zero errors
4. Array boundary error: Loop used <= instead of <, causing out-of-bounds access
5. No null checks: Didn't handle null or undefined values
6. Missing error messages: When failures occurred, there was no context about what went wrong
7. Silent failures: Some issues would cause runtime crashes instead of providing helpful feedback
8. Invalid customer types: calculateDiscount accepted any string without validation

These issues would lead to cryptic error messages, application crashes, and difficult debugging.

### How does handling errors improve reliability

Proper error handling improves reliability in several ways:

1. Fail Fast Principle: Errors are caught immediately at the source, making them easier to diagnose and fix
2. Predictable Behavior: Functions consistently handle edge cases rather than producing undefined behavior
3. Better User Experience: Clear error messages help users understand what went wrong and how to fix it
4. Easier Debugging: Descriptive errors pinpoint exactly where and why failures occur
5. Prevents Cascading Failures: Early validation stops bad data from propagating through the system
6. Data Integrity: Validation ensures only valid data is processed, maintaining system consistency
7. Security: Input validation prevents malicious data from exploiting vulnerabilities
8. Maintainability: Clear error handling makes code intentions explicit and easier to understand

By anticipating and handling errors proactively, we create more resilient applications that users can depend on.