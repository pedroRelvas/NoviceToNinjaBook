function sayHello(gretting = "Hello") {
  return `${gretting}, my name is ${this.name}`;
}

//watch my homie call() takin' up this function fo' good

const clark = { name: "Clark" };
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

console.log(square.cache);
