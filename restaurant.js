document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = urlParams.get("id");

    if (!menuData[restaurantId]) {
        document.body.innerHTML = "<h1>Restaurant not found</h1>";
        return;
    }

    document.getElementById("restaurant-name").innerText = menuData[restaurantId].name;

    const menuContainer = document.getElementById("menu-items");
    menuData[restaurantId].menu.forEach(item => {
        let itemDiv = document.createElement("div");
        itemDiv.classList.add("menu-item");
        itemDiv.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
            <button onclick="addToCart(${item.id}, '${item.name}', ${item.price})">Add to Cart</button>
        `;
        menuContainer.appendChild(itemDiv);
    });
});

function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ id, name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
}
