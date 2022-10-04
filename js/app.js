'use strict';

console.log('Hello!');

let booleanValue = true;

if (booleanValue) {
    console.log('if condition is true this will print in console');
}

/* 

&& - is the 'logical and'
One false with an && and it will not run

|| - is the 'loigcial or' (double pipe)
One true and it will work

! = 'logical not' often called bang

*/

let trueValue = true;
let falseValue = false;

if (trueValue && falseValue) {
    console.log('it evaluated to true'); /* this does not run */
}

if (trueValue || falseValue) {
    console.log('it evaluated to true'); /* this runs */
}

let userName = prompt('What is your name?');
console.log(userName);

let likesStarWars = prompt('Do you like Star Wars?');
likesStarWars = likesStarWars.toLowerCase();
console.log(likesStarWars);

if (likesStarWars === 'yes' || likesStarWars === 'y') {
    console.log('You are correct. I do like Star Wars.');

} else if (likesStarWars === 'no' || likesStarWars === 'n') {
    console.log("I'm sorry but Star Wars is the best.");
}  else {
    console.log('Please answer with yes or no.');
}
