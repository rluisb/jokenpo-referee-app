'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Object$freeze;

var _gameItems = require('./game-items');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GAME_RULES = Object.freeze((_Object$freeze = {}, _defineProperty(_Object$freeze, _gameItems.STONE, {
  win: _gameItems.SCISOR,
  loose: _gameItems.PAPER,
  draw: _gameItems.STONE
}), _defineProperty(_Object$freeze, _gameItems.SCISOR, {
  win: _gameItems.PAPER,
  loose: _gameItems.STONE,
  draw: _gameItems.SCISOR
}), _defineProperty(_Object$freeze, _gameItems.PAPER, {
  win: _gameItems.STONE,
  loose: _gameItems.SCISOR,
  draw: _gameItems.PAPER
}), _Object$freeze));

exports.default = GAME_RULES;