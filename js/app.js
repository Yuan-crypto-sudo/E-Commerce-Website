const buttons = document.querySelectorAll(".game-bottom button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        
        const gameName = button.dataset.game;

        alert(gameName + " added to cart!");
    });
 });