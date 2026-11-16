// Q8: Dynamic Object Updater

const user = {
  name: "John",
  email: "john@mail.com",
  age: 21
};

const userForm = document.getElementById("userForm");
const nameField = document.getElementById("userName");
const emailField = document.getElementById("userEmail");
const ageField = document.getElementById("userAge");
const userDetails = document.getElementById("userDetails");

function displayUser() {
  userDetails.textContent = JSON.stringify(user, null, 2);
}

// Put the existing object values into the form.
nameField.value = user.name;
emailField.value = user.email;
ageField.value = user.age;
displayUser();

userForm.addEventListener("submit", function (event) {
  event.preventDefault();

  user.name = nameField.value.trim();
  user.email = emailField.value.trim();
  user.age = Number(ageField.value);

  displayUser();
});
