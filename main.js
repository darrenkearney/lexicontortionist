// // This set's up the player object
// playerClass = function () {

//     this._init = function () {

//         this.name = prompt( "Hello. Please enter your name: " );

//         alert( "Hello " + this.name );

//         this.pronoun = prompt("Please enter your pronoun (her,him,them): ");
//         this.pronoun = this.pronoun.toLowerCase();

//         if ( this.pronoun === "her" ) {
//             this.possesivePronoun = "hers";
//         }
//         else if ( this.pronoun === "him" ) {
//             this.possesivePronoun = "his";
//         }
//         else if ( this.pronoun === "them" ) {
//             this.possesivePronoun = "theirs";
//         }
//         else {
//             this.possesivePronoun = this.pronoun + "'s";
//         }

//         // Select your weapon
//         this.weaponSelect();

//         // Setup currently equipped things
//         this.currentlyEquipped = {
//             "leftHand": "",
//             "rightHand": "",
//             "weaponSlot": this.weapon,
//             "inventoryBag": "starterBackpack001",
//             "armor": "starterLight"
//         }
//     }

//     this.attackWithWeapon = function ( weapon ) {
//         if ( weapon === "undefined" ) {
//             weapon = this.weapon;
//         }
//         console.log( this.name + " attacks with " + weapon);
//     }


//     this.weaponSelect = function ( weapon ) {
//         // Weapon select
//         answer = prompt("Please select a weapon. [1] Axe, [2], Sword or [3] Bow.");

//         if ( answer === "1" ) {
//             this.weapon = "axe";
//         }
//         else if ( answer === "2" ) {
//             this.weapon = "sword";
//         }
//         else if ( answer === "3" ) {
//             this.weapon = "bow";
//         }
//         else {
//             alert("\""+answer+"\" is not an available weapon.");
//             this.weapon = "";
//         }
//         alert("You have selected the "+this.weapon.toUpperCase()+"!");
//     }

//     this.inventory = [];
    
//     this.addItemToInventory = function (item) {
//         console.log( this.name + " add's " + item + " to inventory.");
//         this.inventory.push(item);
//     }

//     this.removeItemFromInventory = function (item) {
//         if ( this.inventory.indexOf(item) ) {
//             console.log( this.name + " removes " + item + " from inventory.");
//             return this.inventory.pop( item );
//         }
//     }

//     // Now we can run initializer / setup
//     this._init();
// }

// darren = new playerClass()


// function meleeAttackWithWeapon( weapon ) {

//     // This function requires a weapon to be passed.
//     // Set's our default damage

//     damage = 0;

//     // Check the weapons passed and set the damage
//     if ( weapon === 'axe' ) {
//         damage = 2;
//     }
//     else if ( weapon === 'sword' ) {
//         damage = 3;
//     }
//     else if ( weapon === 'bow' ) {
//         damage = 0;
//     }

//     // Return the damage
//     return damage;

// }

// console.log("A monsters appears! You attack with your weapon");

// // Here we call the attack_melee() function, and pass the player.weapon as an argument.
// damageDone = meleeAttackWithWeapon( darren.weapon );
// console.log("You did " + damageDone );

// damageDone = meleeAttackWithWeapon( 'sword' );
// console.log("You did " + damageDone );

// damageDone = meleeAttackWithWeapon( 'bow' );
// console.log("You did " + damageDone );

var colors = [
    'blue',
    'orange',
    'bloodred',
    'turquiose',
    'aquamarine',
    'bone',
    'black',
    'moss'];

function checkMagicLevel( mLevel ) {
    if (  mLevel === 1  ){
       console.log("You have the power!");
    }
    else if ( mLevel >= 2 ){
       console.log("You are talented at using sorcery. And kind of scary.");
    }
    else {
       console.log("You are just a normy.");
    }
}

// Set up Interval for fun stuff like look & feel
// var nIntervalId;
// var nIntervalId = window.setInterval(tickTock, 1000);
// var tick = true;
// function tickTock() {
//     if (tick) {
//         tick = false;
//     }
//     else {
//         tick = true;
//     }
//     //console.log(tick);
// }

// Set up game window
var gameWindow = document.getElementById('game-window');
var outputTextBox = document.getElementById('output-text'); // child node of game-window
outputTextBox.innerHTML = "Output Text Box Ready...";

// Set up a way for the player to input text
var playerInput = document.getElementById('input');
var input = ''; // raw player input
var answer = ''; // used for specific question
var messages = []; // stores previous input
var questionList = []; // List of question objects
var answerList = []; // List of answer objects

var availableTargets = [];

// Set up a notification area
var notifications = document.getElementById('notifications');

// Set up
var count = 0;

// Set up id tracker used to give things unique ids
var globalId = 0;

// Set up input event listener for the input box
playerInput.onkeypress = function(e){

    if (!e) e = window.event;

    var keyCode = e.keyCode || e.which;

    if ( keyCode == '13' ){
        processInput();
    }
}


