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
			if(!_.isEmpty(props.game.currentPiece)){
				props.paintOnBoard(props.game.currentPiece, true);
			}
			props.handleKeystroke(event.keyCode);
		}
	}

	setCurrentPiece(props){
		if(!_.isEmpty(props.game.currentPiece)){
			props.paintOnBoard(props.game.currentPiece, true);
		}
		const piece = _.first(props.queue);
		const queue = _.rest(props.queue);
		props.setCurrentPiece(piece);
		props.updateQueue(queue);
	}

	componentDidUpdate(prevProps, prevState){
		if (!_.isEqual(this.props.game, prevProps.game)){
			this.props.paintOnBoard(this.props.game.currentPiece);
		}
	}

	render(){
		const { game, queue } = this.props;
		console.log(game)
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
