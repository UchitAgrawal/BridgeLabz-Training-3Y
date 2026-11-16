// Q2: Student Form Validator (Forms + RegExp)

const studentForm = document.getElementById("studentForm");

const studentPatterns = {
  name: /^[A-Za-z]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\d{10}$/,
  password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
};

function showFieldResult(input, errorElement, isValid, errorText) {
  input.classList.toggle("valid", isValid);
  input.classList.toggle("invalid", !isValid);
  errorElement.textContent = isValid ? "" : errorText;
}

studentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("studentName");
  const emailInput = document.getElementById("studentEmail");
  const phoneInput = document.getElementById("studentPhone");
  const passwordInput = document.getElementById("studentPassword");

  const nameValid = studentPatterns.name.test(nameInput.value.trim());
  const emailValid = studentPatterns.email.test(emailInput.value.trim());
  const phoneValid = studentPatterns.phone.test(phoneInput.value.trim());
  const passwordValid = studentPatterns.password.test(passwordInput.value);

  showFieldResult(nameInput, document.getElementById("nameError"), nameValid, "Name must contain alphabets only.");
  showFieldResult(emailInput, document.getElementById("emailError"), emailValid, "Enter a valid email address.");
  showFieldResult(phoneInput, document.getElementById("phoneError"), phoneValid, "Phone number must contain exactly 10 digits.");
  showFieldResult(passwordInput, document.getElementById("passwordError"), passwordValid, "Password needs an uppercase letter, a number and a special character.");

  const message = document.getElementById("formMessage");
  if (nameValid && emailValid && phoneValid && passwordValid) {
    message.textContent = "Registration successful!";
    message.style.color = "green";
  } else {
    message.textContent = "Please correct the highlighted fields.";
    message.style.color = "red";
  }
});
