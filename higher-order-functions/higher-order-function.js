//this multiplier() function returns another
//function that traps the argument x in a closure.
//This is then available to be used by the returned function.
function multiplier(x) {
  return function(y, z) {
    return x * y + z;
  };
}

let doubler = multiplier(2);
console.log(doubler(2, 1));

//the multiplier() function is an example of a higher-order function.

let triple = multiplier(3);
console.log(triple(5, 1));

function power(x) {
  return function(power) {
    return Math.pow(x, power);
  };
}

let twoExp = power(2);
console.log(twoExp(5));

//When a higher-order function returns another function,
//we can use a neat trick to create an anonymous return
//function and immediately invoke it with a value instead by
//using double parentheses. The following xample will calculate
//3 to power 5
console.log(power(3)(5));
