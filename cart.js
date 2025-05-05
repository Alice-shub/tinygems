let cart = [];
console.log("Cart at start:", cart);

const cartCount = document.getElementById("cart-count");
const box = document.querySelector(".bracelet-box");
const cartPopup = document.getElementById("cart-popup");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalContainer = document.getElementById("cart-total");

// Add item to cart
function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: itemPrice });
  updateCart();
  animateBox();
  alert(`${itemName} added to your bracelet box! 💖`);
}

// Animate the bracelet box lid
function animateBox() {
  box.classList.add("open");
  setTimeout(() => box.classList.remove("open"), 500);
}

// Toggle cart sidebar visibility
function toggleCart() {
  cartPopup.classList.toggle("visible");
  updateCartDisplay();
}

// Update everything related to cart
function updateCart() {
  updateCartDisplay();
  updateCartCount();
  updateCartTotal();
}

// Update cart item count badge
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// Update cart sidebar with items
function updateCartDisplay() {
  cartItemsContainer.innerHTML = "";

  cart.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");

    itemElement.innerHTML = `
      <span>${item.name} - £${item.price.toFixed(2)}</span>
      <button class="remove-btn" data-index="${index}">✖</button>
    `;

    cartItemsContainer.appendChild(itemElement);
  });

  attachRemoveListeners();
}

// Attach remove button event listeners
function attachRemoveListeners() {
  const removeButtons = document.querySelectorAll(".remove-btn");

  removeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = parseInt(e.target.getAttribute("data-index"));
      cart.splice(index, 1);
      updateCart();
    });
  });
}

// Update cart total price
function updateCartTotal() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotalContainer.innerHTML = `Total: £${total.toFixed(2)}`;
}

// Checkout function
function checkout() {
  if (cart.length === 0) {
    alert("Your bracelet box is empty! 💝");
    return;
  }

  alert("Thank you for your order! We'll be in touch to confirm payment ✨");

  // Clear cart after checkout
  cart = [];
  updateCart();
  cartPopup.classList.remove("visible");
}