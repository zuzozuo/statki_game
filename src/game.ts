import { Player } from "./player"
import { Computer } from "./computer"
import { GameModes } from "./enums"


export class Game {
    player: Player
    computer: Computer
    mode: GameModes = GameModes.NothingHappens
    constructor() {
        this.player = new Player();
        this.computer = new Computer();
    }

    init() {
        this.mode = GameModes.PlayerPlacing
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
            switch (this.mode) {
                case GameModes.PlayerPlacing:
                    if (id == "BoardPlayerMine") {
                        //TODO
                    }
                    break;
                case GameModes.PlayerShooting:
                    if (id == "BoardPlayerOpponent") {
                        //TODO
                    }
                    break;
            }
        }
    }

    update() {
        this.player.update();
        this.computer.update();
        console.log("UPDATE");
    }
}