import { type Board, Game, displayBoard, Player, switchPlayer } from "../../src/index";


describe("Display board in a game play", function () {
  
    test("Should display board properly when playing", function () {
        // Arrange
        const board: Board = [
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", "B", "W", ".", ".", "."],
            [".", "W", ".", "W", "B", ".", "B", "."],
            [".", ".", "B", ".", ".", "W", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
        ];
        const expectedBoard: Board = [
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            [".", ".", "0", "0", ".", ".", ".", "."],
            [".", ".", "0", "B", "W", ".", ".", "0"],
            [".", "W", ".", "W", "B", "0", "B", "."],
            [".", ".", "B", ".", "0", "W", ".", "."],
            [".", "0", ".", "0", ".", ".", ".", "."],
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