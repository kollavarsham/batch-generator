#!/usr/bin/env node
'use strict';
var meow = require('meow');
var chalk = require('chalk');
var batchGenerator = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ batch-generator [year]',
		'',
		'Options',
		'  -y --year  Gregorian Year (between 1900 & 2050) to generate the Kollavarsham dates for. Default: current-year',
		'',
		'Examples',
		'  $ batch-generator 2010',
		'  if year is not specified, current year will be used as default'
	]
});

if (Object.keys(cli.flags).length && cli.input.length) {
	console.log(chalk.red('  Invalid Arguments!'));
	cli.showHelp();
	return;
}

var arg = cli.input.length ? cli.input : cli.flags;

var opts = arg || {};
var year = arg instanceof Array ? arg[0] : null;
year = year || opts.year || opts.y || new Date().getFullYear();

if (1900 > year || year > 2050) {
	console.log(chalk.red('  Year should be within 1900 & 2050!'));
	cli.showHelp();
	return;

}

console.log(batchGenerator(year));
