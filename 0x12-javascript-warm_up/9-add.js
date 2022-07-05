#!/usr/bin/node
function add (a, b) {
  if (parseInt(a) & parseInt(b)) {
    console.log(parseInt(a) + parseInt(b));
  } else {
    console.log('NaN');
  }
}
const myVar = process.argv;
add(myVar[2], myVar[3]);
