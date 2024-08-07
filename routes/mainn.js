const express=require('express');
const path=require('path')

const rout=express.Router();
const root=require('../util/path');

rout.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(root,'views','mainn.html'));
});

rout.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
   
});

module.exports=rout;