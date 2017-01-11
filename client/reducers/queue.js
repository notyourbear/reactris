import _ from 'underscore';

import Queue from '../logic/Queue.js';
import GAME_CONSTANTS from '../constants/game.js';

export default function queue(state = [], action){
	switch (action.type) {
		case 'MAKE_QUEUE':
			return Queue.make(GAME_CONSTANTS.pieces, GAME_CONSTANTS.queueSize);
		case 'ADD_TO_QUEUE':
			return Queue.addTo(state, _.sample(GAME_CONSTANTS.pieces));
		default: return state;
	}
}
