//use strict";

/* function strictly(){
  'use strict';
  //Only the code here written will be policed by use strict agent
} */

//recommended way to use 'use strict'
/* (function() {
  "use strict";
  //All my code would go inside this function
})(); */

//como o es6 introduziu o javascript modules, estes já contÊm o use strict de raiz

/* feature detection example */
if (window.lelo) {
  console.log("ford transits for everyone");
}

const form = document.forms["hero"];
form.addEventListener("submit", validate, false);
form.heroName.addEventListener("keyup", validateInline, false);
//form.heroName.addEventListener("keyup", disableSubmit, false);
function makeHero(event) {
  event.preventDefault(); //prevent the form from being submited

  const hero = {}; //create an empty object

  hero.name = form.heroName.value; // create a name property based on the input field value
  hero.realName = form.realName.value;
  hero.category = form.category.value;
  hero.age = form.age.value;
  hero.city = form.city.value;
  hero.origin = form.origin.value;
  /*   hero.powers = [];

  for (let i = 0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
      hero.powers.push(form.powers[i].value);
    }
  } */

  hero.powers = [...form.powers]
    .filter(box => box.checked)
    .map(box => box.value);

  alert(JSON.stringify(hero)); //convert object to JSON string and displayin alert dialog
  return hero;
}

function validate(event) {
  const XLetter = form.heroName.value[0];
  if (XLetter.toUpperCase() === "X") {
    event.preventDefault;
    alert("it can't start with an X");
  } else {
    makeHero();
  }
}

const label = form.querySelector("label");
const error = document.createElement("div");
error.classList.add("error");
error.textContent = "Your name is now allowed to start with X";
label.append(error);

function validateInline() {
  const heroName = this.value.toUpperCase();
  if (heroName.startsWith("X")) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
}

function disableSubmit(event) {
  if (event.target.value === "") {
    document.getElementById("submit").disabled = true;
  } else {
    document.getElementById("submit").disabled = false;
  }
}
