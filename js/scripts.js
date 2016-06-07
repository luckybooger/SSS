$(function(){
 var animalChoice = (prompt("What would you like to learn more about snakes, spiders, or scorpions?"));

if (animalChoice === "snakes") {
  $('#Snake').show();
} else if (animalChoice === "spiders") {
  $('#Spider').show();
} else {
  $('#Scorpion').show();
}

});
