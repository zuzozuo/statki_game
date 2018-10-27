import { ShipDirection } from "./enums"
export class Ship {
    length: number
    direction: ShipDirection
    constructor(length: number) {
        this.length = length
        this.direction = ShipDirection.Vertical
        //console.log("Tworze nowy ship o dł: " + this.length)
    }

    drawOnMenu(menu: HTMLElement, callBack: Function) {

        const shipContainer = document.createElement('div')
        shipContainer.className = 'shipContainer'
        shipContainer.innerHTML = this.returnShipContainer()

        menu.appendChild(shipContainer);
        shipContainer.addEventListener("click", () => {
            if (callBack(this) == true) {
                menu.removeChild(shipContainer)
            }

        })
    }

    returnShipContainer() {
        let text = ''
        for (let i = 0; i < this.length; i++) {
            text += '<div class="shipBlock"></div>'
        }

        return text;
    }



}