// ================================
//  Day 4 - Functions
// ================================

// A function is a reusable block of code.
// Let's start simple — a function with no input.
function greet() {
    console.log("Hello, Usman!");
}
greet();

// That worked, but it always says "Usman".
// Let's make it flexible by adding a parameter.
function greetUser(name) {
    console.log("Hello,", name + "!");
}
greetUser("Usman");
greetUser("Ali");

// Now it greets anyone. But so far we're only printing.
// What if we want the function to give us a value back?
// That's what return does.
function add(a, b) {
    return a + b;
}
const result = add(5, 3);
console.log("Sum:", result);

// We stored the returned value in a variable.
// Now let's use that idea to build something more useful —
// a function that returns a full sentence about a student.
function studentInfo(name, age, city) {
    return `${name} is ${age} years old and lives in ${city}.`;
}
console.log(studentInfo("Usman", 22, "Lahore"));

// So far we used the "function" keyword.
// You can also store a function inside a variable — called a function expression.
const multiply = function(a, b) {
    return a * b;
};
console.log("Product:", multiply(4, 3));

// Function expressions can be written even shorter using arrow functions.
// Same idea, cleaner syntax.
const square = (n) => n * n;
console.log("Square of 5:", square(5));

// Arrow functions are just a shorter way to write function expressions.
// All three do the same thing — just written differently.