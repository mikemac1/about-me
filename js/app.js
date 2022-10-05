'use strict';

console.log('Hello!');

let visitorsName = prompt('What is your name?');
console.log(visitorsName);
alert('Hello ' + visitorsName + "! Welcome to Mike's site.");

let country = prompt('Have you lived in another country besides the United States?').toLowerCase();
console.log(country);

if (country === 'yes' || country === 'y') {
    // console.log('You did it with a yes!'); 
    alert('That is very cool ' + visitorsName + '! Mike has lived in 2 different countries.');
} else if (country === 'no' || country === 'n') {
    // console.log('You did it with a no!'); 
    alert("Don't worry " + visitorsName + ". You have lots of time to get that opportunity. Mike has lived in 2 different countries.");
} else {
    // console.log("You didn't do it!"); 
    alert("In case you try this again, I need a yes or no answer entered " + visitorsName + ". FYI, Mike has lived in 2 different countries.");
}

let fish = prompt('Have you ever taken care of pet fish before?').toLowerCase();
console.log(fish);

if (fish === 'yes' || fish === 'y') {
    // console.log('You did it with a yes!'); 
    alert('Wow ' + visitorsName + '! How ironic, Mike takes care of five different fish tanks right now.');
} else if (fish === 'no' || fish === 'n') {
    // console.log('You did it with a no!');
    alert("Taking care of fish is not for everyone " + visitorsName + ". Mike loves taking care of his 5 fish tanks.");
} else {
    // console.log("You didn't do it!"); 
    alert("Mike is an avid fish keeper." + visitorsName + ", if you try this again please enter yes or no for your answer.");
}

let swim = prompt('Do you like to swim underwater?').toLowerCase();
console.log(swim);

if (swim === 'yes' || swim === 'y') {
    // console.log('You did it with a yes!');
    alert(visitorsName + ', well you have that up on Mike! He is not big on swimming but after being on a submarine you can go underwater for days on end and never get wet!');
} else if (swim === 'no' || swim === 'n') {
    // console.log('You did it with a no!');
    alert(visitorsName + ", Mike cannot stand putting his head underwater so that is something you have in common.");
} else {
    // console.log("You didn't do it!"); 
    alert("Being a former submariner Mike got to be underwater a lot." + visitorsName + ", if you want to try this again please enter yes or no for your answer and you can find out if Mike likes to swim underwater.");
}

let petDog = prompt('Do you like having dogs as a pet?').toLowerCase();
console.log(petDog);

if (petDog === 'yes' || petDog === 'y') {
    // console.log('You did it with a yes!');
    alert("You and Mike have this is common. Mike has 2 dogs, Laszlo and Blondie and both have lab in them.");
} else if (petDog === 'no' || petDog === 'n') {
    // console.log('You did it with a no!');
    alert("You know it takes a lot of responsibility to take care of a dog so I can understand not everyone does. Mike has 2 dogs, Laszlo and Blondie.");
} else {
    // console.log("You didn't do it!"); 
    alert(visitorsName + ", next time you want to try this again, please enter yes or no for your answer and you can find out if Mike likes dogs as pets.");
}

let farmer = prompt('Have you ever wanted to own a farm?').toLowerCase();
console.log(farmer);

if (farmer === 'yes' || farmer === 'y') {
    // console.log('You did it with a yes!');
    alert(visitorsName + ", well Mike would be happy to tell you what it is like to be farmer. He has 3 acres with a large greenhouse and grew 7 different vegetables last season.");
} else if (farmer === 'no' || farmer === 'n') {
    // console.log('You did it with a no!');
    alert("It takes a LOT of work to be a farmer " + visitorsName + ". so I can understand not everyone does. Mike has 3 acres with a large greenhouse and grew 7 different vegetables last season.");
} else {
    // console.log("You didn't do it!"); 
    alert(visitorsName + ", next time you want to try this again, please enter yes or no for your answer and you can find out what Mike thinks of being a farmer.");
}

// Question 6
// number to guess
let mikesCountries = 16;
// number of tries
let tries = 4;
// starting score
let score1 = 10;

for (let i = 0; i < tries; i++) {
    // users guess
    let userGuess = prompt(`Mike has lived in two other countries besides the United States but visited a lot more. You have ${tries - i} attempts left. Between 5 & 20 what is the number of countries Mike has visited? ONLY enter a number.`);
    // Conditions comparison
    // Users' guess not a number
    if (userGuess !== typeof (mikesCountries)) {
        prompt('Please enter a number and no combination of letters and numbers. PLEASE!!!');
        console.log(`This is try #${i + 1}!`);
        // Users guess too high & higher than 20
    } else if (userGuess > mikesCountries && userGuess > 20) {
        prompt('I\'m sorry your attempt was incorrect and WAY too high. Remember the number is between 5 & 20.');
        console.log(`This is try #${i + 1}! And your guess was WAY too high.`);
        // Users guess too high
    } else if (userGuess > mikesCountries && userGuess < 20) {
        prompt('I\'m sorry your attempt was incorrect and too high.');
        console.log(`This is try #${i + 1}! And your guess was too high.`);
        // Users' guess too low & less than 5
    } else if (userGuess < mikesCountries && userGuess < 5) {
        prompt('I\'m sorry your attempt was incorrect and WAY too low. Remember the number is between 5 & 20.');
        console.log(`This is try #${i + 1}! And your guess was WAY too low.`);
        // Users' guess too low
    } else if (userGuess < mikesCountries) {
        prompt('I\'m sorry your attempt was incorrect and too low.');
        console.log(`This is try #${i + 1}! And your guess was too low.`);
        // Users' guess correct with score
    } else if (userGuess === mikesCountries) {
        prompt(`CONGRATULATIONS! You guessed correctly on your ${i + 1} attempt. Your score is ${score1 - (2 * i)}.`);
        console.log(`This is try #${i + 1}! And your guess was correct.`);
        return score1;
    } else {
        prompt(`You have 0 attempts and the correct answer was 16.  On to the last question.`);
        score1 = 0;
        console.log(`This is try #${i + 1}! And you are out of guesses!`);
        return score1;
    }
}

// Question 7
// Array of countries
let countries = ['KOREA', 'JAPAN', 'THAILAND', 'AUSTRALIA', 'PHILIPPINES',];
// number of attempts
let attempts = 6;
// starting score
let score2 = 10;

for (let j = 0; j < attempts; i++) {
    // users guess
    let usersCountry = prompt(`Mike has visited 16 countries outside the United States but has five favorites. You have ${tries - i} attempts left. What do you believe is one of Mike's favorite countries? Do NOT enter any numbers & watch your spelling.`).toUpperCase();
    // Conditions comparison
    for (let k = 0; k < countries.length; k++) {
        // Users guess is correct
        if (usersCountry === myArray[k]) {
            console.log('You are correct with your country.');
            prompt(`CONGRATULATIONS! You guessed correctly on your ${i + 1} attempt. Your score is ${score2 - (2 * i)}.`);
            return score2;
            // Users guess is incorrect
        } else if(usersCountry !== myArray[k]) {
            console.log('You are incorrect with your country.');
            prompt(`You guessed incorrectly on your ${i + 1} attempt.`);
        } else {
            prompt('You have 0 attempts and the correct answer was any of the following: Korea, Japan, Thailand, Australia, or the Philipines.');
            score2 = 0;
            console.log(`This is try #${i + 1}! And you are out of guesses!`);
            return score2;
        }
        }
    }

    alert('Thank you ' + visitorsName + 'for visiting and have a great day!');
