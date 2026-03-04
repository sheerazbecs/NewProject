// 1. Array Destructuring — Basic
// -------------------------------
// ES5
var colors = ["red", "green", "blue"];
var first = colors[0];
var second = colors[1];

// ES6
const [firstColor, secondColor, thirdColor] = ["red", "green", "blue"];

console.log("1. Array Destructuring — Basic:");
console.log(first, second);                        // red green
console.log(firstColor, secondColor, thirdColor);  // red green blue


// 2. Array Destructuring — Skip Values
// -------------------------------------
// ES6 — use a comma to skip an item
const [,, lastColor] = ["red", "green", "blue"];

console.log("\n2. Array Destructuring — Skip Values:");
console.log(lastColor);  // blue


// 3. Object Destructuring — Basic
// --------------------------------
// ES5
var person = { name: "John", age: 25 };
var name = person.name;
var age = person.age;

// ES6
const { name: personName, age: personAge } = { name: "John", age: 25 };

console.log("\n3. Object Destructuring — Basic:");
console.log(name, age);              // John 25
console.log(personName, personAge);  // John 25


// 4. Object Destructuring — Default Values
// -----------------------------------------
// ES6 — use = to set a fallback if property is undefined
const { city = "Unknown", country = "Pakistan" } = { country: "Pakistan" };

console.log("\n4. Object Destructuring — Default Values:");
console.log(city, country);  // Unknown Pakistan


// 5. Destructuring in Function Parameters
// ----------------------------------------
// ES5
function greetES5(user) {
  console.log("Hello, " + user.name + "! You are " + user.age);
}

// ES6
const greetES6 = ({ name, age }) => `Hello, ${name}! You are ${age}`;

const user = { name: "Sarah", age: 30 };

console.log("\n5. Destructuring in Function Parameters:");
greetES5(user);              // Hello, Sarah! You are 30
console.log(greetES6(user)); // Hello, Sarah! You are 30