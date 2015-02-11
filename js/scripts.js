var coinCombinations = function(coins) {
  var output = []
  var penny_amount = Math.floor((coins * 100));
  var remaining = penny_amount

  if (penny_amount > 24) {
    output.push(Math.floor((penny_amount/25)).toString() + " quarters");
    remaining = remaining % 25; }

  if(remaining > 9) {
    output.push(Math.floor((remaining/10)).toString() + " dimes");
    remaining = remaining % 10; }

  if (remaining > 4) {
    output.push(Math.floor((remaining/5)).toString() + " nickels");
    remaining = remaining % 5; }

  if (remaining >= 1) {
    output.push(remaining.toString() + " pennies"); }

  return output.join(" ");
};

$(document).ready(function(){
  $("form#coin_input").submit(function(event){
      var pennies = $("input#pennies").val();
      var result = coinCombinations(pennies);

      $("#coins_show").text(result);

      $(".results").show();
      event.preventDefault();
  });
});
