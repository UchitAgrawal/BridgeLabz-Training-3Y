// Q4: Theme switcher using setAttribute() for both class and data-theme.

const themeButtons = document.querySelectorAll("[data-theme-choice]");
const themeStatus = document.getElementById("themeStatus");
const allowedThemes = ["light", "dark", "blue"];

function applyTheme(themeName) {
  if (!allowedThemes.includes(themeName)) return;

  // setAttribute is used as required to update the body's class and custom attribute.
  document.body.setAttribute("class", themeName === "light" ? "" : `theme-${themeName}`);
  document.body.setAttribute("data-theme", themeName);
  themeStatus.textContent = `Current theme: ${themeName}`;
}

themeButtons.forEach(button => {
  button.addEventListener("click", function () {
    applyTheme(button.getAttribute("data-theme-choice"));
  });
});

applyTheme("light");
