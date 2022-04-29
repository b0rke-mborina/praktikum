function splitter(text) {	
	let splittedText = text.toLowerCase().split(" ");
	let arr = [];
	splittedText.forEach(element => {
		element=element.replaceAll(/[\W_]+/g, " | ").split(" ").filter((el) => el);
		Array.prototype.push.apply(arr, element);
	});
	return arr;
}

module.exports = { splitter };
