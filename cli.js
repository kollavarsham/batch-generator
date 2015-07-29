#!/usr/bin/env node
'use strict';
var meow = require('meow');
var batchGenerator = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ batch-generator [input]',
		'',
		'Examples',
		'  $ batch-generator',
		'  unicorns & rainbows',
		'',
		'  $ batch-generator ponies',
		'  ponies & rainbows',
		'',
		'Options',
		'  --foo  Lorem ipsum. Default: false'
	]
});

console.log(batchGenerator(cli.input[0] || 'unicorns'));
