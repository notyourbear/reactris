import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import GAME_CONSTANTS from './constants/game';

import Queue from './logic/Queue.js';
import Game from './logic/Game.js';

const pieces = GAME_CONSTANTS.pieces;
const size = GAME_CONSTANTS.queueSize;

const defaultState = {
	queue: Queue.make(pieces, size),
	game: {
		gameboard: Game.make(GAME_CONSTANTS.height,GAME_CONSTANTS.width)
	}
}

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
