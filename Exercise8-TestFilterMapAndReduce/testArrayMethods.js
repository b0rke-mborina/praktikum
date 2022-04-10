module.exports = function testFilterMapReduce() {
	// testing Array.prototype.filter()
	const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
	const filteredWords = words.filter(word => word.length <= 5);
	console.log(filteredWords);
	// expected output: Array ["exuberant", "destruction", "present"]

	// testing Array.prototype.map()
	const numbers = [1, 4, 9, 16];
	// pass a function to map
	const map1 = numbers.map(x => "Number " + (x * 10 / 3).toFixed(2));
	console.log(map1);
	// expected output: Array [2, 8, 18, 32]

	// testing Array.prototype.reduce()
	const arr = [1, 2, 3, 4];
	// 100 + 1 + 2 + 3 + 4
	const initialValue = 100;
	const sumWithInitial = arr.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
	console.log(sumWithInitial);
	// expected output: 110
}
