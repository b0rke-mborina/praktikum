const division = require('./fizzBuzzSuzz');

describe.skip('test FizBuzzSuzz base', () => {
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
		expect(division(98)).toBe("Suzz");
	});
});

describe.skip('test FizBuzzSuzz upgraded', () => {
	it("ako je x=3, vrati fizz", () => {
		expect(division(3)).toBe("Fizz");
	});
	it("ako je x=5, vrati buzz", () => {
		expect(division(5)).toBe("Buzz");
	});
	it("ako je x=7, vrati suzz", () => {
		expect(division(7)).toBe("Suzz");
	});
	it("ako je x=15, vrati fizzbuzz", () => {
		expect(division(15)).toBe("FizzBuzz");
	});
	it("ako je x=21, vrati fizzsuzz", () => {
		expect(division(21)).toBe("FizzSuzz");
	});
	it("ako je x=35, vrati buzzsuzz", () => {
		expect(division(35)).toBe("BuzzSuzz");
	});
	it("ako je x=105, vrati fizzbuzzsuzz", () => {
		expect(division(105)).toBe("FizzBuzzSuzz");
	});
});