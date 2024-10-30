const http = require('http')
const path = require('path')
const fs = require('fs')

const port = 3001
const hostname = "127.0.0.1" 

const server  = http.createServer((req,res)=>{
    if (req.url === '/'){
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain')
    res.end('starting my backend journey')}
    else if(req.url === '/about'){
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain')
    res.end('starting my backend journey')
    }else{
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 : not found");
    }

})
server.listen(port,hostname, ()=>{
    console.log(`server is listening at http://${hostname}:${port}`)
})