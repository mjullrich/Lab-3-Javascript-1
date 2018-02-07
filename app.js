// This code sets a variable:
let name = 'Maryann';
console.log(name);

// This code sets a constant not to be changed:
const states = 52;
console.log(states);

//This code computes a result:
let sum = 5 + 4;
console.log(sum);


// This function checks specific instance of a character at a specific index:
function checkFirstCharacter(checkStr, charIndex, checkCharCode) {
    return checkStr.charCodeAt(charIndex) == checkCharCode;
}

//This code calls the function checkFirstCharacter:
let str = 'Laryann';
if (checkFirstCharacter(str, 0, 76)) {
    alert('Back of Line!');
} else {
    alert('Next!');
}

// This function checks for the string 'Hello world'
function sayHello(checkstring) {
    if (checkstring == 'Hello World') {
        alert('Hello World');
    } else {
        alert('No Hello');
    }
}

//This code calls the function sayHello
let str2 = 'Hello World';

sayHello(str2);

// This function checks for age less than 21:
function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry, ' + name + ', you aren\'t old enough to view this page!');
    }
}

//This code feeds in the parapmeters to check:
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

//This code creates an array and prints to console:
let favVeg = ["Greenbeans", "Mushrooms", "Corn", "Zuchinni"];
for (var i = 0; i < favVeg.length; i++) {
    console.log("I like " + favVeg[i]);
}

//This code creates an array of objects:
let people = [
    {
        name: "Tim",
        age: 28
    },
    {
        name: "Maria",
        age: 21
    },
    {
        name: "Bob",
        age: 11
    },
    {
        name: "Sue",
        age: 17
    },
    {
        name: "Jill",
        age: 56
    }
];

//This function counts the length of a string:

function getLength(text) {
    let counter = 0;
    for (var i = 0; i < text.length; i++) {
        if (text[i] != ' ') {
            counter++;
        }
    }
    return counter;
}

//This code counts a specific string:
let wordCount = getLength("Hello World");
console.log(wordCount);
