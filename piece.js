export class Piece {
  constructor() {}

  // Inserts a piece to board
  insertPiece(tile) {
    let image = document.createElement('img');
    image.setAttribute(
      'id',
      this.src.substring(6, this.src.length - 4) + '_' + `${this.id}`
    );
    image.src = this.src;
    tile.appendChild(image);
  }
}
