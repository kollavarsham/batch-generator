'use strict';
var Kollavarsham = require('kollavarsham'),
	kollavarsham = new Kollavarsham(),
	sprintf = require('sprintf-js').sprintf;

var separator = '-------------------------------------------------------------------------';

var getOutputForADay = function (kollavarshamDate) {
	var monthNames = ["January", "February", "March", "April", "May", "June",
	  "July", "August", "September", "October", "November", "December"
	];
	var result = sprintf('| %4s  %-9s  %2s  %-9s | %4s  %5s  %2s | %-13s |',
		kollavarshamDate.gregorianDate.getFullYear(), monthNames[kollavarshamDate.gregorianDate.getMonth()],
		kollavarshamDate.gregorianDate.getDate(), kollavarshamDate.weekdayName, kollavarshamDate.year,
		kollavarshamDate.calendarData.malayalaMasa, kollavarshamDate.date, kollavarshamDate.calendarData.malayalaNaksatra);
	return result + '\n' + separator;
};

var batchGenerator = function (year) {
	var gregorianDate = new Date(year, 0, 1);
  var kollavarshamDate, output = separator + '\n';
	while(gregorianDate.getFullYear() === year) {
		kollavarshamDate = kollavarsham.fromGregorianDate(gregorianDate);
		output += getOutputForADay(kollavarshamDate) + '\n';
		gregorianDate.setUTCDate(gregorianDate.getUTCDate() + 1);
	}

	return output;
};

module.exports = batchGenerator;
