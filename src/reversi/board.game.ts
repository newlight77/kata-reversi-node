type Row = string[];
export type Board = Row[];


//export const PlayerB = "B";
//export const PlayerW = "W";
export type Player = "B" | "W";

const initialBoard: Board = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "B", "W", ".", ".", "."],
    [".", ".", ".", "W", "B", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
];

export const boardToString = (board: Board) =>
    board.map((row) => row.join(" ").toString())
        .join(`
`).toString();



export class BoardGame {
    board: Board;
    
    constructor(board = initialBoard) {
        this.board = board;
    }

    display(): string {
       return boardToString(this.board);
    }
}

export class Game {
    gameBoard: BoardGame;
    player: Player;
  
    constructor(gameBoard: BoardGame, player: Player) {
      this.gameBoard = gameBoard;
      this.player = player;
    }

    play(): Board {
        return this.gameBoard.board;
    }
}