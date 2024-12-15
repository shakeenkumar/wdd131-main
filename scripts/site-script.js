// Import necessary functions or variables if using ES Modules (not required in this case as no external modules are needed)

// Array of Eco-Friendly Products
const ecoProducts = [
  { name: "Solar-Powered Lamp", description: "A lamp powered by solar energy." },
  { name: "Bamboo Toothbrush", description: "A sustainable toothbrush made from bamboo." },
  { name: "Reusable Water Bottle", description: "Eco-friendly bottle for daily use." }
];

// DOM Interaction: Add products to the Eco-Friendly Products list
const productList = document.getElementById('productList');

// Function to display eco-friendly products dynamically
function displayProducts() {
  ecoProducts.forEach(product => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${product.name}</strong>: ${product.description}`;
    productList.appendChild(li);
  });
}

// Event Listener for the "Show More Tips" Button
const toggleBtn = document.getElementById('toggleBtn');
const tipsSection = document.getElementById('tips-section');

// Function to toggle the display of sustainability tips
toggleBtn.addEventListener('click', () => {
  if (tipsSection.style.display === 'none') {
    tipsSection.style.display = 'block';
    toggleBtn.textContent = 'Show Less Tips'; // Update button text
  } else {
    tipsSection.style.display = 'none';
    toggleBtn.textContent = 'Show More Tips'; // Reset button text
  }
});

// Call the function to display the eco-friendly products on page load
displayProducts();

// Example of conditional branching: If no products are available, display a message
if (ecoProducts.length === 0) {
  const noProductsMessage = document.createElement('p');
  noProductsMessage.textContent = "No eco-friendly products available at the moment.";
  productList.appendChild(noProductsMessage);
}
