import { Tile } from './tile.js';

export class Board extends Tile {
  constructor() {
    super();
    this.len = 64;
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.createBoard();
  }

  createBoard() {
    let count_row = 1;
    for (let i = 0, j = 0; i < this.len; i++) {
      if (i > 0 && i % 8 == 0) {
        this.x = 5;
        this.y += 55;
        if (count_row % 2 == 0) {
          this.color(this.ctx, 'gray');
        } else {
          this.color(this.ctx, 'purple');
        }
        count_row += 1;
        this.x += 55;
        continue;
      }

      if (j % 2 == 0) {
        this.color(this.ctx, 'gray');
      } else {
        this.color(this.ctx, 'purple');
      }

      this.x += 55;
      j += 1;
    }
  }
}
