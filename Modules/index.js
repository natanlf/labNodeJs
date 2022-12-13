const sumFunction = require("./sum.js");
const operations = require("./operations.js");

//The import doesn't work because needs a configuration at package.json to accept this manner
//import multiple from "./multiple.js";

//import { divide } from "./divide.js"

console.log(sumFunction(1, 1));

console.log(operations.sum(2, 2));

/*
console.log(multiple(3, 2));

console.log(divide(3, 2));
*/