// Q1: Callback function demonstration

function showEndMessage() {
  console.log("Welcome to the course!");
}

function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  console.log("Calling the callback now...");
  callback();
}

// Pass showEndMessage as a callback function.
greetUser("Uchit", showEndMessage);
