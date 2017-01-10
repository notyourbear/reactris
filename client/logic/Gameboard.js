import _ from 'underscore';

class Gameboard {
	constructor(){}

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
};

export default Gameboard;
