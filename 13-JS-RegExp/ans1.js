function outerFunction(parameter) {
    // Declare a variable within outerFunction
    let outerVariable = "I am from outerFunction";
  
    // Define the inner function
    function innerFunction() {
      // Access both the parameter of outerFunction and the variable declared within it
      console.log(`Parameter: ${parameter}`);
      console.log(`Outer Variable: ${outerVariable}`);
    }
  
    // Return the inner function
    return innerFunction;
  }
  
  // Call outerFunction with a parameter
  const outerFuncResult = outerFunction("Hello from outer");
  
  // Call the returned inner function
  outerFuncResult();
  