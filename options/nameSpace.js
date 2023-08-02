// Client code
// ClientSocket.on('connect', data => {
//     ClientSocket.emit('Welcom', 'Hello server')
//     ClientSocket.emit('name', 'Amirhossein')
//     ClientSocket.on('test', data => {
//         console.log(data)
//     });

//     ClientSocket.on('info', (data) => console.log(data))
// });

// AdminSocket.on('connect', data => {
//     AdminSocket.on('adminConnection', data => console.log('Admin data', data));
// });

// GlobalSocket.on('connect', data => {
//     GlobalSocket.on('global', data => console.log('Global data', data));
// })



// Server code
// io.of('/client').on('connection', (clientSocket, req) => {
//     clientSocket.on('Welcom', (data) => console.log(data));
//     clientSocket.on('name', (data) => console.log(data));
//     clientSocket.emit('test', 'Hello client too');
//     clientSocket.emit('info', { name: 'Amrihossein', lastName: 'Ghodratnema', age: 25 });
//     console.log()
// });

// io.of('/admin').on('connection', (adminSocket, req) => {
//     adminSocket.emit('adminConnection', 'Admin connection ok');
// });

// io.on('connection', (globalSocket, req) => {
//     globalSocket.emit('global', 'Global connection is ok');
// });
