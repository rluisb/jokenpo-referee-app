'use strict';

var _inquirer = require('inquirer');

var _player = require('./player/player');

var _player2 = _interopRequireDefault(_player);

var _questions = require('./prompt/questions');

var _referee = require('./game/referee');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _inquirer.prompt)(_questions.playerOneQuestions).then(function (_ref) {
  var name = _ref.name,
      choice = _ref.choice;
  return new _player2.default(name, choice);
}).then(function (playerOne) {
  (0, _inquirer.prompt)(_questions.playerTwoQuestions).then(function (_ref2) {
    var name = _ref2.name,
        choice = _ref2.choice;
    return new _player2.default(name, choice);
  }).then(function (playerTwo) {
    return (0, _referee.checkWinner)({ playerOne: playerOne, playerTwo: playerTwo });
  }).then(console.log).catch(function (playerTwoError) {
    return console.error('Error for player two. Reason: ' + playerTwoError);
  });
}).catch(function (playerOneError) {
  return console.error('Error for player one. Reason: ' + playerOneError);
});