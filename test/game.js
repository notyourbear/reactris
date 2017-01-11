import { expect } from 'chai';
import Game from '../client/logic/Game.js';

describe('Game', () => {
	describe('make', () => {
		it('should return the array: [[],[],[]]', () => {
			expect(Game.make(3, 1)).to.deep.equal([[''],[''],['']]);
		});
	});

	describe('checkIfEmpty', () => {
		it('should return true if empty', () => {
			const board = Game.make(3,2);
			expect(Game.checkIfEmpty(board, [2,0])).to.be.true;
		});

		it('should return false if not empty', () => {
			const board = Game.make(3,2);
			board[2][1] = 'x'
			expect(Game.checkIfEmpty(board, [2,1])).to.be.false;
		});
	});

	describe('updatePieceLocation', () => {
	});
});
