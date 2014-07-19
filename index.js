var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.get('/set/:color', function(req, res){
    io.emit('color', req.params.color);
    res.send(req.params.color);
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
