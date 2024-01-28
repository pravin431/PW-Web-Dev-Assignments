

// factorial function using recursion

function factorial(x){
    if(x==0) return 1;
    let result = x*factorial(x-1);
    return result;
}
console.log(factorial(1))
console.log(factorial(3))
console.log(factorial(5))
console.log(factorial(6))