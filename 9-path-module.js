const path = require('path');

//returns the path seperator
console.log(path.sep)
const filePth = path.join('\content','subfolder','test.txt')

//returns the path
console.log(filePth)

const base = path.basename(filePth)
//the last argument of the path
console.log(base)

//getting the absolute path to a file
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)