var request = require('request');

var sendGet = function(){
 console.log("Realizando request get");
 request.get('http://127.0.0.1:3000/name')
  .on('response', function(response) {
        console.log(response.statusCode); // 200
  })
  .on('error', function(err) {
       console.error(err);
  })
}

console.log("Realizando request post");
 request.post('http://127.0.0.1:3000/name', {
      form:{ nome:'Rafael Wilmar'}
    })
    .on('response', function(response) {
        console.log(response.statusCode); // 200
        sendGet();
    })
    .on('error', function(err) {
          console.error(err);
    })

