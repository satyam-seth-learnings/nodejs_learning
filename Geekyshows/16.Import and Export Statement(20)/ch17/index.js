// Import & Export Module - Common JS

// Example - 1
// // const nm = require('./student.js');
// // console.log(nm);

// const name = require('./student.js');
// console.log(name);

// Example - 2 
const { nm, marks } = require('./student.js');
console.log(nm);
marks(10, 20);