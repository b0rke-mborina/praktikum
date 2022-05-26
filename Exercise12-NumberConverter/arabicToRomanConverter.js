function convertToRoman(arabic) {
	if (arabic > 3999 || arabic < 0 || arabic == undefined) return "NOT POSSIBLE TO CONVERT";
	else if (arabic == 0) return "";
	let subtractor = findLargestNumberToSubtract(arabic);
	return arabic_roman[subtractor] + convertToRoman(arabic - subtractor);
}

function findLargestNumberToSubtract(number) {
	return subtractors.find((el) => el<=number);
}

const subtractors = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

let arabic_roman = {
	1000: "M",
	900: "CM",
	500: "D",
	400: "CD",
	100: "C",
	90: "XC",
	50: "L",
	40: "XL",
	10: "X",
	9: "IX",
	5: "V",
	4: "IV",
	1: "I",
}

module.exports = convertToRoman;
