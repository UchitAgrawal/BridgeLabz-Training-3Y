// Q2: Live character counter with warning and input prevention.

const messageInput = document.getElementById("messageInput");
const characterCounter = document.getElementById("characterCounter");
const resetButton = document.getElementById("resetButton");
const maximumCharacters = 100;

function updateCounter() {
  const remaining = maximumCharacters - messageInput.value.length;
  characterCounter.textContent = `${remaining} characters remaining`;
  characterCounter.classList.toggle("warning", remaining <= 20 && remaining > 0);
  characterCounter.classList.toggle("danger", remaining === 0);
}

// beforeinput lets us prevent an input action before it changes the textarea.
messageInput.addEventListener("beforeinput", function (event) {
  const isTextInsertion = event.inputType.startsWith("insert");
  const insertedText = event.data || "";

  if (isTextInsertion &&
      messageInput.value.length + insertedText.length > maximumCharacters) {
    event.preventDefault();
  }
});

// Also trim pasted text if a browser does not provide event.data in beforeinput.
messageInput.addEventListener("paste", function (event) {
  const pastedText = (event.clipboardData || window.clipboardData).getData("text");
  const availableSpace = maximumCharacters - messageInput.value.length;

  if (pastedText.length > availableSpace) {
    event.preventDefault();
    messageInput.setRangeText(
      pastedText.slice(0, availableSpace),
      messageInput.selectionStart,
      messageInput.selectionEnd,
      "end"
    );
    updateCounter();
  }
});

messageInput.addEventListener("input", updateCounter);

resetButton.addEventListener("click", function () {
  messageInput.value = "";
  updateCounter();
  messageInput.focus();
});

updateCounter();
