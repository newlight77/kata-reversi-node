import type { Board, Player, Position } from "./reversi/board.game";
import { Game } from "./reversi/board.game";
import { displayBoard, switchPlayer, suggestNextMoves, findPositions, findPossibleMoves } from "./reversi/board.game";

export type { Board, Player, Position };
export { Game };
export { displayBoard, switchPlayer, suggestNextMoves, findPositions, findPossibleMoves };
