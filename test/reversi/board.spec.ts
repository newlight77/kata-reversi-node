import { type Board, Position, displayBoard, suggestNextMoves, findPositions, findPossibleMoves } from "../../src/index";

describe("Display board", function () {
    test("Should display a board", function () {
        // Arrange
        const board: Board = [
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", "B", "W", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
        ];

        // Act 
        const displayedBoard = displayBoard(board);

        // Assert
        expect(displayedBoard).toEqual(expect.any(String));
    });

    test("Should suggest legal moves for the next turn of player with black", function () {
        // Arrange
        const board: Board = [
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
            [".", ".", ".", "B", "W", "0", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
        ];

        const playerB = "B";

        // Act
        const displayedBoard = suggestNextMoves(board, playerB);

        // Assert
        expect(displayBoard(displayedBoard) ).toEqual(displayBoard(expectedBoard));
    });

    test("Should find positions of a player B", function () {
        // Arrange
        const board: Board = [
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", "B", "W", ".", ".", "."],
            [".", ".", ".", "W", "B", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
        ];
        const expectPositions: Position[] = [
            {x:3,y:3}, {x:4,y:4}
        ];

        const playerB = "B";

        // Act
        const positions = findPositions(board, playerB);

        // Assert
        expect(positions).toEqual(expectPositions);
    });

    test("Should find possible moves for a player B", function () {
        // Arrange
        const board: Board = [
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", "B", "W", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
        ];
        const expectMove: Position[] = [
            {x:3,y:5}
        ];

        const playerB = "B";

        // Act
        const positions = findPossibleMoves(board, {x:3,y:3}, playerB);

        // Assert
        expect(positions).toEqual(expectMove);
    });
});
