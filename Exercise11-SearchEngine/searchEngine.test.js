const findSuggestions = require("./searchEngine");

describe.skip("searchEngine", () => {
	test("Za 'I have' vrati sugestije: 'I have been' i 'I have fisherman'", () => {
	  expect(findSuggestions("I have")).toStrictEqual([
		 "I have been",
		 "I have fisherman",
	  ]);
	});
 });