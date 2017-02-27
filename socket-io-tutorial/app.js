var app = require('express')();
var http = require('http').Server(app);
var path =require('path')
var fs=require('fs')
var io = require('socket.io')(http);

console.log(path.resolve(__dirname,'index.html'))
app.get('/', function(req, res){
  fs.readFile(path.resolve(__dirname,'index.html'),(err,content)=>{
    res.write(content)
    res.end()
  });
});

users = [];
io.on('connection', function(socket){
  socket.on('setUsername', function(data){
    console.log('current users:',users);
    console.log("data",data)
    if(users.indexOf(data) <0){
      users.push(data);
      socket.emit('userSet', {username: data});
    }
    else{
      socket.emit('userExists', data + ' username is taken! Try some other username.');
    }
  })
  socket.on('msg', function(data){
    //Send message to everyone
    io.sockets.emit('newmsg', data);
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
