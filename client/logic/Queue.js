import _ from 'underscore';

class Queue {
	constructor(){}

	static make(possiblePiecesArr, size) {
		console.log('queue maker')
		return _.map(Array.apply(null, {length: size}), (x) => _.sample(possiblePiecesArr));
	}

	static addTo(queueArr, arrToAdd) {
		return queueArr.concat(arrToAdd);
	}

	static purge(queueArr) {
		return [];
	}
}

export default Queue;
