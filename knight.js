import { Piece } from './piece.JS';

export class Knight extends Piece {
  constructor(color) {
    super();
    if (color === 'black') {
      this.x = 55;
      this.y = 5;
    } else {
      this.x = 55;
      this.y = 390;
    }
    this.src = `./img/${color}_knight.png`;
  }
}
