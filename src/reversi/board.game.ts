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

export const opponent = switchPlayer;

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

    const moveOnRight: Position | null = findPossibleMovesOnRight(board, position, player);
    if (moveOnRight !== null) possibleMoves.push(moveOnRight);
    const moveOnLeft: Position | null = findPossibleMovesOnLeft(board, position, player);
    if (moveOnLeft !== null) possibleMoves.push(moveOnLeft);

    return possibleMoves;
}

export const findPossibleMovesOnRight = (board: Board, position: Position, player: Player): Position | null => {
    let i = 1;
    let x = position.x + i;
    let y = position.y;
    while ( guardDimension(board, x, y) && board[y][x] === opponent(player) ) {
        x = position.x + ++i;
        if (guardDimension(board, x, y) && board[y][x] === ".") return { x, y };
    }
    return null;
}

export const findPossibleMovesOnLeft = (board: Board, position: Position, player: Player): Position | null => {
    let i = -1;
    let x = position.x + i;
    let y = position.y;
    while ( guardDimension(board, x, y) && board[y][x] === opponent(player) ) {
        x = position.x + --i;
        if (guardDimension(board, x, y) && board[y][x] === ".") return { x, y };
    }
    return null;
}

const guardDimension = (board: Board, x: number, y: number) => 
    (0 <= x && x < board[y].length) 
    && (0 <= y && y < board.length)