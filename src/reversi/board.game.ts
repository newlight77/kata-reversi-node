type Row = string[];
export type Board = Row[];
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
  
    constructor(gameBoard: BoardGame, player: Player = "B") {
      this.gameBoard = gameBoard;
      this.player = player;
    }

    play(): Board {
        this.player = switchPlayer(this.player);
        const nextBoard = suggestNextMoves(this.gameBoard.board, this.player);
        return nextBoard;
    }

}


export const boardToString = (board: Board) =>
    board.map((row) => row.join(" ").toString())
        .join(`
`).toString();


export const suggestNextMoves = (board: Board, player: Player): Board => {
    return board;
}


export const switchPlayer = (player: Player): Player => {
    if (player === "B") return "W";
    return "B";
}
