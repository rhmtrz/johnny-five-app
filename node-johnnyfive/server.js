const express = require('express');
const app = express();

 const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const five = require("johnny-five");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server listening on port 3000 ...')
})

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/handleDom.js', (req, res) => {
  res.sendFile(__dirname + '/main.js');
});

io.on('connection', (socket) => {
  console.log('connected ...');
  
  socket.on('turn on', (e) => {
    socket.emit('turn on', e)
  })
})


