Day 4: Flexbox Basics

What is Flexbox?
A CSS layout module designed for arranging items in one dimension (rows OR columns). Perfect for responsive designs!

Key Properties Learned
1. Container Properties
.container {
    display: flex;              /* Activates flexbox */
    flex-direction: row;        /* row | column */
    flex-wrap: wrap;            /* Allow wrapping */
    justify-content: center;    /* Main axis alignment */
    align-items: center;        /* Cross axis alignment */
    gap: 20px;                  /* Space between items */
}

2. justify-content Values (Horizontal)
justify-content: flex-start;    /* Start of container */
justify-content: center;        /* Center */
justify-content: flex-end;      /* End of container */
justify-content: space-between; /* Equal space between */
justify-content: space-around;  /* Space around each */

3. align-items Values (Vertical)
align-items: stretch;     /* Fill height (default) */
align-items: flex-start;  /* Top */
align-items: center;      /* Middle */
align-items: flex-end;    /* Bottom */

4. Item Properties
.item {
    flex: 1;              /* Grow equally */
    flex-grow: 1;         /* Grow factor */
    align-self: center;   /* Override container alignment */
}

Project Examples:

Navigation menu with centered items
Featured book section (image + text side by side)
Book grid (using grid, which builds on flex concepts)
Two-column layout for genres and reading list
Form rows with equal-width inputs
Checkbox and radio groups in rows
Footer links in a row