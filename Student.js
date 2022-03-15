class Person { 
    constructor(name, age, sex) {
        this.name = name; 
        this.age = age; 
        this.sex = sex;
    } 
    description() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, sex, course) {
        super(name, age, sex);
        this.course = course;
    }
    description() {
        return super.description() + ` (course ${this.course})`;
    }
}

let student = new Student("John", 21, "M", 2); 

console.log(student.description());