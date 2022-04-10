const joinArrEls = require('./functionJOIN');

describe.skip('log to console prices for given periods from lowest to highest', () => {
	it("for ([1, 2, 3],', '), return '1, 2, 3'", () => {
		expect(joinArrEls([1, 2, 3], ", ")).toBe("1, 2, 3");
	});
	it("for (['prvo', 'ovo', 'pa', 'ono'],' '), return 'prvo ovo pa ono'", () => {
		expect(joinArrEls(["prvo", "ovo", "pa", "ono"], " ")).toBe("prvo ovo pa ono");
	});
	it("for (['1'+1, 11, '> a ne 2'],'=='), return '11==11==> a ne 2'", () => {
		expect(joinArrEls(['1'+1, 11, '> a ne 2'], "==")).toBe("11==11==> a ne 2");
	});
});