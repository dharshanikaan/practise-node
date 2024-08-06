const express=require('express');

const rout=express.Router();

rout.get('/',(req,res,next)=>{
    res.send('<h1>Hello</h1>')
})

module.exports=rout;