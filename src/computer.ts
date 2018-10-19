import { User } from "./user"
export class Computer extends User {
    DBU: string = "BoardComputer"; //DivBoardUser
    constructor() {
        super();
        //console.log("Uruchamiam konstruktor klasy COMPUTER");
    }
}