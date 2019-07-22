// Instructions
// Build a simple site that prompts a user for their first name and then a number between one and one-hundred (inclusive).
// Tell them whether their number is odd or even and if its greater than, or less than/equal to 50 and then log those messages separately to the console.
// Log if it is divisible evenly by both 5 and 3 (log no message if it is not).
// Log every number before theirs and every number from 100 counting down to theirs in two separate loops.
// If their name is your name send an alert saying that it is a great name
// Otherwise send an alert saying "Hi (their name)"
// then log their name in reverse to the console.
// Bonus:
//     Allow their full name to be entered as case insensitive and only use their first name. i.e if they entered "mike truax" and your name was "Mike" it would still match.
//     Do this without the use of any extra if conditionals (don't just say name == "Mike" || name == "mike").
//     Also have a contingency in place if they enter a number outside of the range.
//     Do all of the above only using either of the "if" or "else" keywords once each in your program (this would require things not covered in class)
// Take the following arrays: [-1,-2,2,10,7,8] and [4,-2,2,7,9,5] and see how many items the two arrays share in common. Do this without prototypical functions. This will also require the use of loop(s)
// Practice with the differences between == and ===
var username = prompt("Please Enter Your Name", "Name");
if (username == "Graham"){
    alert("That is a great name.");
} else {
    alert(`Hi ${username}`);
}
var reversed = username.split("");
console.log(reversed.reverse().join(""));

var userNum = prompt("Please enter a number between 1 and 100", "Number");
var userMessage = `${userNum} is`;

if (userNum % 2 == 0){
    console.log(`${userNum} is even`);
    userMessage += " even";
} else {
    console.log(`${userNum} is odd`);
    userMessage += " odd";
}

if (userNum > 50) {
    console.log(`${userNum} is greater than 50`);
    userMessage += ` and is greater than 50`;
} else {
    console.log(`${userNum} is less than or equal to 50`);
    userMessage += ` and is less than or equal to 50`;
}

if (userNum % 3 == 0 && userNum % 5 == 0){
    console.log(`${userNum} is divisible evenly by both 5 & 3`);
}

for (let i = 0; i < userNum; i++){
    console.log(i);
}
for (let i = 100; i > userNum; i--){
    console.log(i);
}
alert(userMessage);