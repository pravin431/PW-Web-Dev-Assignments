const student = { 
    name: "Alice", 
    age: 22, 
    major: "Computer Science", 
    GPA: 3.8, 
    isEnrolled: true 
    };

    // 2. Check if a property exists
console.log("\nChecking if 'GPA' exists:");
if ('GPA' in student) {
    console.log("GPA exists in the student object.");
} else {
    console.log("GPA does not exist in the student object.");
}

// 3. Modify a property (increment age by 1)
console.log("\nModifying 'age' property:");
for (const key in student) {
    if (key === 'age') {
        student[key] += 1; // Increment age by 1
    }
}
console.log("Updated age:", student.age);


function displayStudentInfo(obj){
    for (const key in obj) {
        console.log(`Property: ${key}, Value:${obj[key]}`)
    }
}
displayStudentInfo(student);
