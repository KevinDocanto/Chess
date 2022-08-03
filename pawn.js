import { Piece } from './piece.js';

export class Pawn extends Piece {
  static white = 0;
  static black = 0;
  constructor(color) {
    super();
    if (color === 'black') {
      this.x = 0;
      this.y = 60;
      this.counter = `pawn_${color}` + ++Pawn.black;
    } else {
      this.x = 0;
      this.y = 335;
      this.counter = `pawn_${color}` + ++Pawn.white;
    }
    this.src = `./img/${color}_pawn.png`;
  }
}
