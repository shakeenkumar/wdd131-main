// Object to hold environmental information
const sustainabilityInfo = {
    message: "Make sustainable choices for a greener planet!",
    ecoTips: [
        "Use less plastic",
        "Recycle and compost",
        "Use energy-efficient appliances",
        "Choose eco-friendly products"
    ],
    ecoProducts: [
        { name: "Solar Panel", description: "A clean energy solution" },
        { name: "Reusable Water Bottles", description: "Minimize plastic waste" },
        { name: "Electric Cars", description: "Reduce carbon emissions" }
    ]
};

// Function to display eco-tips dynamically
function displayEcoTips() {
    const tipContainer = document.getElementById("eco-tips");
    sustainabilityInfo.ecoTips.forEach(tip => {
        const li = document.createElement("li");
        li.textContent = tip;
        tipContainer.appendChild(li);
    });
}

// Function to display eco-friendly products dynamically
function displayEcoProducts() {
    const productContainer = document.getElementById("eco-products");
    sustainabilityInfo.ecoProducts.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        const h3 = document.createElement("h3");
        h3.textContent = product.name;
        const p = document.createElement("p");
        p.textContent = product.description;
        div.appendChild(h3);
        div.appendChild(p);
        productContainer.appendChild(div);
    });
}

// Event listener for hero section interaction
document.getElementById("hero-msg").addEventListener("click", function() {
    alert("Welcome to the Sustainability Hub! Start making a difference today.");
});

// Initialize the content dynamically
function initializePage() {
    displayEcoTips();
    displayEcoProducts();
}

// Calling the initialize function when the page loads
window.onload = initializePage;
