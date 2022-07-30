import { Board } from './board.js';
import { Pawn } from './pawn.js';

const board = new Board();
const white_pawns = new Array(8);
const black_pawns = new Array(8);
const pawn_width = 60;
const pawn_height = 50;

let pawn_white_x = 0;
let pawn_white_y = 335;

for (let i = 0; i < white_pawns.length; i++) {
  white_pawns[i] = new Pawn(
    './img/white_pawn.png',
    pawn_white_x,
    pawn_white_y,
    pawn_width,
    pawn_height
  );
  pawn_white_x += 55;
}

let pawn_black_x = 0;
let pawn_black_y = 60;

for (let i = 0; i < black_pawns.length; i++) {
  white_pawns[i] = new Pawn(
    './img/black_pawn.png',
    pawn_black_x,
    pawn_black_y,
    pawn_width,
    pawn_height
  );
  pawn_black_x += 55;
}
