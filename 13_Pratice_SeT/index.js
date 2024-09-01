const http = require('http')

let server = http.createServer((req,res)=>{
     if(req.url=='/'){
        res.end("Home Page")
     } 
      else if(req.url=="/About"){
        res.end("About Page")
      }
      else if(req.url=='/Projects'){
            res.end("Projects Page")
      }
      else if(req.url=='/Info'){
        res.end('Info Page')
      }
      else{
        res.writeHead(404,{'Content-Type':"text/html"})
        res.end('<h1>Sorry Error 404 </h1>')
      }
})


server.listen(8000,"localhost",()=>{
    console.log("the server is running on local host and port number is 8000");
    
})
