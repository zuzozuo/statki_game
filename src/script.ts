import { Game } from "./game";

document.addEventListener("DOMContentLoaded", function () {

    let button = document.getElementById("start-btn");
    let startDiv = document.getElementById("start");
    if (button) {
        button.addEventListener("click", function () {
            if (startDiv) {
                startDiv.className = "not-visible";
                const game = new Game();
                game.init();
            }

        })
    }



})



