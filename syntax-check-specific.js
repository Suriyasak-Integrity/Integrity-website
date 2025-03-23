const fs = require('fs');
const path = require('path');

// Function to check for mismatched parentheses with line and column tracking
function findMismatchedParentheses(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  const stack = [];
  const openParens = {'(': true, '{': true, '[': true};
  const closeParens = {')': '(', '}': '{', ']': '['};

  for (let lineNum = 0; lineNum < lines.length; lineNum++) {
    const line = lines[lineNum];

    for (let colNum = 0; colNum < line.length; colNum++) {
      const char = line[colNum];

      if (openParens[char]) {
        stack.push({
          char,
          lineNum: lineNum + 1,
          colNum: colNum + 1
        });
      } else if (closeParens[char]) {
        if (stack.length === 0) {
          console.log(`Extra closing parenthesis "${char}" at line ${lineNum + 1}, column ${colNum + 1}`);
          return;
        }

        const last = stack.pop();
        if (last.char !== closeParens[char]) {
          console.log(`Mismatched parenthesis at line ${lineNum + 1}, column ${colNum + 1}`);
          console.log(`Expected "${closeParens[char]}" to match with "${last.char}" at line ${last.lineNum}, column ${last.colNum}`);
          console.log(`Context: ${line}`);
          return;
        }
      }
    }
  }

  if (stack.length > 0) {
    const last = stack[stack.length - 1];
    console.log(`Missing closing parenthesis for "${last.char}" at line ${last.lineNum}, column ${last.colNum}`);
    console.log(`Context: ${lines[last.lineNum - 1]}`);
    return;
  }

  console.log("No mismatched parentheses found.");
}

// Check the specific files most likely to have issues
const filesToCheck = [
  './src/components/RatesCalculator.tsx',
  './src/components/TrackingForm.jsx',
  './src/app/page.jsx',
  './src/app/tracking/page.tsx',
  './src/app/rates/page.tsx'
];

console.log("Checking for syntax errors in specific files...");

for (const file of filesToCheck) {
  console.log(`\nAnalyzing ${file}:`);
  try {
    findMismatchedParentheses(file);
  } catch (err) {
    console.error(`Error processing ${file}: ${err.message}`);
  }
}

console.log("\nSyntax check complete.");
