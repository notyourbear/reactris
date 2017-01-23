import React, { Component } from 'react';
import _ from 'underscore';

import TETRAMINOS from '../constants/tetraminos';
import Row from './Row.js';

import style from './Queue.scss';

const QueueItem = (piece) => {
	const tetra = TETRAMINOS[piece]

	return (
		<div>
			{ tetra.map((t, i) => <span key={i}><Row row={t} /></span>) }
		</div>
	)
}

const Queue = (props) => {
	const first = [_.first(props.pieces)]
	const rest = _.rest(props.pieces)

	return (
		<div className='queue'>
			<div className='nextUp'> {QueueItem(first)} </div>
			<hr/>
			<ul>
				{ rest.map((piece, i) => <li key={i}> { QueueItem(piece) } </li>) }
			</ul>
		</div>
	);
};

export default Queue;
