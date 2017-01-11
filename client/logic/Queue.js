import _ from 'underscore';

class Queue {
	constructor(){}

	static make(possiblePiecesArr, size){
		return _.map(Array.apply(null, {length: size}), (x) => _.sample(possiblePiecesArr));
	}

	static addTo(queue, piece) {
		return [...queue, piece]
	}

	static purge(queueArr) {
		return [];
	}
}

export default Queue;
