import KEYSTROKES from '../constants/keys.js'

export function startGame(){
	return {
		type: 'START_GAME'
	}
}

export function paintOnBoard(piece, cleanup){
	return {
		piece,
		cleanup,
		type: 'PAINT_ON_BOARD'
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
