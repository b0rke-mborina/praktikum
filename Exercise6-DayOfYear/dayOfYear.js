// data
let daysInMonthsBefore = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];

// transformation
daysInMonthsBefore = daysInMonthsBefore.map((elem, index) =>
	daysInMonthsBefore.slice(0,index + 1).reduce((previous, current) => previous + current));

// function which returns ordinal number of day in year
module.exports = function dayOfYear(year, month, day) {
	return day + daysInMonthsBefore[month-1] + ifLeapYear(month, year);
}

// function which returns number of days that have to be added if a given year is a leap year
function ifLeapYear(monthNumber, yearNumber) {
	return monthNumber > 2 && (yearNumber%100==0 || (yearNumber%100!=0 && yearNumber%4==0)) ? 1 : 0;
}

/*
module.exports = function dayOfYear(year, month, day) {
	return day + getNumberOfDaysBefore(year, month);
}

function getNumberOfDaysBefore(yearNumber, monthNumber) {
	let result = 0;
	switch (monthNumber) {
		case 12: result += monthsOfYear[11];
		case 11: result += monthsOfYear[10];
		case 10: result += monthsOfYear[9];
		case 9: result += monthsOfYear[8];
		case 8: result += monthsOfYear[7];
		case 7: result += monthsOfYear[6];
		case 6: result += monthsOfYear[5];
		case 5: result += monthsOfYear[4];
		case 4: result += monthsOfYear[3];
		case 3:
			result += monthsOfYear[2] + isLeapYear(yearNumber);
		case 2: result += monthsOfYear[1];
		case 1: null;
	}
	return result;
}

function isLeapYear(yearNumber) {
	return yearNumber%100==0 || (yearNumber%100!=0 && yearNumber%4==0) ? 1 : 0;
}

let monthsOfYear = {
	1: 31,
	2: 28,
	3: 31,
	4: 30,
	5: 31,
	6: 30,
	7: 31,
	8: 31,
	9: 30,
	10: 31,
	11: 30,
	12: 31
}
*/