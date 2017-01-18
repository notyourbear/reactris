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
		const [row, col] = tetramino.location;
		const type = tetramino.type;
		const matrix = tetramino.matrix;
		const locator = (direction, row, colIndex, type) => {
			if(colIndex >= row.length || colIndex < 0) {
				return -1;
			} else if (direction === 'left') {
				return row[colIndex] === type ? colIndex : locator(direction, row, colIndex + 1, type)
			} else if (direction === 'right'){
				return row[colIndex] === type ? colIndex : locator(direction, row, colIndex - 1, type)
			}
		}
		const locatorDown = (matrix, rowIndex, colIndex, type) => {

		}

		switch(direction){
			case 'left': {
				if(col <= 0) return false
				return matrix.reduce((mayMove, currentRow, index) => {
					if(mayMove === false) return false;
					let colIndex = locator('left', currentRow, 0, type)
					if(colIndex === -1) return true;
					let leftOf = board[index + row][col + colIndex  - 1]
					return (leftOf === '' || leftOf === undefined) ? true : false
				}, true)
			}
			case 'right': {
				let rightside = col + matrix[0].length
				if(rightside >= board[0].length) return false
				return matrix.reduce((mayMove, currentRow, index) => {
					if(mayMove === false) return false;
					let colIndex = locator('right', currentRow, matrix[index].length - 1, type)
					let rightOf = board[index + row][rightside + colIndex - 1]
					return (rightOf === '' || rightOf === undefined) ? true : false
				}, true)
			}
			case 'down': {
				let bottom = row + matrix.length
				if(bottom >= board.length) return false

				return matrix[matrix.length-1].reduce((mayMove, currentRow, index) => {
					if(mayMove === false) return false;
					switch(true){
						case (mayMove === false): return false;
						case (currentRow === tetramino.type): {
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
