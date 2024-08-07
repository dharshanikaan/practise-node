const express=require('express')
const path=require('path')

const rout=express.Router();
const root=require('../util/path');

rout.use((req,res,next)=>{
    res.status(404).sendFile(path.join(root,'views','404err.html'))
});

module.exports=rout