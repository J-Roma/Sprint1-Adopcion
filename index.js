const path = require('path')
const express = require('express');
const app = express();

//configuracion
app.set('port', process.env.PORT || 3000);


// static files (ruta)
app.use(express.static(path.join(__dirname, '.')));


// Start the Server
const server = app.listen(app.get('port'), () => {
    console.log('server on port' + app.get('port'));
})


//websocket
const SocketIO = require('socket.io');
const io = SocketIO(server)

io.on('connection', (socket) => {
    console.log('new connection', socket.id);
    socket.on('myMessage', (data) => {
        console.log(data);
        io.sockets.emit('myMessage', data)
    })

})


