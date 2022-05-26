function convertToArabic(roman) {
	let result = 0;
	for (let i = 0; i < roman.length; i++) {
		let current = roman_arabic[roman.charAt(i)];
		let next = roman_arabic[roman.charAt(i + 1)] || 0;
		result += ((current >= next) * 2 - 1) * current;
	}
	return result;
}

const roman_arabic = {
	"I": 1,
	"V": 5,
	"X": 10,
	"L": 50,
	"C": 100,
	"D": 500,
	"M": 1000
}

module.exports = convertToArabic;
