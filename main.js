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
