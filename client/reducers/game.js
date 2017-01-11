import Game from '../logic/Game.js'

export default function game(state = {}, action){
	switch (action.type) {
		case 'INIT': {
			state.gameboard = Game.make(22,12);
			return state;
		}
		default: return state;
	}
}
