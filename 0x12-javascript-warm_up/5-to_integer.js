#!/usr/bin/node
const myVar = process.argv;
console.log(myVar[2] >= 0 ? 'My number: ' + parseInt(myVar[2]) : 'Not a number');
