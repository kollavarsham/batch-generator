#!/usr/bin/env node
'use strict';
var meow = require('meow');
var batchGenerator = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ batch-generator [year]',
		'',
		'Options',
		'  -y --year  Gregorian Year to generate the Kollavarsham dates for. Default: current-year',
		'',
		'Examples',
		'  $ batch-generator 2010',
		'  if year is not specified, current year will be used as fefault'
	]
});

console.log(batchGenerator(cli.input));
