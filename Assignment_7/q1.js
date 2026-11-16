// Q1: Dynamic Product List Manager using event delegation.

const productForm = document.getElementById("productForm");
const productInput = document.getElementById("productInput");
const productList = document.getElementById("productList");
let editingItem = null;

function saveEditedItem() {
  if (!editingItem) return;

  const input = editingItem.querySelector(".edit-input");
  const updatedName = input.value.trim();

  if (updatedName) {
    const nameSpan = editingItem.querySelector(".product-name");
    nameSpan.textContent = updatedName;
  }

  editingItem.classList.remove("editing");
  editingItem.querySelector(".edit-input").remove();
  editingItem.querySelector(".edit-button").textContent = "Edit";
  editingItem = null;
}

function startEditing(listItem) {
  if (editingItem === listItem) return;
  saveEditedItem();

  const nameSpan = listItem.querySelector(".product-name");
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.className = "edit-input";
  editInput.value = nameSpan.textContent;
  editInput.setAttribute("aria-label", "Edit product name");

  nameSpan.after(editInput);
  listItem.classList.add("editing");
  listItem.querySelector(".edit-button").textContent = "Save";
  editingItem = listItem;
  editInput.focus();
  editInput.select();
}

productForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const productName = productInput.value.trim();
  if (!productName) return;

  const listItem = document.createElement("li");
  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = productName;

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "small edit-button";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "small danger delete-button";
  deleteButton.textContent = "Delete";

  const buttonGroup = document.createElement("span");
  buttonGroup.className = "row";
  buttonGroup.style.display = "inline-flex";
  buttonGroup.style.marginLeft = "12px";
  buttonGroup.append(editButton, deleteButton);
  listItem.append(nameSpan, buttonGroup);
  productList.appendChild(listItem);

  productInput.value = "";
  productInput.focus();
});

// One listener on the parent UL handles all Edit and Delete buttons.
productList.addEventListener("click", function (event) {
  const listItem = event.target.closest("li");
  if (!listItem || !productList.contains(listItem)) return;

  if (event.target.classList.contains("delete-button")) {
    if (editingItem === listItem) editingItem = null;
    listItem.remove();
  } else if (event.target.classList.contains("edit-button")) {
    if (editingItem === listItem) {
      saveEditedItem();
    } else {
      startEditing(listItem);
    }
  }
});

// Clicking outside the currently edited list item auto-saves it.
document.addEventListener("click", function (event) {
  if (editingItem && !editingItem.contains(event.target)) {
    saveEditedItem();
  }
});

// Enter saves; Escape restores the current text.
productList.addEventListener("keydown", function (event) {
  if (!editingItem || !event.target.classList.contains("edit-input")) return;

  if (event.key === "Enter") {
    event.preventDefault();
    saveEditedItem();
  } else if (event.key === "Escape") {
    const listItem = editingItem;
    listItem.querySelector(".edit-input").remove();
    listItem.classList.remove("editing");
    listItem.querySelector(".edit-button").textContent = "Edit";
    editingItem = null;
  }
});
