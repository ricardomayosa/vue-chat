const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://rmayo:password123@ds131905.mlab.com:31905/vue_chat', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

// Middleware
app.use('/style', express.static(__dirname + '/style'));
app.use(cors());

const posts = require('./routes/api/posts');
app.use('/api/posts', posts)

const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// });

http.listen(port, () => {
    console.log( `Listening on port ${port}!`);
})

io.on('connection', (socket) => {
    var address = socket.handshake;
    console.log('There\'s a connection, with ID ', socket.id);
    socket.on('SEND_MESSAGE', (data) => {
        console.log(data);
        io.emit('MESSAGE', data)
    })
})