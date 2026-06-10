const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// 1. BU SATIR ÇOK ÖNEMLİ: index.html dosyasını ana sayfa yapar
app.use(express.static(__dirname)); 

// 2. Eğer ana dizinde index.html varsa, onu otomatik gönderir
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('Bir öğrenci sınıfa girdi.');
  
  socket.on('mesajGonder', (data) => io.emit('mesajGeldi', data));
  socket.on('takasTeklifi', (data) => io.emit('takasGeldi', data));
});

// Port 3000 değil, Render'ın verdiği portu kullanmalıyız
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => console.log(`Sınıf kapıları ${PORT} portunda açıldı!`));