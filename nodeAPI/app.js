const express = require("express");
const app = express();
const morgan = require("morgan");

const port = 8080;

//bring in routes i.e., callback functions defined there
// const routes = require("./routes/post");

//object destructuring:
const postRoute =  require("./routes/post");

//middleware
app.use(morgan("dev"));

//previous app.get() changed to app.use because we've used router of express which is a middleware and middle ware uses use() rather than get()
app.use("/", postRoute);

app.listen(port, ()=>{
    console.log(`The server is listening in port ${port}`);
});