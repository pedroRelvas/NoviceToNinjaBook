function reverse(string) {
  return string
    .split("")
    .reverse()
    .join("");
}

console.log(
  reverse(
    "The function does not change the actual value of the argument it just returns another string that happens to be the argument written backwards"
  )
);

const number = 16;

function pureAF(x, y) {
  return x + y;
}
console.log(pureAF(number, number));

function square(x) {
  return x * x;
}

function sum(array, callback) {
  if (callback) {
    array = array.map(callback);
  }
  return array.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3]));

console.log(sum([1, 2, 3], square));

function mean(array) {
  return sum(array) / array.length;
}

console.log(mean([1, 2, 3]));

function variance(array) {
  return sum(array, square) / array.length - square(mean(array));
}

console.log(variance([1, 2, 3]));
