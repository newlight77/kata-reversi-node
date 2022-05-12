type Row = string[];
export type Board = Row[];
export type Player = "B" | "W";
export type Position = { x: number; y: number };

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

export const switchPlayer = (player: Player): Player => 
    player === "B" ? "W" : "B";

export const suggestNextMoves = (board: Board, player: Player): Board => {
    const positions = findPositions(board, player);
    const suggestedNextMoves: Position[] = [];

    positions.forEach((position) => {
        const possibleMoves = findPossibleMoves(board, position, player);
    });

    return board;
}

export const findPositions = (board: Board, player: Player): Position[] => {
    const positions: Position[] = [];

    board.map((row, rowIndex) => {
        row.map((cell, cellIndex) => {
            cell === player ? positions.push({ x: cellIndex, y: rowIndex }) : null
        });
    });
    return positions;
}

export const findPossibleMoves = (board: Board, position: Position, player: Player) => {
    const possibleMoves: Position[] = [];

    const moveOnRight: Position = findPossibleMovesOnRight(board, position, player);
    if (moveOnRight) possibleMoves.push(moveOnRight);

    return possibleMoves;
}

export const findPossibleMovesOnRight = (board: Board, position: Position, player: Player) => {
    let i = 1;
    let x = position.x + i;
    let y = position.y;
    while ( 0 <= y && y < board[x].length) {
        if (board[y][x] === ".") return { x, y: y };
        x = position.x + ++i;
    }
    return {x: 0, y: 0};
}



