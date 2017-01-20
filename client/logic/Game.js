import GAME_CONSTANTS from '../constants/game.js';

class Game {
	constructor(){};

	static make(height = GAME_CONSTANTS.height, width = GAME_CONSTANTS.width){
		const board = [];
		const row = [];
		for(let i = width; i > 0; i--) {
			row.push('');
		}
		for(let i = height; i > 0; i--){
			board.push(row);
		}

		return board;
	}

	static paintOnBoard(board, tetramino, cleanup) {
		let [rowOffset, colOffset] = tetramino.location;
		let matrix = tetramino.matrix;
		return Game.make().map((row, i) => {
			if(i < rowOffset || i > (rowOffset + matrix.length)){
				return board[i];
			} else {
				return row.map((col, y) => {
					let r = i - rowOffset, c = y - colOffset, x = colOffset - y + 1;
					if(cleanup === true){
						return (r >= matrix.length || c >= matrix[0].length || x >= matrix[0].length || matrix[r][c] === '' || matrix[r][c] === undefined) ? board[i][y] : '';
					} else {
						return (r >= matrix.length || c >= matrix[0].length || x >= matrix[0].length || matrix[r][c] === '' || matrix[r][c] === undefined) ? board[i][y] : matrix[r][c];
					}
				});
			}
		});
	}

	static removeFullRows(board){
		return board.filter(row => {
			return row.some(block => block === '' || block === undefined);
		});
	}

	static addRows(board){
		const row = [];
		let additionalRows = GAME_CONSTANTS.height - board.length;
		let newBoard = [...board];

		for(let i = GAME_CONSTANTS.width; i > 0; i--) {
			row.push('');
		}
		for(; additionalRows > 0; additionalRows--){
			newBoard = [row, ...newBoard]
		}
		return newBoard;
	}
}

export default Game;
