const pro = require('http');
const server=pro.createServer((req,res)=>{
    const url=req.url;
    if(url==='/home'){
     res.write('<html>')
     res.write('<head><title>My code</title><head>')
     res.write('<body><h1>Welcome home<h1></body>')
     res.write('</html>')
    }else if(url==='/about'){
     res.write('<html>')
     res.write('<head><title>My code</title><head>')
     res.write('<body><h1>Welcome to About Us page<h1></body>')
     res.write('</html>')
    }else if(url==='/node')
    {
     res.write('<html>')
     res.write('<head><title>My code</title><head>')
     res.write('<body><h1> Welcome to my Node Js project<h1></body>')
     res.write('</html>')
    }else{
    res.write('<html>')
    res.write('<head><title>My code</title><head>')
    res.write('<body><h1>Dharshanika</h1></body>')
    res.write('</html>')
    }
    res.end()
   
   
});

server.listen(3000);
