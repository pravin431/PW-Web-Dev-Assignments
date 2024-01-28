// Curry function
function curry(fn) {
    return function curried(...args) {
        // Check if all arguments are provided
        if (args.length >= fn.length) {
            return fn(...args); // Execute the original function
        } else {
            // Return a new function with the provided arguments
            return function (...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}

// Test with a function that adds two numbers
function add(a, b) {
    return a + b;
}

const curriedAdd = curry(add);

// Test the curried function
console.log(curriedAdd(2)(3)); // Output: 5
console.log(curriedAdd(2, 3)); // Output: 5
console.log(curriedAdd(2)(3)(4)); // Output: 9
