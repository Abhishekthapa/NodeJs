// const getPosts = (req,res)=>{
//     res.send("hello World from node JS");
//     };

// module.exports = {getPosts};

//import logic from controller
const controller = require("../controller/post")

//make use of router of express as we have built app using express
const express = require("express");
const router = express.Router();

//get handled by router now
router.get("/",controller.getPosts);

module.exports = router;

    