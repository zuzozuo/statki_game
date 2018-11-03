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

    shipRotation(x: number, y: number, dir: ShipDirection, len: number, div: HTMLElement) {
        if (dir == ShipDirection.Vertical) {
            if (y >= BoardHeight - len + 1) {
                y = BoardHeight - len;
            }

        } else if (dir == ShipDirection.Horizontal) {
            if (x >= BoardWidth - len + 1) {
                x = BoardWidth - len;
            }
        }

        div.style.left = String(x * 22) + 'px';
        div.style.top = String(y * 22) + 'px';
    }

    //--------------------------------------------------------------------

    onMouseClick(e: MouseEvent) {
        //console.log("MouseClick")
        let el: any = e.target;
        if (el.className == "x") {
            let id: string = el.parentNode.parentNode.id
            switch (this.mode) {
                case GameModes.PlayerPlacing:
                    if (id == "BoardPlayerMine") {
                        if (this.chosenShip != null) {
                            if (this.pointerShip) {
                                let x = parseInt(el.dataset.x);
                                let y = parseInt(el.dataset.y);
                                let shipLen = this.chosenShip.length;
                                let dir = this.chosenShip.direction;

                                if (this.player.myBoard.canPlaceOnBoard(x, y, dir, shipLen)) {
                                    this.player.myBoard.placeOnBoard(x, y, dir, shipLen);
                                    this.update();
                                    this.chosenShip = null;
                                    this.pointerShip = null;
                                }

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

    onContextMenu(e: Event) {
        e.preventDefault();
        let el: any = e.target;
        if (el.className == "x") {
            let id: string = el.parentNode.parentNode.id
            switch (this.mode) {
                case GameModes.PlayerPlacing:
                    if (id == "BoardPlayerMine") {
                        if (this.chosenShip != null) {
                            if (this.pointerShip) {
                                let x = parseInt(el.dataset.x);
                                let y = parseInt(el.dataset.y);
                                let shipLen = this.chosenShip.length;
                                let div = this.pointerShip;

                                switch (this.chosenShip.direction) {
                                    case ShipDirection.Vertical:
                                        this.chosenShip.direction = ShipDirection.Horizontal;
                                        this.shipRotation(x, y, this.chosenShip.direction, shipLen, div)
                                        this.chosenShip.changeDirectionStyle(this.chosenShip.direction, div, shipLen)
                                        break;

                                    case ShipDirection.Horizontal:
                                        this.chosenShip.direction = ShipDirection.Vertical;
                                        this.shipRotation(x, y, this.chosenShip.direction, shipLen, div)
                                        this.chosenShip.changeDirectionStyle(this.chosenShip.direction, div, shipLen)
                                        break;

                                }
                                //console.log("OnContext")
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
                                let x = parseInt(el.dataset.x);
                                let y = parseInt(el.dataset.y);
                                let shipLen = this.chosenShip.length;

                                this.shipRotation(x, y, this.chosenShip.direction, shipLen, this.pointerShip)

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
        //console.log(ship)
        return true;
    }

    //--------------------------------------------------------------------

    update() {
        this.player.update();
        this.computer.update();
        console.log("UPDATE");
    }
}