import { Player } from "./player"
import { Computer } from "./computer"
import { Ship } from "./ship"
import { GameModes, ShipDirection, BoardHeight, BoardWidth, Timeout } from "./enums"


export class Game {
    player: Player
    computer: Computer
    mode: GameModes = GameModes.NothingHappens
    chosenShip: Ship | null
    pointerShip: HTMLElement | null
    infoForComputer: HTMLElement | null
    infoForPlayer: HTMLElement | null
    playerCounter: number
    constructor() {
        this.player = new Player();
        this.computer = new Computer();
        this.chosenShip = null; // wybrany statek do wstawienia
        this.pointerShip = null; //statek do ustawienia, jest nad plansza po wybraniu 
        this.infoForPlayer = document.getElementById("infoForPlayer");
        this.infoForComputer = document.getElementById("infoForComputer");
        this.playerCounter = 0;
    }

    init() {

        this.mode = GameModes.ComputerPlacing;
        if (this.infoForPlayer) { this.infoForPlayer.innerHTML = "<p>Komputer rozstawia statki...</p>"; }
        const boards = document.getElementsByClassName("board");
        const shipsMenu = document.getElementById("shipsMenu");
        window.oncontextmenu = this.onContextMenu.bind(this);
        for (let i = 0; i < boards.length; i++) {
            boards[i].addEventListener("mouseover", this.onMouseOver.bind(this));
            boards[i].addEventListener("click", this.onMouseClick.bind(this));
        }

        this.player.init();
        this.computer.init();
        this.computer.shipsPlacing();
        setTimeout(() => {
            this.mode = GameModes.PlayerPlacing;
            if (this.infoForPlayer) { this.infoForPlayer.innerHTML = ""; }
            if (this.infoForComputer) { this.infoForComputer.innerHTML = "<p>Przeciwnik rozstawia statki...</p>"; }
        }, Timeout)


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
                                    this.player.myBoard.placeOnBoard(x, y, dir, shipLen, this.chosenShip.shipId);
                                    this.update();
                                    this.playerCounter++;
                                    if (this.playerCounter == this.player.ships.length) {
                                        this.computersTurn();
                                    }
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
                        let x = parseInt(el.dataset.x);
                        let y = parseInt(el.dataset.y);

                        let shootingCoords = this.player.playerShooting(x, y);

                        if (shootingCoords) {
                            if (this.computer.isShoot(shootingCoords[0], shootingCoords[1])) {
                                this.player.opponentBoard.hit(shootingCoords[0], shootingCoords[1], true))
                            }
                        }

                        this.update();
                        this.computersTurn();

                    }

                    break;
                case GameModes.ComputerShooting:
                    console.log("Strzelające komputery!")
                    break;
            }
        }
    }

    computersTurn() {
        this.mode = GameModes.ComputerShooting;
        if (this.infoForPlayer) {
            this.infoForPlayer.innerHTML = "Komputer się zastanawia....";
        }

        if (this.infoForComputer) {
            this.infoForComputer.innerHTML = "Twój ruch...";
        }

        setTimeout(() => {
            let shootingCoords = this.computer.computerShooting();
            if (this.player.isShoot(shootingCoords[0], shootingCoords[1])) { //TRAFIŁ
                this.computer.opponentBoard.hit(shootingCoords[0], shootingCoords[1], true)
            }
            this.update();
            this.mode = GameModes.PlayerShooting;

            if (this.infoForComputer) {
                this.infoForComputer.innerHTML = "Ruch przeciwnika...";
            }

            if (this.infoForPlayer) {
                this.infoForPlayer.innerHTML = "Twój ruch....";
            }

        }, Timeout)
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
                                if (this.player.myBoard.canPlaceOnBoard(x, y, this.chosenShip.direction, shipLen)) {
                                    this.pointerShip.style.backgroundColor = "green";
                                } else {
                                    this.pointerShip.style.backgroundColor = "red";
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
        if (this.computer.isDead()) {
            this.mode = GameModes.EndGame;
            console.log("Kompjuter umarł")
            if (this.infoForComputer) {
                this.infoForComputer.innerHTML = "Umarłeś komputerku!.";
            }

            if (this.infoForPlayer) {
                this.infoForPlayer.innerHTML = "Wygrałeś Plejerze!";
            }

        }

        if (this.player.isDead()) {
            console.log("Plejer umarł")
            this.mode = GameModes.EndGame;
            if (this.infoForComputer) {
                this.infoForComputer.innerHTML = "Wygrałeś komputerku!.";
            }

            if (this.infoForPlayer) {
                this.infoForPlayer.innerHTML = "Przegrałeś Plejerze!";
            }


        }

        console.log("UPDATE");
    }
}