'use strict';

console.log('Hello!');

let visitorsName = prompt('What is your name?');
console.log(visitorsName);
alert('Hello ' + visitorsName + "! Welcome to Mike's site.");

let country = prompt('Have you lived in another country besides the United States?').toLowerCase();
console.log(country);

if (country === 'yes' || country === 'y') {
    // console.log('You did it!'); 
    alert('That is very cool ' + visitorsName + '! Mike has lived in 2 different countries.');
} else if (country === 'no' || country === 'n') {
    // console.log('You did it!'); 
    alert("Don't worry " + visitorsName + ". You have lots of time to get that opportunity. Mike has lived in 2 different countries.");
} else {
    // console.log("You didn't do it!"); 
    alert("In case you try this again, I need a yes or no answer " + visitorsName + ". FYI, Mike has lived in 2 different countries.");
}

let fish = prompt('Have you ever taken care of pet fish before?').toLowerCase();
console.log(fish);

if (fish === 'yes' || fish === 'y') {
    // console.log('You did it!'); 
    alert('Wow ' + visitorsName + '! How ironic, Mike takes care of five different fish tanks right now.');
} else if (fish === 'no' || fish === 'n') {
    // console.log('You did it!');
    alert("Taking care of fish is not for everyone " + visitorsName + ". Mike loves taking care of his 5 fish tanks.");
} else {
    // console.log("You didn't do it!"); 
    alert("Mike is an avid fish keeper." + visitorsName + ", if you try this again please select yes or no for your answer.");
}

let swim = prompt('Do you like to swim underwater?').toLowerCase();
console.log(swim);

if (swim === 'yes' || swim === 'y') {
    // console.log('You did it!');
    alert(visitorsName + ', well you have that up on Mike! He is not big on swimming but after being on a submarine you can go underwater for days on end and never get wet!');
} else if (swim === 'no' || swim === 'n') {
    // console.log('You did it!');
    alert(visitorsName + ", Mike cannot stand putting his head underwater so that is something you have in common.");
} else {
    // console.log("You didn't do it!"); 
    alert("Being a former submariner Mike got to be underwater a lot." + visitorsName + ", if you want to ry this again please select yes or no for your answer and you can find out if Mike likes to swim underwater.");
}

let petDog = prompt('Do you like having dogs as a pet?').toLowerCase();
console.log(petDog);

if (petDog === 'yes' || petDog === 'y') {
    // console.log('You did it!');
    alert("You and Mike have this is common. Mike has 2 dogs, Laszlo and Blondie and both have lab in them.");
} else if (petDog === 'no' || petDog === 'n') {
    // console.log('You did it!');
    alert("You know it takes a lot of responsibility to take care of a dog so I can understand not everyone does. Mike has 2 dogs, Laszlo and Blondie.");
} else {
    // console.log("You didn't do it!"); 
    alert(visitorsName + ", next time you want to try this again, please select yes or no for your answer and you can find out if Mike likes dogs as pets.");
}

let farmer = prompt('Have you ever wanted to own a farm?').toLowerCase();
console.log(farmer);

if (farmer === 'yes' || farmer === 'y') {
    // console.log('You did it!');
    alert(visitorsName + ", well Mike would be happy to tell you what it is like to be farmer. He has 3 acres with a large greenhouse and grew 7 different vegetables last season.");
} else if (farmer === 'no' || farmer === 'n') {
    // console.log('You did it!');
    alert("It takes a LOT of work to be a farmer " + visitorsName + ". so I can understand not everyone does. Mike has 3 acres with a large greenhouse and grew 7 different vegetables last season.");
} else {
    // console.log("You didn't do it!"); 
    alert(visitorsName + ", next time you want to try this again, please select yes or no for your answer and you can find out if Mike would want to be a farmer.");
}

document.write('Hi ' + visitorsName + "! Welcome to Mike's page. Thanks for taking time to visit and answering my questions!");
