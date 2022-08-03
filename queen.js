import { Piece } from './piece.js';

export class Queen extends Piece {
  static white = 0;
  static black = 0;

  constructor(color) {
    super();
    if (color === 'black') {
      this.x = 165;
      this.y = 0;
      this.counter = `queen_${color}` + ++Queen.black;
    } else {
      this.x = 165;
      this.y = 395;
      this.counter = `queen_${color}` + ++Queen.white;
    }
    this.src = `./img/${color}_queen.png`;
  }
}
