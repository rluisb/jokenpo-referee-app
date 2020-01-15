import { prompt } from 'inquirer';
import Player from './player/player';
import { playerOneQuestions, playerTwoQuestions } from './prompt/questions';
import { checkWinner } from './game/referee';

prompt(playerOneQuestions)
  .then(({ name, choice }) => new Player(name, choice))
  .then((playerOne) => {
    prompt(playerTwoQuestions)
      .then(({ name, choice }) => new Player(name, choice))
      .then(playerTwo => checkWinner({ playerOne, playerTwo }))
      .then(console.log)
      .catch(playerTwoError => console.error(`Error for player two. Reason: ${playerTwoError}`));
  })
  .catch(playerOneError => console.error(`Error for player one. Reason: ${playerOneError}`));
