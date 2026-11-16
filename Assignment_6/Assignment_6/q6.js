// Q6: E-Commerce Dashboard — Fetch products from Fake Store API

const productsApiUrl = "https://fakestoreapi.com/products";

async function fetchAndDisplayProducts() {
  try {
    const response = await fetch(productsApiUrl);

    // fetch() does not reject for HTTP error status codes such as 404.
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const products = await response.json();

    products.forEach(product => {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${Number(product.price).toFixed(2)}`);
      console.log(`Image: ${product.image}`);
      console.log("------------------------------");
    });
  } catch (error) {
    console.error("Failed to load products. Please try again.", error.message);
  }
}

fetchAndDisplayProducts();
