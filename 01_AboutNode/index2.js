const { error } = require('console');
const fs = require('fs')

let a = "These is simple a text file inside a AboutNode Folder and All this is Node JS"

// fs.writeFileSync("readme.md",a)

fs.writeFile("readme.md",a,(error)=>{
    if(error){
      console.log(error);
    }
    console.log("file has been written");
})

console.log("done");
