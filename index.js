const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger; // вычислилась сумма a и b
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger; // на основе sum вычисляется бонус,макс значение бонуса 50
  return bonus;
};
calculateBonus(2, 3);
