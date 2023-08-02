const socket = io('http://localhost:8000/client');


socket.on('connect', data => {
    socket.emit('Welcom', 'Hello server')
    socket.emit('name', 'Amirhossein')
    socket.on('test', data => {
        console.log(data)
    });

    socket.on('info', (data) => console.log(data))
    
});
