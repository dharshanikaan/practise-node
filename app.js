const express=require('express');
const bodyParsed=require('body-parser');

const app=express();

const mainrouter=require('./routes/mainn');
const subrouter=require('./routes/sub')
const contactrouter=require('./routes/contact');
const errrouter=require('./routes/404err')

app.use(bodyParsed.urlencoded({extended:false}));


app.use(subrouter);
app.use(mainrouter);
app.use(contactrouter)
app.use(errrouter);



app.listen(3000)