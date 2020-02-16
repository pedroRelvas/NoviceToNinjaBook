/* Currying allows us to turn a single function into a series of functons instead.
This is useful if you find that you're frequently calling a function with the same argument. For exampl, the following multiplier() function is a generic function that returns the product of two numbers that are provided as arguments:*/

// function multiplier(x, y) {
// 	return x * y;
// }

// const tax = multiplier(0.22, 400);
// console.log(tax);

/* We could make this function more useful by adding some
 code atobthe start that allows it to be curried so it 
returns another function if only one argument is provided: */

function multiplier(x, y) {
	if (y === undefined) {
		return function(z) {
			return x * z;
		};
	} else {
		return x * y;
	}
}

//Now, if you found yourself frequently calculating the tax
//the same rate of 22%, you could create a new curried function
//by providing just 0.22 as an argument:
const calcTax = multiplier(0.22);
console.log(calcTax);

console.log(calcTax(400));
