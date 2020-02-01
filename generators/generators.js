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
    console.log("current" + current);
    yield current;
  }
}

const relvasSequence = relvasFibonacci(1, 1);

for (n of relvasSequence) {
  if (n > 100) break;
  console.log(n);
}
