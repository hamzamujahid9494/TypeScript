"use strict";
``; //assignment 
const removenumber = (numbers) => {
    return numbers.filter(num => num >= 0); //>=0 is condition greater than and equal to
};
const red = [12, -3, -6, 6];
console.log(removenumber(red));
//const removenumber=(numbers: number[]): number[] => {
//return numbers.filter(num => num >= 0);}
//2
const mulitiply = (numbers) => {
    return numbers.map(num => num * 2); // map is used to modify the pervious array
};
const num = [1, 23, 4, 7];
console.log(mulitiply(num));
//3
const array = (strings) => {
    return strings.filter(string => string.length < 5);
};
const fruits = ["apple", "bananana", "cherry", "date", "grape"];
console.log(array(fruits));
//4
const nose = (numbers) => {
    return numbers.filter(num => num % 2 == 0) //use both map and filter
        .map(num => num * num);
};
const coun = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nose(coun));
//5
const temp = (numbers) => {
    return numbers.map(num => num * 9 / 5 + 32);
};
const celsiu = [0, 10, 20, 30, 40];
console.log(temp(celsiu));
//6
const coni = (numbers) => {
    return numbers.filter(num => num % 2 !== 0)
        .map(num => num * 2);
};
const odd = [1, 2, 3, 4, 5, 6, 7];
console.log(coni(odd));
//7
const fore = (str) => {
    return str.forEach(str => console.log(`${str}!`));
};
const names = ["alice", "bob", "charlie", "emily"];
console.log(fore(names));
