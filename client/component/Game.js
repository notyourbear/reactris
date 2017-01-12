import React, { Component } from 'react';
import _ from 'underscore';

import KEYSTROKES from '../constants/keys.js';

import Queue from './Queue.js';
import Board from './Board.js';

import style from './Game.scss';

class Game extends Component {
	constructor(props){
		super(props);
	}

	handleKeystroke(props, event){
		event.preventDefault();
		const acceptedKeystroke = _.values(KEYSTROKES).indexOf(event.keyCode)
		if(acceptedKeystroke !== -1) {
			props.handleKeystroke(event.keyCode);
		}
	}

	setCurrentPiece(props){
		props.setCurrentPiece(_.first(props.queue));
		props.updateQueue(_.rest(props.queue));
	}

	componentDidUpdate(prevProps, prevState){
		if (!_.isEqual(this.props.game, prevProps.game)){
			if(!_.isEmpty(prevProps.game.currentPiece)){
				this.props.paintOnBoard(prevProps.game.currentPiece, true);
			}
			this.props.paintOnBoard(this.props.game.currentPiece);
		}
	}

	render(){
		const { game, queue } = this.props;
		return (
			<div onKeyDown={this.handleKeystroke.bind('onKeyDown', this.props)}>
				<div className='queue'>
					<div>
						<Queue pieces={this.props.queue} />
					</div>
				</div>
				<div className='gameboard'>
					<button onClick={this.setCurrentPiece.bind(null, this.props)}> next piece </button>
					<Board game={ game } />
				</div>
			</div>
		);
	}
}

export default Game;
