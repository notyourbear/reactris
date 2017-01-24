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
		if(acceptedKeystroke !== -1 && props.game.gameover !== true) {
			props.handleKeystroke(event.keyCode);
		}
	}

	startGame(props){
		const intervalId = setInterval(() => {
            props.handleKeystroke(40)
        }, 1000);
		props.startGame(intervalId);
	}

	componentDidUpdate(){
		if(this.props.game.gameover === true){
			clearInterval(this.props.game.intervalId)
		}
	}

	render(){
		const { game, queue } = this.props;
		return (
			<div className='container game' onKeyDown={this.handleKeystroke.bind('onKeyDown', this.props)}>
				<div className='row'>
					<div className='two columns'>&nbsp;</div>
					<div className='queue two columns'>
						<div>
							<Queue pieces={this.props.game.queue} />
						</div>
					</div>
					<div className='gameboard five columns'>
						<Board game={ game } />
					</div>
					<div className='three columns'>
						<div className='rules'>
							<h5>How to play:</h5>
							<hr/>
							<p> Arrow keys to move. </p>
							<p> Space bar to rotate. </p>
						</div>
						<hr/>
						<button className='start' onClick={this.startGame.bind(null,this.props)}> Start </button>
					</div>
				</div>
			</div>
		);
	}
}

export default Game;
