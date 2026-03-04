// =============================================
// script.js
// Day 5 - Modern JavaScript Practice
// =============================================


// =============================================
// SECTION 1 - Default code for each textarea
// We store the starting code here so the
// Reset button can bring it back anytime.
// =============================================

var defaultCode = {

  // Day 1 - ES6 Basics
  t1:
"// Day 1 Practice - ES6 Basics\n" +
"\n" +
"// var  = old way (avoid it)\n" +
"// let  = use when value will change\n" +
"// const = use when value will NOT change\n" +
"\n" +
"const myName = 'Ali';      // will not change\n" +
"let   myAge  = 20;         // can change later\n" +
"\n" +
"// Template literal - use backtick instead of quotes\n" +
"// Write variables inside ${ }\n" +
"let message = `My name is ${myName} and I am ${myAge} years old`;\n" +
"console.log(message);\n" +
"\n" +
"// Spread operator ... copies items from one array to another\n" +
"let fruits  = ['apple', 'banana'];\n" +
"let veggies = ['carrot', 'onion'];\n" +
"let food    = [...fruits, ...veggies];  // combine both\n" +
"console.log(food);\n" +
"\n" +
"// Default parameter - used when no value is passed\n" +
"function greet(name = 'Guest') {\n" +
"    return 'Hello ' + name + '!';\n" +
"}\n" +
"console.log(greet());         // uses default 'Guest'\n" +
"console.log(greet('Sara'));   // uses 'Sara'\n",


  // Day 2 - Arrow Functions
  t2:
"// Day 2 Practice - Arrow Functions\n" +
"\n" +
"// Normal function (old way)\n" +
"function addNormal(a, b) {\n" +
"    return a + b;\n" +
"}\n" +
"\n" +
"// Arrow function (new way) - shorter to write\n" +
"// If only one line, no need for { } or return\n" +
"const addArrow = (a, b) => a + b;\n" +
"\n" +
"console.log(addNormal(3, 4));  // 7\n" +
"console.log(addArrow(3, 4));   // 7 - same result!\n" +
"\n" +
"// One parameter - no need for ( )\n" +
"const double = num => num * 2;\n" +
"console.log(double(5));  // 10\n" +
"\n" +
"// No parameters - use empty ( )\n" +
"const sayHi = () => 'Hi there!';\n" +
"console.log(sayHi());\n" +
"\n" +
"// Arrow function as a callback inside .map()\n" +
"let numbers = [1, 2, 3, 4];\n" +
"let doubled = numbers.map(num => num * 2);\n" +
"console.log(doubled);  // [2, 4, 6, 8]\n",


  // Day 3 - Arrays and Objects
  t3:
"// Day 3 Practice - Arrays and Objects\n" +
"\n" +
"let students = [\n" +
"    { name: 'Ali',  score: 88 },\n" +
"    { name: 'Sara', score: 72 },\n" +
"    { name: 'Zara', score: 95 },\n" +
"    { name: 'Omar', score: 60 },\n" +
"];\n" +
"\n" +
"// .map() - goes through every item and returns something new\n" +
"let names = students.map(function(student) {\n" +
"    return student.name;\n" +
"});\n" +
"console.log('All names:', names);\n" +
"\n" +
"// .filter() - keeps only items where condition is true\n" +
"let passed = students.filter(function(student) {\n" +
"    return student.score >= 75;\n" +
"});\n" +
"console.log('Passed students:', passed);\n" +
"\n" +
"// .reduce() - adds everything into one single value\n" +
"let total = students.reduce(function(sum, student) {\n" +
"    return sum + student.score;\n" +
"}, 0);\n" +
"console.log('Total score:', total);\n" +
"\n" +
"// .find() - returns the FIRST item that matches\n" +
"let topStudent = students.find(function(student) {\n" +
"    return student.score >= 90;\n" +
"});\n" +
"console.log('Top student:', topStudent);\n",


  // Day 4 - Destructuring
  t4:
"// Day 4 Practice - Destructuring\n" +
"\n" +
"// Array Destructuring\n" +
"// Instead of: let r = colors[0]; let g = colors[1];\n" +
"// We can do it in ONE line:\n" +
"let colors = ['red', 'green', 'blue'];\n" +
"let [r, g, b] = colors;\n" +
"console.log(r);  // red\n" +
"console.log(g);  // green\n" +
"console.log(b);  // blue\n" +
"\n" +
"// Object Destructuring\n" +
"// Instead of: let name = person.name; let age = person.age;\n" +
"// We can do it in ONE line:\n" +
"let person = { name: 'Ali', age: 20, city: 'Lahore' };\n" +
"let { name, age, city } = person;\n" +
"console.log(name);  // Ali\n" +
"console.log(age);   // 20\n" +
"console.log(city);  // Lahore\n" +
"\n" +
"// Default value - used if the property does not exist\n" +
"let { country = 'Pakistan' } = person;\n" +
"console.log(country);  // Pakistan (default)\n" +
"\n" +
"// Rename while destructuring\n" +
"let { name: studentName } = person;\n" +
"console.log(studentName);  // Ali\n",


  // Day 5 - Combined
  t5:
"// Day 5 - Combined Challenge\n" +
"// Uses ES6, Arrow Functions, Arrays, Objects and Destructuring\n" +
"\n" +
"// Our data\n" +
"let products = [\n" +
"    { name: 'Laptop', price: 1200, inStock: true  },\n" +
"    { name: 'Shoes',  price: 80,   inStock: false },\n" +
"    { name: 'Phone',  price: 900,  inStock: true  },\n" +
"    { name: 'Book',   price: 15,   inStock: true  },\n" +
"];\n" +
"\n" +
"// Task 1 - Arrow function with default parameter\n" +
"const getDiscount = (price, percent = 10) => price - (price * percent / 100);\n" +
"console.log('Laptop after discount:', getDiscount(1200));\n" +
"\n" +
"// Task 2 - Filter only available products\n" +
"let available = products.filter(product => product.inStock === true);\n" +
"console.log('In stock count:', available.length);\n" +
"\n" +
"// Task 3 - Map to get name list using destructuring\n" +
"let nameList = products.map(({ name, price }) => `${name} costs $${price}`);\n" +
"console.log('Products:', nameList);\n" +
"\n" +
"// Task 4 - Reduce to get total price of all available products\n" +
"let totalPrice = available.reduce((sum, product) => sum + product.price, 0);\n" +
"console.log('Total in-stock value: $' + totalPrice);\n" +
"\n" +
"// Task 5 - Spread to make a summary object\n" +
"let summary = {\n" +
"    ...{ totalProducts: products.length },\n" +
"    inStock: available.length,\n" +
"    totalValue: totalPrice\n" +
"};\n" +
"console.log('Summary:', summary);\n"

};


