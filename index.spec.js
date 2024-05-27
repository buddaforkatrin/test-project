const calculateBonus = require("./index");

test("sum of a and b is greater than 50", () => {
  expect(calculateBonus(30, 25)).toBe(50);
  expect(calculateBonus(50, 1)).toBe(50);
  expect(calculateBonus(100, 100)).toBe(50);
});

test("sum of a and b is equal to 50", () => {
  expect(calculateBonus(25, 25)).toBe(50);
  expect(calculateBonus(30, 20)).toBe(50);
});

test("sum of a and b is less than 50", () => {
  expect(calculateBonus(10, 20)).toBe(30);
  expect(calculateBonus(0, 0)).toBe(0);
  expect(calculateBonus(15, 10)).toBe(25);
  expect(calculateBonus(-10, 30)).toBe(20);
});

test("one or both inputs are negative, but sum is less than 50", () => {
  expect(calculateBonus(-10, 20)).toBe(10);
  expect(calculateBonus(-25, 40)).toBe(15);
  expect(calculateBonus(-50, 50)).toBe(0);
});

test("sum of a and b is exactly zero", () => {
  expect(calculateBonus(0, 0)).toBe(0);
  expect(calculateBonus(25, -25)).toBe(0);
  expect(calculateBonus(-50, 50)).toBe(0);
});
