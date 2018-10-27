import { User } from "./user"
export class Player extends User {
    DBU: string = "BoardPlayer" //DivBoardUser
    constructor() {
        super();
        // console.log("Uruchamiam konstruktor klasy PLAYER")
    }

    drawMenu(menu: HTMLElement, callBack: EventHandlerNonNull) {
        for (let i = this.ships.length - 1; i >= 0; i--) {
            this.ships[i].drawOnMenu(menu, callBack);
        }
    }

}