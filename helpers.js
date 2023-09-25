function sum (a,b) {
    return a+b;
}


//for exporting sum function to exports{} of a process where every information of node is retained
module.exports = {
    sum
} 

//this console log of process will only show above module exported i.e.,  exports: { sum: [Function: sum] },. Other js files wont because exports is a private to each module.
console.log("Process: ", process);