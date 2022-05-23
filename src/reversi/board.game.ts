import { EOL } from "os";

type EMPTY = ".";
type POSSIBLE_MOVE = "0";
export type Player = "B" | "W";
type Cell = EMPTY | POSSIBLE_MOVE | Player;
export type Board = Cell[][];

export type Position = { x: number; y: number };
type Direction = { toX: number, toY: number};


const directions = {
    TO_RIGHT: { toX: 1, toY: 0 },
    TO_LEFT: { toX: -1, toY: 0 },
    TO_TOP: { toX: 0, toY: -1 },
    TO_BOTTOM: { toX: 0, toY: 1 },
    TO_TOPRIGHT: { toX: 1, toY: -1 },
    TO_TOPLEFT: { toX: -1, toY: -1 },
    TO_BOTTOMRIGHT: { toX: 1, toY: 1 },
    TO_BOTTOMLEFT: { toX: -1, toY: 1 },
};

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
    board
        .map((row) => row.join(" "))
        .join(EOL);

export const switchPlayer = (player: Player): Player => 
    player === "B" ? "W" : "B";

export const opponent = switchPlayer;

export const suggestNextMoves = (board: Board, player: Player): Board => {
    findPositions(board, player)
        .flatMap((position) => findPossibleMoves(board, position, player))
        .forEach(({ x, y }) => {
            board[y][x] = "0";
        });
    return board;
}

export const findPositions = (board: Board, player: Player): Position[] => {
    const positions: Position[] = [];

    board.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            cell === player ? positions.push({ x: cellIndex, y: rowIndex }) : null
        });
    });
    return positions;
}

export const findPossibleMoves = (board: Board, position: Position, player: Player) => {
    const possibleMoves: Position[] = [];

    Object.values(directions).forEach(({ toX, toY }) => {
        const move: Position | null = findPossibleMovesOnByDirection(board, position, player, { toX, toY});
        if (move !== null) possibleMoves.push(move);    
    });

    return possibleMoves;
}

const findPossibleMovesOnByDirection = (board: Board, position: Position, player: Player, direction: Direction): Position | null => {
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