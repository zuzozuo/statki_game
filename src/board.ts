import { ShipDirection, BoardWidth, BoardHeight } from "./enums";

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
        // console.log(mainDiv)
        let html: string = "";
        let div: HTMLElement | null = document.getElementById(mainDiv);

        for (let y = 0; y < this.board.length; y++) {
            html += '<div class="y">'
            for (let x = 0; x < this.board[y].length; x++) {
                if (this.board[y][x] != 0 && this.board[y][x] != -2 && this.board[y][x] != -1) {
                    html += '<div class="x"  style = "background-color: rgba(87,48,50, 0.5)"  data-x="' + x + '" data-y="' + y + '" data-shipId="' + this.board[y][x] + '">' + ""/*this.board[y][x]*/ + '</div>';
                } else if (this.board[y][x] == -2) {
                    html += '<div class="x" style="background-color: black" data-x="' + x + '" data-y="' + y + '" data-shipId="' + this.board[y][x] + '">' + ""/*this.board[y][x]*/ + '</div>';
                } else if (this.board[y][x] == -1) {
                    html += '<div class="x" style="background-color: yellow" data-x="' + x + '" data-y="' + y + '" data-shipId="' + this.board[y][x] + '">' + ""/*this.board[y][x]*/ + '</div>';
                } else {
                    html += '<div class="x" data-x="' + x + '" data-y="' + y + '" data-shipId="' + this.board[y][x] + '">' + ""/*this.board[y][x]*/ + '</div>';
                }
            }
            html += '</div>'
        }

        if (div) {
            div.innerHTML = html;
        }

    }

    canPlaceOnBoard(x: number, y: number, dir: number, len: number) {
        let blocksPositions = [];
        let dV = ShipDirection.Vertical;
        //let dH = ShipDirection.Horizontal;

        if (dir == dV) {
            for (let i = 0; i < len; i++) {
                blocksPositions.push([x, y]);
                if (y > BoardHeight - 1) {
                    return false;
                }
                y++;
            }
        } else {
            for (let i = 0; i < len; i++) {
                blocksPositions.push([x, y]);
                if (x > BoardWidth - 1) {
                    return false;
                }
                x++;
            }
        }



        for (let i = 0; i < blocksPositions.length; i++) {
            for (let j = -1; j <= 1; j++) {
                for (let k = -1; k <= 1; k++) {
                    let boardX = blocksPositions[i][0] + j;
                    let boardY = blocksPositions[i][1] + k;

                    if (boardX >= 0 && boardY >= 0 && boardX < 10 && boardY < 10) {
                        if (this.board[boardY][boardX] != 0) {
                            return false;
                        }
                    }

                }
            }
        }
        return true;
    }

    placeOnBoard(x: number, y: number, dir: number, len: number, id: number) {
        let blocksPositions = [];
        let dV = ShipDirection.Vertical;
        //let dH = ShipDirection.Horizontal;

        if (dir == dV) {
            for (let i = 0; i < len; i++) {
                blocksPositions.push([x, y]);
                y++;
            }
        } else {
            for (let i = 0; i < len; i++) {
                blocksPositions.push([x, y]);
                x++;
            }
        }

        for (let i = 0; i < blocksPositions.length; i++) {
            let boardX = blocksPositions[i][0];
            let boardY = blocksPositions[i][1];
            this.board[boardY][boardX] = id;
        }
    }



    hit(x: number, y: number, isAccurate: boolean) {
        if (isAccurate) {
            this.board[y][x] = -2;
        } else {
            this.board[y][x] = -1;
        }
    }



}