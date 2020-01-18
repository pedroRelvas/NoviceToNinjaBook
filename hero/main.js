const form = document.forms["hero"];
form.addEventListener("submit", validate, false);

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
