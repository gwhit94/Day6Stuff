// Test Object
var me = {
    name: {first: "Graham", last: "Whittington"},
    age: 25,
    hair: true,
    height: 62 + " in",
    food: [ burger ={condiments: ["ketchup", "mustard", "mayo"], toppings: ["lettuce", "pickles", "tomato"]}, "hot dogs", "spaghetti"],
};

// console.log(me.name.first);
// console.log(me.food[0]);
// console.log(me.height);
// console.info("what up?");
// console.warn("Don't feed them after midnight");
// console.error("IT BROKE");

// fizzbuzz
function fizzbuzz(){
    for (let i = 1; i < 101; i++) {
        var fizzNum = i;
        if (fizzNum % 2 == 0 && fizzNum % 3 == 0) {
            console.log(fizzNum + " FizzBuzz");
        } else if (fizzNum % 2 == 0) {
            console.log(fizzNum + " Fizz");
        } else if (fizzNum % 3 == 0){
            console.log(fizzNum + " Buzz");
        } else {
            console.log(fizzNum);
        }
    }
};
// Allows pressing enter to trigger button 
var numInput = document.getElementById("numInput");

numInput.addEventListener("keydown", function(event){
    if (event.keyCode == 13){
        event.preventDefault();
        document.getElementById("numButton").click();
    }
});

// User input log
function characterLog(){
    var value = numInput.value;
    if (value.length < 4){
        console.log("nothing");
    } else {
        for (let i = 3; i < value.length; i++) {
            console.log(value[i]);
        }
    }
}

// Guess check
var randomNumber = Math.floor( Math.random() * Math.floor(10) );
// Use this for log for testing 
// console.log(randomNumber); 
var numberOfGuesses = 0;
var guessResult = document.getElementById("guessResult");
function guessCheck(){
    var userGuess = document.getElementById("guessNumber").value;
    if (userGuess < 0 || userGuess > 10){
        alert("enter a number between 0 and 10!");
        return;
    } else {
        numberOfGuesses++;
        if (userGuess == randomNumber){
            guessResult.innerText = (`Correct! Took ${numberOfGuesses} attempts to guess!`);
        } else {
            guessResult.innerText = ("Try again!");
            return;
        }
    }
}
