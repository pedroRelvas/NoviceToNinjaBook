//CLOSURES
//One of the key aspects of closures is that an insied function have acess
//to all the variables of the outside function
function outer() {
  const outside = "Outside!";
  function inner() {
    const inside = "Inside!";
    console.log(outside);
    console.log(inside);
  }
  console.log("hey" + outside);
  inner();
}

const closure = outer();
closure();

//pratical example

function hey() {
  const a = 1.8;
  const b = 32;
  return c => c * a + b;
}

const toFahrenheit = hey();
console.log(toFahrenheit(30));

//counter example

function counter(start) {
  let i = start;
  return function() {
    return i++;
  };
}

const count = counter(1);
console.log(count());
console.log(count());
