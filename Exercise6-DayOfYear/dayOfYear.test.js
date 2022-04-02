const dayOfYear = require('./dayOfYear');

describe.skip('return day of year when given date', () => {
	it("ako je 2012, 1, 1, vrati 1", () => {
		expect(dayOfYear(2012, 1, 1)).toBe(1);
	});
	it("ako je 2012, 2, 1, vrati 32", () => {
		expect(dayOfYear(2012, 2, 1)).toBe(32);
	});
	it("ako je 2012, 8, 16, vrati 229", () => {
		expect(dayOfYear(2012, 8, 16)).toBe(229);
	});
	it("ako je 2013, 12, 5, vrati 339", () => {
		expect(dayOfYear(2013, 12, 5)).toBe(339);
	});
	it("ako je 2022, 3, 31, vrati 90", () => {
		expect(dayOfYear(2022, 3, 31)).toBe(90);
	});
});