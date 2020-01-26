function sayHello(gretting = "Hello") {
  return `${gretting}, my name is ${this.name}`;
}

//watch my homie call() takin' up this function fo' good

const zezinho = { name: "Zézinho Cigano" };

document.write(sayHello.call(zezinho, "Faaaai"));

//MEMOIZATION

function square(x) {
  square.cache = square.cache || {};
  if (!square.cache[x]) {
    square.cache[x] = x * x;
  }
  return square.cache[x];
}

square(3);
square(-11);
square(4);

console.log(square.cache);

//Immediately invoked Function Expressions

(function() {
  const temp = "World";
  console.log(`Hello ${temp}`);
})();

(function() {
  const dragao = "desunião";
  console.log(`Ai estes são os filhos da ${dragao}`);
})();
//work the same way
{
  const name = "Peter Parker";
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const date = new Date(),
    today = days[date.getDay()];
  console.log(`Welcome back ${name}, Today is ${today}!`);
}

//-Functions that define and rewrite themselves
function party() {
  console.log("Wow this is amazing");
  party = function() {
    console.log("Estou triste.");
  };
}

party();
party();

//Init-time Branching

function ride() {
  if (window.unicorn) {
    ride = function() {
      return "Riding on a unicorn is the best!";
    };
  } else {
    ride = function() {
      return "Riding on a pony is still pretty good";
    };
  }
  return ride();
}

console.log(ride());

//Facturial Number

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    //don't get it, yet
    return n * factorial(n - 1);
  }
}

console.log(factorial(0));
console.log(factorial(4));
