document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartCount();

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let itemName = this.dataset.name;
            let itemPrice = parseFloat(this.dataset.price);

            let existingItem = cart.find(item => item.name === itemName);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name: itemName, price: itemPrice, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();
        });
    });

    function updateCartCount() {
        let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById("cart-count").innerText = totalQuantity;
    }
});
