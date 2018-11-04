import { Board } from "./board"
import { Ship } from "./ship"
import { Ships } from "./enums"
export class User {
    myBoard: Board
    opponentBoard: Board
    DBU: string = ""
    ships: Ship[]
    sunkenShips: Ship[]
    constructor() {
        this.myBoard = new Board();
        this.opponentBoard = new Board();
        this.ships = []
        this.sunkenShips = [];
        //console.log("Uruchamiam konstruktor klasy USER")
    }

    init() {
        for (let i = 0; i < Ships.length; i++) {
            this.ships.push(new Ship(Ships[i], i + 1))
        }

    }

    update() {
        this.myBoard.draw(this.DBU + "Mine");
        this.opponentBoard.draw(this.DBU + "Opponent");



    }

    isDead() {
        for (let i = 0; i < this.ships.length; i++) {
            if (this.ships[i].isSunken == true) {
                console.log("zatopiony!");
                this.sunkenShips.push(this.ships[i]);
                this.ships.splice(i, 1)
            }
        }

        if (this.sunkenShips.length == Ships.length) {
            return true
        }
        return false;
    }

    isShoot(x: number, y: number) {
        if (this.myBoard.board[y][x] != 0) {
            let shipInfo = this.myBoard.board[y][x];
            for (let i = 0; i < this.ships.length; i++) {
                if (this.ships[i].shipId == shipInfo) {
                    this.ships[i].addHitCounter();
                }
            }
            return true;
        } else {
            return false;
        }
    }



}