const fs=require('fs');
const path=require('path');

const handlerequest =(req,res)=>{ 
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        fs.readFile(path.join(__dirname,'message.txt'),(err,data)=>{
         if(err)
         {
            // If the file does not exist, initialize with an empty string
            data ='';
         }
         const message=data.toString().split('/n')
         const messagelist=message.map(msg=>`<li>${msg}</li>`)
         res.write('<html>')
         res.write('<head><title>My code</title> <head>')
         res.write('<ul>' +messagelist +'</ul>')
         res.write('<body><form action ="/message" method ="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
         res.write('</html>')
         res.end()
        });
        return
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
           if(message)
           { // Append the new message to the file
            fs.appendFile(path.join(__dirname,'message.txt'),`${message}\n`,()=>{
               // Redirect back to the home page
               res.writeHead(302, {'Location': '/'});
               res.end();
           });
       } else {
           // Redirect back to the home page if the message is empty
           res.writeHead(302, {'Location': '/'});
           res.end();
       }
   });
   return;
        
}
        
    res.write('<html>')
    res.write('<head><title>My code</title><head>')
    res.write('<body><h1>Dharshanika</h1></body>')
    res.write('</html>')
    res.end()
   
};
module.exports=handlerequest;