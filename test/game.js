import { expect } from 'chai';
import Game from '../client/logic/Game.js';

describe('Game', () => {
	describe('make', () => {
		it('should return the array: [[],[],[]]', () => {
			expect(Game.make(3, 1)).to.deep.equal([[''],[''],['']]);
		});
	});

	describe('removeFullRows', () => {
		it('should return a matrix where nothing was removed', () => {
			const matrix = [[1,''],['',''],[undefined,1]]
			expect(Game.removeFullRows(matrix)).to.deep.equal(matrix);
		})

		it('should return a matrix where one row was removed', () => {
			const matrix = [['1','1'],['1', undefined],[1,'']]
			expect(Game.removeFullRows(matrix)).to.deep.equal([['1', undefined],[1,'']]);
		})
	});
});
