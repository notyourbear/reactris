import Game from '../logic/Game.js'
import Tetramino from '../logic/Tetramino.js'

import KEYSTROKES from '../constants/keys.js'

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
			const loc = Tetramino.move(action.keystroke, state.currentPiece)
			const tetramino = new Tetramino(state.currentPiece.type, loc)
			tetramino.matrix = state.currentPiece.matrix

			if(Tetramino.mayMove(action.keystroke, state.gameboard, state.currentPiece)){
				return {
					...state,
					'currentPiece':tetramino
				}
			}
			return state;
		}
		default: return state;
	}
}
