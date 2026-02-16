What is CSS?


1. Inline CSS - styles written in style="" attributes
2. Basic CSS properties like:
    Colors (color, background-color)
    Sizing (font-size, padding)
    Positioning (text-align)
    Borders (border-radius, border)
    Cursor

HTML Structure
<!DOCTYPE html>

Declares that this is an HTML5 document
Tells the browser how to interpret the code

<html lang="en">
Root element of the HTML page
lang="en" specifies the language is English

<head>
Contains meta-information about the document
Not visible on the webpage

<meta charset="UTF-8">
Sets character encoding to UTF-8
Supports all characters and symbols (including emojis)

<title>Fun Colors!</title>
Sets the page title shown in browser tab


Body Tag with Inline CSS
<body style="background-color: lightyellow; font-family: Comic Sans MS, cursive; padding: 20px;">
Breaking down the inline styles:

background-color: lightyellow; - Makes the entire page background light yellow
font-family: Comic Sans MS, cursive; - Sets the font to Comic Sans (fun, child-friendly font)
padding: 20px; - Adds 20 pixels of space around all content inside the body


Heading with Inline CSS
<h1 style="color: purple; text-align: center; font-size: 50px;">Hello!</h1>

<h1> - Heading 1 tag (largest heading)
color: purple; - Makes text purple
text-align: center; - Centers the text horizontally
font-size: 50px; - Makes the text 50 pixels tall


First Paragraph with Inline CSS
<p style="color: blue; font-size: 24px; background-color: lightblue; padding: 15px; border-radius: 10px;">

<p> - Paragraph tag
color: blue; - Makes the text blue
font-size: 24px; - Sets text size to 24 pixels
background-color: lightblue; - Light blue background behind the text
padding: 15px; - Adds 15 pixels of space inside the box around the text
border-radius: 10px; - Rounds the corners of the background box


Second Paragraph with Inline CSS
<p style="color: red; font-size: 24px; background-color: pink; padding: 15px; border-radius: 10px;">
Same structure as first paragraph but with:

color: red; - Red text
background-color: pink; - Pink background


Third Paragraph with Inline CSS
<p style="color: green; font-size: 24px; background-color: lightgreen; padding: 15px; border-radius: 10px;">
Same structure but with:

color: green; - Green text
background-color: lightgreen; - Light green background


Button with Inline CSS
<button style="background-color: orange; color: white; font-size: 30px; padding: 20px; border: none; border-radius: 15px; cursor: pointer;">

<button> - Creates a clickable button
background-color: orange; - Orange button background
color: white; - White text on button
font-size: 30px; - Large text (30 pixels)
padding: 20px; - Space inside button (makes it bigger)
border: none; - Removes default button border
border-radius: 15px; - Rounds button corners
cursor: pointer; - Changes mouse cursor to pointer hand when hovering


Closing Tags
</body> - Closes the body section
</html> - Closes the HTML document

This demonstrates inline CSS because all styling is written directly in the style="" attribute 
of each HTML element, rather than in a separate CSS file or <style> tag.
--------------------------------------------------------------------------------------
Inline CSS is written directly in an HTML element's style attribute:
html<p style="color: red;">Text</p>

External CSS is written in a separate .css file and linked to the HTML:
html<link rel="stylesheet" href="styles.css">

Inline affects one element; external can style multiple pages.