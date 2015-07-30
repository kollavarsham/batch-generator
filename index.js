'use strict';
var Kollavarsham = require('kollavarsham'),
	kollavarsham = new Kollavarsham(),
	sprintf = require('sprintf-js').sprintf;

var getOutputForADay = function (hinduDate) {
	var result = sprintf('%4s %2s %2s %s|Saka %4s|V.S. %4s %17s %5s %2s %s',
		hinduDate.gregorianDate.getFullYear(), hinduDate.gregorianDate.getMonth() + 1, hinduDate.gregorianDate.getDate(),
		hinduDate.weekdayName.substr(0, 3), hinduDate.globals.YearSaka, hinduDate.globals.YearVikrama,
		hinduDate.globals.adhimasa + hinduDate.globals.masa, hinduDate.globals.paksa, hinduDate.globals.tithiDay,
		hinduDate.globals.naksatra);
	return result + '===============================================================================';
};

var batchGenerator = function (opts) {

	opts = opts || {};
	var year = opts.year || opts.y || new Date().getFullYear();
	var kollavarshamDate = kollavarsham.fromGregorianDate()
	for (var i = 0; i < 365; i++) {
	  gregorianDate.setUTCDate(gregorianDate.getUTCDate() + 1);
	  hinduDate = kollavarsham.fromGregorianDate(gregorianDate);
	  getOutputForADay(hinduDate);
	}

};

module.exports = batchGenerator;
