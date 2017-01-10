import React, { Component } from 'react';
import Block  from './Block.js';

import style from './Row.scss';

const Row = ((props) => {
	return (
		<div className='row'>
			{ props.row.map((block, i) => <span key={i}><Block color={block} /></span>) }
		</div>
	)
});

export default Row;
