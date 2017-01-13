import _ from 'underscore';

import TETRAMINOS from '../constants/tetraminos';
import GAME_CONSTANTS from '../constants/game';

class Tetramino {
	constructor(type, location = GAME_CONSTANTS.pieceStart){
		this.matrix = TETRAMINOS[type];
		this.type = type;
		this.location = location;
	}

	static rotate(tetramino){
		return _.zip.apply(null, tetramino.matrix).map(row => row.reverse());
	}

	static mayMove(direction, board, tetramino){
		const [row, col] = tetramino.location
		const matrix = tetramino.type !== 'I' ? tetramino.matrix : tetramino.matrix[0][1] === 'I' ? [['I', 'I', 'I', 'I']] : [['I'], ['I'], ['I'], ['I']];
		switch(direction){
			case 'left': {
				if(col <= 0) return false
				return matrix.reduce((mayMove, val, index) => {
					switch(true){
						case (mayMove === false): return false;
						case (val[0] === tetramino.type): {
							let leftOf = board[index + row][col - 1]
							return (leftOf === '' || leftOf === undefined) ? true : false
						}
						default: {
							let leftOf = board[index + row][col]
							return (leftOf === '' || leftOf === undefined) ? true : false
						}
					}
				}, true)
			}
			case 'right': {
				let rightside = col + matrix[0].length
				if(rightside >= board[0].length) return false
				return matrix.reduce((mayMove, val, index) => {
					switch(true){
						case (mayMove === false): return false;
						case (val[matrix[0].length - 1] === tetramino.type): {
							let rightOf = board[index + row][rightside]
							return (rightOf === '' || rightOf === undefined) ? true : false
						}
						default: {
							let rightOf = board[index + row][rightside - 1]
							return (rightOf === '' || rightOf === undefined) ? true : false
						}
					}
				}, true)
			}
			case 'down': {
				let bottom = row + matrix.length
				if(bottom >= board.length) return false
				return matrix[matrix.length-1].reduce((mayMove, val, index) => {
					switch(true){
						case (mayMove === false): return false;
						case (val === tetramino.type): {
							let beneath = board[bottom][index + col]
							return (beneath === '' || beneath === undefined) ? true : false
						}
						default: {
							let beneath = board[bottom - 1][index + col]
							return (beneath === '' || beneath === undefined) ? true : false
						}
					}
				}, true)
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
