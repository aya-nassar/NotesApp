const validator = require ('validator')
const yargs = require ('yargs')
const fs = require('fs');
fs.writeFileSync('notes.txt',' hi ')

console.log(validator.isEmail('joodnassar70@gmail.com'))
const chalk = require('chalk')
console.log(chalk.green.bold.bgBlue('aya nassar'))

const cm = process.argv[2]
console.log (cm)
console.log(yargs.argv)
if (cm === 'add'){
    console.log('adding note')
  }  else if ( cm === 'remove '){
      console.log('removing node')
  }
