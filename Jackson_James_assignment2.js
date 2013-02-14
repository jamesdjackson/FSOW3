//James Jackson SDI 1302 Assignment 2

//Argument Conditional using "if statement" to something

//send output to console


var SeriesLength = 36;

if(SeriesLength == 36){

console.log ("We are talking about one of the 36");

}else{

console.log ("We are not talking about one of our series.");

}

 

//Comparison conditional using "if statement" sending two arguments

//Return a value from the declared function

 

if(SeriesLength == 36){

console.log ("It is the right number of paintings!")

}

if(SeriesLength > 36){

console.log ("It is too many works to be the 36 Views of Mt Fuji or 36 Ghosts.")

}

if(SeriesLength > 36 && SeriesLength < 36){

console.log ("It is definitely not the 36 Views of Mt Fuji or 36 Ghosts.")

}

 

//Number Function with "While Loop"

var viewsOfMtFuji = 36
var prints = function(total) {
var views = 0;
while (views < viewsOfMtFuji) {
        console.log("Hokusai is said to have created " + views + " views of Mt Fuji, or maybe")
                views+=4;
};
return viewsOfMtFuji;

}
console.log ( prints (" is the total number of views of Mt Fuji by Hokusai."));

 

//String Function with two string concatenation

var ghosts = "Ghosts "; 
var monsters = "monsters ";

console.log(ghosts + " and " + monsters + " are found throughout his work.");

//Array Function with Math

var Master = [
        "Hokusai",
        "Yoshitoshi",
        "Kuniyoshi"
];

var modifiers = [
        "Oldest",
        "Craziest",
        "Youngest",
];

for (var i=0, j=Master.length; i < j; i++) {

        console.log ( "Master " + Master[i] + " was " + modifiers[i] );
};