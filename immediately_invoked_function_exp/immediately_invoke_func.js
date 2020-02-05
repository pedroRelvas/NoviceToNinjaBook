//Immediately invoked Function Expressions

(function() {
  const temp = "World";
  console.log(`Hello ${temp}`);
})();

(function() {
  const dragao = "desunião";
  console.log(`Ai estes são os filhos da ${dragao}`);
})();

//work the same way
{
  const name = "Peter Parker";
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const date = new Date(),
    today = days[date.getDay()];
  console.log(`Welcome back ${name}, Today is ${today}!`);
}
