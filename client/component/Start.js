import React, { Component } from 'react';
import { Link } from 'react-router';

import Queue from './Queue.js';

class Start extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<Link to='/game'>starter for 10</Link>
			</div>
		)
	}
}

export default Start;
