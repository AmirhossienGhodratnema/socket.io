const ClientSocket = io('http://localhost:8000/client');
const AdminSocket = io('http://localhost:8000/admin');
const GlobalSocket = io('http://localhost:8000');


ClientSocket.on('connect', data => {
    ClientSocket.emit('Welcom', 'Hello server')
    ClientSocket.emit('name', 'Amirhossein')
    ClientSocket.on('test', data => {
        console.log(data)
    });

    ClientSocket.on('info', (data) => console.log(data))
});

AdminSocket.on('connect', data => {
    AdminSocket.on('adminConnection', data => console.log('Admin data', data));
});

GlobalSocket.on('connect', data => {
    GlobalSocket.on('global', data => console.log('Global data', data));
})