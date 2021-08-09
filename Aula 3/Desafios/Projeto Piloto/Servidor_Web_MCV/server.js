var app = require('./config/express')();
require('./config/database.js')('mongodb://localhost/novo');
var http = require('http').Server(app);
io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

});



http.listen(app.get('port'), function(){
  console.log('listening on *:3000');
});


