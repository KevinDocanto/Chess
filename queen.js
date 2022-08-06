import { Piece } from './piece.js';

export class Queen extends Piece {
  static id = 0;
  constructor(color) {
    super();
    this.id = Queen.id++;
    this.src = `./img/${color}_queen.png`;
  }

  moves(currentPosition) {
    let row = parseInt(currentPosition[0]);
    let col = parseInt(currentPosition[2]);

    let possible_moves = {};

    possible_moves[row - 1] = [col, col + 1, col - 1];
    possible_moves[row] = [col + 1, col - 1];
    possible_moves[row + 1] = [col, col + 1, col - 1];
  }
}
