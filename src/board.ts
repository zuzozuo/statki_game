export class Board {
    board: number[][]
    constructor() {
        this.board = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    }

    draw(mainDiv: string) {
        console.log(mainDiv)
        let html: string = "";
        let div: HTMLElement | null = document.getElementById(mainDiv);

        for (let y = 0; y < this.board.length; y++) {
            html += '<div class="y">'
            for (let x = 0; x < this.board[y].length; x++) {
                html += '<div class="x" data-x="' + x + '" data-y="' + y + '">' + this.board[y][x] + '</div>';
            }
            html += '</div>'
        }

        if (div) {
            div.innerHTML = html;
        }



    }

}