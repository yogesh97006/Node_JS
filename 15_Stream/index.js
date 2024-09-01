const { error } = require('console')
const fs = require('fs')
const http = require('http')
const { listeners } = require('process')

const server = http.createServer()

server.on("request",(req,res)=>{
    
    // fs.readFile("info.txt",(error,data)=>{
    //     if(error) console.log(error)
    //     res.end(data.toString())
    // })

    const rstream = fs.createReadStream("info.txt")
  
    // rstream.on('data',(alldata)=>{
    //      res.write(alldata)
    // })

    // rstream.on('end',()=>{
    //     res.end()
    // })

    // rstream.on('error',(err)=>{
    //    console.log(" there is error ")
    //    res.end("there is no file")
    // })

    rstream.pipe(res)
})


server.listen(8000,"localhost")