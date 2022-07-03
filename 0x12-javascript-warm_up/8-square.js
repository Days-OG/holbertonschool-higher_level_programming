#!/usr/bin/node
const myVar = process.argv;
let string = '';
let j = 0;
if (parseInt(myVar[2])) {
  for (let i = 0; i < myVar[2]; ++i) {
    while (j < myVar[2]) {
      j++;
      string += 'x';
    }
    console.log(string);
  }
} else {
  console.log('Missing size');
}
