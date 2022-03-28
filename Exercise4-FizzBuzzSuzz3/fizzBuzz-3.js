module.exports = (n) => {
	let rezultat=djeliteljPremaOstatku[3][n%3];
	rezultat+=djeliteljPremaOstatku[5][n%5];
	rezultat+=djeliteljPremaOstatku[7][n%7];
	return rezultat;
};

let djeliteljPremaOstatku = {
	3: {
		0: "Fizz",
		1: "",
		2: ""
	},
	5: {
		0: "Buzz",
		1: "",
		2: "",
		3: "",
		4: ""
	},
	7: {
		0: "Suzz",
		1: "",
		2: "",
		3: "",
		4: "",
		5: "",
		6: ""
	}
}