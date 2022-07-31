import { Bishop } from './bishop.js';
import { Board } from './board.js';
import { King } from './king.js';
import { Pawn } from './pawn.js';
import { Queen } from './queen.js';

// Display board
const board = new Board();

// Keep track of white and black team
const white_team = new Array(16);
const black_team = new Array(16);

// King pieces
const white_king = [new King('white')];
const black_king = [new King('black')];

// Queen Pieces
const white_queen = [new Queen('white')];
const black_queen = [new Queen('black')];

// Bishop Pieces
const white_bishops = [new Bishop('white'), new Bishop('white')];
white_bishops[1].x = 275;
const black_bishops = [new Bishop('black'), new Bishop('black')];
black_bishops[1].x = 275;

// Pawn pieces
const white_pawns = [
  new Pawn('white'),
  new Pawn('white'),
  new Pawn('white'),
  new Pawn('white'),
  new Pawn('white'),
  new Pawn('white'),
  new Pawn('white'),
  new Pawn('white'),
];

const black_pawns = [
  new Pawn('black'),
  new Pawn('black'),
  new Pawn('black'),
  new Pawn('black'),
  new Pawn('black'),
  new Pawn('black'),
  new Pawn('black'),
  new Pawn('black'),
];

// Draw piece to canvas
let createImg = function (piece) {
  let img = new Image();
  img.src = piece.src;
  img.width = piece.w;
  img.height = piece.h;
  img.onload = function () {
    board.ctx.drawImage(img, piece.x, piece.y, img.width, img.height);
  };
};

// Display pieces on board
let displayPieces = function (pieces) {
  for (let i = 0; i < pieces.length; i++) {
    createImg(pieces[i]);
  }
};

// Append pieces to their respective teams
let team_append = function (team, pieces) {
  for (let i = 0; i < pieces.length; i++) {
    if (team[i] == null) {
      team[i] = pieces;
      break;
    }
  }
};

// Function calls
team_append(white_team, white_king);
team_append(white_team, white_queen);
team_append(white_team, white_bishops);
team_append(white_team, white_pawns);

team_append(black_team, black_king);
team_append(black_team, black_queen);
team_append(black_team, black_bishops);
team_append(black_team, black_pawns);

displayPieces(white_king);
displayPieces(white_queen);
displayPieces(white_bishops);

displayPieces(black_king);
displayPieces(black_queen);
displayPieces(black_bishops);
