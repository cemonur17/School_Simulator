const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('Bir öğrenci sınıfa girdi.');

  // Mesajlaşma
  socket.on('mesajGonder', (data) => io.emit('mesajGeldi', data));
  
  // Takas ve Hediye
  socket.on('takasTeklifi', (data) => io.emit('takasGeldi', data));
});

http.listen(3000, () => console.log('Sınıf kapıları açıldı!'));