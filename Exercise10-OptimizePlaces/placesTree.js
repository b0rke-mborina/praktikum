const places = require('./places');

let root = {
	id: 0,
	name: "",
	parentId: 0,
	children: []
}

let placesWithChildren = places;
// console.log(placesWithChildren);

placesWithChildren.forEach(place => {
	place["children"] = [];
});
// console.log(placesWithChildren);

function addPlacesToNode(treeNode) {
	let childrenOfPlace = placesWithChildren.filter(child => child.parentId === treeNode.id);
	treeNode.children = childrenOfPlace;
	if (childrenOfPlace.length > 0) treeNode.children.forEach(child => addPlacesToNode(child));
}
addPlacesToNode(root);
// console.log(root);

function searchTree(placeId, currentPlace){
	if (currentPlace.id == placeId) return currentPlace;
	if (currentPlace.children) {
		for (let child of currentPlace.children) {
			let result = searchTree(placeId, child);
			if (result) return result;
		}
	}
	return null;
}
// console.log(searchTree(3, root));

function getAllPlacesUnder(placeId) {
	let current = searchTree(placeId, root);
	let result = [];
	if (current && current.children && current.children.length !== 0) {
		current.children.forEach(child => {
			let childrenOfChild = child.children;
			result.push(child);
			if (childrenOfChild.length !== 0) Array.prototype.push.apply(result, getAllPlacesUnder(child.id));
		});
	}
	result = cleanArrayData(result);
	result.sort((a, b) => a.id - b.id);
	return result;
}
// console.log(getAllPlacesUnder(1));

function cleanArrayData(arr) {
	for (let element in arr) {
		delete element.children;
	}
	return arr;
}

module.exports = getAllPlacesUnder;
