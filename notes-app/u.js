console.log('u.js')
const name = 'aya'
const fs = require('fs')
//module.exports = name;

//consol.log('aya nassar')
//consol.log('2/9/99')
const getnotes = function(){

    return ' you  .... '
}

const addnote = function (title , body ) {
const notes = loadnote()
const duplicatenotes = notes.filter(function ( notes) {
    return notes.title === title

    if(duplicatenotes.length === 0) {
        notes.push({
            title : title ,
            body : body 
})

const removenotes = function () {
    
    
}
save(notes)
       console.log('new node add')
    } else {
        console.log ('no title taken ')
    }

})
//console.log(notes) 

     //   notes.push({
      //                  title : title ,
      //                  body : body 
     //   })
    //   save(notes)
}
const save = function (notes) {
   dataJSON = JSON.stringify(notes)
   fs.writeFileSync('u.json', dataJSON)

}
const loadnote = function (title , body ){
    const databuffer = fs.readFileSync('u.json')
    const dataJSON = databuffer.toString()
    return JSON.parse(dataJSON)

}
module.exports={
     getnotes :  getnotes,
     addnote : addnote
}

