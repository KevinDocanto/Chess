import { Board } from './board.js';
import { Pawn } from './pawn.js';

const board = new Board();
const white_pawns = new Array(8);
const black_pawns = new Array(8);

let pawn_white_x = 0;
let pawn_white_y = 335;

let pawn_black_x = 0;
let pawn_black_y = 60;

displayPieces = function (pieces, img, x, y) {
  for (let i = 0; i < pieces.length; i++) {
    white_pawns[i] = new Pawn(img, x, y);
    x += 55;
  }
};

displayPieces(white_pawns, './img/white_pawn.png', pawn_white_x, pawn_white_y);
displayPieces(black_pawns, './img/black_pawn.png', pawn_black_x, pawn_black_y);
