export class Piece {
  constructor() {
    this.w = 60;
    this.h = 50;
  }

  // Inserts a piece to board
  insertPiece(tile) {
    let image = document.createElement('img');
    image.src = this.src;
    tile.appendChild(image);
  }
}
