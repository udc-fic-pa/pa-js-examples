let person = { 
    name : "Peter", 
    age : 30,
    sex : "M"
}

let printPerson = ({ name, age }) => 
    console.log(`Name: ${name}, Age: ${age}`);

printPerson(person);

let { name, age } = person; 

console.log(`Name: ${name}, Age: ${age}`);