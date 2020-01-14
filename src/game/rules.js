import {STONE, PAPER, SCISOR} from './game-items';

const GAME_RULES = Object.freeze({
  [STONE]: {
    win: SCISOR,
    loose: PAPER,
    draw: STONE,
  },
  [SCISOR]: {
    win: PAPER,
    loose: STONE,
    draw: SCISOR,
  },
  [PAPER]: {
    win: STONE,
    loose: SCISOR,
    draw: PAPER,
  },
});

export default GAME_RULES;
