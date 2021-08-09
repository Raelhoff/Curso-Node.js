var jsonfile = require('jsonfile')

var file = './data1.json'

//-------------writefile -----------------------
/*
var obj = {name: 'JP'}
 
jsonfile.writeFile(file, obj, function (err) {
  if(err) console.error(err)
})
*/
//-------------------writeFileSync---------

var obj2 = {type2: 'Sincrono'} 
jsonfile.writeFileSync(file, obj2)

