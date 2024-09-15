// Initialize or retrieve basket from localStorage
const basket = JSON.parse(localStorage.getItem('basket')) || {};

// Function to add items to the basket from other pages
function addToBasket(itemName, itemPrice) {
    // Check if the item already exists in the basket
    if (basket[itemName]) {
        basket[itemName].quantity += 1; // Increment quantity
    } else {
        basket[itemName] = { quantity: 1, price: itemPrice }; // Add new item with quantity 1
    }
    
    // Save the updated basket to localStorage
    localStorage.setItem('basket', JSON.stringify(basket));
    
    // Provide feedback to the user
    alert(`${itemName} added to your basket!`);
}

// Function to update the basket display on the basket page
function updateBasket() {
    const basketItems = document.getElementById('basket-items'); // List to display items
    const totalPriceElement = document.getElementById('total-price'); // Total price element
    basketItems.innerHTML = ''; // Clear current basket display
    let total = 0;

    // Loop through basket items and add them to the display
    for (const [itemName, itemData] of Object.entries(basket)) {
        const itemElement = document.createElement('li'); // Create a new list item
        itemElement.innerHTML = `
            ${itemName} (${itemData.quantity}) - $${(itemData.price * itemData.quantity).toFixed(2)}
            <button class="remove-item" data-item="${itemName}">Remove</button>
        `;
        basketItems.appendChild(itemElement); // Add item to the basket list
        total += itemData.price * itemData.quantity; // Update the total price
    }

    totalPriceElement.textContent = `$${total.toFixed(2)}`; // Display total price

    // Add event listeners for the remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', () => {
            const itemName = button.getAttribute('data-item');
            delete basket[itemName]; // Remove the item from the basket
            localStorage.setItem('basket', JSON.stringify(basket)); // Save updated basket
            updateBasket(); // Update the display
        });
    });
}

// Event listener for the "Clear Basket" button
document.getElementById('clear-basket').addEventListener('click', () => {
    localStorage.removeItem('basket'); // Clear basket from localStorage
    updateBasket(); // Update the basket display
});

// Initialize the basket display when the page is loaded
document.addEventListener('DOMContentLoaded', updateBasket);
