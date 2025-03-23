const fs = require('fs');
const path = require('path');
const acorn = require('acorn');
const jsx = require('acorn-jsx');

const parser = acorn.Parser.extend(jsx());

// Files to check
const filesToCheck = [
  './src/components/RatesCalculator.tsx',
  './src/components/TrackingForm.jsx',
  './src/components/Header.jsx',
  './src/components/ContactForm.jsx',
  './src/app/page.jsx',
  './src/app/rates/page.tsx'
];

for (const filePath of filesToCheck) {
  try {
    console.log(`Checking ${filePath}...`);
    const code = fs.readFileSync(filePath, 'utf8');

    try {
      // Try to parse the file with JSX support
      parser.parse(code, {
        ecmaVersion: 'latest',
        sourceType: 'module'
      });
      console.log(`✅ ${filePath} has no syntax errors`);
    } catch (err) {
      console.error(`❌ ${filePath} has syntax errors:`);
      console.error(`   Line ${err.loc?.line}, Column ${err.loc?.column}: ${err.message}`);

      // Print the problematic line and the surrounding lines for context
      const lines = code.split('\n');
      const errorLine = err.loc?.line || 0;

      const start = Math.max(1, errorLine - 2);
      const end = Math.min(lines.length, errorLine + 2);

      console.log('\nContext:');
      for (let i = start; i <= end; i++) {
        const indicator = i === errorLine ? '> ' : '  ';
        console.log(`${indicator}${i}: ${lines[i-1]}`);
      }
      console.log('');
    }
  } catch (err) {
    console.error(`Error reading file ${filePath}:`, err);
  }
}
