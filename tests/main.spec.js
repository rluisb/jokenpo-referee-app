import chai, { expect } from 'chai';

import {
  initialFunction
} from '../src/main';

describe('Jokenpo Referee', () => {
  describe('Smoke Tests', () => {
    it('should exist the initial function  method', () => {
      expect(initialFunction).to.exist;
    });
  });
});
