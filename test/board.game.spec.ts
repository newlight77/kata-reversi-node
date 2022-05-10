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

const boardToString = (board: Board) =>
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

describe("Display board", function () {
    test("Should return an empty board", function () {
        // Arrange
        const board = new BoardGame();

        // Act 
        const displayedBoard = board.display();

        // Assert
        expect(displayedBoard).toEqual(expect.any(String));
    });


    test("Should return an empty board", function () {
        // Arrange
        const initialBoard: Board = [
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", "B", "W", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
        ];
        const expectedBoard: Board = [
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", "B", "W", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
        ];
        const board = new BoardGame(initialBoard);

        // Act 
        const displayedBoard = board.display();

        // Assert
        expect(displayedBoard).toEqual(boardToString(expectedBoard));
    });
});
