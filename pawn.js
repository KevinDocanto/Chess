import { Piece } from './piece.js';

export class Pawn extends Piece {
  constructor(img, x, y, w, h) {
    super();
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.displayPiece(img, this.x, this.y, this.w, this.h);
  }
}
