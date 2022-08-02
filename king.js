import { Piece } from './piece.js';

export class King extends Piece {
  constructor(color) {
    super();
    if (color === 'black') {
      this.x = 220;
      this.y = 0;
    } else {
      this.x = 220;
      this.y = 395;
    }
    this.src = `./img/${color}_king.png`;
  }
}
