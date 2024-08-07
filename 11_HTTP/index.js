const http = require('http')

const server = http.createServer((req,res)=>{
    res.end(" Its working Fine ")
})

server.listen(8080,"localHost",()=>{
    console.log("The Server is Running On LocalHost Amd Port No 8080");
    
})

