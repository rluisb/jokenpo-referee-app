'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkWinner = undefined;

var _rules = require('./rules');

var _rules2 = _interopRequireDefault(_rules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var announceWinner = function announceWinner(_ref) {
  var winner = _ref.winner,
      looser = _ref.looser;
  return winner.name + '\'s ' + winner.choice + ' wins over ' + looser.name + '\'s ' + looser.choice;
};

var announceDraw = function announceDraw(_ref2) {
  var playerOne = _ref2.playerOne,
      playerTwo = _ref2.playerTwo;
  return playerOne.name + '\'s ' + playerOne.choice + ' draw with ' + playerTwo.name + '\'s ' + playerTwo.choice;
};

var checkWinner = function checkWinner(_ref3) {
  var playerOne = _ref3.playerOne,
      playerTwo = _ref3.playerTwo;

  if (playerOne.choice === _rules2.default[playerTwo.choice].loose) {
    return announceWinner({ winner: playerOne, looser: playerTwo });
  }

  if (playerTwo.choice === _rules2.default[playerOne.choice].loose) {
    return announceWinner({ winner: playerTwo, looser: playerOne });
  }

  return announceDraw({ playerOne: playerOne, playerTwo: playerTwo });
};

exports.checkWinner = checkWinner;