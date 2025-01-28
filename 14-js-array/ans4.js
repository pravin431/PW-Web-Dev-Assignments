const students = [ 
    { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" }, 
    { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" }, 
    { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" }
];

// a. Add a Student
function addStudent(id, firstName, lastName, age, grade) {
    students.push({ id, firstName, lastName, age, grade });
}

// b. Update Student Information
function updateStudent(id, updatedInfo) {
    const student = students.find(student => student.id === id);
    if (student) {
        Object.assign(student, updatedInfo);
    }
}

// c. Delete a Student
function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students.splice(index, 1);
    }
}

// d. List All Students
function listStudents() {
    console.log("Student List:");
    students.forEach(student => {
        console.log(`${student.id}: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}

// e. Find Students by Grade
function findStudentsByGrade(grade) {
    return students.filter(student => student.grade === grade);
}

// f. Calculate Average Age
function calculateAverageAge() {
    if (students.length === 0) return 0;
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}

// Example Usage
addStudent(4, "Alice", "Brown", 21, "B");
updateStudent(2, { age: 23, grade: "A" });
deleteStudent(1);
listStudents();
console.log("Students with Grade A:", findStudentsByGrade("A"));
console.log("Average Age:", calculateAverageAge());
