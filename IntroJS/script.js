// Test Object
var me = {
    name: {first: "Graham", last: "Whittington"},
    age: 25,
    hair: true,
    height: 62 + " in",
    food: ["burgers", "hot dogs", "spaghetti"],
};

console.log(me.name.first);
console.log(me.food[0]);
console.log(me.height);
console.info("what up?");
console.warn("Don't feed them after midnight");
console.error("FEED ME SEYMOUR");

// fizzbuzz
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