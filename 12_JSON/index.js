const fs = require('fs')

let obj = {
    Cource:"JavaScript",
    role:"Web-Developer",
    salary:60000,
    place:"hyderbad"
}

console.log(obj);

let ToJson = JSON.stringify(obj)
console.log(ToJson);

fs.writeFile("JSONFile.json",ToJson,(err)=>{
    console.log("done");
})

let value;
fs.readFile("JSONFile.json","utf-8",(err,data)=>{
    // value = data
    // console.log(data);
    let toObj = JSON.parse(data)
    console.log(data);
    console.log(toObj);
    
    // return value
})

// console.log(value);
