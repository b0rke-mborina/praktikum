const convertToRoman = require("./arabicToRomanConverter.js");
const convertToArabic = require("./romanToArabicConverter.js");

describe("Arabic to Roman number converter", () => {
	test("Convert number 1 to 'I'", () => {
		expect(convertToRoman(1)).toStrictEqual("I");
	});
	test("Convert number 2 to 'II'", () => {
		expect(convertToRoman(2)).toStrictEqual("II");
	});
	test("Convert number 3 to 'III'", () => {
		expect(convertToRoman(3)).toStrictEqual("III");
	});
	test("Convert number 4 to 'IV'", () => {
		expect(convertToRoman(4)).toStrictEqual("IV");
	});
	test("Convert number 5 to 'V'", () => {
		expect(convertToRoman(5)).toStrictEqual("V");
	});
	test("Convert number 6 to 'VI'", () => {
		expect(convertToRoman(6)).toStrictEqual("VI");
	});
	test("Convert number 7 to 'VII'", () => {
		expect(convertToRoman(7)).toStrictEqual("VII");
	});
	test("Convert number 8 to 'VIII'", () => {
		expect(convertToRoman(8)).toStrictEqual("VIII");
	});
	test("Convert number 9 to 'IX'", () => {
		expect(convertToRoman(9)).toStrictEqual("IX");
	});
	test("Convert number 10 to 'X'", () => {
		expect(convertToRoman(10)).toStrictEqual("X");
	});
	test("Convert number 12 to 'XII'", () => {
		expect(convertToRoman(12)).toStrictEqual("XII");
	});
	test("Convert number 37 to 'XXXVII'", () => {
		expect(convertToRoman(37)).toStrictEqual("XXXVII");
	});
	test("Convert number 49 to 'XLIX'", () => {
		expect(convertToRoman(49)).toStrictEqual("XLIX");
	});
	test("Convert number 50 to 'L'", () => {
		expect(convertToRoman(50)).toStrictEqual("L");
	});
	test("Convert number 66 to 'LXVI'", () => {
		expect(convertToRoman(66)).toStrictEqual("LXVI");
	});
	test("Convert number 91 to 'XCI'", () => {
		expect(convertToRoman(91)).toStrictEqual("XCI");
	});
	test("Convert number 100 to 'C'", () => {
		expect(convertToRoman(100)).toStrictEqual("C");
	});
	test("Convert number 400 to 'CD'", () => {
		expect(convertToRoman(400)).toStrictEqual("CD");
	});
	test("Convert number 444 to 'CDXLIV'", () => {
		expect(convertToRoman(444)).toStrictEqual("CDXLIV");
	});
	test("Convert number 500 to 'D'", () => {
		expect(convertToRoman(500)).toStrictEqual("D");
	});
	test("Convert number 800 to 'DCCC'", () => {
		expect(convertToRoman(800)).toStrictEqual("DCCC");
	});
	test("Convert number 900 to 'CM'", () => {
		expect(convertToRoman(900)).toStrictEqual("CM");
	});
	test("Convert number 911 to 'CMXI'", () => {
		expect(convertToRoman(911)).toStrictEqual("CMXI");
	});
	test("Convert number 1000 to 'M'", () => {
		expect(convertToRoman(1000)).toStrictEqual("M");
	});
	test("Convert number 3000 to 'MMM'", () => {
		expect(convertToRoman(3000)).toStrictEqual("MMM");
	});
	test("Convert number 3888 to 'MMMDCCCLXXXVIII'", () => {
		expect(convertToRoman(3888)).toStrictEqual("MMMDCCCLXXXVIII");
	});
	test("Convert number 3999 to 'MMMCMXCIX'", () => {
		expect(convertToRoman(3999)).toStrictEqual("MMMCMXCIX");
	});
	test("Convert number 0 to ''", () => {
		expect(convertToRoman(0)).toStrictEqual("");
	});
	test("Convert number -17 to 'NOT POSSIBLE TO CONVERT'", () => {
		expect(convertToRoman(-17)).toStrictEqual("NOT POSSIBLE TO CONVERT");
	});
	test("Convert number 4000 to 'NOT POSSIBLE TO CONVERT'", () => {
		expect(convertToRoman(4000)).toStrictEqual("NOT POSSIBLE TO CONVERT");
	});
	test("Convert number 5000 to 'NOT POSSIBLE TO CONVERT'", () => {
		expect(convertToRoman(5000)).toStrictEqual("NOT POSSIBLE TO CONVERT");
	});
});

describe("Roman to Arabic number converter", () => {
	test("Convert number 'I' to 1", () => {
		expect(convertToArabic("I")).toStrictEqual(1);
	});
	test("Convert number 'III' to 3", () => {
		expect(convertToArabic("III")).toStrictEqual(3);
	});
	test("Convert number 'IV' to 4", () => {
		expect(convertToArabic("IV")).toStrictEqual(4);
	});
	test("Convert number 'V' to 5", () => {
		expect(convertToArabic("V")).toStrictEqual(5);
	});
	test("Convert number 'VII' to 7", () => {
		expect(convertToArabic("VII")).toStrictEqual(7);
	});
	test("Convert number 'IX' to 9", () => {
		expect(convertToArabic("IX")).toStrictEqual(9);
	});
	test("Convert number 'X' to 10", () => {
		expect(convertToArabic("X")).toStrictEqual(10);
	});
	test("Convert number 'XI' to 11", () => {
		expect(convertToArabic("XI")).toStrictEqual(11);
	});
	test("Convert number 'XIV' to 14", () => {
		expect(convertToArabic("XIV")).toStrictEqual(14);
	});
	test("Convert number 'XV' to 15", () => {
		expect(convertToArabic("XV")).toStrictEqual(15);
	});
	test("Convert number 'XVI' to 16", () => {
		expect(convertToArabic("XVI")).toStrictEqual(16);
	});
	test("Convert number 'XIX' to 19", () => {
		expect(convertToArabic("XIX")).toStrictEqual(19);
	});
	test("Convert number 'XXXIX' to 39", () => {
		expect(convertToArabic("XXXIX")).toStrictEqual(39);
	});
	test("Convert number 'L' to 50", () => {
		expect(convertToArabic("L")).toStrictEqual(50);
	});
	test("Convert number 'XC' to 90", () => {
		expect(convertToArabic("XC")).toStrictEqual(90);
	});
	test("Convert number 'C' to 100", () => {
		expect(convertToArabic("C")).toStrictEqual(100);
	});
	test("Convert number 'CX' to 110", () => {
		expect(convertToArabic("CX")).toStrictEqual(110);
	});
	test("Convert number 'CD' to 400", () => {
		expect(convertToArabic("CD")).toStrictEqual(400);
	});
	test("Convert number 'D' to 500", () => {
		expect(convertToArabic("D")).toStrictEqual(500);
	});
	test("Convert number 'DC' to 600", () => {
		expect(convertToArabic("DC")).toStrictEqual(600);
	});
	test("Convert number 'CMXCIX' to 999", () => {
		expect(convertToArabic("CMXCIX")).toStrictEqual(999);
	});
	test("Convert number 'MDCLXVI' to 1666", () => {
		expect(convertToArabic("MDCLXVI")).toStrictEqual(1666);
	});
	test("Convert number 'MM' to 2000", () => {
		expect(convertToArabic("MM")).toStrictEqual(2000);
	});
	test("Convert number 'MMMCMXCIX' to 3999", () => {
		expect(convertToArabic("MMMCMXCIX")).toStrictEqual(3999);
	});
});