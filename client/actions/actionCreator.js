import KEYSTROKES from '../constants/keys.js'

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

export function setCurrentPiece(pieceType){
	return {
		pieceType,
		type: 'SET_CURRENT_PIECE'
	}
}

export function paintOnBoard(piece, cleanup){
	return {
		piece,
		cleanup,
		type: 'PAINT_ON_BOARD'
	}
}

export function updateQueue(queue){
	return {
		queue,
		type: 'UPDATE_QUEUE'
	}
}

export function handleKeystroke(keystroke){
	switch(keystroke){
		case KEYSTROKES['LEFT_ARROW']: return { keystroke:'left', type: 'MOVE'}
		case KEYSTROKES['RIGHT_ARROW']: return { keystroke:'right', type: 'MOVE'}
		case KEYSTROKES['DOWN_ARROW']: return { keystroke:'down', type: 'MOVE'}
		case KEYSTROKES['SPACE_BAR']: return { type: 'ROTATE'}
	}
}
