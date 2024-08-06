const http=require('http');

const express=require('express')

const app=express();
app.use((req,res,next)=>{
    console.log("first");
    next();
});
app.use((req,res,next)=>{
    console.log("second");
  
    res.send({key1:'value'})
});

const server=http.createServer(app)
app.listen(3000)