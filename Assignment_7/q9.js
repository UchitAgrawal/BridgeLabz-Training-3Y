// Q9: Form submit blocker with inline and live validation errors.

const validationForm = document.getElementById("validationForm");

const formFields = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  password: document.getElementById("password")
};

const formErrors = {
  name: document.getElementById("nameError"),
  email: document.getElementById("emailError"),
  password: document.getElementById("passwordError")
};

const submitMessage = document.getElementById("submitMessage");

function validateField(fieldName) {
  const value = formFields[fieldName].value.trim();
  let errorMessage = "";

  if (fieldName === "name" && value === "") {
    errorMessage = "Name is required.";
  } else if (fieldName === "email" && value === "") {
    errorMessage = "Email is required.";
  } else if (fieldName === "email" && !value.includes("@")) {
    errorMessage = "Email must contain @.";
  } else if (fieldName === "password" && value.length < 6) {
    errorMessage = "Password must be at least 6 characters.";
  }

  formErrors[fieldName].textContent = errorMessage;
  formFields[fieldName].classList.toggle("invalid", Boolean(errorMessage));
  formFields[fieldName].classList.toggle("valid", !errorMessage && Boolean(value));
  return errorMessage === "";
}

// Validate live after the user starts correcting a field.
Object.keys(formFields).forEach(fieldName => {
  formFields[fieldName].addEventListener("input", function () {
    validateField(fieldName);
    submitMessage.textContent = "";
    submitMessage.classList.remove("success");
  });
});

validationForm.addEventListener("submit", function (event) {
  // Prevent the browser from submitting/reloading the page.
  event.preventDefault();

  const allFieldsValid = Object.keys(formFields)
    .map(validateField)
    .every(Boolean);

  if (allFieldsValid) {
    submitMessage.textContent = "Form Submitted Successfully";
    submitMessage.classList.add("success");
  } else {
    submitMessage.textContent = "Please correct the errors above.";
    submitMessage.classList.remove("success");
  }
});
