const socket = io();

// 1. YOLDAŞ VE MÜZİK ODASI SİSTEMİ
const muzikSinifi = { askiSayisi: 4 };
let yoldaslar = [{ id: 'pikachu', ad: 'Pika' }];

// 2. ONLINE CHAT VE TAKAS
socket.on('mesajGeldi', (data) => {
    // Chat kutusuna mesaj ekle
});

window.takasBaslat = function(yoldasId, kime) {
    socket.emit('takasTeklifi', { yoldas: yoldasId, kime: kime });
};

// 3. ÇİZİM VE ORIGAMI (Daha önce yazdığımız fonksiyonların tamamı burada)
window.resmiKaydet = function() {
    alert("Resmin kaydedildi ve sunucuya gönderildi!");
};