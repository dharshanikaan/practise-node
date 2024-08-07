const express=require('express')
const fs=require('fs')
const path=require('path')
const bodyParsed=require('body-parser')


const app=express()
app.use(bodyParsed.urlencoded({extended:true}));


app.get('/login',(req,res,next)=>{
    res.send(`
        <html>
        <h4>login</h4>
        <form action="/login"method="POST">
        <input type="text"name="username">
        <button type="submit">Send</button>
        </form>
        </html>`)
});

app.post('/login',(req,res,next)=>{
    const username=req.body.username
    if(username)
    {
        res.redirect(`/chat?username=${encodeURIComponent(username)}`);
    }
    else{
        res.send('user name required')
    }
});

app.get('/chat',(req,res,next)=>{
    const username=req.body.username;
   if(username)
   {
    res.send(`
        <html>
        <body>
        <h2>Chat</h2>
        <form action='/message' method="POST">
        <input type="hidden" name="username" value="${username}">
        <input type="text" name="message"id="message">
        <button type="submit">Send</button>
        </form>
        <h3>Messages</h3>
        <pre id="message"></pre>
        <script>
        function loadmessage()
        {
         fetch('/messages')
            .then(response => response.text())
            .then(data => {
             document.getElementById('messages').textContent = data;
         });
        }
          setInterval(loadMessages, 1000);
          loadlessage();
        </script>
        </body>
        </html>`)
   }else{
    res.redirect('/login');
   }
})

app.post('/message',(req,res,next)=>{
    const username = req.body.username;
    const message = req.body.message;

    if (username && message) {
        fs.appendFile('messages.txt', `${username}: ${message}\n`, (err) => {
            if (err) throw err;
            res.redirect(`/chat?username=${encodeURIComponent(username)}`);
        });
    } else {
        res.send('Message or username missing.');
    }
});

app.get('/messages', (req, res) => {
    fs.readFile('messages.txt', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

app.listen(3000)