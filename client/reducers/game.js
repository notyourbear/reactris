import Game from '../logic/Game.js'
import Tetramino from '../logic/Tetramino.js'

export default function game(state = {}, action){
	switch (action.type) {
		case 'INIT': {
			state.gameboard = Game.make(22,12);
			return state;
		}
		case 'SET_CURRENT_PIECE': {
			state.currentPiece = new Tetramino(action.pieceType);
			// i need to update the gameboard here.
			return state;
		}
		case 'PAINT_ON_BOARD': {
			state.gameboard = Game.paintOnBoard(state.gameboard, action.piece);
			return state;
		}
		default: return state;
	}
}
