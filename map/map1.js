//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const array1 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array1.map((x) => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32]

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
console.log(roots);
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]
