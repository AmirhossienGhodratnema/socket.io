const http = require('http');
const server = http.createServer();
const express = require('express')
const app = express()
app.use(express.static('./'))
const socketIO = require('socket.io');
const { appendFile } = require('fs');
const { executionAsyncResource } = require('async_hooks');
const io = socketIO(server, {
    cors: { origin: '*' },
    maxHttpBufferSize: 1e8,
})

io.of('/client').on('connection', (socket, req) => {
    socket.on('Welcom', (data) => console.log(data));
    socket.on('name', (data) => console.log(data));
    socket.emit('test', 'Hello client too');
    socket.emit('info', { name: 'Amrihossein', lastName: 'Ghodratnema', age: 25 });
    console.log()
})


server.listen(8000, console.log('Runnin on port 8000...'));
