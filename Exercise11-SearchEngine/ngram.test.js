const { ngram } = require("./ngram");
const { splitter } = require("./splitter");
const { sourceText } = require("./sourceText");
const { generateIndex } = require("./wordindex");

describe("splitter", () => {
	test("Splitter splits text into array of words", () => {
		expect(splitter(sourceText)).toEqual(
			["i", "have", "been", "good", "|", "my", "best", "friend", "|", "is", "not",
			"a", "fish", "|", "i", "am", "home", "|", "hi", "|", "are", "you", "home", "|"]
		);
	});
});

describe("index 1 word", () => {
	let index = undefined;
	beforeAll(() => {
		index = generateIndex(sourceText);
	});

	test("For 'i' return ['have', 'am']", () => {
		expect(index["i"]).toStrictEqual(["have", "am"]);
	});
	test("For 'have' return ['have', 'am']", () => {
		expect(index["have"]).toStrictEqual(["been"]);
	});
	test("For 'good' return undefined", () => {
		expect(index["good"]).toStrictEqual([]);
	});
	test("For 'hi' return undefined", () => {
		expect(index["hi"]).toStrictEqual([]);
	});
	test("For 'my' return ['best']", () => {
		expect(index["my"]).toStrictEqual(["best"]);
	});
	test("For 'is' return ['not']", () => {
		expect(index["is"]).toStrictEqual(["not"]);
	});
});

describe("index 2 words", () => {
	let index = undefined;
	beforeAll(() => {
		index = generateIndex(sourceText);
	});

	test("For 'i have' return ['been']", () => {
		expect(index["i have"]).toStrictEqual(["been"]);
	});
	test("For 'i am' return ['home']", () => {
		expect(index["i am"]).toStrictEqual(["home"]);
	});
	test("For 'my best' return ['friend']", () => {
		expect(index["my best"]).toStrictEqual(["friend"]);
	});
	test("For 'are you' return ['home']", () => {
		expect(index["are you"]).toStrictEqual(["home"]);
	});
	test("For 'been good' return []", () => {
		expect(index["been good"]).toStrictEqual([]);
	});
	test("For 'best friend' return []", () => {
		expect(index["best friend"]).toStrictEqual([]);
	});
});

describe("index 3 words", () => {
	let index = undefined;
	beforeAll(() => {
		index = generateIndex(sourceText);
	});
	
	test("For 'i have been' return ['good']", () => {
		expect(index["i have been"]).toStrictEqual(["good"]);
	});
	test("For 'is not a' return ['fish']", () => {
		expect(index["is not a"]).toStrictEqual(["fish"]);
	});
	test("For 'have been good' return []", () => {
		expect(index["have been good"]).toStrictEqual([]);
	});
	test("For 'not a fish' return []", () => {
		expect(index["not a fish"]).toStrictEqual([]);
	});
});