export class Board {
  constructor() {
    this.rows = 8;
    this.cols = 8;
    this.len = this.rows * this.cols;
    this.lightCellColor = '#ddb180';
    this.darkCellColor = '#7c330c';
    this.tiles = [];
    this.init();
  }

  // Initialize board
  init() {
    let board = document.getElementById('board');
    for (let i = 1; i <= this.rows; i++) {
      for (let j = 1; j <= this.cols; j++) {
        let tile = document.createElement('div');
        tile.setAttribute('id', `${i}_${j}`);
        tile.style.backgroundColor =
          (i + j) % 2 == 0 ? this.lightCellColor : this.darkCellColor;

        this.tiles.push(tile);
        board.appendChild(tile);
      }
    }
  }
}
