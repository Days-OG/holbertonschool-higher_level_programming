#!/usr/bin/node
const myVar = process.argv;
function factorial(a){
if (parseInt(myVar[2])) {
  let fact = parseInt(myVar[2]);
  for (let i = 1; i < myVar[2]; ++i) {
    fact = fact * i;
  }
  console.log(fact);
 }
}
factorial(myVar[2]);
