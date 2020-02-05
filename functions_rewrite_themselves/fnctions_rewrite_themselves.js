//-Functions that define and rewrite themselves
function party() {
  console.log("Wow this is amazing");
  party = function() {
    console.log("Estou triste.");
  };
}

party();
party();
