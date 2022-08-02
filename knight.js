import { Piece } from './piece.js';

export class Knight extends Piece {
  constructor(color) {
    super();
    if (color === 'black') {
      this.x = 55;
      this.y = 0;
    } else {
      this.x = 55;
      this.y = 395;
    }
    this.src = `./img/${color}_knight.png`;
  }
}
