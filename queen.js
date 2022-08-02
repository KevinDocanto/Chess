import { Piece } from './piece.js';

export class Queen extends Piece {
  constructor(color) {
    super();
    if (color === 'black') {
      this.x = 165;
      this.y = 0;
    } else {
      this.x = 165;
      this.y = 395;
    }
    this.src = `./img/${color}_queen.png`;
  }
}
