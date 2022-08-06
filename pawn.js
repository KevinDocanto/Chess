import { Piece } from './piece.js';

export class Pawn extends Piece {
  static id = 0;
  constructor(color) {
    super();
    this.id = Pawn.id++;
    this.src = `./img/${color}_pawn.png`;
  }

  moves(currentPosition, color) {
    let row = parseInt(currentPosition[0]);
    let col = parseInt(currentPosition[2]);

    let possible_moves = {};

    if (color === 'white') {
      possible_moves[row - 1] = [col];
      possible_moves[row - 2] = [col];
    } else {
      possible_moves[row + 1] = [col];
      possible_moves[row + 2] = [col];
    }

    console.log(possible_moves);

    return possible_moves;
  }
}
