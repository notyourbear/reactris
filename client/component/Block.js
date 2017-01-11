import React, { Component } from 'react';
import style from './Block.scss';

const Block = (props) => {
	let classNames = ` block ${props.border === true ? ' bordered' : '' }`
	return (
		<div className={ props.color + classNames }>&nbsp;</div>
	)
}

export default Block;
