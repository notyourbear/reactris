import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import Queue from './logic/Queue.js';

const pieces = ['I', 'O', 'T', 'J', 'L', 'S', 'Z'];
const size = 6;

const defaultState = {
	queue: Queue.make(pieces, size)
}

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
