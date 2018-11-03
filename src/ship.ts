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

    changeDirectionStyle(dir: ShipDirection, div: HTMLElement, len: number) {
        console.log(dir, div);
        switch (dir) {
            case ShipDirection.Horizontal:
                div.style.height = "22px";
                div.style.width = String(len * 22) + "px";
                break;
            case ShipDirection.Vertical:
                div.style.width = "22px";
                div.style.height = String(len * 22) + "px";
                break;
        }

    }





}