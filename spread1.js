const f = (x, y, z) => x + y + z; 
const args1 = [0, 1, 2];
const args2 = [0, 1]; 

console.log(f(...args1));
console.log(f(...args2, 2));

const continents1 = ["America", "Africa", "Oceania"]; 
const continents2 = ["Europe", "Asia"];
const continents3 = [...continents1, ...continents2]; 
const allContinents = [...continents3, "Antarctica"];

console.log(allContinents);