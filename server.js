//setup and start server
const express= require('express');
const app=express();
app.use(express.static("public"))
const server=app.listen(8080);
console.log("server running ctrl+c to stop");

//handle connections
const socket= require('socket.io');
const socketio=socket(server);
socketio.sockets.on('connection',newConnect);

function newConnect(socket){
  console.log("new client: "+socket.id)

  /* maybe add function to generate unique color for each client using socket.id
  let color=Math.floor(Math.random() * 255);

  socket.emit('colAss',color)*/

  socket.on('drawPos',dra);

  function dra(pos){
    socket.broadcast.emit('drawPos',pos);
  }
}
