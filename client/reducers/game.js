import _ from 'underscore'

import Game from '../logic/Game.js'
import Queue from '../logic/Queue.js';
import Tetramino from '../logic/Tetramino.js'

import GAME_CONSTANTS from '../constants/game.js'
import KEYSTROKES from '../constants/keys.js'

export default function game(state = {}, action){
	switch (action.type) {
		case 'START_GAME': {
			return {
				...state,
				'newPiece': true,
				'currentPiece': new Tetramino(_.first(state.queue)),
				'queue': [
					..._.rest(state.queue),
					_.sample(GAME_CONSTANTS.pieces)
				]
			};
		}
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
		case 'ROTATE': {
			const matrix = Tetramino.rotate(state.currentPiece);
			const tetramino = new Tetramino(state.currentPiece.type, state.currentPiece.location)
			tetramino.matrix = matrix
			if(Tetramino.mayRotate(state.gameboard, state.currentPiece)){
				return {
					...state,
					'newPiece': false,
					'currentPiece': tetramino
				}
			}
			return state;

		}
		case 'MOVE': {
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
		case 'CHECK_FOR_FULL_ROWS': {
			let newBoard = Game.removeFullRows(state.gameboard)
			if(newBoard.length < GAME_CONSTANTS.height) newBoard = Game.addRows(newBoard)
			return {
				...state,
				'gameboard': newBoard
			}
		}
		case 'MAKE_QUEUE':
			return {
				...state,
				'queue': Queue.make(GAME_CONSTANTS.pieces, GAME_CONSTANTS.queueSize)
			}
		case 'ADD_TO_QUEUE':
			return {
				...state,
				'queue': Queue.addTo(state, _.sample(GAME_CONSTANTS.pieces))
			}
		case 'UPDATE_QUEUE':
			return {
				...state,
				"queue": [
					...action.queue,
					_.sample(GAME_CONSTANTS.pieces)
				]
			}
		default: return state;
	}
}
