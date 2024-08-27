const http = require('http')

let server = http.createServer((req,res)=>{
     if(req=='/'){
        res.end("Home Page")
     } 
      else if(req=="/About"){
        res.end("About Page")
      }
      else if(req=='/Projects'){
            res.end("Projects Page")
      }
      else if(req=='/Info'){
        res.end('Info Page')
      }
      else{
        res.end('Sorry Error 404 ')
      }
})


server.listen(8000,"localhost",()=>{
    console.log("the server is running on local host and port number is 8000");
    
})
