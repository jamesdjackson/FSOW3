/*

var json = {
    "prints": {
        "01": {
            "name": "Samanosuke Mitsutoshi",
            "description": "a great retainer who's saved a close friend's daughter who was bewitched by a fox."
        },
        "02": {
            "name": "Lord Sadanobu",
            "description": "a powerful government figure whom was attacked by a demon in the emperor's southern palace."
        },
        "03": {
            "name": "Oda Harunaga",
            "description": "a powerful warlord that requested the removal of a temple and was haunted by a remaining tree."
        }
    }
};

for (var key in json.prints) {
    var print = json.prints[key];
};

var json2 = {
    "prints" : [
        {
            "uuid": "01",
            "name": "Samanosuke Mitsutoshi",
            "description": "a great retainer who's saved a close friend's daughter who was bewitched by a fox."
        },
        {
            "uuid": "02",
            "name": "Lord Sadanobu",
            "description": "a powerful government figure whom was attacked by a demon in the emperor's southern palace."
        },
        {
            "uuid": "03",
            "name": "Oda Harunaga",
            "description": "a powerful warlord that requested the removal of a temple and was haunted by a remaining tree."
        }
    ]
};
*/

var json = {
    "friends": {
        "001435235": {
            "name": "Chris",
            "age": 30
        },
        "00143523238": {
            "name": "Scott",
            "age": 42
        },
        "001435230": {
            "name": "Jason",
            "age": 32
        }
    }
};

for (var key in json.friends) {
    var friend = json.friends[key];
};

var json2 = {
    "friends" : [
        {
            "uuid": "001435235",
            "name": "Chris",
            "age": 30
        },
        {
            "uuid": "0014352238",
            "name": "Scott",
            "age": 42
        },
        {
            "uuid": "001435230",
            "name": "Jason",
            "age": 32
        }
    ]
}