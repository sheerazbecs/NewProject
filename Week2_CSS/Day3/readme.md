Day 3: CSS Box Model
The Box Model Diagram
text
+-------------------------+
|        MARGIN           |
|  +-------------------+  |
|  |      BORDER       |  |
|  |  +-------------+  |  |
|  |  |   PADDING   |  |  |
|  |  |  +-------+  |  |  |
|  |  |  |CONTENT|  |  |  |
|  |  |  +-------+  |  |  |
|  |  +-------------+  |  |
|  +-------------------+  |
+-------------------------+

Key Properties Learned

1. Content
The actual text or image
Sized with width and height

2. Padding (Inside border)
padding: 20px;              /* All sides */
padding: 10px 20px;         /* top/bottom left/right */
padding: 10px 15px 20px 25px; /* top right bottom left */
padding-top: 10px;

3. Border (Around padding)
border: 2px solid #8b3a1e;  /* width style color */
border-radius: 8px;          /* Rounded corners */
border-bottom: 5px solid gold;

4. Margin (Outside border)
margin: 20px;                /* All sides */
margin: 0 auto;              /* Center horizontally */
margin-top: 10px;
margin-bottom: 20px;

5. Box Sizing
box-sizing: border-box;  /* Includes padding in width calculation */

Project Examples:

Book cards with padding, border, margin
Buttons with padding and border radius
Form inputs with padding and borders
Tables with cell padding
Navigation links with padding