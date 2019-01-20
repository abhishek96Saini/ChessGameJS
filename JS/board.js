//Represent everything on the board by this variable.
var GameBoard = {};

GameBoard.pieces = new Array(BRD_SQ_NUM); //set this to the max.
GameBoard.side = COLORS.WHITE;

/* Fifty Move is a counter that checks the total moves made by players.
   If  players have made 50 moves and there has been 
   no pawn move or a capture, then the game is drawn.
   This .fiftyMove var will keep on increasing by one
    when a player makes a move not using a pawn.
   .fiftyMove will reset if there is a move using 
    a pawn or there is a capture.  
*/
GameBoard.fiftyMove = 0;
GameBoard.hisPly = 0; // iska use samajh nahi aaya
GameBoard.ply = 0;  // iska use samajh nahi aaya
GameBoard.castlePermission = 0; 