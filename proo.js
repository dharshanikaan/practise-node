const fs=require('fs');

const handlerequest =(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
     res.write('<html>')
     res.write('<head><title>My code</title><head>')
     res.write('<body><form action ="/message" method ="POST"><input type="text" name="message"><button type="sumbit">Send</button></form></body>')
     res.write('</html>')
    return res.end()
    }
    if(url==='/message' && method==='POST')
        {
            const body=[];
            req.on('data',(chunk)=>{
            console.log(chunk);
              body.push(chunk)
            });
            req.on('end',()=>{
            const parsedbody=Buffer.concat(body).toString();
            const message=parsedbody.split('=')[1];
            fs.writeFile('message.txt',message,err=>{
                res.statusCode=302;
                res.setHeader('location','/');
                return res.end();
            });
        });
        }
        
    res.write('<html>')
    res.write('<head><title>My code</title><head>')
    res.write('<body><h1>Dharshanika</h1></body>')
    res.write('</html>')
    res.end()
   
};
module.exports=handlerequest;
//module.exports.handler=handlerequest;
//exports.handler=handlerequest;
//module.exports={ handler:handlerequest}
