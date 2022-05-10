type Row = string[];
export type Board = Row[];

const initialState: Board = [
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
    state: Board;
    
    constructor(state = initialState) {
        this.state = state;
    }

    display(): string {
       return boardToString(this.state);
    }
}