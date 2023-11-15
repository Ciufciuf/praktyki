const arr1 = ['Anna', 'Maria'];
const arr2 = ['Adam', 'Marek', 'Bartek', 'Tomek'];
const numbers = [1, 2, 3, 4, 5];
// 1
const concat = (arr1, arr2) => arr1.concat(arr2);
console.log(concat(arr1, arr2));
// 2
const reverse = arr => arr.reverse()[0];
console.log(reverse(arr2));
// 3
const filter = (arr, arg) => arr.filter(el => el > arg);
console.log(filter(numbers, 3));
// 4
const reduce = arr => arr.reduce((prev, cur) => prev + cur);
console.log(reduce(numbers));
// 5
const map = arr => arr.map(el => Math.pow(el, 2) + 3);
console.log(map(numbers));
