const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io').listen(server)

app.get('/', (req, res) => res.send('Hello World!'))

io.sockets.on('connection', function(socket) {
  console.log('user connected')
  // We're connected to someone now. Let's listen for events from them
  socket.on('chat message', function(data) {
    // We've received some data. Let's just log it
    console.log(data)
    // Now let's reply
    socket.emit('event', {some: "data"})
  })
})

server.listen(3001, () => console.log('Chat server started on port 3001!'))
