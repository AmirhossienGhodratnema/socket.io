// const ClientSocket = io('http://localhost:8000/client');
// const AdminSocket = io('http://localhost:8000/admin');
// const GlobalSocket = io('http://localhost:8000');
const socket = io('http://localhost:8000');


socket.on('connect', data => {
    const sendBtn = document.getElementById('sendBtn');
    sendBtn.addEventListener('click', (e) => {
        const text = document.getElementById('text');
        const message = text.value;
        if (!message) return alert('Message is empty...');
        socket.emit('clientMessage', message);
        text.value = '';
    });

});


socket.on('serverMessage', message => {
    const paragraphElemet = document.createElement('p');
    paragraphElemet.innerText = message;
    const chatBox = document.querySelector('.chatBox');
    chatBox.appendChild(paragraphElemet)  
})



