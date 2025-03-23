const fs = require('fs');
const acorn = require('acorn');
const jsx = require('acorn-jsx');

// Create a JSX-aware parser
const parser = acorn.Parser.extend(jsx());

// Function to analyze file syntax
function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Try to parse the file
    try {
      parser.parse(content, {
        ecmaVersion: 2020,
        sourceType: 'module',
        allowImportExportEverywhere: true,
        allowAwaitOutsideFunction: true,
        allowReserved: true,
        locations: true
      });
      console.log(`✅ File parsed successfully: ${filePath}`);
    } catch (err) {
      console.error(`❌ Syntax error in ${filePath}:`);
      console.error(`   Line ${err.loc?.line}, Column ${err.loc?.column}: ${err.message}`);

      // Print the problematic line and surrounding context
      const lines = content.split('\n');
      const errorLine = err.loc?.line || 0;

      // Show 2 lines before and after for context
      const start = Math.max(1, errorLine - 2);
      const end = Math.min(lines.length, errorLine + 2);

      console.log('\nContext:');
      for (let i = start; i <= end; i++) {
        const indicator = i === errorLine ? '> ' : '  ';
        console.log(`${indicator}${i}: ${lines[i-1]}`);
      }
    }
  } catch (err) {
    console.error(`Error reading file ${filePath}: ${err.message}`);
  }
}

// Check files by extension types
const sourceFilesMap = {
  tsx: './src/components/RatesCalculator.tsx',
  trackingJsx: './src/components/TrackingForm.jsx',
  jsxLayout: './src/app/layout.jsx',
  jsxPage: './src/app/page.jsx'
};

console.log('Checking files for JSX syntax errors...\n');

// Process each file
Object.entries(sourceFilesMap).forEach(([key, file]) => {
  console.log(`Analyzing ${key}: ${file}`);
  analyzeFile(file);
  console.log('------------------------------------------');
});
