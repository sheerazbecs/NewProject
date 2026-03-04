// ES5
var add = function(a, b) {
  return a + b;
};

// ES6
const addArrow = (a, b) => a + b;

console.log("1. Basic Syntax:");
console.log(add(3, 4));        // 7
console.log(addArrow(3, 4));   // 7


// 2. Single Parameter (no parentheses needed)
// --------------------------------------------
// ES5
var double = function(n) {
  return n * 2;
};

// ES6
const doubleArrow = n => n * 2;

console.log("\n2. Single Parameter:");
console.log(double(5));        // 10
console.log(doubleArrow(5));   // 10


// 3. No Parameters (empty parentheses required)
// ----------------------------------------------
// ES5
var sayHello = function() {
  return "Hello!";
};

// ES6
const sayHelloArrow = () => "Hello!";

console.log("\n3. No Parameters:");
console.log(sayHello());        // Hello!
console.log(sayHelloArrow());   // Hello!


// 4. Multiline Arrow Function (use curly braces + return)
// --------------------------------------------------------
// ES5
var greetUser = function(name) {
  var msg = "Welcome, " + name + "!";
  return msg;
};

// ES6
const greetUserArrow = (name) => {
  const msg = `Welcome, ${name}!`;
  return msg;
};

console.log("\n4. Multiline Arrow Function:");
console.log(greetUser("John"));        // Welcome, John!
console.log(greetUserArrow("John"));   // Welcome, John!


// 5. Arrow Function with Array (using map)
// -----------------------------------------
// ES5
var numbers = [1, 2, 3, 4, 5];
var squared = numbers.map(function(n) {
  return n * n;
});

// ES6
const squaredArrow = numbers.map(n => n * n);

console.log("\n5. Arrow Function with Array:");
console.log(squared);        // [1, 4, 9, 16, 25]
console.log(squaredArrow);   // [1, 4, 9, 16, 25]