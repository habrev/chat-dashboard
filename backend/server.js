const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

// // Serve a default favicon to avoid proxy errors (optional)
// app.use('/favicon.ico', express.static(path.join(__dirname, 'public', 'favicon.ico')));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

const messages = []; // Last 50 messages
const onlineUsers = new Set(); // Online users

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('join', (username) => {
    if (username && !onlineUsers.has(username)) {
      onlineUsers.add(username);
      socket.username = username;
      io.emit('users update', Array.from(onlineUsers));
      io.emit('chat message', { username: 'System', message: `${username} has joined` });
    }
  });

  socket.on('chat message', (msg) => {
    if (socket.username) {
      const message = { username: socket.username, message: msg };
      messages.push(message);
      if (messages.length > 50) messages.shift();
      io.emit('chat message', message);
    }
  });

  socket.on('disconnect', () => {
    if (socket.username) {
      onlineUsers.delete(socket.username);
      io.emit('users update', Array.from(onlineUsers));
      io.emit('chat message', { username: 'System', message: `${socket.username} has left` });
    }
    console.log('User disconnected');
  });
});

// Endpoint to fetch history
app.get('/history', (req, res) => {
  console.log('History endpoint hit');
  res.json(messages);
});

server.listen(3001, () => {
  console.log('Server listening on port 3001');
});