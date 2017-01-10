import Queue from '../logic/Queue.js'

export default function queue(state = [], action){
	switch (action.type) {
		case 'MAKE_QUEUE':
			const pieces = ['I', 'O', 'T', 'J', 'L', 'S', 'Z'];
			const size = 6;
			return Queue.make(pieces, size);

		default: return state;
	}
}
