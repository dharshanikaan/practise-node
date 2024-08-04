const pro = require('http');
const server=pro.createServer((req,res)=>{
    console.log(req.url,req.headers,req.method);
    res.write('<html>')
    res.write('<head><title>My code</title><head>')
    res.write('<body><h1>Dharshanika</h1></body>')
    res.write('</html>')
    res.end()
    process.exit();
});

server.listen(3000)
