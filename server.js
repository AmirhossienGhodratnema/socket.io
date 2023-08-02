const http = require('http');
const server = http.createServer();
const express = require('express')
const app = express()
app.use(express.static('./'))
const socketIO = require('socket.io');
const io = socketIO(server, {
    cors: { origin: '*' },
    maxHttpBufferSize: 1e8,
})

io.of('/client').on('connection', (clientSocket, req) => {
    clientSocket.on('Welcom', (data) => console.log(data));
    clientSocket.on('name', (data) => console.log(data));
    clientSocket.emit('test', 'Hello client too');
    clientSocket.emit('info', { name: 'Amrihossein', lastName: 'Ghodratnema', age: 25 });
    console.log()
});

io.of('/admin').on('connection', (adminSocket, req) => {
    adminSocket.emit('adminConnection', 'Admin connection ok');
});

io.on('connection', (globalSocket, req) => {
    globalSocket.emit('global', 'Global connection is ok');
});


server.listen(8000, console.log('Runnin on port 8000...'));
