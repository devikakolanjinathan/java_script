const express = require("express");   
const app = express(); 
  
// Middleware 1 
function Middleware1(req,res,next) {    
    console.log("I am Middleware 1");
    res.write("WELCOME TO HOME PAGE"); 
    //var ob={name:"jeni",name:"kani",name:"mani"}
     // res.send(ob);
    // Calling the next middleware present in stack 
    next();   
} 
  
// Middleware 2 
function Middleware2(req,res,next) {    
  
  
    //var b=req.ob
    //res.write(b);
  // Printing the statement 
  console.log("I am Middleware 2");   
    
  // Ending the response 
  res.end();   
} 
  
// Request handling 
app.get("/", Middleware1, Middleware2); 
  
// Server setup 
app.listen(4007, () => { 
  console.log("Server is Running"); 
})