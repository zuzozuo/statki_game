import { Board } from "./board"
import { Ships } from "./ships"
export class User {
    myBoard: Board
    opponentBoard: Board
    DBU: string = ""
    constructor() {
        this.myBoard = new Board();
        this.opponentBoard = new Board();
        //console.log("Uruchamiam konstruktor klasy USER")
    }

    update() {
        this.myBoard.draw(this.DBU + "Mine");
        this.opponentBoard.draw(this.DBU + "Opponent");

    }

}