// Q4 - Employee Inheritance + Runtime Polymorphism

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is performing regular ${this.department} tasks.`;
    }
}

class Manager extends Employee {
    work() {
        return `${this.name} is managing the ${this.department} team and assigning tasks.`;
    }
}

const employees = [
    new Employee("Aman", "Development"),
    new Manager("Neha", "Sales")
];

// The same work() call produces different results based on the object type.
employees.forEach(employee => console.log(employee.work()));
