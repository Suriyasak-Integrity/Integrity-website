#!/bin/bash

# Find all JavaScript and TypeScript files
files=$(find src -type f -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx")

echo "Checking files for mismatched parentheses..."

# Check each file for unbalanced parentheses
for file in $files; do
  echo "Checking $file"

  # Count open and close parentheses
  open_parens=$(grep -o "(" "$file" | wc -l)
  close_parens=$(grep -o ")" "$file" | wc -l)

  # Check if they match
  if [ "$open_parens" -ne "$close_parens" ]; then
    echo "ISSUE FOUND: $file has $open_parens open parentheses and $close_parens close parentheses"
    echo "File content around the issue:"

    # Try to isolate the area with the issue
    line_num=1
    open_count=0
    close_count=0

    while IFS= read -r line; do
      line_open=$(grep -o "(" <<< "$line" | wc -l)
      line_close=$(grep -o ")" <<< "$line" | wc -l)

      open_count=$((open_count + line_open))
      close_count=$((close_count + line_close))

      if [ "$line_open" -ne "$line_close" ]; then
        echo "[$line_num] $line"
      fi

      line_num=$((line_num + 1))
    done < "$file"

    echo "----------------------------------------"
  fi
done

echo "Scan complete."
