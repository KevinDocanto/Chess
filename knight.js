import { Piece } from './piece.js';

export class Knight extends Piece {
  static id = 0;
  constructor(color) {
    super();
    this.id = Knight.id++;
    this.src = `./img/${color}_knight.png`;
  }
}
