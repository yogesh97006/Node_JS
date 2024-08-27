const os = require('os')

console.log(os.arch())
console.log(os.freemem()/1024/1024)
console.log(os.homedir())
console.log(os.hostname())
console.log(os.tmpdir())
console.log(os.totalmem())
console.log(os.platform())

// console.log(os.arch())