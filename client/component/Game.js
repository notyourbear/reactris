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

	startGame(props){
		props.startGame();
		const intervalId = setInterval(() => {
            props.handleKeystroke(40)
        }, 1000);
	}
	
	render(){
		const { game, queue } = this.props;
		return (
			<div onKeyDown={this.handleKeystroke.bind('onKeyDown', this.props)}>
				<div className='queue'>
					<div>
						<Queue pieces={this.props.game.queue} />
					</div>
				</div>
				<div className='gameboard'>
					<button onClick={this.startGame.bind(null,this.props)}> Start </button>
					<Board game={ game } />
				</div>
			</div>
		);
	}
}

export default Game;
