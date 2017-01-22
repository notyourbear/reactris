// let's go!
import React from 'react';
import { render } from 'react-dom';

import App from './component/App';
import Game from './component/Game';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Game}></IndexRoute>
			</Route>
		</Router>
	</Provider>
);

render(router , document.getElementById('root'));
