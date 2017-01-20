import _ from 'underscore';

import Game from './Game.js';

import TETRAMINOS from '../constants/tetraminos';
import GAME_CONSTANTS from '../constants/game';

class Tetramino {
	constructor(type, location = GAME_CONSTANTS.pieceStart){
		this.matrix = TETRAMINOS[type];
		this.type = type;
		this.location = location;
	}

	static mayRotate(board, tetramino){
		const rotated = Tetramino.rotate(tetramino);
		const [row, col] = tetramino.location;
		const checks = []

		if(col < 0 || col + rotated[0].length > board[0].length) return false;

		const map = Game.paintOnBoard(board, tetramino, true);

		return rotated.reduce((mayRotate, currentRow, rowIndex) => {
			if(mayRotate === false) return false;
			return currentRow.reduce((mayRotate, block, colIndex) => {
				if(mayRotate === false) return false;
				let space = map[rowIndex + row][colIndex + col]
				return space === undefined || space === '' ? true : false;
			}, true)
		},true)
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

		switch(direction){
			case 'left': {
				return matrix.reduce((mayMove, currentRow, index) => {
					let colIndex = locator('left', currentRow, 0, type)
					switch(true){
						case mayMove === false: return false;
						case colIndex === -1: return true;
						case colIndex + col === 0: return false;
						default: {
							let leftOf = board[index + row][col + colIndex  - 1]
							return (leftOf === '' || leftOf === undefined) ? true : false
						}
					}
				}, true)
			}
			case 'right': {
				return matrix.reduce((mayMove, currentRow, index) => {
					let colIndex = locator('right', currentRow, matrix[index].length - 1, type)
					let rightside = col + matrix[0].length - Math.abs(currentRow.length - 1 - colIndex)
					switch(true){
						case mayMove === false: return false;
						case colIndex === -1: return true;
						case rightside >= board[0].length: return false;
						default: {
							let rightOf = board[index + row][rightside]
							return (rightOf === '' || rightOf === undefined) ? true : false
						}
					}
				}, true)
			}
			case 'down': {
				const length = matrix[0].length;
				const checks = []
				const colIndexes = []
				let currentRowIndex = matrix.length - 1

				while(checks.length < length && currentRowIndex >= 0){
					let currentRow = matrix[currentRowIndex]
					for(let i = 0; i < currentRow.length; i++){
						if(currentRow[i] === type && colIndexes.indexOf(i) === -1){
							colIndexes.push(i);
							checks.push([currentRowIndex, i]);
						}
					}
					currentRowIndex--;
				}
				return checks.reduce((mayMove, check) => {
					let bottom = row + check[0]
					if(mayMove === false || bottom === board.length - 1) return false;
					let beneath = board[bottom + 1][col + check[1]]
					return ( beneath === '' || beneath === undefined ) ? true : false
				} , true)
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
