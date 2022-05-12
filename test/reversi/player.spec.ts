import { type Board, Player } from "../../src/index";
import { switchPlayer } from "../../src/index";


describe("Switching palyer", function () {
  
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