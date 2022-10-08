'use strict';

console.log('Hello!');

// asks name
let visitorsName = prompt('What is your name?');
console.log(visitorsName);

// sets the score
let score = 0;
alert('Hello ' + visitorsName + "! Welcome to Mike's site.");

// question 1
function question1() {
    let country = prompt('Do you think Mike has lived in another country besides the United States?').toLowerCase();
    console.log(country);

    if (country === 'yes' || country === 'y') {
        alert('Correct ' + visitorsName + '! Mike has lived in 2 different countries, Australia and Japan.');
        score++;
    } else {
        alert("I'm sorry " + visitorsName + ". That is incorrect. Mike has lived in 2 different countries, Australia and Japan.");
    }
}


// question 2
function question2() {
    let fish = prompt('Does Mike take care of pet fish?').toLowerCase();
    console.log(fish);

    if (fish === 'yes' || fish === 'y') {
        score++;
        alert('Wow ' + visitorsName + ' that is correct! Mike takes care of five different fish tanks right now. your score is ' + score + ' out of 2.  Keep going!');
    } else {
        alert("Taking care of fish is one of Mikes joys " + visitorsName + ". You are incorrect.");
    }
}


// question 3
function question3() {
    let swim = prompt('Does Mike like to swim underwater?').toLowerCase();
    console.log(swim);

    if (swim === 'yes' || swim === 'y') {
        alert(visitorsName + ', I am sorry but Mike is not big on swimming. However after being on a submarine he went underwater for days on end and never got his face wet!');
    } else {
        score++;
        alert(visitorsName + " you are correct! Mike cannot stand putting his head which is why he served on 2 submarines so he could keep his face dry.");
    }
}


// question 4
function question4() {
    let petDog = prompt('Does Mike like having dogs as a pet?').toLowerCase();
    console.log(petDog);

    if (petDog === 'yes' || petDog === 'y') {
        score++;
        alert("Mike loves dogs and has 2, Laszlo & Blondie and they both have lab in them. Your score is " + score + ". Keep going!");
    } else {
        alert("I'm sorry that is incorrect. Mike has 2 dogs, Laszlo and Blondie.");
    }
}


// question 5
function question5() {
    let farmer = prompt('Does Mike want to own a farm?').toLowerCase();
    console.log(farmer);

    if (farmer === 'yes' || farmer === 'y') {
        score++;
        alert(visitorsName + " you are correct! Well Mike would be happy to tell you what it is like to be farmer. He has 3 acres with a large greenhouse and grew 7 different vegetables last season.");
    } else {
        alert("It takes a LOT of work to be a farmer " + visitorsName + " and you are incorrect, Mike would love to own a farm. Mike has 3 acres with a large greenhouse and grew 7 different vegetables last season.");
    }
}


// Question 6
function question6() {
    // number to guess
    let mikesCountries = 16;
    // number of tries
    let tries = 4;

    for (let i = 0; i < tries; i++) {
        // users guess
        let userGuess = prompt(`Mike has lived in two other countries besides the United States but visited a lot more. You have ${tries - i} attempts. Between 5 & 20 what is the number of countries Mike has visited? ONLY enter a number.`);
        userGuess = parseInt(userGuess);

        // Conditions comparison
        // Users guess too high & higher than 20
        if (userGuess > mikesCountries && userGuess > 20 && i < 3) {
            alert('I\'m sorry your attempt was incorrect and WAY too high. Remember the number is between 5 & 20.');
            console.log(`This is try #${i + 1}! And your guess was WAY too high.`);
            // Users guess too high
        } else if (userGuess > mikesCountries && userGuess < 20 && i < 3) {
            alert('I\'m sorry your attempt was incorrect and too high.');
            console.log(`This is try #${i + 1}! And your guess was too high.`);
            // Users' guess too low & less than 5
        } else if (userGuess < mikesCountries && userGuess < 5 && i < 3) {
            alert('I\'m sorry your attempt was incorrect and WAY too low. Remember the number is between 5 & 20.');
            console.log(`This is try #${i + 1}! And your guess was WAY too low.`);
            // Users' guess too low
        } else if (userGuess < mikesCountries && i < 3) {
            alert('I\'m sorry your attempt was incorrect and too low.');
            console.log(`This is try #${i + 1}! And your guess was too low.`);
            // Users' guess correct with score
        } else if (userGuess === mikesCountries) {
            score++;
            alert(`CONGRATULATIONS! You guessed correctly on your ${i + 1} attempt. Your current score is ${score}.`);
            console.log(`This is try #${i + 1}! And your guess was correct.`);
            console.log('I cannot believe I got strict equality to work!');
            break;
        } else {
            alert(`You have 0 attempts and the correct answer was 16.  On to the last question.`);
            console.log(mikesCountries);
            console.log(userGuess);
            console.log(`This is try #${i + 1}! And you are out of guesses!`);
        }
    }
}


// Question 7
function question7() {
    // Array of countries
    let countries = ['KOREA', 'JAPAN', 'THAILAND', 'AUSTRALIA', 'PHILIPPINES'];
    // number of attempts allowed
    let attempts = 6;
    // number of attempts started
    let userAttempts = 0;

    while (userAttempts < attempts) {
        // users guess
        let usersCountry = prompt(`Mike has visited 16 countries outside the United States but has five favorites. You have ${attempts - userAttempts} attempts left. What do you believe is one of Mike's favorite countries? Do NOT enter any numbers & watch your spelling.`).toUpperCase();
        // Conditions comparison
        let guessCorrect = false;

        for (let k = 0; k < countries.length; k++) {
            // Users guess is correct
            if (usersCountry === countries[k]) {
                score++;
                alert(`CONGRATULATIONS! You guessed correctly on your ${userAttempts + 1} attempt.`);
                console.log(`You are correct with ${usersCountry}.`);
                guessCorrect = true;
                break;
                // Users guess is incorrect
            }
        }

        if (guessCorrect) {
            break;
        }

        if (!guessCorrect && userAttempts < 5) {
            alert(`You guessed incorrectly on your ${userAttempts + 1} attempt, and you have ${attempts - userAttempts - 1} attempts left.`);
            console.log(`You are incorrect with your country and you have ${attempts - userAttempts - 1} left.`);
        }

        if (!guessCorrect && userAttempts === 5) {
            alert('You have 0 attempts and the correct answer was any of the following: Korea, Japan, Thailand, Australia, or the Philipines.');
            console.log(`This is try #${userAttempts + 1}! And you are out of guesses!`);
            break;
        }
        userAttempts++;
    }
}

question1();
question2();
question3();
question4();
question5();
question6();
question7();

console.log('Yeah! You made it out of the while loop.')
alert(`Congratulations ${visitorsName} your total score for all seven questions was ${score}!`);

alert(`Thank you ${visitorsName} for visiting Mike\'s site and have a great day!`);
