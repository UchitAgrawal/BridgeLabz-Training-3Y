// Q3: Arrow function 'this' vs normal function 'this'

const user = {
  name: "Uchit",

  // Arrow functions do not create their own 'this'.
  // In this example, 'this' is inherited from the surrounding scope.
  showName: () => {
    console.log("Arrow function this.name:", this.name);
  }
};

user.showName(); // In Node.js, this.name is normally undefined.

// Fix: use a normal method function, which receives 'this'
// from the object before the dot when called as user.showName().
user.showName = function () {
  console.log("Normal function this.name:", this.name);
};

user.showName(); // Prints: Uchit

/*
Explanation:
An arrow function does not have its own 'this'. It uses the 'this'
value from the scope where it was created. Therefore, it does not
refer to the user object when called as user.showName().

A normal function gets its 'this' from how it is called.
Here, user.showName() makes 'this' refer to user.
*/
