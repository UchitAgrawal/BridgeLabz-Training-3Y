// Q3: Three-step form with validation, Next, Back and summary.

const steps = Array.from(document.querySelectorAll(".step"));
const stepIndicator = document.getElementById("stepIndicator");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const summary = document.getElementById("summary");
let currentStep = 0;

const fields = [
  document.getElementById("fullName"),
  document.getElementById("email"),
  document.getElementById("password")
];

const errorElements = [
  document.getElementById("nameError"),
  document.getElementById("emailError"),
  document.getElementById("passwordError")
];

function validateStep(stepIndex) {
  const value = fields[stepIndex].value.trim();
  let error = "";

  if (stepIndex === 0 && !/^[A-Za-z ]+$/.test(value)) {
    error = "Enter your name using letters only.";
  } else if (stepIndex === 1 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    error = "Enter a valid email address.";
  } else if (stepIndex === 2 && value.length < 6) {
    error = "Password must be at least 6 characters.";
  }

  errorElements[stepIndex].textContent = error;
  fields[stepIndex].classList.toggle("invalid", Boolean(error));
  fields[stepIndex].classList.toggle("valid", !error && Boolean(value));
  return error === "";
}

function showStep() {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });
  stepIndicator.textContent = `Step ${currentStep + 1} of 3`;
  backButton.disabled = currentStep === 0;
  nextButton.textContent = currentStep === 2 ? "Submit" : "Next";
}

nextButton.addEventListener("click", function () {
  if (!validateStep(currentStep)) return;

  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep();
  } else {
    document.getElementById("multiStepForm").hidden = true;
    stepIndicator.textContent = "Registration complete";
    summary.hidden = false;
    summary.textContent =
      `Registration Summary\nName: ${fields[0].value.trim()}\n` +
      `Email: ${fields[1].value.trim()}\nPassword: ${"*".repeat(fields[2].value.length)}`;
  }
});

backButton.addEventListener("click", function () {
  if (currentStep > 0) {
    currentStep--;
    showStep();
  }
});

// Remove an error as soon as the user corrects the current field.
fields.forEach((field, index) => {
  field.addEventListener("input", function () {
    if (field.value.trim()) validateStep(index);
  });
});

showStep();
