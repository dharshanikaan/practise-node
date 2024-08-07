const express=require('express');
const path=require('path')

const rout=express.Router();
const root=require('../util/path');

rout.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(root,'views','contact.html'));
});

rout.post('/success',(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(root,'views','succes.html'));
   
});

module.exports=rout;