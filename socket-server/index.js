const io = require('socket.io')(3001, {
   cors: {
     origin: '*',
   },
 });
 
 io.on('connection', (socket) => {
   console.log('Client connected: ', socket.id);
 
   socket.on('productSelected', (product) => {
     console.log('Product selected: ', product);
     // 이곳에서 클라이언트 2에게 데이터 전송 로직을 추가할 수 있음
     io.emit('productSelected', product); // 모든 클라이언트에게 데이터 전송
   });
 
   socket.on('disconnect', () => {
     console.log('Client disconnected: ', socket.id);
   });
 });
 
 console.log('Socket server running on port 3001');
 