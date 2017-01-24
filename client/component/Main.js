import React, { Component } from 'react';
import { Link } from 'react-router';

class Main extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className='main'>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
}

export default Main;
