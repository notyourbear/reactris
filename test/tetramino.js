import { expect } from 'chai';
import _ from 'underscore';
import tetraminos from '../client/constants/tetraminos.js';
import Tetramino from '../client/logic/Tetramino.js';
import GAME_CONSTANTS from '../client/constants/game.js';


describe('Tetramino', () => {
	describe('init', () => {
		it('should be class Tetramino object', () => {
			const type = _.sample(['I', 'O', 'T', 'J', 'L', 'S', 'Z']);
			const T = new Tetramino(type);
			expect(T.matrix).to.deep.equal(tetraminos[T.type]);
			expect(T.location).to.deep.equal(GAME_CONSTANTS.pieceStart);
		});
	});

	describe('rotate', () => {
		it('should return a rotated version of an I tetramino', () => {
			const T = new Tetramino('I');
			const rotated = [['I','I','I','I'],['','','','']];
			T.rotate();
			expect(T.matrix).to.deep.equal(rotated);
		});
	});

	describe('move', () => {
		it('should move a piece down one spot', () => {
			const T = new Tetramino('I');
			let [row, col] = T.location;
			let expected = [row + 1, col];
			T.move();
			expect(T.location).to.deep.equal(expected);
		});

		it('should move left a spot', () => {
			const T = new Tetramino('I');
			let [row, col] = T.location;
			let expected = [row, col - 1];
			T.move('left');
			expect(T.location).to.deep.equal(expected);
		});

		it('should move right a spot', () => {
			const T = new Tetramino('I');
			let [row, col] = T.location;
			let expected = [row, col + 1];
			T.move('right');
			expect(T.location).to.deep.equal(expected);
		});
	});
});
