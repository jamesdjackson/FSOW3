//SDI Project 3 "One Hundred Tales of Japan and China"

//#1 Global Variable Declarations

var artist;
var artistGroup;
var year;
var period;
var yoshitoshi;
var oneHundredGhosts;
var seriesLength;
var prints;
var ghosts;
var monsters;
var character;
var stories;
var artist;
var woodblock;
var retrievePrints;

//Nested Loop

artist = "Yoshitoshi";
year = 1780;

if(artist == "Yoshitoshi" || year == 1775)
{
    if(year >= 1700 && year <= 1779)
        period = "Early Ukiyo-e";
    else
        period = "Golden Age of Ukiyo-e";
}
else if (artist == "Watanabe Shotei" || year == 1913)
{
    if(year >= 1868 && year <= 1912)
        period = "Meiji Period";
    else
        period = "Modern and Contemporary";
}

alert ("Our story is about " + artist +" and takes place in the " + period + ".");

//I wanted to create a routine that described artists that worked in multiple periods.  The period
//same artist could be the same under a range of years under different "periods."  It is also directly tied
//into the broader Yoshitoshi theme.


//#2 Procedure

var yoshitoshi = true, oneHundredGhosts = true;

if (yoshitoshi === true) {
    console.log("This is about our print artist Yoshitoshi.");
    if (oneHundredGhosts === true) {
        console.log('This is also about his print series "One Hundred Tales of Japan and China".');
    }
} else {
    console.log("This is neither our artist nor our prints!");
}


//#3 Boolean Conditional

if(seriesLength > 100) {
    console.log ("It is too many works to be the One Hundred Tales of Japan and China.");
    if(seriesLength < 100) {
       console.log("It is too many works to be the One Hundred Tales of Japan and China.");
    }
}else {
    console.log("It appears to be the right number of works for the One Hundred Tales of Japan and China, but let's make sure.");
}


//#4 Number Function

var prints = 100;
while (prints > 0) {
    console.log(prints + " of the prints are left to count to make sure.");
    prints--;
};

console.log("Now I have no more prints left to count in this series.");


//#5 String Concatenation


ghosts = 'Lots of ghosts ';
monsters = 'plenty of crazy monsters';

console.log(ghosts + "and " + monsters + " are found throughout this work.");


//#6 Array with Math




var character = [
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

character.push("Kabe Fudesuke");

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
    "a woman that overpowered a kingdom with her beauty and cunning and eventually caused a rebellion by disturbing local Buddhist precepts.",
    "a Chinese thunder god is sent to defeat an invading army.",
    "a hero of the 108 Suikoden story, he was able to conger magic by making mudra signs leading to his name Dragon Entering Clouds.",
    "a master archer that slays a serpent spirit responsible for slaying several military elephants.",
    "a little old woman who is tortured by evil ghosts and suffers at the devices of her own greed.",
    "a ruthless traitor that attempted to murder his infant master in his sleep.",
    "a famous retainer who is said to have encountered the ghost of a pregnant woman late one evening.",
    "a great sword fighter that defeated an acetic mountain man that turned into a tengu or heavenly dog after being killed.",
];

stories.push("a woman who died while preying in devotion to her husband suffering a curse, her ghost remains.");

for (var i=0, j=character.length; i < j; i++) {


console.log ("The story of " + character[i] + " is about " + stories[i]);

 //.push ( ) add value to end
//.unshift () add value to begining of array
//.pop() delete end item from array
//.shift() delete item from beginning of array

};


//#7 JSON Entry

var retrievePrints = function (json) {
    for (var i = 0; i < json.prints.length; i++){
        var print = json.prints[i];
        console.log("Print number " + print.printNumber + ", named " + print.printName +  ", print size "  + print.size +
            " inches from the " + print.period [1] + " is a favorite of mine from the series.");

        console.log("It is " + print.japanese + " this is a uniquely Japanese inspired theme and story.");
    }
};

retrievePrints(printSet)

//Prologue


console.log ("These are only the first 24, but I hope you know a little more about Yoshitoshi's One Hundred Tales of Japan and China!");









