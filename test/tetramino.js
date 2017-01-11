import { expect } from 'chai';
import _ from 'underscore';
import tetraminos from '../client/constants/tetraminos.js';
import Tetramino from '../client/logic/Tetramino.js';

describe('Tetramino', () => {
	describe('init', () => {
		it('should be class Tetramino object', () => {
			const type = _.sample(['I', 'O', 'T', 'J', 'L', 'S', 'Z']);
			const T = new Tetramino(type);
			expect(T.matrix).to.deep.equal(tetraminos[T.type]);
			expect(T.location).to.deep.equal([0,6]);
		});
	});

	describe('rotate', () => {
		it('should returned a rotated version of an I tetramino', () => {
			const T = new Tetramino('I');
			const rotated = [['I','I','I','I'],['','','','']];
			T.rotate();
			expect(T.matrix).to.deep.equal(rotated);
		});
	});
});
