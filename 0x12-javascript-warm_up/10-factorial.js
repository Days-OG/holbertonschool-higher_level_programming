#!/usr/bin/node
const myVar = process.argv;
function factorial (a) {
  return a === 0 || isNaN(a) ? 1 : a * factorial(a - 1);
}
console.log(Number(factorial(myVar[2])));
