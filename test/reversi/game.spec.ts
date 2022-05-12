import { type Board, Game, Player } from "../../src/index";
import { displayBoard, switchPlayer } from "../../src/index";


describe("Display the board with moves in a game play", function () {
  
    test("Should display suggested moves on the board for a playser", function () {
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