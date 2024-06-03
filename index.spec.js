const calculateBonus = require("./index");

test("sum of a and b is greater than 50", () => {
  expect(calculateBonus(100, 100)).toBe(50);
});

test("sum of a and b is equal to 50", () => {
  expect(calculateBonus(30, 20)).toBe(50);
});

test("sum of a and b is less than 50", () => {
  expect(calculateBonus(10, 20)).toBe(30);
});

test("one or both inputs are negative, but sum is less than 50", () => {
  expect(calculateBonus(-10, 20)).toBe(10);
});

test("sum of a and b is exactly zero", () => {
  expect(calculateBonus(0, 0)).toBe(0);
});
