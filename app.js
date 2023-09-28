// const express = require("express");
// const app = express();

// app.get("/",(req, res)=>{
//     res.send("hello world");
// });
// app.listen(3000);

const fs = require("fs");
const fileName= "target.txt";

//aysnc example
fs.readFile(fileName, (err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})

console.log("hello from the other side; async example");

//sync example

const data = fs.readFileSync(fileName); //callback not required as the event loop will take next event only after completion of this event;
console.log(data.toString());
console.log("example of sync")