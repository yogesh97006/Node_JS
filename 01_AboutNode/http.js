const http = require('http')
const fs = require('fs')

let HomePage = fs.readFileSync('./index.html')


let PORT = 8080

let hostname = "localhost"

const server = http.createServer(function(req,res){
    if(req.url==="/"){
        return res.end(HomePage)
        
    }
    if(req.url==="/About"){
        return res.end("<h1> About Page </h1>")
    }
    if(req.url==="/Contact"){
        return res.end("<h1> Contact Page </h1>")
    }
    if(req.url==="/Projects"){
        return res.end("<h1> Projects Page </h1>") 
    }
    else{
        return res.end(" Sorry 404 😞 ")
    }
}
)


server.listen(PORT,hostname,()=>{
    console.log(` The Server is Running On ://${hostname}#${PORT}`);
})


