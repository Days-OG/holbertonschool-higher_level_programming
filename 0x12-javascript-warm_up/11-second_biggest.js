#!/usr/bin/node
if (process.argv.length <= 3) {
  console.log(0);
} else {
  const myVar = process.argv.map(Number)
    .sort((a, b) => a - b);
  console.log(myVar[myVar.length - 2]);
}
