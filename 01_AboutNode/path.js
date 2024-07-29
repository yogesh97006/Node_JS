const path = require('path')

let add = path.extname("C:/Users/91970/Desktop/Learning/Node_JS/01_AboutNode/path.js")  //* it gives Extention name of file
console.log(add);

let addbas = path.basename("C:/Users/91970/Desktop/Learning/Node_JS/01_AboutNode/path.js")
console.log(addbas);

let adddir = path.dirname("C:/Users/91970/Desktop/Learning/Node_JS/01_AboutNode/path.js")
console.log(adddir);

let addjoin = path.join("C:/Users/91970/Desktop/Learning/Node_JS/01_AboutNode/path.js"+"/path.js")
console.log(addjoin);

