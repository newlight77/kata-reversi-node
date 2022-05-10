import { type Board, BoardGame, boardToString } from "../../src/index";

describe("Display board", function () {
    test("Should return an empty board", function () {
        // Arrange
        const gameBoard = new BoardGame();

        // Act 
        const displayedBoard = gameBoard.display();

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
        const gameBoard = new BoardGame(initialBoard);

        // Act 
        const displayedBoard = gameBoard.display();

        // Assert
        expect(displayedBoard).toEqual(boardToString(expectedBoard));
    });
});
