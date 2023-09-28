// function sum (a,b) {
//     return a+b;
// }
/*
// arrow function of above sum function
const sum = (a, b) => a + b;

//for exporting sum function to exports{} of a process where every information of node is retained
module.exports = {
    sum
} 
*/
//above arrow function and module export can be written as : here the sum becomes anonymous arrow function with no name in exports of process
exports.sum =  (a, b) => a + b;
exports.diff =  (a, b) => a - b;
exports.mult =  (a, b) => a * b;


//this console log of process will only show above module exported i.e.,  exports: { sum: [Function: sum] },. Other js files wont because exports is  private to each module.
//console.log("Process: ", process);