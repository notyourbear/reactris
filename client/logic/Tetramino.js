import _ from 'underscore';

import TETRAMINOS from '../constants/tetraminos';
import GAME_CONSTANTS from '../constants/game';

class Tetramino {
	constructor(type, location = GAME_CONSTANTS.pieceStart){
		this.matrix = TETRAMINOS[type];
		this.type = type;
		this.location = location;
	}

	static rotatePiece(tetramino){
		return _.zip.apply(null, tetramino.matrix).map(row => row.reverse());
	}

	static mayMove(direction, board, tetramino){
		const [row, col] = tetramino.location
		switch(direction){
			case 'left': {
				return col <= 0 ? false : true
			}
			case 'right': {
				return col + tetramino.matrix[0].length >= board[0].length ? false : true
			}
			case 'down': {
				return row + tetramino.matrix.length >= board.length ? false : true
			}
			default: return true;
		}
	}

	static move(where, tetramino){
		let [row, col] = tetramino.location;
		let pos;

		switch(where){
			case 'right': {
				pos =  col + 1;
				return [row, pos]
			}
			case 'left': {
				pos = col - 1;
				return [row, pos]
			}
			default:
				pos = row + 1;
				return [pos, col];
		}
	}
};

export default Tetramino;
