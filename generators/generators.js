//Generator to produce a fibonacci

/* function* fibonacci(a, b) {
  let [prev, current] = [a, b];
  while (true) {
    [prev, current] = [current, prev + current];
    yield current;
  }
}

const sequence = fibonacci(1, 1);

for (n of sequence) {
  if (n > 100) break;
  console.log(n);
}
 */
//same here

function* relvasFibonacci(a, b) {
  let [prev, current] = [a, b];
  while (true) {
    [prev, current] = [current, prev + current];
    yield current;
  }
}

const relvasSequence = relvasFibonacci(1, 1);

for (n of relvasSequence) {
  if (n > 100) break;
  console.log(n);
}

//based on the following article: https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5

function* generatorFunction() {
  console.log("This will be exectued first.");
  yield "Hello, ";

  console.log("I will be printed after the pause.");
  yield "World";
}

const generatorObject = generatorFunction();

console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
