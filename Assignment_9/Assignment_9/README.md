# Assignment 9 – jQuery Practical Exercises

This folder contains the complete implementation of all 10 assignment questions.

## Files
- `Q1.html` … `Q10.html`: separate page for each question.
- `Q1.js` … `Q10.js`: matching JavaScript file for each question.
- `styles.css`: shared styling used by all pages.
- `index.html`: launch page with links to all exercises.

## How to run
1. Extract the folder if it is in ZIP format.
2. Open `index.html` in a modern browser, or use VS Code **Live Server**.
3. Select a question from the home page.
4. Keep an internet connection active so jQuery can load from the official jQuery CDN.

## Notes
- Each question has its own HTML and JavaScript file.
- Semantic HTML5 elements such as `header`, `main`, `section`, `article`, and `form` are used.
- Key jQuery operations are commented in the JavaScript files.
- Q5 uses `.next()`, `.children()`, `.siblings()`, `.parent()`, and `.find()` as requested (the contact panel is the next sibling after each employee heading).
- Q6 uses `.on()` for subscription click handlers and `.off()` to detach a specific topic handler before removing a topic. Use each topic row’s Remove button.
- Q9 loads jQuery 1.12.4 and 3.7.1 separately and saves each reference with `jQuery.noConflict(true)`. It requires internet access.
- Q10 checks email uniqueness against a small in-browser demo list. A production application must validate uniqueness on the server/database as well.
