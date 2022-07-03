#!/usr/bin/node
const myVar = process.argv;
console.log(myVar[2] == null ? 'No argument' : myVar[2]);
