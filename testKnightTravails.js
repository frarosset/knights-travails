
import KnightTravails from './KnightTravails.js'

let NRows = 8;

let knightTravails = new KnightTravails(NRows); // NRows === NCols


//knightTravails.printAllMoves();

knightTravails.knightMoves([0,0],[1,2]);
knightTravails.knightMoves([0,0],[3,3]);
knightTravails.knightMoves([3,3],[0,0]);
knightTravails.knightMoves([0,0],[7,7]);
knightTravails.knightMoves([3,3],[4,3]);