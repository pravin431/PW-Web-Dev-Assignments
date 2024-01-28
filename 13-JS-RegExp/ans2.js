function isMatch(pattern, inputString) {
    // Create a regular expression object
    const regex = new RegExp(pattern);
  
    // Test the input string against the regex
    return regex.test(inputString);
  }
  
  // Test the function with various patterns and strings
  const pattern1 = /hello/;
  const pattern2 = /\d{3}-\d{2}-\d{4}/; // Social Security Number pattern
  const pattern3 = /^[A-Za-z]+$/; // Alphabetic characters only
  const pattern4 = /\b\d{4}\b/; // Four-digit word boundary pattern
  
  const testString1 = "Hello, World!";
  const testString2 = "123-45-6789";
  const testString3 = "AbcdEfG";
  const testString4 = "2022";
  
  console.log(`Pattern 1 Test: ${isMatch(pattern1, testString1)}`);
  console.log(`Pattern 2 Test: ${isMatch(pattern2, testString2)}`);
  console.log(`Pattern 3 Test: ${isMatch(pattern3, testString3)}`);
  console.log(`Pattern 4 Test: ${isMatch(pattern4, testString4)}`);
  