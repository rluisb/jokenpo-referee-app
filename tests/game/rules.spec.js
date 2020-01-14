import {expect} from 'chai';
import {checkWinner} from '../../src/game/rules';
import {STONE, SCISOR, PAPER} from '../../src/game/game-items';

describe('Rules', () => {
  context('Smoke Test', () => {
    it('Should exist the `checkWinner` function', () => {
      expect(checkWinner).to.exist;
    });
  });

  context('Check winner', () => {
    context('When `Player 1` is the winner', () => {
      let player1;
      let player2;

      before(() => {
        player1 = {
          name: 'player1',
          choice: STONE,
        };

        player2 = {
          name: 'player2',
          choice: SCISOR,
        };
      });

      it('Should return `Player 1` as the winner choosing `STONE`', () => {
        const result = checkWinner(player1, player2);
        expect(result).to.not.be.equal(null);
        expect(result).to.have.property('name');
        expect(result).to.have.property('choice');
        expect(result.name).to.be.equal(player1.name);
        expect(result.choice).to.be.equal(player1.choice);
      });

      it('Should return `Player 1` as the winner choosing `PAPER`', () => {
        player1.choice = PAPER;
        player2.choice = STONE;
        const result = checkWinner(player1, player2);
        expect(result).to.not.be.equal(null);
        expect(result).to.have.property('name');
        expect(result).to.have.property('choice');
        expect(result.name).to.be.equal(player1.name);
        expect(result.choice).to.be.equal(player1.choice);
      });

      it('Should return `Player 1` as the winner choosing `SCISOR`', () => {
        player1.choice = SCISOR;
        player2.choice = PAPER
        const result = checkWinner(player1, player2);
        expect(result).to.not.be.equal(null);
        expect(result).to.have.property('name');
        expect(result).to.have.property('choice');
        expect(result.name).to.be.equal(player1.name);
        expect(result.choice).to.be.equal(player1.choice);
      });
    });
    context('When `Player 2` is the winner', () => {
      let player1;
      let player2;

      before(() => {
        player1 = {
          name: 'player1',
          choice: SCISOR,
        };

        player2 = {
          name: 'player2',
          choice: STONE,
        };
      });

      it('Should return `Player 2` as the winner choosing `STONE`', () => {
        const result = checkWinner(player1, player2);
        expect(result).to.not.be.equal(null);
        expect(result).to.have.property('name');
        expect(result).to.have.property('choice');
        expect(result.name).to.be.equal(player2.name);
        expect(result.choice).to.be.equal(player2.choice);
      });

      it('Should return `Player 2` as the winner choosing `PAPER`', () => {
        player2.choice = PAPER;
        const result = checkWinner(player1, player2);
        expect(result).to.not.be.equal(null);
        expect(result).to.have.property('name');
        expect(result).to.have.property('choice');
        expect(result.name).to.be.equal(player2.name);
        expect(result.choice).to.be.equal(player2.choice);
      });

      it('Should return `Player 2` as the winner choosing `SCISOR`', () => {
        player2.choice = SCISOR;
        const result = checkWinner(player1, player2);
        expect(result).to.not.be.equal(null);
        expect(result).to.have.property('name');
        expect(result).to.have.property('choice');
        expect(result.name).to.be.equal(player2.name);
        expect(result.choice).to.be.equal(player2.choice);
      });
    });
  });
});
