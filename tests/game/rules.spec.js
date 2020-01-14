import { expect } from 'chai';
import { checkWinner } from '../../src/game/rules';

describe('Rules', () => {
  context('Smoke Test', () => {
    it('Should exist the `checkWinner` function', () => {
      expect(checkWinner).to.exist;
    });
  });

  context('Check winner', () => {
    let player1;
    let player2;

    beforeEach(() => {
      player1 = {
        name: 'player1',
        move: 'stone',
      };

      player2 = {
        name: 'player2',
        move: 'paper',
      };
    });

    it('Should return `player1` as the winner', () => {
      const result = checkWinner(player1, player2);
      expect(result).to.not.be.equal(null);
      expect(result).to.have.property('name');
      expect(result).to.have.property('move');
      expect(result.name).to.be.equal(player1.name);
      expect(result.move).to.be.equal(player1.move);
    });
  });
});
