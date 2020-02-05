//Facturial Number

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    //don't get it, yet
    console.log(n);
    return n * factorial(n - 1);
  }
}

console.log(factorial(4));
