//const form = document.forms[0] OR
//const form = document.getElementsByTagName('form')[0]; OR
//const form = document.forms.search; //"search" is the name attribute OR
const form = document.forms["search"];

//form object
const [input, button] = form.elements;
const inputLouco = form["searchInput"];

//inputLouco.addEventListener("focus", () => alert("call me"), false);
//inputLouco.addEventListener("blur", () => alert("don't call me"), false);
inputLouco.addEventListener("change", () => alert("hey buddy"), false);
form.addEventListener("submit", search, false);

function search(event) {
  alert("ghost!");
  event.preventDefault();
}

//form.action = "www.facebook.com";
console.log(form);
console.log(button);
console.log(inputLouco);
