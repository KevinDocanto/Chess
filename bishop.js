import { Piece } from './piece.js';

export class Bishop extends Piece {
  constructor(color) {
    super();
    if (color === 'black') {
      this.x = 110;
      this.y = 0;
    } else {
      this.x = 110;
      this.y = 395;
    }
    this.src = `./img/${color}_bishop.png`;
  }
}
