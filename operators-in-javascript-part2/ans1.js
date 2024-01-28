// ternary operator
// The ternary operator is a concise way to write conditional expressions in JavaScript. It provides a shorthand for the if-else statement. The syntax of the ternary operator is as follows:

// javascript

// condition ? expression_if_true : expression_if_false;

// If the condition is true, the expression before the : is executed.
// If the condition is false, the expression after the : is executed.


let num = 20;

let result = (num%2==0)?"even":"odd";
console.log(`${num} is ${result}`);

// Using the ternary operator in this context provides a concise and readable way to express a simple conditional check. However, it's important to use it judiciously, as overly complex conditions or expressions might reduce code readability.