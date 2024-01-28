// Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.

function calculateTax (income){
    function getTaxRate(){
        if(income>=1000000)
        return 0.1;
       else if(income>=500000 && income<1000000)
       return 0.2;
     else if(income<500000)
     return 0.3;
    else
    return 0.4;
    }

    let taxAmount = income*getTaxRate();

    return taxAmount;
}
let income1 = 1000000;
let income2 = 500000;
let income3 = 100000;
console.log(`tax for income ${income1} is ${calculateTax(income1)}`)
console.log(`tax for income ${income2} is ${calculateTax(income2)}`)
console.log(`tax for income ${income3} is ${calculateTax(income3)}`)