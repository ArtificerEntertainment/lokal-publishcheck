'use strict';

const assert = require('assert');
const lokal = require('lokal');

describe('local dependencies', () => {
  it('dependency0 is loaded properly', () => {
    assert.equal(lokal('dependency0'), 'dependency0 inside lokal-publishcheck');
  });

  it('dependency1 is loaded properly', () => {
    assert.equal(lokal('dependency1'), 'dependency1 inside lokal-publishcheck');
  });

});
