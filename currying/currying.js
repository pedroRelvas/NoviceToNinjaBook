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

//General CURRY() FUNCTION

function curry(func, ...oldArgs) {
	return function(...newArgs) {
		const allArgs = [...oldArgs, ...newArgs];
		return func(...allArgs);
	};
}

//example of using curry() function
const divider = (x, y) => x / y;

//Here's the quotient (the quotient of two numbers is the result obtained by diving one number by another)
console.log(divider(10, 5));

//We can now use our curry() function to create a more specific function that finds the
//reciprocal ( reciprocal of a number is the result obtained by
// dividing one by the number. If you multiply a number b its reciprocal, the answer is always one)
const reciprocal = curry(divider, 1);
console.log(reciprocal);

//This creates a new function called reciprocal()
//this is basically the divider() function , with the first argument set as 1
//now The reciprocal
console.log(reciprocal(2));

//this example show how currying uses generic functions as the building blocks for creating more speific funtions
