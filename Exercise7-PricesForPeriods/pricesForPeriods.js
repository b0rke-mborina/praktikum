let data = [
	{from: '2020-01-01', to: '2020-02-01', price: 34.5},
	{from: '2020-02-02', to: '2020-03-01', price: 37.0},
	{from: '2020-03-02', to: '2020-05-15', price: 39.0},
	{from: '2020-05-16', to: '2020-06-15', price: 37.0},
]

// data.sort((a, b) => (a.price > b.price) ? 1 : -1);
// console.log(data);

function getPeriodString(dataItem) {
	return dataItem.from + " do " + dataItem.to;
}

function getAllPeriods(periods) {
	return periods.map((period) => getPeriodString(period)).join(", ");
}

let result = data.reduce(function (previous, current) {
	previous[(current.price).toFixed(1)] = previous[(current.price).toFixed(1)] || [];
	previous[(current.price).toFixed(1)].push(current);
	return previous;
}, {});

module.exports = function getPricesAndPeriods() {
	for(const [key, value] of Object.entries(result)) {
		console.log(key + " : " + getAllPeriods(value));
	}
}
