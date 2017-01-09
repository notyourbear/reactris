import Queue from '../logic/Queue.js'

export default function queue(state = [], action){
	switch (action.type) {
		case 'MAKE':
			const pieces = ['I', 'O', 'T', 'J', 'L', 'S', 'Z'];
			const size = 6;
			if(state.length > 0){
				return state;
			}
			return Queue.make(pieces, size);

		default: return state;
	}
}
