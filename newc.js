
const pro = require('http');
const rou=require('./newcc')
const server=pro.createServer(rou);

server.listen(3000);
