//comma operator
// In JavaScript, the comma operator , is used to evaluate multiple expressions in a single statement. It allows you to combine multiple expressions, and it returns the value of the last expression. Each expression is evaluated from left to right, and the result of the last expression becomes the overall result of the comma-separated list.

let x = 1, y = 2, z = 3;

let result = (x++, y++, z++);
console.log(result);  // Output: 3 (value of z after all expressions)
console.log(x, y, z); // Output: 2 3 4 (updated values of x, y, and z)
