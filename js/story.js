// Quick superhero game by Fernanda

function wholeGame (){
var city = prompt("You're a data scientist at a nuclear plant. What CITY is this plant located in?", "Fresnopolis");
var name = prompt("Your NAME is written on the high security clearance badge hanging from your lapel. What does it say?", "Michael Buble");

function breakChoice () {
var breakTime = prompt("It's break time! Are you \n \n A: pouring yourself an ice cold drink? \n \n B: heating yourself up a nice warm meal? \n \n C: finishing up some important work in front of the computer?", "(Please type 'A', 'B', or 'C')");

function kaBoom (){
alert("!!BOOM!! Suddenly a large explosion causes the entire facility to crumble, trapping you within...");

if(breakTime === 'A' || breakTime === 'a'){
alert("An ice blast clears the crumbled concrete around you. As you breathe in freedom, you notice the frost forming at your fingertips...");
}
else if (breakTime === 'B' || breakTime === 'b') {
alert("The large slabs of debris disintegrate around you from a blaze of heat emitted through your palms...");
}
else if (breakTime === 'C' || breakTime === 'c') {
alert("With a flash of lightning you break through the rubble. You feel an intense power surging through your veins...");
}

function doThings(){
var goWhere = prompt("Across the street you see a crime taking place! There's a rowdy looking character with a knife attempting to pry a purse out of a frail, old lady's hands. What do you do? \n \n A: 'I must defend the innocent with these newfound abilities!' Go defeat this ne'er-do-well. \n \n B: 'A building just collapsed on top of me! I need medical attention!' Get to a hospital.", "(Please type 'A' or 'B')");

if (goWhere === 'A' || goWhere === 'a'){
alert("You rush to where the two are struggling. The thief is so shocked by your bold audacity that it gives the old lady enough time to escape!");

function fightScene(){
var yourMove = prompt("The thief angrily slices at you with the knife! \n \n A: You jump! \n \n B: You duck! \n \n C: You dodge to the left!", "(Please type 'A', 'B', or 'C')");

if (yourMove === 'A' || yourMove === 'a'){
alert("The thief's blade slices right through you and you bleed out before he makes his escape through the busy streets of " + city + ". \n (ENDING 2: You got elemental powers.. not super jumps, buddy)");
}
else if (yourMove === 'B' || yourMove === 'b'){
alert("The thief's blade misses!");
yourHit();
}
else if (yourMove === 'C' || yourMove === 'c'){
alert("You don't dodge far enough and the theif's blade still cuts through you like a samurai sword through a bamboo before he makes his escape through the busy streets of " + city + ". \n (ENDING 3: Fruit ninja IRL)");
}
else{
fightScene();
}
function yourHit(){
var hitBack = prompt ("Good choice! \n \n A: Punch him! \n \n B Use elemental power! \n \n C: Leg sweep the creep!", "(Please type 'A', 'B', or 'C')");

if (hitBack === 'A' || hitBack === 'a'){
alert("Man... He can take a hit... He punches back, knocking you out and escapes. After that day you go through an existencial crisis about how you can't bring justice to everyone who deserves it... \n (ENDING 4: You can't save everyone...)");
}
else if (hitBack === 'B' && breakTime === 'A' || hitBack === 'B' && breakTime === 'a' || hitBack === 'b' && breakTime === 'A' || hitBack === 'b' && breakTime === 'a'){
alert("The thief is encapsulated in a thick layer of ice... People around are unsure whether to be grateful or fearfull... You must learn to control your powers before you can use them! \n (ENDING 5: Ice Ice, Baby)");
}
else if (hitBack === 'B' && breakTime === 'B' || hitBack === 'B' && breakTime === 'b' || hitBack === 'b' && breakTime === 'B' || hitBack === 'b' && breakTime === 'b'){
alert("The screams of the thief haunt you as they echo through your mind as you burned him alive... You realize your powers can never be used for good... So you become a villain. \n (ENDING 6: If you can't handle the heat, get outta my " + city + ". MWAHAHA!)");
}
else if (hitBack === 'B' && breakTime === 'C' || hitBack === 'B' && breakTime === 'c' || hitBack === 'b' && breakTime === 'C' || hitBack === 'b' && breakTime === 'c'){
alert("You give him a good ZAP and the crispied thief collapses to the ground, twitching with electrical pulses... You probably can't even touch loved ones ever again... \n (ENDING 7: Electrifying personality)");
}
else if (hitBack === 'C' || hitBack === 'c'){
alert("The thief falls to the ground looking up at you as he repents for his deed.");
var superName = prompt("You stand heroically over him as his eyes widen and he asks \n 'wh-who are you?...' \n You tell him your superhero name:", "SuperDude");
alert(city + " will never have to worry about crime again! For although by day I go by " + name + ", by night, I protect this city as " + superName +"\n(ENDING 8: Yer a wizard, Harry)");

}
else{
yourHit();
}
}
}
fightScene();
}
else if (goWhere === 'B' || goWhere === 'b'){
alert("You get the medical attention you need and after months of extensive tests, you go back to your life as a regular human named " + name + " \n (ENDING 1: Aw, you're no fun)");
}
else{
doThings();
}
}
doThings();
}
if(breakTime === 'A' || breakTime === 'a' || breakTime === 'B' || breakTime === 'b' || breakTime === 'C' || breakTime === 'c') {
kaBoom();
}

else {
breakChoice();
}
}

breakChoice();

}
wholeGame();
