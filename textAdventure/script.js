var saveFile = {
    choiceLog: [],
}
saveFile.name = prompt("Enter your Name", "Name");

classChoice();
function classChoice(){
    saveFile.class = prompt("Choose your class from the following: THIEF or KNIGHT", "Class");
    saveFile.class = saveFile.class.toUpperCase();
    // thief path
    if (saveFile.class == "THIEF" || saveFile.class == "KNIGHT"){
        storyMode();
    }
    // no class selected
    else {
        alert("Pick a valid class ya dingus");
        classChoice();
    }
}
function storyMode(){
    console.log(`${saveFile.name} the ${saveFile.class}`);
    choice1();
    choice2();
    choice3();
    choice4();
    choice5();
    storyGen();
}
function choice1(){
    var choice = prompt(`${saveFile.name} the ${saveFile.class} sees an OLD WOMAN in the village square begging with a HAT FULL OF CHANGE. Will you "ROB" her or "DONATE" to her?`, "ROB or DONATE");
    if (choice.toUpperCase() == "ROB"){
        console.log("PILFERED!");
        saveFile.choiceLog[0] = 0;
    } else if (choice.toUpperCase() == "DONATE"){
        console.log("CHARITY!");   
        saveFile.choiceLog[0] = 1;     
    } else {
        alert("Choose from ROB or DONATE ya dingus");
        choice1();
    }
}
function choice2(){
    var choice = prompt(`${saveFile.name} the ${saveFile.class} spots a HORSE that has LOST THEIR OWNER. Will you "STEAL" the HORSE or "RETURN" it to its OWNER?`, "STEAL or RETURN");
    if (choice.toUpperCase() == "STEAL"){
        console.log("GRAND THEFT HORSE!");
        saveFile.choiceLog[1] = 0;
    } else if (choice.toUpperCase() == "RETURN"){
        console.log("GOOD SAMARITAN!");
        saveFile.choiceLog[1] = 1;
    } else {
        alert("Choose from STEAL or RETURN ya dingus");
        choice2();
    }
}
function choice3(){
    var choice = prompt(`${saveFile.name} the ${saveFile.class} finds themselves in front of a RAGING RIVER. Will you "FORD" the river or "TURN" back the way you came?`, "FORD or TURN");
    if (choice.toUpperCase() == "FORD"){
        console.log("OREGON TRAILED!");
        saveFile.choiceLog[2] = 0;
    } else if (choice.toUpperCase() == "TURN"){
        console.log("WISDOM!");
        saveFile.choiceLog[2] = 1;
    } else {
        alert("Choose from FORD or TURN ya dingus");
        choice3();
    }
}
function choice4(){
    var choice = prompt(`${saveFile.name} the ${saveFile.class} hears a loud GROWL coming from the DARK WOODS. You soon see your own eyes REFLECTED in those of an ANGRY BEAST. Will you "FIGHT" or "FLEE"?`, "FIGHT or FLEE");
    if (choice.toUpperCase() == "FIGHT"){
        console.log("ONOMATOPOEIA!");
        saveFile.choiceLog[3] = 0;
    } else if (choice.toUpperCase() == "FLEE"){
        console.log("ABSCOND!");
        saveFile.choiceLog[3] = 1;
    } else {
        alert("Choose from FIGHT or FLEE ya dingus");
        choice4();
    }
}
function choice5(){
    var choice = prompt(`${saveFile.name} the ${saveFile.class} arrives at the ALTAR of a SACRED TEMPLE smelling faintly of INCENSE. Will you "PRAY" or "REST"`, "PRAY or REST");
    if (choice.toUpperCase() == "PRAY"){
        console.log("BLESS!");
        saveFile.choiceLog[4] = 0;
    } else if (choice.toUpperCase() == "REST"){
        console.log("REST!");
        saveFile.choiceLog[4] = 1;
    } else {
        alert("Choose from PRAY or REST ya dingus");
        choice5();
    }
}
function storyGen(){
    if (saveFile.classChoice == "THIEF"){
        var thiefStory = `${saveFile.name} the ${saveFile.class}`;
        if (saveFile.choiceLog[0] == 0){
            thiefStory += `saw an OLD WOMAN begging with a HAT FULL OF CHANGE, and promptly decided to PILFER her of her LOOT. A THIEF indeed!`;
        } else if( saveFile.choiceLog[0] == 1){
            thiefStory += `saw an OLD WOMAN begging with a HAT FULL OF CHANGE, they decided to DONATE their LAST COIN. How UNCHARACTERISTIC of a THIEF.`;
        }
        if (saveFile.choiceLog[1] == 0){

        } else if( saveFile.choiceLog[1] == 1){
            
        }
        if (saveFile.choiceLog[2] == 0){

        } else if( saveFile.choiceLog[2] == 1){
            
        }
        if (saveFile.choiceLog[3] == 0){

        } else if( saveFile.choiceLog[3] == 1){
            
        }
        if (saveFile.choiceLog[4] == 0){

        } else if( saveFile.choiceLog[4] == 1){
            
        }
    } else if (saveFile.classChoice == "KNIGHT"){
        var knightStory = "";
        if (saveFile.choiceLog[0] == 0){

        } else if( saveFile.choiceLog[0] == 1){
            
        }
        if (saveFile.choiceLog[1] == 0){

        } else if( saveFile.choiceLog[1] == 1){
            
        }
        if (saveFile.choiceLog[2] == 0){

        } else if( saveFile.choiceLog[2] == 1){
            
        }
        if (saveFile.choiceLog[3] == 0){

        } else if( saveFile.choiceLog[3] == 1){
            
        }
        if (saveFile.choiceLog[4] == 0){

        } else if( saveFile.choiceLog[4] == 1){
            
        }
    }
}