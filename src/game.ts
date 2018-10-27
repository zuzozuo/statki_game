import { Player } from "./player"
import { Computer } from "./computer"
import { Ship } from "./ship"
import { GameModes, ShipDirection, BoardHeight, BoardWidth } from "./enums"


export class Game {
    player: Player
    computer: Computer
    mode: GameModes = GameModes.NothingHappens
    chosenShip: Ship | null
    pointerShip: HTMLElement | null
    constructor() {
        this.player = new Player();
        this.computer = new Computer();
        this.chosenShip = null; // wybrany statek do wstawienia
        this.pointerShip = null; //statek do ustawienia, jest nad plansza po wybraniu 
    }

    init() {

        this.mode = GameModes.PlayerPlacing
        const boards = document.getElementsByClassName("board")
        const shipsMenu = document.getElementById("shipsMenu")
        window.oncontextmenu = this.onContextMenu.bind(this);
        for (let i = 0; i < boards.length; i++) {
            boards[i].addEventListener("mouseover", this.onMouseOver.bind(this))
            boards[i].addEventListener("click", this.onMouseClick.bind(this))
        }

        this.player.init();
        this.computer.init();
        if (shipsMenu) {
            this.player.drawMenu(shipsMenu, this.onMenuClick.bind(this));

        }
        this.update();
    }



    onMouseClick(e: MouseEvent) {
        console.log("MouseClick")
    }

    onContextMenu(e: Event) {
        e.preventDefault();
        let el: any = e.target;
        if (el.className == "x") {
            let id: string = el.parentNode.parentNode.id
            switch (this.mode) {
                case GameModes.PlayerPlacing:
                    if (id == "BoardPlayerMine") {
                        if (this.chosenShip != null) {
                            console.log("OnContext")
                        }
                    }
                    break;
                case GameModes.PlayerShooting:
                    if (id == "BoardPlayerOpponent") {
                        //TODO
                    }
                    break;
            }
        }
        return false;
    }

    onMouseOver(e: Event) {
        let el: any = e.target;
        if (el.className == "x") {
            let id: string = el.parentNode.parentNode.id
            switch (this.mode) {
                case GameModes.PlayerPlacing:
                    if (id == "BoardPlayerMine") {
                        if (this.chosenShip != null) {
                            if (this.pointerShip) {
                                let x = el.dataset.x;
                                let y = el.dataset.y;
                                let shipLen = this.chosenShip.length;

                                if (this.chosenShip.direction == ShipDirection.Vertical) {
                                    if (y >= BoardHeight - shipLen + 1) {
                                        y = BoardHeight - shipLen
                                    }

                                }
                                this.pointerShip.style.left = String(x * 22) + 'px';
                                this.pointerShip.style.top = String(y * 22) + 'px';

                            }
                        }
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

    onMenuClick(ship: Ship) {
        const board = document.getElementById("BoardPlayerMine")
        if (this.mode != GameModes.PlayerPlacing) { return false; }
        if (this.chosenShip != null) { return false; }


        this.chosenShip = ship;
        this.pointerShip = document.createElement("div");
        this.pointerShip.id = "pointerShip"


        if (board) {
            this.pointerShip.innerHTML = ship.returnShipContainer();
            board.appendChild(this.pointerShip)
        }
        console.log(ship)
        return true;
    }



    update() {
        this.player.update();
        this.computer.update();
        console.log("UPDATE");
    }
}