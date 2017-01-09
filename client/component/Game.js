import React, { Component } from 'react';

class Game extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render(){
		const { game } = this.props;
		const currentPiece = game.currentPiece;
		return (<p>but then a game</p>)
	}
}

export default Game;
