const sum = require('./sum');

describe.skip("sum test suite", function() {
	test('adds 1 + 2 to equal 3', () => {
		expect(sum(1, 2)).toEqual(3);
	});
});