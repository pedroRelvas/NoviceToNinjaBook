function sayHello(gretting = "Hello") {
  return `${gretting}, my name is ${this.name}`;
}

//watch my homie call() takin' up this function fo' good

const zezinho = { name: "Zézinho Cigano" };

document.write(sayHello.call(zezinho, "Faaaai"));
