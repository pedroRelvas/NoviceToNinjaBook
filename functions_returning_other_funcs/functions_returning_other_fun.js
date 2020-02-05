//Functions returning other fucnctions

function greeter(greeting = "Hello") {
  return function() {
    console.log(greeting);
  };
}

const firstOne = greeter();
firstOne();
const secondOne = greeter("Television");
secondOne();
