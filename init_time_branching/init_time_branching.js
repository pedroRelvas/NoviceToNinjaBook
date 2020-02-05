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
