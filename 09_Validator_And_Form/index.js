let validator=require('validator')
let chalk=require('chalk')


// console.log(true);
// console.log(chalk.bgBlue(true));
let ans = validator.isEmail("ys@MaheshDalle.com")

console.log(ans ? chalk.black.bgBlue(ans) : chalk.black.bgRed(ans));


