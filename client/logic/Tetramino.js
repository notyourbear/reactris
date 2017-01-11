import _ from 'underscore';

import tetraminos from '../constants/tetraminos';

class Tetramino {
	constructor(type, location = [0, 6]){
		this.matrix = tetraminos[type];
		this.type = type;
		this.location = location;
	}

	rotate(){
		this.matrix = _.zip.apply(null, this.matrix).map(row => row.reverse());
	}

	move(where, gameboard){
		const _this = this;
		let [row, col] = this.location;
		let pos = 0;
		//add if logic
		switch(where){
			case 'right': {
				pos =  col + 1;
				_this.location = [row, pos]
				break;
			}
			case 'left': {
				pos = col - 1;
				_this.location = [row, pos]
				break;
			}
			default:
				pos = row + 1;
				_this.location = [pos, col];
				break;
		}
	}
};

export default Tetramino;
