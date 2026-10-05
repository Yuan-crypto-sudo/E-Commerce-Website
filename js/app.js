const cart = [];

const buttons = document.querySelectorAll(".game-bottom button");

const cartButton = document.querySelector(".cart-button");

const cartPanel = document.querySelector(".cart-panel");

const closeCartButton = document.querySelector(".close-cart");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const gameName = button.dataset.game;

        cart.push(gameName);

        cartButton.textContent = "Cart (" + cart.length + ")";

        console.log(cart);

    });

});

cartButton.addEventListener("click", function() {
    cartPanel.classList.add("open");
});

closeCartButton.addEventListener("click", function() {
    cartPanel.classList.remove("open");
})