let croatia = {
	id: 1,
	name: "Croatia",
	parentId: 0 // 0 je root element
}

let istria = {
	id: 2,
	name: "Istria",
	parentId: 1 
}

let pula = {
	id: 3,
	name: "Pula",
	parentId: 2
}

let rovinj = {
	id: 4,
	name: "Rovinj",
	parentId: 2
}

let dalmacija = {
	id: 5,
	name: "Dalmacija",
	parentId: 1
}

let veruda = {
	id: 6,
	name: "Veruda",
	parentId: 3
}

let places = [croatia, istria, pula, rovinj, dalmacija, veruda];

module.exports = places;
