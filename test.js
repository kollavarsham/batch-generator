'use strict';
var assert = require('assert');
var batchGenerator = require('./');

it('should ', function () {
	assert.strictEqual(batchGenerator('unicorns'), 'unicorns & rainbows');
});
