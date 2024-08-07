function countTotalSalary(employees) {
  let totalSalary = 0;

  for (const name in employees) {
    totalSalary += employees[name];
  }

  return totalSalary;
}
const employees = {
  ann: 5000,
  david: 6000,
  helen: 4000,
  lorence: 7000,
};
console.log(`Загальна зарплата - ${countTotalSalary(employees)}`);
