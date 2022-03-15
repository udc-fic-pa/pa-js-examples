const defaultData = { age: 18, sex: "M" };
const person1 = { ...defaultData, name: "John" };
const person2 = { ...defaultData, name: "Mary", sex: "F" };

console.log(person1); // { age: 18, sex: 'M', name: 'John' } 
console.log(person2); // { age: 18, sex: 'F', name: 'Mary' }