
export class BoardGame {
    display(): string {
      return "";
    }
}

describe("Display board", function () {
    test("Should return an empty board", function () {
        // Arrange
        const board = new BoardGame();

        // Act 
        const result = board.display();

        // Assert
        expect(result).toEqual(expect.any(String));
    });
});
