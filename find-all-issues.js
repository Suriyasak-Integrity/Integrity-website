const fs = require('fs');
const path = require('path');

// Helper function to find all files recursively
function findAllFiles(dir, fileExt, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findAllFiles(filePath, fileExt, fileList);
    } else if (fileExt.some(ext => file.endsWith(ext))) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Find all JSX and TSX files
const jsxFiles = findAllFiles('./src', ['.jsx', '.tsx']);
console.log(`Found ${jsxFiles.length} JSX/TSX files to check\n`);

// Check each file for potential issues
jsxFiles.forEach(filePath => {
  console.log(`Checking ${filePath}...`);
  const content = fs.readFileSync(filePath, 'utf8');

  // Check imports with .jsx extensions
  const imports = content.match(/import.*from.*\.jsx['"];/g);
  if (imports && imports.length > 0) {
    console.error(`❌ Found import with .jsx extension in ${filePath}:`);
    imports.forEach(imp => console.error(`   ${imp}`));
  }

  // Check for mismatched parentheses in the file
  const openParenCount = (content.match(/\(/g) || []).length;
  const closeParenCount = (content.match(/\)/g) || []).length;

  if (openParenCount !== closeParenCount) {
    console.error(`❌ Mismatched parentheses in ${filePath}: ${openParenCount} open vs ${closeParenCount} close`);

    // Try to find the line with the issue
    const lines = content.split('\n');
    let openCount = 0;
    let closeCount = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineOpenCount = (line.match(/\(/g) || []).length;
      const lineCloseCount = (line.match(/\)/g) || []).length;

      openCount += lineOpenCount;
      closeCount += lineCloseCount;

      if (openCount !== closeCount && lineOpenCount !== lineCloseCount) {
        console.error(`   Potential issue at line ${i + 1}: ${line.trim()}`);
      }
    }
  }

  // Check for mismatched curly braces in the file
  const openBraceCount = (content.match(/\{/g) || []).length;
  const closeBraceCount = (content.match(/\}/g) || []).length;

  if (openBraceCount !== closeBraceCount) {
    console.error(`❌ Mismatched curly braces in ${filePath}: ${openBraceCount} open vs ${closeBraceCount} close`);
  }

  // Check for TSX files with TypeScript assertions
  if (filePath.endsWith('.tsx')) {
    const typeAssertions = content.match(/as keyof typeof/g);
    if (typeAssertions && typeAssertions.length > 0) {
      console.log(`ℹ️ Found TypeScript type assertions in ${filePath} (${typeAssertions.length} occurrences)`);
    }
  }
});

console.log("\nDone checking for syntax issues");
