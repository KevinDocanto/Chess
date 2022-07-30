import { Piece } from './piece.js';

export class Pawn extends Piece {
  constructor(img, x, y) {
    super();
    this.x = x;
    this.y = y;
    this.w = 60;
    this.h = 50;
    this.displayPiece(img, this.x, this.y, this.w, this.h);
  }
}
