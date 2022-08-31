//const and let
var x = 10;
{
    let x = 2; //within this block, x is 2.
    //if we keep it with x = 2, without 'let', it will be 2 in the block 
    //and it will be 2 outside of the block.
}
//outside of the block, x is 10.

const pi = 3.14159;

console.log(pi);

pi = 6

console.log(pi); //the value of pi doesn't change to 6 because const of 
//pi is 3.14159 which is declared at the top.

//template literals
let myString = 'Hello
world
my name 
is Daiki';

console.log(myString);
//this will console log - 
//Hello
//world
//my name
//is Daiki.

//this is how they used to have to accomplish this:
let anotherString = 'Hello\nworld\nmy name\nis Daiki.';

console.log(`Size times five = ${5 * 6}`); //you must use backtick 
//(left top corner of the keyboard to activate the ${5 * 6} within the ())

//arrow functions -> binds the current scope to the function
let createFullName = (firstName, lastName) => firstName + ' ' + lastName;
//OR!!!
let createFullName2 = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(createFullName('Tom', 'Sawyer')); //with concatenation 
console.log(createFullName2('Tim', 'Slayer')); //with temlate literals

let someFunction = (a, b) => {
    let result = '';
    for (let i = 0; i < a.length; i++) {
        result += a;
    }
    return result;
}

console.log(someFunction('Hello', 3)); //console logs HelloHelloHello

//callbacks
let username = sentHttpRequest('getUser');
console.log(username); //this will comeout undefined

function logUsername(user) {
    console.log(user);

}

sendHttpRequest('getUser', logUsername);

sentHttpRequest('getUser', user => console.log(user));

//wow... I need to watch this video again. I don't understand.

//promises
doSomethingThatReturnsAPromise()
    .then((value => {
        console.log(value);
    }).cathch(err) => {
        console.error(err);
    });

    //OR!!!!
function handleEvent(valie) {
    console.log(value);
}
function handleError(err) {
    console.error(err);
}
doSomethingThatReturnsAPromise()
    .then(handleEvenet);
    .catch(handleError);