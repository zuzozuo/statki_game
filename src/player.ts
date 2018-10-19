import { User } from "./user"
export class Player extends User {
    DBU: string = "BoardPlayer" //DivBoardUser
    constructor() {
        super();
        // console.log("Uruchamiam konstruktor klasy PLAYER")
    }

}