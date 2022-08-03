import { Piece } from './piece.js';

export class Rook extends Piece {
  static white = 0;
  static black = 0;

  constructor(color) {
    super();
    if (color === 'black') {
      this.x = 0;
      this.y = 0;
      this.counter = `rook_${color}` + ++Rook.black;
    } else {
      this.x = 0;
      this.y = 395;
      this.counter = `rook_${color}` + ++Rook.white;
    }
    this.src = `./img/${color}_rook.png`;
  }
}
