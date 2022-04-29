function splitter(text) {	
	let splittedText = text.toLowerCase().split(" ");
	let result = [];
	splittedText.forEach(element => {
		element=element.replaceAll(/[\W_]+/g, " | ").split(" ").filter((el) => el);
		Array.prototype.push.apply(result, element);
	});
	return result;
}

module.exports = { splitter };
