import { Bishop } from './bishop.js';
import { Board } from './board.js';
import { King } from './king.js';
import { Knight } from './knight.js';
import { Pawn } from './pawn.js';
import { Queen } from './queen.js';
import { Rook } from './rook.js';

// Display board
const board = new Board();

// Keep track of white and black team
const white_team = new Array(16);
const black_team = new Array(16);

// King pieces
const white_king = [new King('white')];
const black_king = [new King('black')];

// Queen pieces
const white_queen = [new Queen('white')];
const black_queen = [new Queen('black')];

// Bishop pieces
const white_bishops = [new Bishop('white'), new Bishop('white')];
white_bishops[1].x = 275;
const black_bishops = [new Bishop('black'), new Bishop('black')];
black_bishops[1].x = 275;

// Knight pieces
const white_knights = [new Knight('white'), new Knight('white')];
white_knights[1].x = 330;
const black_knights = [new Knight('black'), new Knight('black')];
black_knights[1].x = 330;

// Rook pieces
const white_rooks = [new Rook('white'), new Rook('white')];
white_rooks[1].x = 385;
const black_rooks = [new Rook('black'), new Rook('black')];
black_rooks[1].x = 385;

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

// Display each pawn in their initial position
let pawn_position = function (pawns) {
  let acc = 55;
  for (let i = 1; i < pawns.length; i++) {
    pawns[i].x += acc;
    acc += 55;
  }
};

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
pawn_position(white_pawns);
pawn_position(black_pawns);

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
displayPieces(white_knights);
displayPieces(white_rooks);
displayPieces(white_pawns);

displayPieces(black_king);
displayPieces(black_queen);
displayPieces(black_bishops);
displayPieces(black_knights);
displayPieces(black_rooks);
displayPieces(black_pawns);
