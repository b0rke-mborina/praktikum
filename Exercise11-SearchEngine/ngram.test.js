const { ngram } = require("./ngram");
const { splitter } = require("./splitter");
const { sourceText } = require("./sourceText");
const { generateIndex } = require("./wordindex");

describe("ngram", () => {
	let index = undefined;
	beforeAll(() => {
		index = generateIndex(sourceText);
	});

	test("For 'my' return ['best']", () => {
		expect(ngram("My", index)).toStrictEqual(["best"]);
	});

	test("For 'I' return ['have', 'am']", () => {
		expect(ngram("I", index)).toStrictEqual(["have", "am"]);
	});

	test("For 'good' return []]", () => {
		expect(ngram("good", index)).toStrictEqual([]);
	});

	test("Splitter splits text into array of words", () => {
		expect(splitter("Moj dragi pas je bio bolestan")).toEqual(["moj", "dragi", "pas", "je", "bio", "bolestan"]);
	});

	test("Splitter splits text into array of words with non alphanumeric characters alone", () => {
		expect(splitter("Moj dragi pas je bio bolestan. Ovo tu.")).toEqual(["moj", "dragi", "pas", "je", "bio", "bolestan", "|", "ovo", "tu", "|"]);
	});

	test("Splitter splits text into array of words with non alphanumeric characters alone", () => {
		expect(splitter("Moj dragi pas je bio bolestan.Ovo tu.")).toEqual(["moj", "dragi", "pas", "je", "bio", "bolestan", "|", "ovo", "tu", "|"]);
	});
});
