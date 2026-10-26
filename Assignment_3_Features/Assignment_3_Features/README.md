# Assignment 3 – JavaScript Features

## Files
Each question is in a separate `.js` file, as requested.

## Run
Install Node.js, open this folder in VS Code, then run a file in the terminal:

```bash
node Q1_dynamic_data_parser.js
```

Run any other question by replacing the filename. Q6 accepts an optional pyramid height:

```bash
node Q6_pyramid_pattern_generator.js 4
```

## Debugging in VS Code
1. Open the required `.js` file.
2. Click left of a line number to set a breakpoint.
3. Press `F5` and select Node.js if prompted.
4. Inspect **Variables**, **Watch**, and **Call Stack** in the Run and Debug panel.
5. Suggested Watch expressions are documented in each question's comments.

## Notes
- Q1 explicitly treats whitespace-only strings as invalid even though `Number(" ")` is `0`.
- Q5's original order intentionally triggers a Temporal Dead Zone error at `status`; the corrected runnable example demonstrates the safe order.
- Q8 isolates strict-mode behavior so one intentional syntax error does not prevent the remaining examples from running.
- Q10 includes both shadowing and lexical-scope arrow examples.
