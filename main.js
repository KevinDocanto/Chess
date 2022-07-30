import { Board } from './board.js';
import { King } from './king.js';
import { Pawn } from './pawn.js';

// Display board
const board = new Board();

// Array will keep track of teams
const white_team = new Array(16);
const black_team = new Array(16);

// King piece
const white_king = new King('./img/white_king.png', 220, 390);
const black_king = new King('./img/black_king.png', 220, 5);

// Array of pawns
const white_pawns = new Array(8);
const black_pawns = new Array(8);

// White and black pawns start position.
let white_pawn_x = -1;
let white_pawn_y = 335;

let black_pawn_x = -1;
let black_pawn_y = 60;

// Display pieces start position on board.
let displayPieces = function (pieces, img, x, y) {
  for (let i = 0; i < pieces.length; i++) {
    pieces[i] = new Pawn(img, x, y);
    x += 55;
  }
};

displayPieces(white_pawns, './img/white_pawn.png', white_pawn_x, white_pawn_y);
displayPieces(black_pawns, './img/black_pawn.png', black_pawn_x, black_pawn_y);
