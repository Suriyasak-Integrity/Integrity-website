const fs = require('fs');
const path = require('path');

// Check import statement syntax
console.log("Testing import statements...");

const fileToCheck = './src/app/page.jsx';
const content = fs.readFileSync(fileToCheck, 'utf8');

// Look for import statements with potential issues
const importStatements = content.match(/import.*from.*/g);
console.log("Import statements found:");
importStatements.forEach((statement, index) => {
  console.log(`${index + 1}: ${statement}`);

  // Check for missing closing parenthesis
  const openParenCount = (statement.match(/\(/g) || []).length;
  const closeParenCount = (statement.match(/\)/g) || []).length;

  if (openParenCount !== closeParenCount) {
    console.error(`❌ Potential issue found in import statement #${index + 1}: Mismatched parentheses`);
  }

  // Check if import paths end with semicolons
  if (!statement.endsWith(';')) {
    console.error(`❌ Potential issue found in import statement #${index + 1}: Missing semicolon`);
  }
});

// Check for specific patterns of code in the file
console.log("\nChecking for potential syntax issues...");

// Look for JSX expressions
const jsxExpressions = content.match(/{[^}]*}/g);
if (jsxExpressions) {
  jsxExpressions.forEach((expr, index) => {
    // Check for mismatched parentheses inside JSX expressions
    const openParenCount = (expr.match(/\(/g) || []).length;
    const closeParenCount = (expr.match(/\)/g) || []).length;

    if (openParenCount !== closeParenCount) {
      console.error(`❌ Potential issue found in JSX expression: ${expr}`);
      console.error(`   Mismatched parentheses: ${openParenCount} open vs ${closeParenCount} close`);
    }
  });
}

// Specifically check TrackingForm import
const trackingFormImport = content.match(/import.*TrackingForm.*from.*/g);
if (trackingFormImport) {
  console.log("\nTracking Form import statement:");
  console.log(trackingFormImport[0]);
}

console.log("\nDone checking syntax.");
