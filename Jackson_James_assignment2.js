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
		"Samanosuke Mitsutoshi",
		"Lord Sadanobu",
		"Oda Harunaga",
		"Kusunoki Tamon Masayuki",
		"Kiyohime",
		"Watanabe Genjitsuna",
		"Tawara Toda Hidesato",
		"Fuwa Bansaku",
		"Sagiike Heikuro",
        "Oya Taro Mitsukuni",
        "Shirafuji Genta",
    	"Onogawa Kisaburo",
    	"Iga no Tsubone",
    	"Toki Daishiro",
    	"Minamoto Yorimitsu Ason",
    	"Kayo Fujin",
    	"Raishin",
    	"Nyuunryu Kosonsho",
    	"Shobu",
    	"Donyoku no baba",
    	"Nikki Dansei Naonori",
    	"Shusuinosuke Tobe Suetake",
    	"Miyamoto Musashi"
    	
];


var stories = [
		"a great retainer who's saved a close friend's daughter who was bewitched by a fox.",
        "a powerful government figure whom was attacked by a demon in the emperor's southern palace.",
        "a powerful warlord that requested the removal of a temple and was haunted by a remaining tree.",
        "a little boy snuck out to play with a wooden horse only to be menaced by a ghost from within the toy.",
        "a story of a woman so overcome by jealousy it transforms her into a serpent like creature.",
        "a brilliant and courageous samurai that defeats a demon attacking passing travelers.",
        "a brilliant archer that slays the giant centipede of Mount Mikami.",
        "a member of the Mori samurai family that exposed the ghosts of a local temple.",
        "a naturally courageous man who observes a giant serpent while fishing and dismembers it with his bare hands.", 
        "a retainer who saw a vision of hundreds of skeletons fighting.",
        "a son of a farmer renowned for his sumo abilities who defeated an infamous kappa spirit and killed it.",
        "a great sumo wrestler who encounters a monster while standing guard in his master's castle.",
        "a young courtesan summoned in the middle of the night by a mysterious ghost.",
        "a young vassal intrigued by stories of ghosts at a near by temple that decides to confront them.",
        "a retainer that lay ill in bed that was attacked by demons.",
        "a beautiful woman that used her overpowered a kingdom and eventually caused a rebellion by disturbing Buddhist precepts.",
        "a Chinese thunder god is sent to defeat an invading army.",
        "a hero of the 108 Suikoden story, he was able to conger magic by making mudra signs leading to his name Dragon Entering Clouds.", 
        "a master archer that slays a serpent spirit responsible for slaying several military elephants.",
        "a little old woman who is tortured by evil ghosts and suffers at the devices of her own greed.",
        "a ruthless traitor that attempted to murder his infant master in his sleep.",
        "a famous retainer who is said to have encountered the ghost of a pregnant woman late one evening.",
        "a great sword fighter that defeated an acetic mountain man that turned into a tengu or heavenly dog after being killed.",
        
];

for (var i=0, j=Master.length; i < j; i++) {

        console.log ( "The story of " + Master[i] + " is about " + stories[i] );
};

console.log ("These are only the first 23, but I hope you know a little more about Yoshitoshi's 36 Ghosts now!");