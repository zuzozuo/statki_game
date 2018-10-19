import { Player } from "./player"
import { Computer } from "./computer"


export class Game {
    player: Player
    computer: Computer
    constructor() {
        this.player = new Player();
        this.computer = new Computer();
    }

    init() {

        const boards = document.getElementsByClassName("board")
        for (let i = 0; i < boards.length; i++) {
            boards[i].addEventListener("mouseover", this.onMouseOver)
        }

        this.update();
    }

    onMouseOver(e: Event) {
        let el: any = e.target;
        if (el.className == "x") {
            let id: string = el.parentNode.parentNode.id
        }
    }

    update() {
        this.player.update();
        this.computer.update();
        console.log("UPDATE");
    }
}