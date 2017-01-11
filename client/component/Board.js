import React, { Component } from 'react';

import Row from './Row.js';

class Board extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const { game } = this.props
		return (
			<span> { game.gameboard.map((r,i) => <Row key={i} row={r} border={true} />) }</span>
		)
	}
}

export default Board;
