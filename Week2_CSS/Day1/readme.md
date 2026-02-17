Day 1: CSS Basics + Inline vs External CSS
What is CSS?
CSS (Cascading Style Sheets) is a language used to style HTML elements. It controls colors, fonts, layouts, and overall visual presentation of web pages.

Key Concepts Learned

1. Inline CSS
Styles written directly on HTML elements using the style attribute
Affects ONLY that specific element
Example: 
<p style="color: #8b3a1e; font-size: 20px;">This is inline CSS</p>

2. External CSS
Styles written in a separate .css file
Linked to HTML using <link> tag
Affects multiple pages and elements
Example:
<head>
    <link rel="stylesheet" href="styles.css">
</head>

3. CSS Syntax:
selector {
    property: value;
    property: value;
}

Project Examples
External CSS file linked in <head>
Inline styles in header (style="font-size: 0.8rem; letter-spacing: 4px;")
Inline styles in footer (style="color: #6b5040;")