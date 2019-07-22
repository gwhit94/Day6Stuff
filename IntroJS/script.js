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
// Instructions
// Run through all numbers from 1-100.

//     If the number is divisible by 2 log the number and "Fizz"
//     If the number is divisible by 3 log the number and "Buzz"
//     If the number is divisible by 2 AND 3 log the number and "FizzBuzz"
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
// Instructions
// Take an input from the user. Starting with the 4th character, log all characters until the end of the input. If the input is shorter than 4 characters, nothing should be logged.
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
// Instructions
// Pick a random number. Prompt the user to guess a number. If the number is correct, end the loop and tell the user how many tries it took to guess. If it is incorrect, continue the loop. (Test functionality by logging the number that was randomly generated in the prompt).
var randomNumber = Math.floor( Math.random() * Math.floor(10) );
// Use this log for testing 
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

// Nested for loop pattern
// Instructions
// Using nested for loops, create and log the following pattern: 
// *
// **
// ***
// ****
// *****
// My Own Note: This doesn't need to be nested to accomplish this.
function nested(){
    var nest = "";
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 1; j++) {
            nest += "*";
            console.log(nest);
        }
    }
}
// Coin Flip
// Instructions
// Simulate a coin flip. Start a counter at 0. If the initial flip was heads, leave the counter at 0 and log: "It took 0 retries to get heads!". If the coin was tails, try again and keep doing so until heads happens. Log the amount of retries it took.

var flipCounter = 0;

function coinFlip(){
    var coin = {face: ["heads", "tails"]};
    var flip = Math.round(Math.random());
    coin = coin.face[flip];
    console.log(coin);
    if (coin == 'heads'){
        console.log(`It took ${flipCounter} retries to get heads!`);
        flipCounter = 0;
        return;
    } else {
        flipCounter++;
        return;
    }
}
