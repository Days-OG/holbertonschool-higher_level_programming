#!/usr/bin/node
const myVar = process.argv;
if (parseInt(myVar[2])) {
  let factorial = parseInt(myVar[2]);
  for (let i = 1; i < myVar[2]; ++i) {
    factorial = factorial * i;
  }
  console.log(factorial);
}
