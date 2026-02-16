// Day 1: DOM Introduction - Basic Concepts

// Example 1: Changing Text Content
function changeText() {
    // Get element by ID
    let element = document.getElementById('demo');
    // Change the text
    element.textContent = 'Text changed by JavaScript!';
}

// Example 2: Changing Style (Color)
function changeColor() {
    let element = document.getElementById('colorText');
    element.style.color = 'blue';
    element.style.fontSize = '24px';
}

// Example 3: Hide/Show Element
function toggleVisibility() {
    let element = document.getElementById('toggleText');
   
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

/*
KEY CONCEPTS LEARNED:
1. document.getElementById() - to select element
2. .textContent - to change text
3. .style - to change CSS properties
4. Basic DOM manipulation
*/