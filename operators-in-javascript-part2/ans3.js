//nested ternary operator 
let num=-0;

let word = (num===0)?'Zero' : num>0 ? 'Positive' : 'Negative';
console.log(`${num} is ${word}`)