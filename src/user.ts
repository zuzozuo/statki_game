import { Board } from "./board"
import { Ship } from "./ship"
import { Ships } from "./enums"
export class User {
    myBoard: Board
    opponentBoard: Board
    DBU: string = ""
    ships: Ship[]
    constructor() {
        this.myBoard = new Board();
        this.opponentBoard = new Board();
        this.ships = []
        //console.log("Uruchamiam konstruktor klasy USER")
    }

    init() {
        for (let i = 0; i < Ships.length; i++) {
            this.ships.push(new Ship(Ships[i]))
        }

    }

    update() {
        this.myBoard.draw(this.DBU + "Mine");
        this.opponentBoard.draw(this.DBU + "Opponent");

    }

}