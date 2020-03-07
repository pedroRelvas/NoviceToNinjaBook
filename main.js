//** 1 */

//The pitfall is in that null is also considered an object, as well arrays.
//Soon if we type the follwing code, it will return true!
const bar = [];
console.log(typeof bar === "object");

//As long as one is aware of this, the problem can easily be avoided by also checking if bar is null:
console.log(bar != null && typeof bar === "object");

//the above solution wil return false if bar is a function. this is what we desire, but if we want to return true for functions , we can to the folwing code:
console.log(
	(bar != null && typeof bar === "object") || typeof bar === "function"
);

//the above solution will return true if bar is an array, because arrays are indeed objects
//so this a solution to return false if bar is an array
//see this to better explanation:https://luxiyalu.com/object-prototype-tostring-call/
console.log(
	bar != null &&
		typeof bar === "object" &&
		toString.call(bar) !== "[object Array]"
);

const hey = "heyhye!";
console.log(toString.call(hey) === "[object String]");

//However, there's one other alternative that returns false for nulls, arrays, and functions, but true for objects:
console.log(bar !== null && bar.constructor === Object);
console.log(bar.constructor);

//The constructor property returns a reference to the
//Object constructor function that created the instance
//object. Note that the value of this property is a
//reference to the function itself, not a string
//containing the function's name
