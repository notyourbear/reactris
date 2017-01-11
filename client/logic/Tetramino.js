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
};

export default Tetramino;
