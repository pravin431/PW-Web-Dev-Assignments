// a) Use the Object.preventExtensions method to prevent any further additions of properties to the student object.

let student ={
    name:"John",
    age:25,
    grade:"A"
};
Object.preventExtensions(student);
student.height=180;
console.log(student);  // { name: 'John', age: 25, grade: 'A' }

// b) Use the Object.isEatensible method to check if the student object is eatensible. Store the result in a variable called extensibleStatus.
let extensibleStatus = Object.isExtensible(student);


//  c) Create a new object called teacher with a 'subject' property set to 'Math'.

let teacher = {
    subject:"Math"
};
console.log(teacher);

// d) 
Object.seal(teacher);
// Object.freeze(teacher);
teacher.subject="science";
teacher.gender="male";
console.log(teacher)
// e)
let sealedStatus = Object.isSealed(teacher); 
// f)
console.log(extensibleStatus); // false
console.log(sealedStatus);  // true


