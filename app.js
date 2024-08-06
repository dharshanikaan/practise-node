const express=require('express');
const bodyParsed=require('body-parser');

const app=express();

const mainrouter=require('./routes/mainn');
const subrouter=require('./routes/sub')

app.use(bodyParsed.urlencoded({extended:false}));


app.use(subrouter);
app.use('/mainn',mainrouter);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000)