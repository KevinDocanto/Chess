export class Board {
  constructor() {
    this.rows = 8;
    this.cols = 8;
    this.tiles = [];
    this.init();
  }

  // Initialize board
  init() {
    let board = document.getElementById('board');
    for (let i = 1; i <= this.rows; i++) {
      for (let j = 1; j <= this.cols; j++) {
        let tile = document.createElement('div');
        tile.setAttribute('id', `${i - 1}_${j - 1}`);
        tile.style.backgroundColor = (i + j) % 2 == 0 ? '#ddb180' : '#7c330c';

        this.tiles.push(tile);
        board.appendChild(tile);
      }
    }
  }
}
