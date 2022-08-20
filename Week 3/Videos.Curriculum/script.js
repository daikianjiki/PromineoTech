//array
var customerNames = [];
customerNames.push('Sam Smith'); //0 in array
customerNames.push('Tommy Guns'); //1 in array

for (let i = 0; i < customerNames.length; i++) {
    console.log(customerNames [0]); //this would be Sam Smith.
}


for (name of customerNames) {
    console.log(name);
}

//functions
function myFunction() {
    for (let i=0; i < 100; i++) {
        console.log(i);
    }
}

myFunction();

function createFullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
    // return firstName + ' ' + lastName;
    // return can use a variable 
}

createFullName('Tom', 'Sawyer');
// var FullName = createFullName('Tom', 'Sawyer');
// console.log('Welcome, ' + fullName);

// intermediate array methods
let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];
let lengths = names.map(function(element) {
    return element.length;
});
console.log(lengths);

// reduce
let sum = length.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sum);

// for each method
names.forEach(function(element) {
    console.log(element);
});

//filter method
let evens = names.filter(function(element) {
    return element.length % 2 == 0;
});
console.log(evens);

//splice - read the mdn
let removedElement = names.splice(1, 1);
console.log(removedElement);

//Objects method belongs to an object
var dvdPlayer = {
    height: 3, 
    width: 18,
    depth: 12,
    weight: 7,
    color: 'black',
    dvdName: 'Mula',
    printDVDName: function() {
        console.log(this.dvdName);
    }
};

console.log(dvdPlayer.depth);
dvdPlayer.printDVDName();
