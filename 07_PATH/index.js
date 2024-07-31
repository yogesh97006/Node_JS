const path = require('path')

console.log(path.dirname("C:/Users/91970/Desktop/Learning/Node_JS/07_PATH/index.js"));
console.log(path.basename("C:/Users/91970/Desktop/Learning/Node_JS/07_PATH/index.js"));
console.log(path.extname("C:/Users/91970/Desktop/Learning/Node_JS/07_PATH/index.js"));
// console.log(path.parse("C:/Users/91970/Desktop/Learning/Node_JS/07_PATH/index.js"));
console.log(path.parse("C:/Users/91970/Desktop/Learning/Node_JS/07_PATH/index.js").root);
console.log(path.parse("C:/Users/91970/Desktop/Learning/Node_JS/07_PATH/index.js").dir);
console.log(path.parse("C:/Users/91970/Desktop/Learning/Node_JS/07_PATH/index.js").base);
console.log(path.parse("C:/Users/91970/Desktop/Learning/Node_JS/07_PATH/index.js").ext);
console.log(path.parse("C:/Users/91970/Desktop/Learning/Node_JS/07_PATH/index.js").name);