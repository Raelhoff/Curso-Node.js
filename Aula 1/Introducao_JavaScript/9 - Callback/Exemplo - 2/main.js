var fs = require('fs') // require é uma função especial do node para requisitar os módulos 
var myNumber = undefined // não sabemos ainda qual valor esta armazenado no arquivo 

function addOne() {
  fs.readFile('./number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
  })
}

addOne()

console.log(myNumber) // mostra na saida padrão `undefined`