// Write a code to get the input in the given format and print the output in the given format.

// Input Description:
// A single line contains a string.

// Output Description:
// Print the characters in a string separated by line.

// Sample Input :
// guvigeek
// Sample Output :
// g
// u
// v
// i
// g
// e
// e
// k

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  var cons=userInput[0];
  console.log(cons.split('').join('\n'));

  //end-here
});