const fs = require('fs') 

//const book = {
   //   title :' hi ',
   //   author :'aya'

//}
//const bookjson = JSON.stringify(book)
//console.log("bookjson.title",bookjson)
//fs.writeFileSync('1-json.json',bookjson)

//const dataBuffer = fs.readFileSync('1-json.json')
//console.log(dataBuffer)

const dataBuffer = fs.readFileSync('1-json.json')
const  datajson = dataBuffer.toString()
const user = JSON.parse(datajson)

user.name = 'AYA NASSAR'
user.age = 22 

const userjson = JSON.stringify(user)
fs.writeFileSync('1-json.json', userjson)

