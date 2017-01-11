import { expect } from 'chai';
import Game from '../client/logic/Game.js';

describe('Game', () => {
	describe('make', () => {
		it('should return the array: [[],[],[]]', () => {
			expect(Game.make(3, 1)).to.deep.equal([[''],[''],['']]);
		});
	});
});
