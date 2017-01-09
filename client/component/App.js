import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';

function mapStateToProps(state) {
	return {
		queue: state.queue,
		game: state.game
	}
}

function mapDispachToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
