class Game {
	constructor(){};

	static checkIfEmpty(gameboard, place){
		let row, col;
		[row, col] = place;
		return gameboard[row][col] === '' ? true : false;
	}

	static make(height, width){
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

	static updatePieceLocation(gameboard, piece, place, whereTo = 'd'){
		let row, col, pos;
		[row, col] = place;
		switch(whereTo){
			case 'l':
				pos = col === 0 ? 1 : col - 1;
				return [row,pos];
			case 'r':
				pos = col === gameboard.length - 1 ? gameboard.length - 2 : col + 1
				return [row, pos];
			default:
				pos = row - 1;
				return [pos, col];
		}
	}
}

export default Game;
