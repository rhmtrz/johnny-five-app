const express = require('express');
const app = express()
const path = require('path');
const http = require('http');
const five = require("johnny-five");
const WebSocket = require('ws');

app.use(express.static(__dirname + '/src'));

const server = http.createServer(app);
server.listen(3000)

const board = new five.Board();
board.on("ready", () => {
  const io = require('socket.io')(server)
  
  app.get('/', (req, res) => {
    res.sendFile('/index.html', { root: path.join(__dirname, './src')});
  });
  
  let led = new five.Led(13);
  io.on('connection', function (socket) {
    console.log("---hello connection---")
    
    socket.on('turn on', (lighted) => {
        console.log(lighted)
        led.on();
    });
    
    socket.on('turn off', () => {
      led.off()
    })
  });
})

