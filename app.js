const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

app.use(bodyParser.urlencoded({ extended: false }));


const mainrouter = require('./routes/mainn');
const subrouter = require('./routes/sub');
const contactrouter = require('./routes/contact');
const errrouter = require('./routes/404err');

app.use(subrouter);
app.use(mainrouter);
app.use(contactrouter);
app.use(errrouter);


app.listen(3000);
 