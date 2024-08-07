const express=require('express');
const path=require('path')
const rout=express.Router();
const root=require('../util/path');

rout.get('/',(req,res,next)=>{
    res.sendFile(path.join(root,'views','sub.html'))
})

module.exports=rout;