import { Piece } from './piece.js';

export class Pawn extends Piece {
  constructor(color) {
    super();
    if (color === 'black') {
      this.x = 200;
      this.y = 300;
    } else {
      this.x = 200;
      this.y = 5;
    }
    this.src = `./img/${color}_pawn.png`;
  }
}
