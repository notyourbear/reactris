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
					let r = i - rowOffset, c = y - colOffset;
					if(cleanup === true){
						return (r >= matrix.length || matrix[r][c] === '') ? board[i][y] : '';
					} else {
						return (c < 0 || r >= matrix.length || matrix[r][c] === '') ? board[i][y] : matrix[r][c];
					}
				});
			}
		});
	}
}

export default Game;
