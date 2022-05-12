import { type Board, Game, displayBoard, Player, switchPlayer } from "../../src/index";


describe("Display board in a game play", function () {
  
    test("Should display board properly when playing", function () {
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
        const expectedBoard: Board = [
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", "0", ".", ".", ".", "."],
            [".", ".", "0", "B", "W", ".", ".", "."],
            [".", ".", ".", "W", "B", "0", ".", "."],
            [".", ".", ".", ".", "0", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
        ];

        const firstPlayer = "W";
        const game = new Game(board, firstPlayer);

        // Act
        const displayedBoard = game.play()

        // Assert
        expect(displayBoard(displayedBoard) ).toEqual(displayBoard(expectedBoard));
    });

  });