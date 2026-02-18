# Identifying and Fixing Code Smells

## Research

### Common Code smells and how they impact code quality

Code smells are indicators of potential problems in source code that may not be bugs but suggest deeper issues with design, maintainability, or readability. They make code harder to understand, modify, and debug.

- Magic Numbers/Strings: Makes code unclear; values lack context; changes require hunting through code
- Long Functions: Difficult to understand, test, and maintain; violates Single Responsibility Principle
- Duplicate Code: Increases maintenance burden; bugs must be fixed in multiple places; inconsistencies arise
- Large Classes (God Objects): Too many responsibilities; hard to test; tightly coupled; difficult to modify
- Deeply Nested Conditionals: Hard to read and follow logic; increases cognitive load; error-prone
- Commented-Out Code: Clutters codebase; creates confusion; version control handles history
- Inconsistent Naming: Reduces readability; causes confusion; makes searching difficult

## Tasks

### Find or write code examples that demonstrate the following code smells

#### 1. Magic Numbers and Strings

Bad Code (with smell):
```typescript
function calculateDiscount(price: number): number {
  if (price > 100) {
    return price * 0.15;
  }
  return price * 0.05;
}

function validateUser(role: string): boolean {
  return role === "adm" || role === "superuser";
}
```

Refactored Code:
```typescript
const DISCOUNT_THRESHOLD = 100;
const HIGH_DISCOUNT_RATE = 0.15;
const LOW_DISCOUNT_RATE = 0.05;

const UserRoles = {
  ADMIN: "adm",
  SUPERUSER: "superuser",
} as const;

function calculateDiscount(price: number): number {
  if (price > DISCOUNT_THRESHOLD) {
    return price * HIGH_DISCOUNT_RATE;
  }
  return price * LOW_DISCOUNT_RATE;
}

function validateUser(role: string): boolean {
  return role === UserRoles.ADMIN || role === UserRoles.SUPERUSER;
}
```

---

#### 2. Long Functions

Bad Code (with smell):
```typescript
function processOrder(order: Order): void {
  // Validate order
  if (!order.items || order.items.length === 0) {
    throw new Error("Order has no items");
  }
  if (!order.customer) {
    throw new Error("Order has no customer");
  }
  if (!order.customer.email) {
    throw new Error("Customer has no email");
  }
  
  // Calculate totals
  let subtotal = 0;
  for (const item of order.items) {
    subtotal += item.price * item.quantity;
  }
  let tax = subtotal * 0.1;
  let shipping = subtotal > 100 ? 0 : 10;
  let total = subtotal + tax + shipping;
  
  // Save to database
  database.save({ ...order, subtotal, tax, shipping, total });
  
  // Send confirmation email
  emailService.send({
    to: order.customer.email,
    subject: "Order Confirmation",
    body: `Your order total is $${total}`,
  });
  
  // Log the transaction
  logger.log(`Order processed: ${order.id}, Total: ${total}`);
}
```

Refactored Code:
```typescript
function processOrder(order: Order): void {
  validateOrder(order);
  const totals = calculateTotals(order.items);
  saveOrder(order, totals);
  sendConfirmationEmail(order.customer.email, totals.total);
  logTransaction(order.id, totals.total);
}

function validateOrder(order: Order): void {
  if (!order.items?.length) throw new Error("Order has no items");
  if (!order.customer) throw new Error("Order has no customer");
  if (!order.customer.email) throw new Error("Customer has no email");
}

function calculateTotals(items: OrderItem[]): OrderTotals {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * TAX_RATE;
  const shipping = subtotal > FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  return { subtotal, tax, shipping, total: subtotal + tax + shipping };
}

function saveOrder(order: Order, totals: OrderTotals): void {
  database.save({ ...order, ...totals });
}

function sendConfirmationEmail(email: string, total: number): void {
  emailService.send({
    to: email,
    subject: "Order Confirmation",
    body: `Your order total is $${total}`,
  });
}

function logTransaction(orderId: string, total: number): void {
  logger.log(`Order processed: ${orderId}, Total: ${total}`);
}
```

