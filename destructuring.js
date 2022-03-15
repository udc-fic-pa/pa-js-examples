class Person { 
    constructor(name, age, sex) {
        this.name = name; 
        this.age = age; 
        this.sex = sex;
    }
}

let person = new Person("Peter", 30, "M");
let printPerson = ({ name, age }) => 
    console.log(`Name: ${name}, Age: ${age}`);

printPerson(person);

let { name, age } = person; 

console.log(`Name: ${name}, Age: ${age}`);