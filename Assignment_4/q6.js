// Q6: Employee Management System (Classes + Object Methods)

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // Monthly salary
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += this.salary * percent / 100;
  }
}

const employees = [
  new Employee(1, "Aarav", "IT", 45000),
  new Employee(2, "Diya", "HR", 35000),
  new Employee(3, "Kabir", "Finance", 50000),
  new Employee(4, "Meera", "Marketing", 40000),
  new Employee(5, "Rohan", "IT", 55000)
];

// Apply a 10% bonus to the first employee as an example.
employees[0].applyBonus(10);

console.log("Employee Annual Salaries:");
employees.forEach(employee => {
  console.log(
    `${employee.name} (${employee.department}): ₹${employee.getAnnualSalary().toFixed(2)}`
  );
});

const totalAnnualPayout = employees.reduce(
  (total, employee) => total + employee.getAnnualSalary(),
  0
);

console.log(`\nTotal Annual Company Payout: ₹${totalAnnualPayout.toFixed(2)}`);
