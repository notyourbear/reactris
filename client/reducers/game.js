import Game from '../logic/Game.js'
import Tetramino from '../logic/Tetramino.js'

export default function game(state = {}, action){
	switch (action.type) {
		case 'SET_CURRENT_PIECE': {
			return {
				...state,
				'currentPiece': new Tetramino(action.pieceType)
			}
		}
		case 'PAINT_ON_BOARD': {
			return {
				...state,
				'gameboard': Game.paintOnBoard(state.gameboard, action.piece, action.cleanup)
			}
		}
		case 'FIRED_KEYSTROKE': {
			console.log(action)
			return state;
		}
		default: return state;
	}
}
