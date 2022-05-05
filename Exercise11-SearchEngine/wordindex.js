/*
let map = {
	I: ["have", "am"],
	have: ["been"],
	good: [],
	My: ["best"],
};
*/

// I have been good. My best friend is not a fish. I am home.

const { splitter } = require("./splitter");


function generateIndex(source) {
	let splittedText = splitter(source);
	let result = {};
	splittedText.forEach((el, i) => {
		let params = [el, splittedText[i + 1]];
		if (Boolean(params.every(arr => arr != "|"))) handle1Word(params, result);
		params.push(splittedText[i + 2]);
		if (Boolean(params.every(arr => arr != "|"))) handle2Words(params, result);
	});
	console.log(result);
	return result;
}

function handle1Word(parms, result) {
	if(!result[parms[0]]) result[parms[0]]=[];
	result[parms[0]].push(parms[1]);
}

function handle2Words(parms, result) {
	let keyForResult = `${parms[0]} ${parms[1]}`;
	if(!result[keyForResult]) result[keyForResult]=[];
	result[keyForResult].push(parms[2]);
}

module.exports = { generateIndex };
