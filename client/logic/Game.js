import GAME_CONSTANTS from '../constants/game.js';

class Game {
	constructor(){};

	static make(height = GAME_CONSTANTS.height, width = GAME_CONSTANTS.width){
		let board = [];
		let row = [];
		for(let i = width; i > 0; i--) {
			row.push('');
		}
		for(let i = height; i > 0; i--){
			board.push(row);
		}

		return board;
	}

	static paintOnBoard(board, tetramino) {
		let [rowOffset, colOffset] = tetramino.location;
		let matrix = tetramino.matrix;

		return Game.make().map((row, i) => {
			if(i < rowOffset || i > matrix.length - rowOffset + 1){
				return board[i];
			} else {
				return row.map((col, y) => {
					if(y < colOffset || y > board[i].length - colOffset + 1){
						return board[i][y];
					} else {
						let r = i - rowOffset, c = y - colOffset;
						return (r >= matrix.length || matrix[r][c] === '') ? board[i][y] : matrix[r][c];
					}
				});
			}
		});
	}
}

export default Game;
