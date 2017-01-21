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
				let map = Game.paintOnBoard(state.gameboard, state.currentPiece, true)
				map = Game.paintOnBoard(map, tetramino)
				return {
					...state,
					'newPiece': false,
					'currentPiece': tetramino,
					'gameboard': map
				}
			}
			return state;

		}
		case 'MOVE': {
			const loc = Tetramino.move(action.keystroke, state.currentPiece)
			const tetramino = new Tetramino(state.currentPiece.type, loc)
			tetramino.matrix = state.currentPiece.matrix

			if(Tetramino.mayMove(action.keystroke, state.gameboard, state.currentPiece)){
				let map = Game.paintOnBoard(state.gameboard, state.currentPiece, true)
				map = Game.paintOnBoard(map, tetramino)
				return {
					...state,
					'newPiece': false,
					'currentPiece':tetramino,
					'gameboard': map
				}
			} else if (action.keystroke === 'down'){
				let newBoard = Game.removeFullRows(state.gameboard)
				if(newBoard.length < GAME_CONSTANTS.height) newBoard = Game.addRows(newBoard)
				return {
					...state,
					'gameboard': newBoard,
					'newPiece': true,
					'currentPiece': new Tetramino(_.first(state.queue)),
					'queue': [
						..._.rest(state.queue),
						_.sample(GAME_CONSTANTS.pieces)
					]
				}
			}
			return state;
		}

		default: return state;
	}
}
