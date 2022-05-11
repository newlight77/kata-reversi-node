import { type Board, Game, displayBoard, Player, switchPlayer } from "../../src/index";


describe("Display board in a game play", function () {
  
    test("Should display board properly when playing", function () {
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
            [".", ".", ".", "B", "W", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
        ];

        const playerB = "B";
        const game = new Game(board, playerB);

        // Act
        const displayedBoard = game.play()

        // Assert
        expect(displayBoard(displayedBoard) ).toEqual(displayBoard(expectedBoard));
    });

    test("Should change player at next turn from B to W", function() {
        // Arrange
        const board: Board = [];

        const currentPlayer = "B";

        // Act
        const nextPlayer = switchPlayer(currentPlayer);

        // Assert
        expect(nextPlayer).toEqual("W");
    });
  
    test("Should change player at next turn from W to B", function() {
        // Arrange
        const board: Board = [];

        const currentPlayer = "W";

        // Act
        const nextPlayer = switchPlayer(currentPlayer);

        // Assert
        expect(nextPlayer).toEqual("B");
    });
  });