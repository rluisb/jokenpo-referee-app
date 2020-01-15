import { STONE, SCISOR, PAPER } from '../game/game-items';

const choices = [STONE, SCISOR, PAPER];

const playerOneQuestions = [{
  type: 'input',
  name: 'name',
  message: "What's is the name of player 1?",
},
{
  type: 'list',
  name: 'choice',
  message: "What's is the choice for player 1?",
  choices,
}];

const playerTwoQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What's is the name of player 2?",
  },
  {
    type: 'list',
    name: 'choice',
    message: "What's is the choice for player 2?",
    choices,
  }];

export {
  playerOneQuestions,
  playerTwoQuestions,
};
