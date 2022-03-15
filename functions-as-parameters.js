const loop = (array, func) => {
    const resultArray = new Array(array.length); 
    for (let i = 0; i < array.length; i++) {
        resultArray[i] = func(array[i]);
    }
    return resultArray;
}

const array = [1, 2, 3, 4, 5, 6]; 
const arrayFinal1 = loop(array,
    element => (element % 2 === 0) ? element * 2 : element); 
const arrayFinal2 = loop(array,
    element => (element % 2 === 1) ? element * 3 : element);

console.log(arrayFinal1); // [1, 4, 3, 8, 5, 12] 
console.log(arrayFinal2); // [3, 2, 9, 4, 15, 6]