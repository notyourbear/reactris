export function makeQueue(){
	return {
		type: 'MAKE_QUEUE'
	}
}

export function addToQueue(){
	return {
		type: 'ADD_TO_QUEUE'
	}
}

export function initGame(){
	return {
		type: 'INIT'
	}
}

export function setCurrentPiece(pieceType){
	return {
		pieceType,
		type: 'SET_CURRENT_PIECE'
	}
}

export function updateQueue(queue){
	return {
		queue,
		type: 'UPDATE_QUEUE'
	}
}
