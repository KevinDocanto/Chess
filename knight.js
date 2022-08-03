import { Piece } from './piece.js';

export class Knight extends Piece {
  static white = 0;
  static black = 0;

  constructor(color) {
    super();
    if (color === 'black') {
      this.x = 55;
      this.y = 0;
      this.counter = `knight_${color}` + ++Knight.black;
    } else {
      this.x = 55;
      this.y = 395;
      this.counter = `knight_${color}` + ++Knight.white;
    }
    this.src = `./img/${color}_knight.png`;
  }
}
