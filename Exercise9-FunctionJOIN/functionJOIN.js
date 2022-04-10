module.exports = function join(arr, token) {
	var result = arr.reduce(function(prevVal, currVal, idx){
		return idx == 0 ? currVal : prevVal + token + currVal;
	}, token)
	return result;
}

/*
module.exports = function join(arr, token) {
	let str = (typeof arr[0])=="string" ? arr[0] : JSON.stringify(arr[0]);
	for (let i=1; i<arr.length; i++) str += token + arr[i];
	return str;
}
*/