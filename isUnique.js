function isUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = i+1;
        while (j < arr.length) {
            if (arr[i] === arr[j]) { 
                return false;
            }
            j++; 
        }
    }
    return true; 
}
    
let result = isUnique([1, 2, 3]); 

console.log(result);