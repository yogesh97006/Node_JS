const fs = require('fs');


const obj1 = {
    Cource:"JavaScript",
    Days:50,
    Role:"Full Stack"
}

let ToJson = JSON.stringify(obj1)
console.log(ToJson);

fs.writeFile("JsonFile.json",ToJson,(err)=>{
    console.log(err);
})

fs.readFile('JsonFile.json','utf-8',(err,data)=>{
    let val = data
    console.log(val);
    ToObj=JSON.parse(val)
    console.log(ToObj);
   
})


