import { type Board, BoardGame, Game, boardToString } from "../../src/index";


describe("Display board in a game play", function () {
    let game: Game;
    let boardGame: BoardGame;

    beforeAll(() => {
        boardGame = new BoardGame();
        game = new Game(boardGame);
    });
  
    test("Should display board properly when playing", function () {
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

        const boardGame = new BoardGame();
        const game = new Game(boardGame);

        // Act
        const displayedBoard = game.play(initialBoard)

        // Assert
        expect(boardToString(displayedBoard) ).toEqual(boardToString(expectedBoard));
    });
  
  });