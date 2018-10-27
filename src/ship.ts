
export class Ship {
    length: number
    constructor(length: number) {
        this.length = length
        console.log("Tworze nowy ship o dł: " + this.length)
    }

    drawOnMenu(menu: HTMLElement, callBack: EventHandlerNonNull) {
        const shipContainer = document.createElement('div')
        shipContainer.className = 'shipContainer'
        for (let i = 0; i < this.length; i++) {
            shipContainer.innerHTML += '<div class="shipBlock"></div>'
        }
        shipContainer.addEventListener("click", callBack)
        menu.appendChild(shipContainer);
    }

}