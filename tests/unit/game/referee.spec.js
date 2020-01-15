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
        expect(result).to.be.equal(`${playerOne.name}: ${playerOne.name} wins over ${playerTwo.name}: ${playerTwo.choice}`);
      });

      it('Should return `Player 1` as the winner choosing `PAPER`', () => {
        playerOne.choice = PAPER;
        playerTwo.choice = STONE;
        const result = checkWinner({ playerOne, playerTwo });
        expect(result).to.not.be.equal(null);
        expect(result).to.be.equal(`${playerOne.name}: ${playerOne.name} wins over ${playerTwo.name}: ${playerTwo.choice}`);
      });

      it('Should return `Player 1` as the winner choosing `SCISOR`', () => {
        playerOne.choice = SCISOR;
        playerTwo.choice = PAPER;
        const result = checkWinner({ playerOne, playerTwo });
        expect(result).to.not.be.equal(null);
        expect(result).to.be.equal(`${playerOne.name}: ${playerOne.name} wins over ${playerTwo.name}: ${playerTwo.choice}`);
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
        expect(result).to.be.equal(`${playerTwo.name}: ${playerTwo.name} wins over ${playerOne.name}: ${playerOne.choice}`);
      });

      it('Should return `Player 2` as the winner choosing `PAPER`', () => {
        playerOne.choice = STONE;
        playerTwo.choice = PAPER;
        const result = checkWinner({ playerOne, playerTwo });
        expect(result).to.not.be.equal(null);
        expect(result).to.be.equal(`${playerTwo.name}: ${playerTwo.name} wins over ${playerOne.name}: ${playerOne.choice}`);
      });

      it('Should return `Player 2` as the winner choosing `SCISOR`', () => {
        playerOne.choice = PAPER;
        playerTwo.choice = SCISOR;
        const result = checkWinner({ playerOne, playerTwo });
        expect(result).to.not.be.equal(null);
        expect(result).to.be.equal(`${playerTwo.name}: ${playerTwo.name} wins over ${playerOne.name}: ${playerOne.choice}`);
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
        expect(result).to.be.equal(`${playerOne.name}: ${playerOne.name} draw with ${playerTwo.name}: ${playerTwo.choice}`);
      });
    });
  });
});
