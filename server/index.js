const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io').listen(server)

app.get('/', (req, res) => res.send('Hello World!'))

io.sockets.on('connection', function(socket) {
  console.log('user connected')
  socket.on('entering chat message', function(data) {
    console.log(data)
    socket.broadcast.emit('emitting chat message', data)
  })
})

server.listen(3001, () => console.log('Chat server started on port 3001!'))