// =============================================
// SECTION 2 - Fill textareas when page loads
// When the page opens, we put the starting
// code into each textarea automatically.
// =============================================

document.addEventListener('DOMContentLoaded', function() {

    // Get all the keys: ['t1', 't2', 't3', 't4', 't5']
    var keys = Object.keys(defaultCode);

    // Loop through each key
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];

        // Find the textarea with that id
        var textarea = document.getElementById(key);

        // Put the code into it
        if (textarea) {
            textarea.value = defaultCode[key];
        }
    }

});


// =============================================
// SECTION 3 - Toggle open or close a section
// When user clicks a section header,
// we add or remove the "open" class on it.
// =============================================

function toggle(sectionId) {

    // Get the section div
    var section = document.getElementById(sectionId);

    // Check if it is already open
    if (section.classList.contains('open')) {
        // It is open, so close it
        section.classList.remove('open');
    } else {
        // It is closed, so open it
        section.classList.add('open');
    }

}


// =============================================
// SECTION 4 - Run the code in the textarea
// We collect all console.log outputs and
// show them in the output box below.
// =============================================

function runCode(textareaId, outputId) {

    // Step 1 - Get the code the user wrote
    var code = document.getElementById(textareaId).value;

    // Step 2 - Get the output box where we will show results
    var outputBox = document.getElementById(outputId);

    // Step 3 - Create an empty list to collect log messages
    var collectedLogs = [];

    // Step 4 - Save the real console.log so we can restore it later
    var originalLog = console.log;

    // Step 5 - Replace console.log with our own version
    // This lets us capture what gets printed
    console.log = function() {

        var parts = [];

        // Go through each argument passed to console.log
        for (var i = 0; i < arguments.length; i++) {
            var item = arguments[i];

            if (typeof item === 'object') {
                // Objects and arrays need JSON.stringify to look nice
                parts.push(JSON.stringify(item, null, 2));
            } else {
                // Everything else just convert to string
                parts.push(String(item));
            }
        }

        // Save the full line
        collectedLogs.push(parts.join(' '));
    };

    // Step 6 - Try to run the user's code
    try {

        // new Function(code) turns a string into a real function
        // The () at the end runs it immediately
        new Function(code)();

        // Show the result in the output box
        if (collectedLogs.length > 0) {
            outputBox.textContent = collectedLogs.join('\n');
            outputBox.className = 'output success';
        } else {
            outputBox.textContent = 'Code ran successfully but no console.log found.';
            outputBox.className = 'output success';
        }

    } catch (error) {

        // If the code has an error, show it in red
        outputBox.textContent = 'Error: ' + error.message;
        outputBox.className = 'output error';

    } finally {

        // Step 7 - Always put the real console.log back
        console.log = originalLog;

    }

}


// =============================================
// SECTION 5 - Reset the textarea to default
// Clicking Reset brings back the original code
// and clears the output box.
// =============================================

function resetCode(textareaId, sectionNumber) {

    // Put the original code back
    document.getElementById(textareaId).value = defaultCode[textareaId];

    // Clear the output box
    var outputBox = document.getElementById('o' + sectionNumber);
    outputBox.textContent = '// Output will appear here...';
    outputBox.className = 'output info';

}


// =============================================
// SECTION 6 - Show or hide the hint box
// =============================================

function toggleHint(hintId) {

    var hintBox = document.getElementById(hintId);

    // If hint is already visible, hide it
    if (hintBox.style.display === 'block') {
        hintBox.style.display = 'none';
    } else {
        // If hint is hidden, show it
        hintBox.style.display = 'block';
    }

}