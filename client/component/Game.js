import React, { Component } from 'react';
import _ from 'underscore';

import Queue from './Queue.js';
import Board from './Board.js';

import style from './Game.scss';

class Game extends Component {
	constructor(props){
		super(props);
	}

	makeQueue(props){
		props.makeQueue(['I', 'O', 'T', 'J', 'L', 'S', 'Z'], 10)
	}

	addToQueue(props){
		props.addToQueue()
	}

	setCurrentPiece(props){
		const piece = _.first(props.queue);
		const queue = _.rest(props.queue);
		props.setCurrentPiece(piece);
		props.updateQueue(queue);
		props.paintOnBoard(props.game.currentPiece);
	}

	render(){
		const { game, queue } = this.props;
		return (
			<div>
				<div className='queue'>
					<button onClick={this.makeQueue.bind(null, this.props)} > make queue </button>
					<div>
						<Queue pieces={this.props.queue} />
					</div>
					<button onClick={this.addToQueue.bind(null, this.props)} > add to queue </button>
				</div>
				<div className='gameboard'>
					<button onClick={this.setCurrentPiece.bind(null, this.props)}> start game </button>
					<Board game={ game } />
				</div>
			</div>
		);
	}
}

export default Game;
