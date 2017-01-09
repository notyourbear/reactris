// let's go!
import React from 'react';
import { render } from 'react-dom';

// Import css
// import css from './styles/style.styl'

import App from './component/App';
import Game from './component/Game';
import Start from './component/Start';
// import Single from './components/Single';
// import PhotoGrid from './components/PhotoGrid';
//
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Start}></IndexRoute>
				<Route path='/game' component={Game}></Route>
			</Route>
		</Router>
	</Provider>
);

render(router , document.getElementById('root'));