---

#### 3. Duplicate Code

Bad Code (with smell):
```typescript
function getActiveUsers(): User[] {
  const users = database.query("SELECT * FROM users");
  const result: User[] = [];
  for (const user of users) {
    if (user.status === "active") {
      result.push({ id: user.id, name: user.name, email: user.email });
    }
  }
  return result;
}

function getPremiumUsers(): User[] {
  const users = database.query("SELECT * FROM users");
  const result: User[] = [];
  for (const user of users) {
    if (user.plan === "premium") {
      result.push({ id: user.id, name: user.name, email: user.email });
    }
  }
  return result;
}
```

Refactored Code:
```typescript
function getFilteredUsers(predicate: (user: User) => boolean): User[] {
  const users = database.query("SELECT * FROM users");
  return users
    .filter(predicate)
    .map(({ id, name, email }) => ({ id, name, email }));
}

function getActiveUsers(): User[] {
  return getFilteredUsers((user) => user.status === "active");
}

function getPremiumUsers(): User[] {
  return getFilteredUsers((user) => user.plan === "premium");
}
```

---

#### 4. Large Classes (God Objects)

Bad Code (with smell):
```typescript
class UserManager {
  // User CRUD
  createUser(data: UserData): User { /* ... */ }
  updateUser(id: string, data: UserData): User { /* ... */ }
  deleteUser(id: string): void { /* ... */ }
  getUser(id: string): User { /* ... */ }
  
  // Authentication
  login(email: string, password: string): Token { /* ... */ }
  logout(token: string): void { /* ... */ }
  resetPassword(email: string): void { /* ... */ }
  
  // Email
  sendWelcomeEmail(user: User): void { /* ... */ }
  sendPasswordResetEmail(user: User): void { /* ... */ }
  
  // Validation
  validateEmail(email: string): boolean { /* ... */ }
  validatePassword(password: string): boolean { /* ... */ }
  
  // Reporting
  generateUserReport(): Report { /* ... */ }
  exportUsersToCSV(): string { /* ... */ }
}
```

Refactored Code:
```typescript
class UserRepository {
  create(data: UserData): User { /* ... */ }
  update(id: string, data: UserData): User { /* ... */ }
  delete(id: string): void { /* ... */ }
  findById(id: string): User { /* ... */ }
}

class AuthenticationService {
  constructor(private userRepo: UserRepository) {}
  login(email: string, password: string): Token { /* ... */ }
  logout(token: string): void { /* ... */ }
  resetPassword(email: string): void { /* ... */ }
}

class UserEmailService {
  sendWelcomeEmail(user: User): void { /* ... */ }
  sendPasswordResetEmail(user: User): void { /* ... */ }
}

class UserValidator {
  validateEmail(email: string): boolean { /* ... */ }
  validatePassword(password: string): boolean { /* ... */ }
}

class UserReportService {
  generateReport(): Report { /* ... */ }
  exportToCSV(): string { /* ... */ }
}
```

---

#### 5. Deeply Nested Conditionals

Bad Code (with smell):
```typescript
function processPayment(user: User, payment: Payment): Result {
  if (user) {
    if (user.isActive) {
      if (payment) {
        if (payment.amount > 0) {
          if (user.balance >= payment.amount) {
            if (payment.method === "card" || payment.method === "bank") {
              // Process payment
              return { success: true };
            } else {
              return { success: false, error: "Invalid payment method" };
            }
          } else {
            return { success: false, error: "Insufficient balance" };
          }
        } else {
          return { success: false, error: "Invalid amount" };
        }
      } else {
        return { success: false, error: "No payment data" };
      }
    } else {
      return { success: false, error: "User inactive" };
    }
  } else {
    return { success: false, error: "No user" };
  }
}
```

