# Setting up AI Tools for Development

## Task

### Research and Install AI coding assistant
1. GitHub Copilot - installed
2. ChatGPT - installed
3. Claude AI - installed

---
### Experiment using AI for development
#### Generate Code Snippets (from ChatGPT):
This program calculates the missing side of a right triangle using the Pythagorean theorem.

```c
#include <stdio.h>
#include <math.h>

int main() {
    int choice;
    double a, b, c;

    printf("Pythagorean Theorem Calculator\n");
    printf("1 - Solve for hypotenuse (c)\n");
    printf("2 - Solve for side a\n");
    printf("3 - Solve for side b\n");
    printf("Choose an option: ");
    scanf("%d", &choice);

    if (choice == 1) {
        printf("Enter side a: ");
        scanf("%lf", &a);
        printf("Enter side b: ");
        scanf("%lf", &b);

        c = sqrt(a * a + b * b);
        printf("Hypotenuse (c) = %.2f\n", c);

    } else if (choice == 2) {
        printf("Enter hypotenuse c: ");
        scanf("%lf", &c);
        printf("Enter side b: ");
        scanf("%lf", &b);

        a = sqrt(c * c - b * b);
        printf("Side a = %.2f\n", a);

    } else if (choice == 3) {
        printf("Enter hypotenuse c: ");
        scanf("%lf", &c);
        printf("Enter side a: ");
        scanf("%lf", &a);

        b = sqrt(c * c - a * a);
        printf("Side b = %.2f\n", b);

    } else {
        printf("Invalid choice.\n");
    }

    return 0;
}
```

---
### Use AI for debugging a simple problem:
#### Buggy Code
The following program is supposed to calculate the square of a number, but it produces incorrect results.
```c
#include <stdio.h>

int main() {
    int num = 5;
    int square;

    square = num ^ 2;   // supposed to square the number

    printf("Square: %d\n", square);

    return 0;
}
```
#### Problem Identified by AI
The `^` operator does not perform exponentiation in C, it is a bitwise XOR operator. This causes incorrect output.

---
### AI explanations for new concept I am learning:
#### My Question:
What is the difference between using SPI and UART?

#### AI Explanation:
SPI and UART are communication protocols used to transfer data between devices, but they serve different purposes.
UART (Universal Asynchronous Receiver/Transmitter) is a simple, asynchronous, point-to-point protocol that uses transmit and receive lines. It is easy to set up and commonly used for serial communication between two devices, such as debugging or module connections.
SPI (Serial Peripheral Interface) is a fast, synchronous protocol that uses a shared clock and multiple data lines. It allows one master device to communicate with multiple peripherals and is suited for high-speed data transfer.

Key Differences
Feature | UART | SPI
--------|------|-----
Clock | No shared clock | Shared clock
Speed | Moderate | High
Wiring | Simple | More wires
Devices | Two devices | Multiple devices

In short, UART is simpler and best for direct device communication, while SPI is faster and better for connecting multiple peripherals.

---
### Which AI tools did you try?
I have tried out GitHub Copilot, ChatGPT, and Claude AI. Even before, I have been utilizing these tools to aid me in my activities, most especially encountering a problem I cannot solve even with extensive research. 

---
### What worked well? What didn't
AI provides usefull insights and helps me conveniently manage my time in doing tasks. However, there are times that you really have to double check and cross check the data they provided because whenever I try to analyze their data, there are times that it is inaccurate and would require research using verified sources like journals and published texts.

---
### When do you think AI is most useful for coding?
Getting the fundamentals in coding is a must for all developers. AI is handly in terms of formatting your code based on your logic and improving it. It is also useful for interpreting the intention of a developer for its code. It’s also a valuable tool for explaining complex concepts, breaking them down into simpler and more understandable terms


