export class Piece {
  constructor() {}

  displayPiece(piece, x, y, w, h) {
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    let img = new Image();
    img.src = piece;
    img.width = w;
    img.height = h;
    img.onload = function () {
      ctx.drawImage(img, x, y, img.width, img.height);
    };
  }
}
