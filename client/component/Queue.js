import React, { Component } from 'react';
import _ from 'underscore';

import Row from './Row.js';

import style from './Queue.scss';

const QueueItem = (piece) => {

	const tetraminos = {
		I: [['I',0], ['I',0], ['I',0], ['I',0]],
		O: [['O','O'],['O','O']],
		T: [[0,'T'], ['T','T'], [0,'T']],
		J: [[0,'J'], [0, 'J'], ['J','J']],
		L: [['L',0], ['L',0], ['L','L']],
		S: [['S',0], ['S','S'], [0,'S']],
		Z: [[0,'Z'], ['Z','Z'], ['Z',0]]
	}
	const tetra = tetraminos[piece]

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
			<ul>
				{ rest.map((piece, i) => <li key={i}> { QueueItem(piece) } </li>) }
			</ul>
		</div>
	);
};

export default Queue;
