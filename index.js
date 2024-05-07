const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger; // forced stop of the script
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger; // forced stop of the script
  return bonus;
};
calculateBonus(2, 3);
