// explicit types
let character: string;
let age: number;
let isLoggedin: boolean;

age = 30;

isLoggedin = true;

// arrays
let ninjas: string[] = []; // array of strings initialized
ninjas = ['yoshi', 'mario'];

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string|number;
uid = '123';
uid = 123;
// uid = boolean; // error

// objects 
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = []; // it works with object

let ninjaTwo: {
  name: string,
  age: number,
  beltColor: string
};
