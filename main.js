//const form = document.forms[0] OR
//const form = document.getElementsByTagName('form')[0]; OR
//const form = document.forms.search; //"search" is the name attribute OR
const form = document.forms["search"];
const formRaiz = document.forms["formRaiz"];
//form object
const [input, button] = form.elements;
const inputLouco = form["searchInput"];
input.value = "Aqui pa";
//inputLouco.addEventListener("focus", () => alert("call me"), false);
//inputLouco.addEventListener("blur", () => alert("don't call me"), false);
inputLouco.addEventListener("change", () => alert("hey buddy"), false);
form.addEventListener("submit", search, false);

function search(event) {
  alert(`You searched for: ${inputLouco.value}`);
  event.preventDefault();
}

inputLouco.addEventListener(
  "focus",
  () => {
    if (inputLouco.value === "Aqui pa") {
      inputLouco.value = "";
      throw new Error("motherfucker");
    }
  },
  false
);

inputLouco.addEventListener(
  "blur",
  () => {
    if (inputLouco.value === "") {
      inputLouco.value = "Aqui pa";
    }
  },
  false
);

//form.action = "www.facebook.com";
console.log(form);
console.log(button);
console.log(inputLouco);

function squareRoot(number) {
  if (number < 0) {
    throw new RangeError("You can't handle the truth");
  }
  return Math.sqrt(number);
}

console.log(squareRoot(121));

function imaginarySquareRoot(number) {
  let answer;
  try {
    answer = String(squareRoot(number));
  } catch (error) {
    answer = squareRoot(-number) + "i";
  } finally {
    return `+ or - ${answer}`;
  }
}

console.log(imaginarySquareRoot(-49));

/* const raizQuadradaInput = document.getElementsByName(formRaiz["raizQuadrada"]);
const raizQuadradaInputValue = raizQuadradaInput.value;
const getRaizQuadradaBtn = document.getElementById("getSquareRoot");


function displayRaizQuadrada(){

  getRaizQuadradaBtn.addEventListener(
    "click",
    function squareRoot(number) {
      if (number < 0) {
        throw new RangeError("You can't handle the truth");
      }
      return Math.sqrt(number);
    },
    false
  );
  

}
 */

function collatz(n, sequence = [n]) {
  if (n === 1) {
    return `Sequence took ${sequence.length} steps. It was ${sequence}`;
  }

  if (n % 2 === 0) {
    n = n / 2;
  } else {
    n = 3 * n + 1;
  }

  return collatz(n, [...sequence, n]);
}

console.log(collatz(29));

function cattz(numero, sequencia = [numero]) {
  if (numero === 1) {
    return `cabou-se. passos ${sequencia.length}. numeros: ${sequencia} `;
  }

  if (numero % 2 === 0) {
    numero = numero / 2;
  } else {
    numero = 3 * numero + 1;
  }

  return cattz(numero, [...sequencia, numero]);
}

console.log(cattz(90));

//creating a promise
//object
const dice = {
  sides: 6,
  roll() {
    return Math.floor(this.sides * Math.random()) + 1;
  }
};

/* console.log("Before the roll");

const roll = new Promise((resolve, reject) => {
  const n = dice.roll();
  if (n > 1) {
    setTimeout(() => {
      resolve(n);
    }, n * 200);
  } else {
    setTimeout(() => reject(n), n * 200);
  }
});

roll
  .then(result => console.log(`I rolled a ${result}`))
  .catch(result => console.log(`Drat! ... I rolled a ${result}`));
console.log("After the roll!");

 */
//Objeto
const carro = {
  portas: 4,
  abertas() {
    return Math.floor(this.portas * Math.random());
  }
};

const abertas = new Promise((resolve, reject) => {
  const aberta = carro.abertas();
  if (aberta >= 1) {
    setTimeout(() => {
      resolve(aberta);
    }, aberta * 2000);
  } else {
    setTimeout(() => {
      reject(aberta);
    }, aberta * 200);
  }
});

abertas
  .then(result => console.log(`Estão cerca de ${result} portas abertas.`))
  .catch(result => console.log(`Estão ${result} portas abertas!`));
