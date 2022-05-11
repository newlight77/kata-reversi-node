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

export class Game {
    board: Board;
    player: Player;
  
    constructor(board: Board = initialBoard, player: Player = "B") {
      this.board = board;
      this.player = player;
    }

    play(): Board {
        this.player = switchPlayer(this.player);
        const nextBoard = suggestNextMoves(this.board, this.player);
        return nextBoard;
    }

}


export const displayBoard = (board: Board) =>
    board.map((row) => row.join(" ").toString())
        .join(`
`).toString();

export const switchPlayer = (player: Player): Player => {
    if (player === "B") return "W";
    return "B";
}

export const suggestNextMoves = (board: Board, player: Player): Board => {
    
    return board;
}
