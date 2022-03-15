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
    
let person = new Person("John", 30, "M");

console.log(person.description());