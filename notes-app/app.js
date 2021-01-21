const validator = require ('validator')
const yargs = require ('yargs')
const fs = require('fs');
const chalk = require('chalk')
const notes = require('./u.js')

fs.writeFileSync('notes.txt',' hi ')
console.log(validator.isEmail('joodnassar70@gmail.com'))
//console.log(chalk.green.bold.bgBlue('aya nassar'))

const cm = process.argv[2]
console.log (cm)
console.log(yargs.argv)
if (cm === 'add'){
    console.log('adding note')
  }  else if ( cm === 'remove '){
      console.log('removing node')
  }
yargs.version('16.2.0')
  yargs.command ({
      command:'remove',
      describe: 'remove the note ',
     builder :{
             title :{
                 dicsribe: 'not title ',
                 demandoption : true ,
                 type : string 
             }
     },

      handler: function (){
          console.log('removing the note ')
      }
  })

  yargs.command ({
    command:'add',
    describe: 'add the note ',
    builder :{ 
        title: {
            dicsribe : 'note title ',
            demandoption : true
        }
    },
    body :{
        dicsribe : 'note body',
        demandOption: true ,
        type :'string'

    },
    handler : function (argv){
        console.log('adding the note ' ,argv) 
        notes.addnote(argv.title,argv.body)
    }
})

console.log(yargs.argv)
