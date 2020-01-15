import GAME_RULES from './rules';

const announceWinner = ({ winner, looser }) => `${winner.name}'s ${winner.choice} wins over ${looser.name}'s ${looser.choice}`;

const announceDraw = ({ playerOne, playerTwo }) => `${playerOne.name}'s ${playerOne.choice} draw with ${playerTwo.name}'s ${playerTwo.choice}`;

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
