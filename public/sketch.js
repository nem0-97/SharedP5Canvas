//let colo;//this clients drawing color

//set up client socket
const socket = io.connect('http://localhost:8080');
socket.on('drawPos',addDrawing);
//socket.on('colAss',setColor);

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

}
/*function setColor(col){
  ///set color of this client
  colo=col
}*/

function mouseDragged(){
  //send pos and color to server
  let pos={
    x:mouseX,
    y:mouseY
    //,c:colo
  }
  socket.emit('drawPos',pos)

  noStroke();
  fill(255,0,0);
  ellipse(mouseX,mouseY,20,20)
}

function addDrawing(pos){
  //draw another clients stroke
  noStroke();
  fill(0,255,0);
  ellipse(pos.x,pos.y,20,20)
}
