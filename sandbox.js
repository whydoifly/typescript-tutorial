// explicit types
var character;
var age;
var isLoggedin;
age = 30;
isLoggedin = true;
// arrays
var ninjas = []; // array of strings initialized
ninjas = ['yoshi', 'mario'];
// union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
// uid = boolean; // error
// objects 
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = []; // it works with object
var ninjaTwo;
