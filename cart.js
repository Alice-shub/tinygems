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

  .bracelet-box {
    position: fixed;
    top: 20px;
    right: 30px;
    cursor: pointer;
    z-index: 1000;
  }
  
  .box-lid {
    width: 50px;
    height: 10px;
    background-color: #d8a7b1;
    border-radius: 6px 6px 0 0;
    transform-origin: bottom center;
    transition: transform 0.3s ease;
  }
  
  .box-base {
    width: 50px;
    height: 40px;
    background-color: #ffb6c1;
    text-align: center;
    position: relative;
    border-radius: 0 0 8px 8px;
    font-size: 24px;
    line-height: 40px;
  }
  
  #cart-count {
    background: hotpink;
    color: white;
    font-size: 14px;
    border-radius: 50%;
    padding: 2px 6px;
    position: absolute;
    top: -10px;
    right: -10px;
  }
  
  .bracelet-box.open .box-lid {
    transform: rotateX(60deg);
  }
  
  /* Cart popup */
  #cart-popup {
    position: fixed;
    top: 70px;
    right: 30px;
    background: #fff;
    padding: 15px;
    border: 2px solid #d8a7b1;
    border-radius: 12px;
    max-width: 200px;
    z-index: 999;
    display: none;
  }
  
  #cart-popup.visible {
    display: block;
  }
  
  .hidden {
    display: none;
  }

  
  let cart = [];
const cartCount = document.getElementById("cart-count");
const box = document.querySelector(".bracelet-box");
const cartPopup = document.getElementById("cart-popup");
const cartItems = document.getElementById("cart-items");

function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: itemPrice });
  updateCartCount();
  animateBox();
  alert(`${itemName} added to your bracelet box! 💖`);
}

function updateCartCount() {
  cartCount.textContent = cart.length;
}

function animateBox() {
  box.classList.add("open");
  setTimeout(() => box.classList.remove("open"), 500);
}

function toggleCart() {
  cartPopup.classList.toggle("visible");
  updateCartDisplay();
}

function updateCartDisplay() {
  cartItems.innerHTML = '';
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - £${item.price}`;
    cartItems.appendChild(li);
  });
}

function checkout() {
  if (cart.length === 0) {
    alert("Your bracelet box is empty! 💝");
    return;
  }

  // You can integrate real payments later, but for now:
  alert("Thank you for your order! We'll be in touch to confirm payment ✨");
  
  // Clear cart after checkout
  cart = [];
  updateCartSidebar();
  closeCart();
}

