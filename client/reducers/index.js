import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import queue from './queue';
import game from './game';

const rootReducer = combineReducers({queue, game, routing: routerReducer })

export default rootReducer;
