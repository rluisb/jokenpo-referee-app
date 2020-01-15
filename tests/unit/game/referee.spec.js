import { expect } from 'chai';
import { checkWinner } from '../../../src/game/referee';
import { STONE, SCISOR, PAPER } from '../../../src/game/game-items';

describe('Referee', () => {
  context('Smoke Test', () => {
    it('Should exist the `checkWinner` function', () => {
      expect(checkWinner).to.exist;
    });
  });

  context('Check winner', () => {
    context('When `Player 1` is the winner', () => {
      let playerOne;
      let playerTwo;

      before(() => {
        playerOne = {
          name: 'playerOne',
          choice: STONE,
        };

        playerTwo = {
          name: 'playerTwo',
          choice: SCISOR,
        };
      });

      it('Should return `Player 1` as the winner choosing `STONE`', () => {
        const result = checkWinner({ playerOne, playerTwo });
        expect(result).to.not.be.equal(null);
        expect(result).to.be.equal(`${playerOne.name}'s ${playerOne.choice} wins over ${playerTwo.name}'s ${playerTwo.choice}`);
      });

      it('Should return `Player 1` as the winner choosing `PAPER`', () => {
        playerOne.choice = PAPER;
        playerTwo.choice = STONE;
        const result = checkWinner({ playerOne, playerTwo });
        expect(result).to.not.be.equal(null);
        expect(result).to.be.equal(`${playerOne.name}'s ${playerOne.choice} wins over ${playerTwo.name}'s ${playerTwo.choice}`);
      });

      it('Should return `Player 1` as the winner choosing `SCISOR`', () => {
        playerOne.choice = SCISOR;
        playerTwo.choice = PAPER;
        const result = checkWinner({ playerOne, playerTwo });
        expect(result).to.not.be.equal(null);
        expect(result).to.be.equal(`${playerOne.name}'s ${playerOne.choice} wins over ${playerTwo.name}'s ${playerTwo.choice}`);
      });
    });
    context('When `Player 2` is the winner', () => {
      let playerOne;
      let playerTwo;

      before(() => {
        playerOne = {
          name: 'playerOne',
          choice: SCISOR,
        };

        playerTwo = {
          name: 'playerTwo',
          choice: STONE,
        };
      });

      it('Should return `Player 2` as the winner choosing `STONE`', () => {
        const result = checkWinner({ playerOne, playerTwo });
        expect(result).to.not.be.equal(null);
        expect(result).to.be.equal(`${playerTwo.name}'s ${playerTwo.choice} wins over ${playerOne.name}'s ${playerOne.choice}`);
      });

      it('Should return `Player 2` as the winner choosing `PAPER`', () => {
        playerOne.choice = STONE;
        playerTwo.choice = PAPER;
        const result = checkWinner({ playerOne, playerTwo });
        expect(result).to.not.be.equal(null);
        expect(result).to.be.equal(`${playerTwo.name}'s ${playerTwo.choice} wins over ${playerOne.name}'s ${playerOne.choice}`);
      });

      it('Should return `Player 2` as the winner choosing `SCISOR`', () => {
        playerOne.choice = PAPER;
        playerTwo.choice = SCISOR;
        const result = checkWinner({ playerOne, playerTwo });
        expect(result).to.not.be.equal(null);
        expect(result).to.be.equal(`${playerTwo.name}'s ${playerTwo.choice} wins over ${playerOne.name}'s ${playerOne.choice}`);
      });
    });
    context('When `Player 1` and `Player 2` draw the game', () => {
      let playerOne;
      let playerTwo;

      before(() => {
        playerOne = {
          name: 'playerOne',
          choice: STONE,
        };

        playerTwo = {
          name: 'playerTwo',
          choice: STONE,
        };
      });

      it('Should return `DRAW` as result', () => {
        const result = checkWinner({ playerOne, playerTwo });
        expect(result).to.not.be.equal(null);
        expect(result).to.be.equal(`${playerOne.name}'s ${playerOne.choice} draw with ${playerTwo.name}'s ${playerTwo.choice}`);
      });
    });
  });
});
