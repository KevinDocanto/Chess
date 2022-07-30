import { Piece } from './piece.js';

export class King extends Piece {
  constructor(img, x, y) {
    super();
    this.x = x;
    this.y = y;
    this.displayPiece(img, this.x, this.y);
  }
}
