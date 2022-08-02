import { Piece } from './piece.js';

export class Rook extends Piece {
  constructor(color) {
    super();
    if (color === 'black') {
      this.x = 0;
      this.y = 0;
    } else {
      this.x = 0;
      this.y = 395;
    }
    this.src = `./img/${color}_rook.png`;
  }
}
