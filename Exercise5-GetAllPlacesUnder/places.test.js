const places = require('./places');
const allPlacesUnder = require('./placesFunction');

describe.skip('return all places from array under a place with given id, which is also from array', () => {
	it("ako je placeId=0, vrati [croatia, istria, pula, rovinj, dalmacija, veruda]", () => {
		expect(allPlacesUnder(0)).toStrictEqual([
			places[0], // croatia
			places[1], // istria
			places[4], // dalmacija
			places[2], // pula
			places[3], // rovinj
			places[5]  // veruda
		]);
	});
	it("ako je placeId=1, vrati [istria, dalmacija, pula, rovinj, veruda]", () => {
		expect(allPlacesUnder(1)).toStrictEqual([
			places[1], // istria
			places[4], // dalmacija
			places[2], // pula
			places[3], // rovinj
			places[5]  // veruda
		]);
	});
	it("ako je placeId=2, vrati [pula, rovinj, veruda]", () => {
		expect(allPlacesUnder(2)).toStrictEqual([
			places[2], // pula
			places[3], // rovinj
			places[5]  // veruda
		]);
	});
	it("ako je placeId=3, vrati [veruda]", () => {
		expect(allPlacesUnder(3)).toStrictEqual([
			places[5]  // veruda
		]);
	});
	it("ako je placeId=4, vrati []", () => {
		expect(allPlacesUnder(4)).toStrictEqual(
			[]
		);
	});
	it("ako je placeId=5, vrati []", () => {
		expect(allPlacesUnder(5)).toStrictEqual(
			[]
		);
	});
	it("ako je placeId=6, vrati []", () => {
		expect(allPlacesUnder(6)).toStrictEqual(
			[]
		);
	});
	it("ako je placeId=7, vrati []", () => {
		expect(allPlacesUnder(7)).toStrictEqual(
			[]
		);
	});
});