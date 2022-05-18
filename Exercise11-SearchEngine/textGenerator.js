const { generateIndex } = require("./wordindex");
const { splitter } = require("./splitter");

function textGenerator(text, len) {
	let indexedText = generateIndex(text);
	console.log(indexedText);
	let splittedText = splitter(text);
	// console.log(splittedText);
	let wordsAfterBreak = [uppercaseFirstLetter(splittedText[0])];
	splittedText.forEach((el, i) => {
		if (el === "|" && i < splittedText.length-1 && !isInArray(uppercaseFirstLetter(splittedText[i+1]), wordsAfterBreak))
			wordsAfterBreak.push(uppercaseFirstLetter(splittedText[i+1]));
	});
	// console.log(wordsAfterBreak);
	let result = [];
	result.push(getRandomElement(wordsAfterBreak));
	for(let i = 0; i < len-1; i++) {
		if (!result[i]) break;
		let nextWords = [];
		if (result[i] === "|") nextWords = wordsAfterBreak;
		else nextWords = indexedText[result[i].toLowerCase()] || [];
		if (nextWords.length == 0) result.push("|");
		else result.push(getRandomElement(nextWords));
	}
	console.log(result);
	result = result.join(" ");
	console.log(result);
	return result;
}

function getRandomElement(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function uppercaseFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.substr(1)
}

function isInArray(str, arr) {
	let equalStrings = arr.filter(el => el == str);
	return equalStrings.length === 0 ? false : true;
}

module.exports = { textGenerator };