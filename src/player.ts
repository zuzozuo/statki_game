import { User } from "./user"
export class Player extends User {
    DBU: string = "BoardPlayer" //DivBoardUser
    constructor() {
        super();
        // console.log("Uruchamiam konstruktor klasy PLAYER")
    }

    drawMenu(menu: HTMLElement, callBack: Function) {
        for (let i = this.ships.length - 1; i >= 0; i--) {
            this.ships[i].drawOnMenu(menu, callBack);
        }
    }

    playerShooting(x: number, y: number) {
        if (this.opponentBoard.board[y][x] == 0) { ///MOŻE STRZELIĆ ALE NIE TRAFIŁ
            this.opponentBoard.hit(x, y, false);
            return ([x, y]);
        } else if (this.opponentBoard.board[y][x] == -1 || this.opponentBoard.board[y][x] == -2) {
            return false;
        }

    }