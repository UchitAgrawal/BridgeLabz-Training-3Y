// Q5: Image gallery modal preview.

const imageGallery = document.getElementById("imageGallery");
const imageModal = document.getElementById("imageModal");
const modalContent = document.getElementById("modalContent");
const largeImage = document.getElementById("largeImage");

imageGallery.addEventListener("click", function (event) {
  if (event.target.tagName !== "IMG") return;

  // Use the clicked image's source, removing the thumbnail width parameter.
  const imageUrl = event.target.src.replace(/([?&])w=\d+/, "$1w=1400");
  largeImage.src = imageUrl;
  largeImage.alt = event.target.alt;
  imageModal.classList.add("open");
  imageModal.setAttribute("aria-hidden", "false");
});

imageModal.addEventListener("click", function () {
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
  largeImage.src = "";
});

// Prevent a click on the image itself from bubbling to the modal backdrop.
modalContent.addEventListener("click", function (event) {
  event.stopPropagation();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && imageModal.classList.contains("open")) {
    imageModal.classList.remove("open");
    imageModal.setAttribute("aria-hidden", "true");
    largeImage.src = "";
  }
});
