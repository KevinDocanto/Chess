import { Piece } from './piece.js';

export class Bishop extends Piece {
  static white = 0;
  static black = 0;

  constructor(color) {
    super();
    if (color === 'black') {
      this.x = 110;
      this.y = 0;
      this.counter = `bishop_${color}` + ++Bishop.black;
    } else {
      this.x = 110;
      this.y = 395;
      this.counter = `bishop_${color}` + ++Bishop.white;
    }
    this.src = `./img/${color}_bishop.png`;
  }
}
