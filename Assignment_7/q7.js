// Q7: Track mouse coordinates and place a dot on double-click.

const mouseBox = document.getElementById("mouseBox");
const coordinates = document.getElementById("coordinates");

mouseBox.addEventListener("mousemove", function (event) {
  coordinates.textContent =
    `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

mouseBox.addEventListener("dblclick", function (event) {
  const boxBounds = mouseBox.getBoundingClientRect();
  const dot = document.createElement("span");
  dot.className = "mouse-dot";

  // Convert viewport coordinates into coordinates relative to the box.
  dot.style.left = `${event.clientX - boxBounds.left}px`;
  dot.style.top = `${event.clientY - boxBounds.top}px`;
  mouseBox.appendChild(dot);
});
