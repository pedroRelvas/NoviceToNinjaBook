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
