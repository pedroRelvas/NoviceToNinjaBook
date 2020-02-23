//myMaths is the namespace,´
const myMaths = {
	square(x) {
		return x * x;
	},
	mean(array, callback) {
		if (callback) {
			array.map(callback);
		}
		const total = array.reduce((a, b) => a + b);
		return total / array.length;
	}
};

// now these functions need to be preceded by the namespace to be invoked

console.log(myMaths.square(3));
console.log(myMaths.mean([1, 2, 3]));