var commands = [
    'attack',
	'look',
    'take',
    'talk',
    'use',
    'walk'];

var command = '';

function parseInput(input){

    command = input.split(' ');

    if ( commands.indexOf( command[0].toLowerCase() ) != -1 ) {
        console.log("Command found");
        doCommand(command);

    } else {
        console.log("\""+command+"\" command not found.");
         notifications.innerHTML = "Not found.";
    }

}

function doCommand( command ) {

    command[0] = command[0].toLowerCase();

    if ( command[0] == 'attack' ) {
        doAttack(command);
    } else if ( command[0] == 'look' ) {
        doLook(command);
    } else if ( command[0] == 'take' ) {
        doTake(command);
    } else if ( command[0] == 'talk' ) {
        doTalk(command);
    } else if ( command[0] == 'use' ) {
        doUse(command);
    } else if ( command[0] == 'walk' ) {
        doWalk(command);
    }

}

function doAttack( command ){
    console.log("Attacking: "+command );
	if ( command[1] != "undefined" ){
		for ( var i = 0; i < availableTargets.length; i++ ){
			if (command[1].toLowerCase() == availableTargets[i].name.toLowerCase() ) {
                var target = availableTargets[i];
				console.log("Target found. Attacking "+ availableTargets[i]);
				output.text("Attacking <span class=\"target\">"+ availableTargets[i].name.toUpperCase()+"</span>!");
                target.hp = target.hp - player.damage;
                if (target.hp <= 0) {
                    availableTargets.splice( i, 1 );
                    output.text("You killed "+target.name+"!");
                    player.xp = parseInt(target.xp) + parseInt(player.xp);
                    output.text("You gained <span class=\"xp\">"+target.xp+"</span> XP!");
                    output.notification("XP: "+player.xp);
                } else {
                    output.text("You attacked <span class=\"target\">"+target.name.toUpperCase()+"</span> for <span class=\"hp\">"+player.damage+"</span> damage.");
                    output.text( "<span class=\"target\">"+target.name.toUpperCase() +"</span> has <span class=\"hp\">"+ target.hp +"</span> / " +target.hpMax+" HP.");
                }
			}
		} 	
	}
	else {
		console.log("Attack <target> undefined. doAttack() requires ATTACK <TARGET> Syntax.");
	}
	console.log("Attack end.");
}
function doTake( command ){
    console.log("Taking...");
}
function doTalk( command ){
    console.log("Talking...");
}
function doUse( command ){
    console.log("Using...");
}
function doWalk( command ){
    console.log("Walking...");
}
function doLook( command ){
    console.log("Looking...");

	var _output = "";
	for (var i=0; i<availableTargets.length;i++) {
		_output += "<span class=\"target\">" + availableTargets[i].name.toUpperCase() + "</span>";
		if ( i+1 == availableTargets.length){
			_output += ".";
		} else {
			_output += ", ";
		}
	}

	output.text("You see all! "+ _output);
}

var output = {

    'text': function(outputString) {
        outputTextBox.innerHTML += "<span class=\"output\">"+outputString+"</span>";
    },
    'notification' : function(outputString) {
        outputTextBox.innerHTML += "<span class=\"notification\">"+outputString+"</span>";
    }
}

function nameSay( args ) {
    output.text( args.name + "> " + args.text);
}
// var answer = '';
// function setAnswer( input ){
//     answer = input;
//     console.log("Setting answer to: "+answer);
// }

function getAnswer(){

    console.log("Getting answer: "+answer);

    return answer;
}

//------------------------------------
//  Initialize the game
//------------------------------------

var player = {
    'name': 'Joxer',
    'damage': 1,
    'hp': 10,
    'hpMax': 10,
    'xp': 0
}

player.name; // "Joxer"

function enemyObject( obj ){
    this.name = obj.name;
    this.hp = obj.hp;
    this.hpMax = obj.hpMax;
    this.damage = obj.damage;
    this.xp = obj.xp;
}

function initializeGame( player ){

    
    // output("Hello traveller! What is <i>your</i> name?");
    // isExpectingAnswer = true;

	availableTargets.push(
        new enemyObject({
            'name':'goblin',
            'hp': 3,
            'hpMax': 3,
            'damage': 1,
            'xp': 1
        }), new enemyObject({
            'name':'Julior',
            'hp': 5,
            'hpMax': 5,
            'damage': 2,
            'xp': 2
    }));


    question = new questionObject({
        'name': 'intro',
        'text': 'Hello traveller!',
        'optionText': "Select an option:",
        'optionInputs': ['1','2','3'],
        'optionDict': {
            '1': {
                'label': "Say 'hello'",
                'command': 'nameSay',
                'args': {'name':player.name, 'text':"Hello."},
                'answer': new AnswerClass({
                    'parentQuestionId' : this.id,
                    'name' : this.name + "_answer_1",
                    'text' : "...hi. Hmmm."
                })
            },
            '2': {
                'label': "Say 'maybe'",
                'command': 'nameSay',
                'args': {'name':player.name, 'text':"Maybe not."},
                'answer': new AnswerClass({
                    'parentQuestionId' : this.id,
                    'name' : this.name + "_answer_2",
                    'text' : "That's an uncertain name."
                })
            },
            '3': {
                'label': "Say 'no'",
                'command': 'nameSay', // function name
                'args': {'name':player.name, 'text':"No."},
                'answer': new AnswerClass({
                    'parentQuestionId' : this.id,
                    'name' : this.name + "_answer_3",
                    'text' : "Fair enough. Goodbye."
                })
            }
        }
    });

    doQuestionByName('intro');

    // player.name = answer;
    // output("Welcome "+player.name);
}

