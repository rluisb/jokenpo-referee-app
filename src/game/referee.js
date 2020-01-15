import GAME_RULES from './rules';

const announceWinner = ({ winner, looser }) => `${winner.name}: ${winner.name} wins over ${looser.name}: ${looser.choice}`;

const announceDraw = ({ playerOne, playerTwo }) => `${playerOne.name}: ${playerOne.name} draw with ${playerTwo.name}: ${playerTwo.choice}`;

const checkWinner = ({ playerOne, playerTwo }) => {
  if (playerOne.choice === GAME_RULES[playerTwo.choice].loose) {
    return announceWinner({ winner: playerOne, looser: playerTwo });
  }

  if (playerTwo.choice === GAME_RULES[playerOne.choice].loose) {
    return announceWinner({ winner: playerTwo, looser: playerOne });
  }

  return announceDraw({ playerOne, playerTwo });
};

export {
  checkWinner
};
