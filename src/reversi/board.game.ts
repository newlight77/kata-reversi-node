type Row = string[];
export type Board = Row[];

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
  
    constructor(gameBoard: BoardGame) {
      this.gameBoard = gameBoard;
    }

    play(board = this.gameBoard.board): Board {
        return board;
    }
}