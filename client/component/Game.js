import React, { Component } from 'react';
import Queue from './Queue.js';
import Row from './Row.js';

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
					<span> { game.gameboard.map((r,i) => <Row key={i} row={r} border={true} />) }</span>
				</div>
			</div>
		);
	}
}

export default Game;
