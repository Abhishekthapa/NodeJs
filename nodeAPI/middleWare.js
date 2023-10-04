const express = require("express");
const app = express();
const morgan = require("morgan");

const port = 8080;

//bring in routes i.e., callback functions defined there
// const routes = require("./routes/post");

//object destructuring:
const {getPosts} =  require("./routes/post");

const myMiddleWare = (req,res,next)=>{
    //user defined middleware takes in 3 argument and calling next() is a must
    console.log("middleWare will be stuck if next() is not called");
    next();
};

//middleware
app.use(morgan("dev"));
app.use(myMiddleWare);

app.get("/", getPosts);

app.listen(port, ()=>{
    console.log(`The server is listening in port ${port}`);
});