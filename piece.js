export class Piece {
  constructor() {
    this.w = 60;
    this.h = 50;
  }

  displayPiece(piece, x, y) {
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    let img = new Image();
    img.src = piece;
    img.width = this.w;
    img.height = this.h;
    img.onload = function () {
      ctx.drawImage(img, x, y, img.width, img.height);
    };
  }
}
