const { splitter } = require("./splitter");


function generateIndex(source) {
	let splittedText = splitter(source);
	let result = {};
	splittedText.forEach((el, i) => {
		let params = [el], limit = 3;
		for (let k = 1; k <= limit; k++) {
			params.push(splittedText[i + k]);
			if (isArrExceptLastElWithoutBreak(params)) handleArr(params, result);
		}
	});
	// console.log(result);
	return result;
}

function handleArr(parms, result) {
	let keyStr = initial(parms).join(" ");
	let valueStr = parms[parms.length - 1];
	if (!result[keyStr]) result[keyStr] = [];
	if (!isElBreak(valueStr)) result[keyStr].push(valueStr);
}

const isElBreak = str => str == "|";

const isArrExceptLastElWithoutBreak = arr => initial(arr).every(arr => arr != "|");

const initial = arr => arr.slice(0, -1);

module.exports = { generateIndex };
