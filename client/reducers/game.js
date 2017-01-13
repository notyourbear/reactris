import Game from '../logic/Game.js'
import Tetramino from '../logic/Tetramino.js'

import GAME_CONSTANTS from '../constants/game.js'
import KEYSTROKES from '../constants/keys.js'

export default function game(state = {}, action){
	switch (action.type) {
		case 'SET_CURRENT_PIECE': {
			return {
				...state,
				'newPiece': true,
				'currentPiece': new Tetramino(action.pieceType)
			}
		}
		case 'PAINT_ON_BOARD': {
			const gameboard = Game.paintOnBoard(state.gameboard, action.piece, action.cleanup)
			return {
				...state,
				gameboard
			}
		}
		case 'FIRED_KEYSTROKE': {
			const loc = Tetramino.move(action.keystroke, state.currentPiece)
			const tetramino = new Tetramino(state.currentPiece.type, loc)
			tetramino.matrix = state.currentPiece.matrix

			if(Tetramino.mayMove(action.keystroke, state.gameboard, state.currentPiece)){
				return {
					...state,
					'newPiece': false,
					'currentPiece':tetramino
				}
			}
			return state;
		}
		default: return state;
	}
}
