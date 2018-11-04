export enum GameModes {
    NothingHappens,
    PlayerPlacing,
    ComputerPlacing,
    PlayerShooting,
    ComputerShooting,
    EndGame
}

export enum ShipDirection {
    Vertical,
    Horizontal
}

export const BoardWidth = 10;
export const BoardHeight = 10;
export const Ships = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
export const Timeout = 1000;