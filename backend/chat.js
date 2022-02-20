const socket = io.connect('http://localhost:3000')

const message = document.getElementById('message')
const submitButton = document.getElementById('submitButton')
const output = document.getElementById('output')

submitButton.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value
    })
})

socket.on('chat', data => {
    output.innerHTML += '<p>' + data.message + '</p>'
    message.value = '';
})
