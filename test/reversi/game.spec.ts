import { type Board, BoardGame, Game, boardToString, Player, switchPlayer } from "../../src/index";


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
        const boardGame = new BoardGame(board);
        const game = new Game(boardGame, playerB);

        // Act
        const displayedBoard = game.play()

        // Assert
        expect(boardToString(displayedBoard) ).toEqual(boardToString(expectedBoard));
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