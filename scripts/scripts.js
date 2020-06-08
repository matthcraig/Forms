$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    let newArray = ("I love...")
    const array = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];
    array.forEach(function(final){
      newArray = newArray.concat("" + final + "!");
      alert(newArray);
    });
    
    $("#story").show();

    event.preventDefault();
  });
});