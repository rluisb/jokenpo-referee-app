import GAME_RULES from './rules';

const announceWinner = ({ winner, looser }) => `${winner.name}: ${winner.name} wins over ${looser.name}: ${looser.choice}`;

const announceDraw = ({ player1, player2 }) => `${player1.name}: ${player1.name} draw with ${player2.name}: ${player2.choice}`;

const checkWinner = ({ player1, player2 }) => {
  if (player1.choice === GAME_RULES[player2.choice].loose) {
    return announceWinner({ winner: player1, looser: player2 });
  }

  if (player2.choice === GAME_RULES[player1.choice].loose) {
    return announceWinner({ winner: player2, looser: player1 });
  }

  return announceDraw({ player1, player2 });
};

export {
  checkWinner
};
