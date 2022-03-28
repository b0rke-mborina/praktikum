const division = require('./fizzBuzz');

describe.skip('fizBuzz: divides numbers 1-100 with 3 and 5 and writes Fizz and Buzz for some', () => {
	it("ako je x=3, vrati fizz", () => {
		expect(division(3)).toBe("Fizz");
	});
	it("ako je x=5, vrati buzz", () => {
		expect(division(5)).toBe("Buzz");
	});
	it("ako je x=15, vrati fizzbuzz", () => {
		expect(division(15)).toBe("FizzBuzz");
	});
	it("ako je x=4, vrati ''", () => {
		expect(division(4)).toBe("");
	});
	it("ako je x=10, vrati buzz", () => {
		expect(division(10)).toBe("Buzz");
	});
	it("ako je x=72, vrati fizz", () => {
		expect(division(72)).toBe("Fizz");
	});
	it("ako je x=45, vrati fizzbuzz", () => {
		expect(division(45)).toBe("FizzBuzz");
	});
	it("ako je x=98, vrati ''", () => {
		expect(division(98)).toBe("");
	});
});