import React, { Component } from 'react';
import Block  from './Block.js';

import style from './Row.scss';

const Row = ((props) => {
	console.log(props)
	let classNames = props.border === true ? 'row bordered' : 'row';
	return (
		<div className={classNames}>
			{ props.row.map((block, i) => <span key={i}><Block color={block} border={props.border}/></span>) }
		</div>
	)
});

export default Row;
