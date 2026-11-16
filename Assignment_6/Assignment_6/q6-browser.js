// Optional Q6 browser bonus: create product cards dynamically.

const productsContainer = document.getElementById("products");
const statusMessage = document.getElementById("status");

async function displayProductCards() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const products = await response.json();

    products.forEach(product => {
      const card = document.createElement("article");
      card.className = "card";

      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.title;

      const title = document.createElement("h2");
      title.textContent = product.title;

      const price = document.createElement("p");
      price.textContent = `$${Number(product.price).toFixed(2)}`;

      card.append(image, title, price);
      productsContainer.appendChild(card);
    });

    statusMessage.textContent = `${products.length} products loaded.`;
  } catch (error) {
    statusMessage.textContent = "Failed to load products. Please try again.";
    console.error(error);
  }
}

displayProductCards();
