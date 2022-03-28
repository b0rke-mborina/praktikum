const places = require('./places');


module.exports = function getAllPlacesUnder(placeId) {
	let subPlaces = getSubPlaces(placeId);
	subPlaces.forEach(subPlace => {
		let res = getAllPlacesUnder(subPlace.id);
		Array.prototype.push.apply(subPlaces, res);
	});
	return subPlaces;
}

function getSubPlaces(placeId) {
	return places.filter(place => { return place.parentId === placeId });
}


/*
if(place id==2) treba vratiti [
		{...Pula...},
		{...Rovinj...},
		{....veruda...}
]
*/

/*
if(place id==2) treba vratiti [
		{
			id: 3,
			name: "Pula",
			parentId: 2 //o je root elelement
		},
		let rovinj = {
			id: 4,
			name: "Rovinj",
			parentId: 2 //o je root elelement
		},
		{
			id: 6,
			name: "Veruda",
			parentId: 3 //o je root elelement
		}
]
*/