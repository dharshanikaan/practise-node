const express=require('express');

const rout=express.Router();

rout.get('/add-product',(req,res,next)=>{
    res.send('<form action="/mainn/product" method="POST"><input type="text" name="title"><button type="submit">add</button></form>')
});

rout.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
   
});

module.exports=rout;