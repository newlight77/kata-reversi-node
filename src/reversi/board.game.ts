type Row = string[];
export type Board = Row[];
export type Player = "B" | "W";
export type Position = { x: number; y: number };
export type Direction = { toX: number, toY: number};

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
  
    constructor(board: Board = initialBoard, player: Player = "W") {
      this.board = board;
      this.player = player;
    }

    play(): Board {
        const nextBoard = suggestNextMoves(this.board, this.player);
        this.player = switchPlayer(this.player);
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
    let suggestedNextMoves: Position[] = [];

    positions.forEach((position) => {
        const possibleMoves = findPossibleMoves(board, position, player);
        suggestedNextMoves.push(...possibleMoves);
    });

    suggestedNextMoves.forEach(({ x, y }) => {
        board[y][x] = "0";
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

    const moveOnRight: Position | null = findPossibleMovesOnByDirection(board, position, player, { toX: 1, toY: 0});
    if (moveOnRight !== null) possibleMoves.push(moveOnRight);
    const moveOnLeft: Position | null = findPossibleMovesOnByDirection(board, position, player, { toX: -1, toY: 0});
    if (moveOnLeft !== null) possibleMoves.push(moveOnLeft);
    const moveTowardTop: Position | null = findPossibleMovesOnByDirection(board, position, player, { toX: 0, toY: -1});
    if (moveTowardTop !== null) possibleMoves.push(moveTowardTop);

    return possibleMoves;
}

export const findPossibleMovesOnByDirection = (board: Board, position: Position, player: Player, direction: Direction): Position | null => {
    let x = position.x + direction.toX;
    let y = position.y + direction.toY;
    while ( guardDimension(board, x, y) && board[y][x] === opponent(player) ) {
        x += direction.toX;
        y += direction.toY;
        if (guardDimension(board, x, y) && board[y][x] === ".") return { x, y };
    }
    return null;
}

const guardDimension = (board: Board, x: number, y: number) => 
    (0 <= x && x < board[y].length) 
    && (0 <= y && y < board.length)