Refactored Code (using early returns/guard clauses):
```typescript
function processPayment(user: User, payment: Payment): Result {
  if (!user) {
    return { success: false, error: "No user" };
  }
  if (!user.isActive) {
    return { success: false, error: "User inactive" };
  }
  if (!payment) {
    return { success: false, error: "No payment data" };
  }
  if (payment.amount <= 0) {
    return { success: false, error: "Invalid amount" };
  }
  if (user.balance < payment.amount) {
    return { success: false, error: "Insufficient balance" };
  }
  if (!isValidPaymentMethod(payment.method)) {
    return { success: false, error: "Invalid payment method" };
  }

  // Process payment
  return { success: true };
}

function isValidPaymentMethod(method: string): boolean {
  return ["card", "bank"].includes(method);
}
```

---

#### 6. Commented-Out Code

Bad Code (with smell):
```typescript
function calculatePrice(product: Product): number {
  let price = product.basePrice;
  
  // Old discount logic - don't delete, might need later
  // if (product.category === "electronics") {
  //   price = price * 0.9;
  // }
  // if (product.onSale) {
  //   price = price * 0.85;
  // }
  
  // New discount logic
  price = applyDiscounts(price, product);
  
  // TODO: Remove after testing
  // console.log("Price calculated:", price);
  // debugger;
  
  return price;
}
```

Refactored Code:
```typescript
function calculatePrice(product: Product): number {
  const price = product.basePrice;
  return applyDiscounts(price, product);
}

// Note: Old discount logic is preserved in git history (commit abc123)
// if needed for reference
```

---

#### 7. Inconsistent Naming

Bad Code (with smell):
```typescript
class userAccount {
  userName: string;
  USER_EMAIL: string;
  Pwd: string;
  
  GetUser(): User { /* ... */ }
  update_profile(Data: ProfileData): void { /* ... */ }
  check_active(): boolean { /* ... */ }
  VALIDATE(): boolean { /* ... */ }
}

const UsrList: User[] = [];
const active_users = [];
let TotalCount = 0;
```

Refactored Code:
```typescript
class UserAccount {
  username: string;
  email: string;
  password: string;
  
  getUser(): User { /* ... */ }
  updateProfile(data: ProfileData): void { /* ... */ }
  isActive(): boolean { /* ... */ }
  validate(): boolean { /* ... */ }
}

const userList: User[] = [];
const activeUsers: User[] = [];
let totalCount = 0;
```

---

### Refactor the code to eliminate these code smells

See the refactored examples above for each code smell. Key refactoring techniques used:

| Technique | Applied To |
|-----------|------------|
| Extract constants | Magic numbers/strings |
| Extract method | Long functions |
| Extract common function with parameters | Duplicate code |
| Single Responsibility Principle | Large classes |
| Guard clauses / early returns | Nested conditionals |
| Delete and trust version control | Commented-out code |
| Consistent naming conventions | Inconsistent naming |

## Reflection

### What code smells did you find in your code?

The code smells I find in my code from previous developments were inconsistent naming conventions. I often confuse myself with the convention I am using throughout the process of developing the system. I also found out that I tend to delete commented functions that does not have any use in my system. 

### How did refactoring improve the readability and maintainability of the code?

Refactoring improved the code in several ways:
1. Readability: Named constants explain what values mean; smaller functions have clear purposes; consistent naming makes scanning code easier
2. Maintainability: Changes only need to be made in one place; classes have single responsibilities making them easier to modify; flat conditionals are easier to update
3. Testability: Smaller, focused functions are easier to unit test in isolation
4. Reusability: Extracted functions and classes can be reused across the codebase

### How can avoiding code smells make future debugging easier?

Avoiding code smells makes debugging easier by:
1. Localization: Small, focused functions mean bugs are contained to specific areas
2. Traceability: Clear naming makes it obvious where to look for issues
3. Reproducibility: Well-structured code is easier to write tests for, catching bugs earlier
4. Comprehension: Clean code is faster to understand when investigating issues
5. Isolation: Separated concerns mean changes in one area don't unexpectedly break others
6. Clarity: No commented-out code or magic values to cause confusion during debugging
