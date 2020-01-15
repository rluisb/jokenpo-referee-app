'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playerTwoQuestions = exports.playerOneQuestions = undefined;

var _gameItems = require('../game/game-items');

var choices = [_gameItems.STONE, _gameItems.SCISOR, _gameItems.PAPER];

var playerOneQuestions = [{
  type: 'input',
  name: 'name',
  message: "What's is the name of player 1?"
}, {
  type: 'list',
  name: 'choice',
  message: "What's is the choice for player 1?",
  choices: choices
}];

var playerTwoQuestions = [{
  type: 'input',
  name: 'name',
  message: "What's is the name of player 2?"
}, {
  type: 'list',
  name: 'choice',
  message: "What's is the choice for player 2?",
  choices: choices
}];

exports.playerOneQuestions = playerOneQuestions;
exports.playerTwoQuestions = playerTwoQuestions;