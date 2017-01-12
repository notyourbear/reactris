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
			switch (action.keystroke){
				case KEYSTROKES['LEFT_ARROW']: {
					state.currentPiece.move('left')
					return {
						...state
					}
				}
				case KEYSTROKES['RIGHT_ARROW']: {
					state.currentPiece.move('right')
					return {
						...state
					}
				}
				case KEYSTROKES['DOWN_ARROW']:{
					state.currentPiece.move();
					return {
						...state
					}
				}
				default: return state;
			}
			return state;
		}
		default: return state;
	}
}
