//James Jackson SDI 1302 Assignment 2

//Argument Conditional using "if statement" to something, send output to console


var SeriesLength = 36;

if(SeriesLength == 36){

console.log ("This is a narrative about Yoshitoshi's 36 Ghosts.");

}else{

console.log ("We can't be talking about 36 Ghosts if there are not 36 prints in the series!");

}

 

//Comparison conditional using "if statement" sending two arguments

if(SeriesLength == 36){

console.log ("First let's count the number of woodblock prints!")

}

if(SeriesLength > 36){

console.log ("It is too many works to be the 36 Ghosts.")

}

if(SeriesLength > 36 && SeriesLength < 36){

console.log ("It is too many or too few to be the 36 Ghosts.")

}


//Number Function with "While Loop"

var ThirtySixGhosts = 36;
var prints = function(total) {
var ghosts = 0;
while (ghosts < ThirtySixGhosts) {
        console.log("Yoshitoshi's series depicts " + ghosts + " unique ghost stories, totaling")
                ghosts+=4;
};
return ThirtySixGhosts;

}
console.log ( prints (" is the total number of prints of monsters and ghosts by Yoshitoshi."));

 

//String Function with two string concatenation

var ghosts = "Ghosts "; 
var monsters = "monsters ";

console.log(ghosts + "and " + monsters + " are found throughout this work.");

//Array Function with Math

var Master = [
        "Oya Taro Mitsukuni",
        "Onogawa Kisaburo",
        "Shobu"
];

var modifiers = [
        "a retainer who saw a vision of hundreds of skeletons fighting.",
        "a great sumo wrestler who encounters a monster while standing guard in his master's castle.",
        "a master archer that slays a serpent spirit responsible for slaying several military elephants.",
];

for (var i=0, j=Master.length; i < j; i++) {

        console.log ( "The story of " + Master[i] + " is about " + modifiers[i] );
};

console.log ("I hope you know a little more about Yoshitoshi's 36 Ghosts now!");