const { add, isEven } = require('../project/mathOp');

describe('add function', () => {
  test('adds two positive numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds negative numbers correctly', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('adds a positive and negative number correctly', () => {
    expect(add(5, -3)).toBe(2);
  });
});

describe('isEven function', () => {
  test('returns true for even numbers', () => {
    expect(isEven(4)).toBe(true);
  });

  test('returns false for odd numbers', () => {
    expect(isEven(5)).toBe(false);
  });
});
