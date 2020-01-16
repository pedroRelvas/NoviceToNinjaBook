//const form = document.forms[0] OR
//const form = document.getElementsByTagName('form')[0]; OR
//const form = document.forms.search; //"search" is the name attribute OR
const form = document.forms["search"];

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
