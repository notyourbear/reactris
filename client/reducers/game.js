import _ from 'underscore'

import Game from '../logic/Game.js'
import Queue from '../logic/Queue.js';
import Tetramino from '../logic/Tetramino.js'

import GAME_CONSTANTS from '../constants/game.js'
import KEYSTROKES from '../constants/keys.js'

export default function game(state = {}, action){
	switch (action.type) {
		case 'START_GAME': {
			const currentPiece = new Tetramino(_.first(state.queue))
			let gameboard = Game.make()
			gameboard = Game.paintOnBoard(gameboard, currentPiece)
			return {
				...state,
				currentPiece,
				gameboard,
				'score': 0,
				'active': true,
				'intervalId': action.intervalId,
				'newPiece': true,
				'queue': [
					..._.rest(state.queue),
					_.sample(GAME_CONSTANTS.pieces)
				]
			};
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
			} else if (action.keystroke === 'down' && state.newPiece === true) {
				/* game over */
				return {
					...state,
					'active': false,
					'gameover': true
				}
			} else if (action.keystroke === 'down'){
				let newBoard = Game.removeFullRows(state.gameboard)
				let score = state.score
				const diff = GAME_CONSTANTS.height - newBoard.length
				if(diff > 0) {
					score += diff
					newBoard = Game.addRows(newBoard)
				}
				const currentPiece = new Tetramino(_.first(state.queue))
				const gameboard = Game.paintOnBoard(newBoard, currentPiece)
				return {
					...state,
					gameboard,
					currentPiece,
					score,
					'newPiece': true,
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
