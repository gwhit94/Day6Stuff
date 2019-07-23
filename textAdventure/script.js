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
    if (saveFile.class == "THIEF"){
        var thiefStory = `${saveFile.name} the ${saveFile.class}`;
        console.log('test');
        if (saveFile.choiceLog[0] == 0){
            thiefStory += ` saw an OLD WOMAN begging with a HAT FULL OF CHANGE, and promptly decided to PILFER her of her LOOT. A THIEF indeed! The LOCAL TOWNSFOLK took pity on the OLD WOMAN after witnessing what you had done.`;
        } else if( saveFile.choiceLog[0] == 1){
            thiefStory += ` saw an OLD WOMAN begging with a HAT FULL OF CHANGE, they decided to DONATE their LAST COIN before moving on. How UNCHARACTERISTIC of a THIEF. The OLD WOMAN turned out to be a MASTER OF DISGUISE. Are you a THIEF or a FOOL?`;
        };
        // NOTE:
        // It was at this point I realized if I wanted a unique story for each choice, I would need to write a large number of stories. If I had the time to do so I would, but this is an overnight project . .
        // Henceforth, I will simply provide the standard actions chosen by the player. Less exciting, but deadline met! 
        if (saveFile.choiceLog[1] == 0){
            thiefStory += ` ${saveFile.name} the THIEF then upped their ANTE by STEALING a HORSE that had roamed away from its OWNER. A THIEF to the END! `;
        } else if( saveFile.choiceLog[1] == 1){
            thiefStory += ` Spotting a HORSE that had roamed away from its OWNER, ${saveFile.name} the THIEF decided to RETURN the HORSE to its HOME. `;
        };
        if (saveFile.choiceLog[2] == 0){
            thiefStory += ` ${saveFile.name} the ${saveFile.class} found themselves in front of a RAGING RIVER. You FORDED the RIVER but LOST all of your POSSESSIONS! `;
        } else if( saveFile.choiceLog[2] == 1){
            thiefStory += ` ${saveFile.name} the ${saveFile.class} found themselves in front of a RAGING RIVER. You TURNED AWAY and STAYED DRY! `;
        };
        if (saveFile.choiceLog[3] == 0){
            thiefStory += `${saveFile.name} the ${saveFile.class} heard a loud GROWL coming from the DARK WOODS. You tried to FIGHT the BEAST but you were too SCRAWNY being a THIEF and were WOUNDED. `;
        } else if( saveFile.choiceLog[3] == 1){
            thiefStory += `${saveFile.name} the ${saveFile.class} heard a loud GROWL coming from the DARK WOODS. You quickly ABSCOND, escaping any HARM. `;
        };
        if (saveFile.choiceLog[4] == 0){
            thiefStory += `${saveFile.name} the ${saveFile.class} arrived at the ALTAR of a SACRED TEMPLE smelling faintly of INCENSE. You PRAY at the ALTAR but THE GODS do not answer the prayers of THIEVES.`;
        } else if( saveFile.choiceLog[4] == 1){
            thiefStory += `${saveFile.name} the ${saveFile.class} arrived at the ALTAR of a SACRED TEMPLE smelling faintly of INCENSE. You REST at the ALTAR, regaining your STRENGTH to BE A NO GOOD CROOK BUT STILL AN ALL AROUND COOL CHARACTER!`;
        };
        alert(thiefStory);
    } else if (saveFile.class == "KNIGHT"){
        var knightStory = `The tale of ${saveFile.name} the ${saveFile.class}. `;
        if (saveFile.choiceLog[0] == 0){
            knightStory += `${saveFile.name} the ${saveFile.class} saw an OLD WOMAN in the village square begging with a HAT FULL OF CHANGE. You ROBBED her of her COIN! `;
        } else if( saveFile.choiceLog[0] == 1){
            knightStory += `${saveFile.name} the ${saveFile.class} saw an OLD WOMAN in the village square begging with a HAT FULL OF CHANGE. You DONATE your COINS to her. `;
        }
        if (saveFile.choiceLog[1] == 0){
            knightStory += `${saveFile.name} the ${saveFile.class} spotted a HORSE that had LOST THEIR OWNER. You STOLE the HORSE away into the COLD NIGHT! `;
        } else if( saveFile.choiceLog[1] == 1){
            knightStory += `${saveFile.name} the ${saveFile.class} spottted a HORSE that had LOST THEIR OWNER. You RETURNED the HORSE to its OWNER, who wept TEARS OF JOY at their REUNION. `;
        }
        if (saveFile.choiceLog[2] == 0){
            knightStory += `${saveFile.name} the ${saveFile.class} found themselves in front of a RAGING RIVER. You FORDED the RIVER but LOST all of your POSSESSIONS! `;
        } else if( saveFile.choiceLog[2] == 1){
            knightStory += `${saveFile.name} the ${saveFile.class} found themselves in front of a RAGING RIVER. You TURNED AWAY and STAYED DRY! `;
        }
        if (saveFile.choiceLog[3] == 0){
            knightStory += `${saveFile.name} the ${saveFile.class} heard a loud GROWL coming from the DARK WOODS. You FIGHT the BEAST and WIN. `;
        } else if( saveFile.choiceLog[3] == 1){
            knightStory += `${saveFile.name} the ${saveFile.class} heard a loud GROWL coming from the DARK WOODS. You FLEE from the BEAST in TERROR. `;
        }
        if (saveFile.choiceLog[4] == 0){
            knightStory += `${saveFile.name} the ${saveFile.class} arrived at the ALTAR of a SACRED TEMPLE smelling faintly of INCENSE. You PRAY at the ALTAR and receive a DIVINE BLESSING.`;
        } else if( saveFile.choiceLog[4] == 1){
            knightStory += `${saveFile.name} the ${saveFile.class} arrived at the ALTAR of a SACRED TEMPLE smelling faintly of INCENSE. You REST at the ALTAR and awaken to a FEAST FIT FOR A KNIGHT!`;
        }
        alert(knightStory);
    }
}
// I should really come back to this later, I'm just so tired . .
// I forgot to test as I went and had a bug, I had called saveFile.class "saveFile.classChoice" and it broke my function. Time for some rest -.-