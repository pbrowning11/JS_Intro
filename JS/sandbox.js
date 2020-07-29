let age = 25;
let year = 2020;
//log variables to the console with console.log
console.log (age,year);
console.log (year);

age = 30;

console.log(age);
// const variables can't be changed
const points = 100;
console.log(points);
// points = 50;
// console.log(points) -> will cause an error

var score = 75;
console.log(score);

//******STRINGS*******/
console.log('******STRING PRACTICE******')
console.log('hello, world');

let email = 'mario@gmail.com';
console.log(email);

// string concatenation
let firstName = 'Parker';
let lastName = 'Browning';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[0]);
console.log(fullName[5]);

// string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
let lower = fullName.toLowerCase();
console.log(lower, fullName);

let index = email.indexOf('@');
console.log(index);

//common string methods
let address = 'parker@gmail.com';
//finds the last 'r' in the variable string
//let result = address.lastIndexOf('r');
//starts at first argument (0) and cuts off at the second (10)
//let result = address.slice(0,10);
//starts at first argument (0) and counts the number of places of the second (8);
//let result = address.substr(0,8);
//replaces the first argument (p) with the second (d) - only replaces the FIRST argument value in the string;
// let result = address.replace('p','d');

// console.log(result);

//******NUMBERS*******
console.log('******NUMBERS PRACTICE******')
let radius = 10;
const pi = 3.14;
console.log(radius, pi);

//math operators: +,-,*,/,**,%
console.log(10/5);
// % will give you the remainder of the division 10/3 = 9, 10-9 = 1. will print 1 into the console
//let result = radius % 3;
//** acts as the 'power' or exponents
//let result = pi * radius**2
//JS will follow order of operations - PEMDAS
// let result = 5 * (10-3)**2;
// console.log(result);
let like = 10;
//likes = likes + 1;
// ++ will add 1 to the previous value
//likes++
// -- will subtract 1 from the previous value
//likes--
// += is like saying add 10 to the previous value
//likes += 10
// likes -= 5;
// likes *= 2;
// likes /=5;
// console.log(likes);

//******NaN******
console.log(5/'hello');

//Conacatinate numbers:
let result = 'the blog has ' + like + ' likes';
console.log(result);

//******TEMPLATE STRINGS******
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;
// concatination way:
// let blog = 'the blog calles ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log (blog);

//template string way: (template literal)
//uses 'back ticks' to start the string
let blog = `the blog called ${title} by ${author} has ${likes} likes`;
console.log(blog);

//creating html templates:
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes </span>
`;
console.log(html);

//******ARRAYS******
console.log('******ARRAY PRACTICE******')
let people = ['shaun', 'parker', 'john'];
//change the 'name' of position 0 in the array
people[0] = 'ken';
console.log(people[0]);
let ages = [20,25,30,35];
console.log(ages[2]);
//can have different variable types in arrays
let random = ['shaun','crystal', 30, 20];
console.log(random);
//array methods:
console.log(people.length);
//separates the array values with the argument ','
//let ninjas = people.join(', ');
//finds where in the array a value is
//let ninjas = people.indexOf('parker');
//joins together two arrays
//let ninjas = people.concat(['ken', 'crystal'])
//returns the new length of the array and adds to the array
let ninjas = people.push('ken');
console.log(people);

console.log(ninjas);

//******NULL******
console.log('******NULL*******');
let old = null;
console.log(old, old + 3, `the old is ${old}`);

//*****BOOLEAN*****
console.log('*****BOOLEAN PRACTICE******');
console.log(true, false, 'true','false');
//methods can return booleans
let post = 'luigi@gmail.com';

// let response = email.includes('@');
let names = ['mairo', 'luigi', 'toad']
let response = names.includes('bowser');

console.log(response)

//comparison operators
let years = 25;

console.log(years == 25);
console.log(years == 30);
console.log(years != 30);
console.log(years != 25);
console.log(years > 20);
console.log(years < 20);
console.log(years <= 25);

let person = 'parker';
console.log(person == 'parker');

//strict comparison
console.log(years == '25');
console.log(years === '25');

//type conversion
let goals = '100';
console.log(goals + 1);
//convert sting into a number
goals = Number(goals);
console.log(goals + 1);
console.log(typeof goals);

let test = Number('hello');
console.log(test);

let con = 50;
con = String(con);
console.log(typeof con);

let bool = Boolean(100);
console.log(bool, typeof bool);
bool = String('0');
console.log(bool, typeof bool);
