import { Piece } from './piece.js';

export class King extends Piece {
  static white = 0;
  static black = 0;

  constructor(color) {
    super();
    if (color === 'black') {
      this.counter = `king_${color}` + ++King.black;
    } else {
      this.counter = `king_${color}` + ++King.white;
    }
    this.src = `./img/${color}_king.png`;
  }
}
