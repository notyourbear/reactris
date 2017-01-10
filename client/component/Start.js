import React, { Component } from 'react';

import Queue from './Queue.js';

class Start extends Component {
	constructor(props){
		super(props);
	}

	makeQueue(props){
		props.makeQueue(['I', 'O', 'T', 'J', 'L', 'S', 'Z'], 10)
	}

	render(){
		return (
			<div>
				<button onClick={this.makeQueue.bind(null, this.props)} > make queue </button>
				<div>
					<Queue pieces={this.props.queue} />
				</div>
			</div>
		)
	}
}

export default Start;
