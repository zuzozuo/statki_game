import { User } from "./user"
import { BoardWidth, BoardHeight, ShipDirection } from "./enums"
export class Computer extends User {
    DBU: string = "BoardComputer"; //DivBoardUser
    constructor() {
        super();
        //console.log("Uruchamiam konstruktor klasy COMPUTER");
    }

    shipsPlacing() {
        for (let i = this.ships.length - 1; i >= 0; i--) {
            while (true) {
                let randX = Math.floor((Math.random() * BoardWidth));
                let randY = Math.floor((Math.random() * BoardHeight));
                let randDir;

                if (Math.floor((Math.random() * 2)) == 0) {
                    randDir = ShipDirection.Vertical;
                } else {
                    randDir = ShipDirection.Horizontal;
                }

                if (this.myBoard.canPlaceOnBoard(randX, randY, randDir, this.ships[i].length)) {
                    this.myBoard.placeOnBoard(randX, randY, randDir, this.ships[i].length, this.ships[i].shipId)
                    break;
                }
            }

        }
    }
}