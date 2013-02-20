//SDI Project 3

//#1 Global Variable Declarations

var yoshitoshi
var thirtySixGhosts
var seriesLength
var prints
var g
var m
var Master
var stories



//#2 Procedure

var yoshitoshi = true, thirtySixGhosts = true;

if (yoshitoshi === true) {
    console.log("This is about our print artist Yoshitoshi.");
    if (thirtySixGhosts === true) {
        console.log('This is also his print series "36 Ghosts".');
    }
} else {
    console.log("This is neither our artist nor our prints!");
}


//#3 Boolean Conditional Function

if(seriesLength > 36) {
    console.log ("It is too many works to be the 36 Ghosts.");
    if(seriesLength < 36) {
       console.log("It is too many works to be the 36 Ghosts.");
    }
}else {
    console.log("Let's make sure this is the right number of works for the 36 Ghosts!");
}


//#4 Number Function

var prints = 36;

while (prints > 0) {
    console.log(prints + " of the prints are left to count to make sure.");
    prints--;
};

console.log("Now I have no more prints left to count in this series.");


//#5 String Function

var g, m;
    g = 'Ghosts ';
    m = 'monsters';

console.log(g + "and " + m + " are found throughout this work.");


//#6 Array with Math

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


//#7 JSON Entry

var handleData = function (json) {
    for (var i = 0; i < json.friends.length; i++){
        var friend = json.friends[i];
        console.log("User ID; " + friend.uuid + " , Name: " + friend.name + ", Age: " + friend.age);
    };
};


