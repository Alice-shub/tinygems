// Cart items stored in an array
let cartItems = [
    { name: 'Garnet Bracelet', price: 38 },
    { name: 'Amethyst Bracelet', price: 40 }
  ];
  
  // Display cart items
  function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear any existing items
  
    cartItems.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item');
      itemDiv.innerHTML = `
        <span>${item.name}</span>
        <span>£${item.price}</span>
      `;
      cartItemsContainer.appendChild(itemDiv);
    });
  
    updateTotal();
  }
  
  // Update the total price
  function updateTotal() {
    const cartTotalContainer = document.getElementById('cart-total');
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    cartTotalContainer.innerHTML = `Total: £${totalPrice}`;
  }
  
  // Call function to display cart items when the page loads
  window.onload = displayCartItems;