// Q8: Custom dropdown with outside-click handling in the capturing phase.

const customDropdown = document.getElementById("customDropdown");
const dropdownToggle = document.getElementById("dropdownToggle");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownResult = document.getElementById("dropdownResult");

function closeDropdown() {
  dropdownMenu.classList.remove("open");
  dropdownToggle.setAttribute("aria-expanded", "false");
}

dropdownToggle.addEventListener("click", function () {
  const isOpening = !dropdownMenu.classList.contains("open");
  dropdownMenu.classList.toggle("open", isOpening);
  dropdownToggle.setAttribute("aria-expanded", String(isOpening));
});

dropdownMenu.addEventListener("click", function (event) {
  if (!event.target.classList.contains("dropdown-option")) return;

  const selectedOption = event.target.textContent;
  dropdownToggle.textContent = selectedOption;
  dropdownResult.textContent = `Selected course: ${selectedOption}`;
  closeDropdown();
});

// Capturing phase: inspect document clicks before they reach the target.
document.addEventListener("click", function (event) {
  if (!customDropdown.contains(event.target)) {
    closeDropdown();
  }
}, true);
