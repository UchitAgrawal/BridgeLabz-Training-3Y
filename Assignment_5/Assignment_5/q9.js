// Q9: Person -> Student inheritance using ES6 classes

// Prototype/constructor-function version (same pattern as Q5).
function PersonPrototype(name) {
  this.name = name;
}

PersonPrototype.prototype.showName = function () {
  return `Name: ${this.name}`;
};

function StudentPrototype(name, branch) {
  PersonPrototype.call(this, name);
  this.branch = branch;
}

StudentPrototype.prototype = Object.create(PersonPrototype.prototype);
StudentPrototype.prototype.constructor = StudentPrototype;

StudentPrototype.prototype.showBranch = function () {
  return `Branch: ${this.branch}`;
};

// ES6 class version using extends and super().
class Person {
  constructor(name) {
    this.name = name;
  }

  showName() {
    return `Name: ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name); // Calls the Person constructor.
    this.branch = branch;
  }

  showBranch() {
    return `Branch: ${this.branch}`;
  }
}

const prototypeStudent = new StudentPrototype("Uchit", "Computer Science");
const classStudent = new Student("Uchit", "Computer Science");

console.log("Prototype inheritance:");
console.log(prototypeStudent.showName());
console.log(prototypeStudent.showBranch());

console.log("\nES6 class inheritance:");
console.log(classStudent.showName());
console.log(classStudent.showBranch());

console.log("\nBoth versions produce the same details:");
console.log(
  prototypeStudent.showName() === classStudent.showName() &&
  prototypeStudent.showBranch() === classStudent.showBranch()
); // true

/*
Explanation:
- extends establishes inheritance between the classes.
- super(name) calls the parent Person constructor.
- Both approaches use JavaScript's prototype chain internally.
*/
