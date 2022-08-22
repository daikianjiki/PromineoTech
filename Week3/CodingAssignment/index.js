var ages = [3, 9, 23, 64, 2, 8, 28, 93, 100]; //added age is 100.
ages = ages.shift() - ages.pop();
console.log('The difference of youngest to oldest in ages: ' + ages);

const ages1 = [3, 9, 23, 64, 2, 8, 28, 93];
const initialValue = 0;
const sumWithInitial = ages1.reduce(
    (previousValue, currentValue) => previousValue + currentValue, initialValue
);

console.log('Average Age of an Array: ' + sumWithInitial / ages1.length);

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let lengthOfNames = names.map(function(element) {
    return element.length;
});
let sum = lengthOfNames.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log('Average number of letters per name' + sum / names.length);

for (let i = 0; i < names.length; i++) {
    console.log('List of Names: ' + i);
}

//this is how you access the first element in an array.
var firstElement = [4, 5, 6];
firstElement = firstElement.shift();
console.log(firstElement);

//this is how you access the last element in an array.
var lastElement = [1, 2, 3];
lastElement = lastElement.pop();
console.log(lastElement);

var nameLengths = [3, 5, 3, 5, 4, 3];
let sum1 = nameLengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log('Sum of all the elements in array: ' + sum1);

function questionSeven (word, n) {
    console.log(word.repeat(n));
};
questionSeven('Hello', 3);

function createFullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
};
createFullName('Daiki', 'Anjiki');

function overHundred () {
    let sum = length.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    });
    if (sum >= 100) {
        console.log(sum);
    } else {}
}

function average () {
    var total = 0;
    for(var i = 0; i < array.length; i++) {
    total += array[i];
}
var avg = total / array.length;
console.log(avg);
}

function greaterThan (a, b) {
    if (a > b) {
        return true
    } else {
        return false
    }
}

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside = true && moneyInPoket > 10.50) {
        return true 
    } else {
        return false
    }
 }

 let inMyPantry = ['rice', 'salt', 'pepper', 'juice'];
function newgroceryList () {
    if (inMyPantry.find('rice')){
        console.log('We will go grocereies next week');
    } else {
        console.log('We have to go groceries now!');
    }
} //function to see if we will get an update to buy groceries or not.