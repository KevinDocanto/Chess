import { Tile } from './tile.js';

export class Board extends Tile {
  constructor() {
    super();
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.rows = 8;
    this.cols = 8;
    this.len = this.rows * this.cols;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.lightCellColor = '#ddb180';
    this.darkCellColor = '#7c330c';
    this.tiles = [];
    this.createBoard();
  }

  createBoard() {
    let delta = this.width / this.cols;
    for (let i = 1; i <= this.rows; i++) {
      for (let j = 1; j <= this.cols; j++) {
        this.ctx.fillStyle =
          (i + j) % 2 == 0 ? this.lightCellColor : this.darkCellColor;
        this.ctx.fillRect(delta * (i - 1), delta * (j - 1), delta, delta);
        this.tiles.push({ x: delta * (i - 1), y: delta * (j - 1) });
        console.log(this.tiles[i]);
      }
    }
  }
}