function questionObject( obj ) {

    this.id = idTicker();
    this.name = obj.name;
    this.text = obj.text;
    this.optionText = obj.optionText;
    this.optionInputs = obj.optionInputs;   // items
    this.optionDict = obj.optionDict;       // an array of option objects:
                                            //   [{ 'command', 'outcome' }, { 'command', 'outcome' } ... ]
    questionList.push(this);
}

function AnswerClass( obj ) {

    this.id = idTicker();
    this.parentQuestionId = obj.parentQuestionId;
    this.name = obj.name;
    this.text = obj.text;
    // this.optionInputs = obj.optionInputs;   // items
    // this.commandList = obj.commandList;       // an array of option objects:
                                            //   [{ 'command', 'outcome' }, { 'command', 'outcome' } ... ]
    answerList.push(this);
}

function getAnswerIdByQuestionNameAndOptionInput( questionName, optionInput ){

    q = getQuestionByName( questionName );
    answerId = q.optionDict[optionInput]['answer']['id'];

    return answerId;
}

function getAnswerByQuestionNameAndOptionInput( questionName, optionInput ){

    q = getQuestionByName( questionName );
    answer = q.optionDict[optionInput]['answer'];

    return answer;
}

function idTicker(){
    globalId += 1;
    return globalId;
}

function doAnswer( questionId ) {

    var q = getQuestionById(questionId);

    var choice = parseInputForOptionInputs(input, q.optionInputs);

    if ( choice != false ) {
        console.log("Doing answer. Question id: "+questionId+", optionInputs: "+q.optionInputs+", choice: "+choice);
        // Do the choice


        console.log(q.optionDict[choice]);
        window[ q.optionDict[choice]['command'] ](q.optionDict[choice]['args']);

        var a = getAnswerByQuestionNameAndOptionInput( q.name, choice );

        setTimeout( function(){output.text(a.text)}, 1200 );

        return true;
    } else {
        return false;
    }

}

function doQuestionByName( name ){
    
    var q = getQuestionByName(name);

    output.text(q.text + "<br/>");
    output.text( "<span class=\"option-text\">" + q.optionText +"</span>");

    for (var i = 0; i < q.optionInputs.length; i++) {
        output.text("["+q.optionInputs[i] + "] " + q.optionDict[q.optionInputs[i]]['label'] );
    }

    isExpectingAnswer = true;
    questionIdTracker = q.id;
}

function getQuestionByName( name ){

    var q = null;

    for (var i=0; i < questionList.length; i++){
        if ( questionList[i].name === name ) {
            q = questionList[i];
            return q;
        }
    }

    if (q === null){
        return false;
    }
}

function getQuestionById( id ){

    var q = null; 

    for (var i=0;i < questionList.length;i++){
        if ( questionList[i].id === id ) {
            q = questionList[i];
            return q;
        }
    }

    if (q === null){
        return false;
    }
}

function parseInputForOptionInputs( input, optionInputs ) {

    var o = optionInputs.indexOf( input.toLowerCase() );
    if ( o != -1 ) {
        console.log("\""+input+"\" is an option in "+optionInputs);
        return optionInputs[o];

    } else {
        console.log("\""+input+"\" is not found in "+optionInputs);
        output.notification("\""+input+"\" is not an option.");

        return false;
    }

}


//------------------------------------
//  The game loop
//------------------------------------

function processInput() {

    // Enter key is pressed
    console.log("Input: "+playerInput.value);
    input = playerInput.value;
    messages.push(input);

    // Reset player input element to blank
    playerInput.value = '';

    // Show the input in the output
    output.text( '<span class="faded-grey">' + input +'</span>' );

    // If the game is expecting an answer, then save it
    if (isExpectingAnswer) {
        answer = input;
        // Reset flag

        answered = doAnswer(questionIdTracker);
        if (answered) {
            isExpectingAnswer = false;
        } else {
            isExpectingAnswer = true;
        }
    } else {
        parseInput(input);    
    }

    // Show the input in the output
    //nameSay( {'name': player.name, 'text': input } );

    count += 1;
}

initializeGame( player );
