// Q7: Login Form Validation using RegExp

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("loginPassword");
  const username = usernameInput.value;
  const password = passwordInput.value;

  const usernameValid = /^.{5,}$/.test(username);
  const passwordValid = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,}$/.test(password);

  usernameInput.classList.toggle("valid", usernameValid);
  usernameInput.classList.toggle("invalid", !usernameValid);
  document.getElementById("usernameError").textContent =
    usernameValid ? "" : "Username must be at least 5 characters long.";

  passwordInput.classList.toggle("valid", passwordValid);
  passwordInput.classList.toggle("invalid", !passwordValid);

  let passwordError = "";
  if (password.length < 8) {
    passwordError = "Password must contain at least 8 characters.";
  } else if (!/[A-Z]/.test(password)) {
    passwordError = "Password must include an uppercase letter.";
  } else if (!/[a-z]/.test(password)) {
    passwordError = "Password must include a lowercase letter.";
  } else if (!/\d/.test(password)) {
    passwordError = "Password must include a number.";
  } else if (!/[^A-Za-z0-9]/.test(password)) {
    passwordError = "Password must include a special character.";
  }

  document.getElementById("loginPasswordError").textContent = passwordError;

  const loginMessage = document.getElementById("loginMessage");
  if (usernameValid && passwordValid) {
    loginMessage.textContent = "Validation successful! Login details are valid.";
    loginMessage.style.color = "green";
  } else {
    loginMessage.textContent = "Please correct the errors above.";
    loginMessage.style.color = "red";
  }
});
