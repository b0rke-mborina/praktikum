const places = require('./places');


module.exports = function getAllPlacesUnder(placeId) {
	let subPlaces = getSubPlaces(placeId);
	
	// while(subPlaces.length != 0) {
		// let current = subPlaces.shift();
		// allPlacesUnder.push(current);
		// subPlaces.push(...getSubPlaces(current.id));
	// }
	subPlaces.forEach(subPlace => {
		let res = getAllPlacesUnder(subPlace.id);
		Array.prototype.push.apply(subPlaces, res);
	});
	return subPlaces;
}

function getSubPlaces(placeId) {
	return places.filter(place => { return place.parentId === placeId });
}

// if(placeId == 0) return places;
	//subPlaces = places.filter(place => { return place.parentId === placeId }); // get places which are direct descendants
	// let subsub=[];
	// for(let subPlace of subPlaces) {
		// let subSubplaces = places.filter(place => { return place.parentId === subPlace.id }); // // get places which are second descendants
		// Array.prototype.push.apply(subsub, subSubplaces);
	// }

// let res2 = res.forEach(resPlace => getSubPlaces(resPlace.id));
	// Array.prototype.push.apply(subPlaces, res2);
	// subPlaces.push(res);
	// places
		// .filter(place => place[link] === id)
		// .map(place => ({ ...place, children: nest(places, place.id) }));






// const nest = (items, id = null, link = 'parentId') =>
	// items
		// .filter(item => item[link] === id)
		// .map(item => ({ ...item, children: nest(items, item.id) }));

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