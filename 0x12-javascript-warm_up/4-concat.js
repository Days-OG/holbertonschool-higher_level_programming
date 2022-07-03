#!/usr/bin/node
const myVar = process.argv;
console.log(myVar[2] == null ? myVar[2] + ' is ' + myVar[3] : myVar[3] == null ? myVar[2] + ' is ' + myVar[3] : myVar[2] + ' is ' + myVar[3]);
