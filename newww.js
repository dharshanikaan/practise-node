const express=require('express');
const fs=require('fs');
const path=require('path');
const bodyParsed=require('body-parser');

const app=express();
app.use(bodyParsed.urlencoded({extended:true}));

app.get('/',(req,res,next)=>{
    fs.readFile('mess.txt',(err,data)=>{
        if(err)
        {
            console.log(err)
            data="no chat"
        }
       
        res.send(`
           ${data}
            <form action='/' onsubmit="document.getElementById('username').value=localStorage.getItem('username');"
            method="POST">
            <input type='hidden' name='username' id='username'>
             <input type='text' name='message' id='message'>
             <button type='submit'>Send</button>
            </form>
            `)
    });
     

});
app.post('/',(req,res,next)=>{
    console.log(`${req.body.username}:${req.body.message}`)
           fs.writeFile('mess.txt',`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>{
           err?console.log(err):res.redirect("/")
        });
    
});

app.get('/login',(req,res,next)=>{
    res.send(`
        <html>
        <body>
        <form action='/login' onsubmit="localStorage.setItem('username',document.getElementById('username').value)"
        method="POST">
        <input type="text" name="username" id="username">
        <button type='submit'>Submit</button>
        </form>
        </body>
        </html>
        `)
});

app.post('/login',(req,res,next)=>{
    res.redirect('/')
})

app.listen(3000)