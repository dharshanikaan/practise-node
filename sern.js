const pro = require('http');
const server=pro.createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
     res.write('<html>')
     res.write('<head><title>My code</title><head>')
     res.write('<body><form action ="/message" method ="POST"><input type="text" name="message"><button type="sumbit">Send</button></form></body>')
     res.write('</html>')
    return res.end()
    }
    res.write('<html>')
    res.write('<head><title>My code</title><head>')
    res.write('<body><h1>Dharshanika</h1></body>')
    res.write('</html>')
    res.end()
   
   
});

server.listen(3000);
