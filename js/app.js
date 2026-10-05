const cart = [];

const buttons = document.querySelectorAll(".game-bottom button");

const cartButton = document.querySelector(".cart-button");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const gameName = button.dataset.game;

        cart.push(gameName);

        cartButton.textContent = "Cart (" + cart.length + ")";

        console.log(cart);

    });

});